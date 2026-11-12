-- Fryzjer Last Minute Radomsko: schemat bazy dla Supabase.
-- Wklej całość w Supabase: SQL Editor -> New query -> Run. Uruchom raz.

-- 1) Salony (jeden salon = jedno konto logowania)
create table if not exists public.salons (
  id          uuid primary key references auth.users(id) on delete cascade,
  name        text not null check (char_length(name) between 2 and 80),
  name_key    text not null unique,
  address     text not null default '',
  phone       text not null default '',
  description text not null default '',
  map_url     text not null default '',
  place_key   text not null default 'centrum',
  lat         double precision,
  lng         double precision,
  hours       jsonb not null default '[]'::jsonb,
  services    jsonb not null default '[]'::jsonb,
  created_at  timestamptz not null default now()
);

-- 2) Wolne terminy last minute
create table if not exists public.slots (
  id         uuid primary key default gen_random_uuid(),
  salon_id   uuid not null references public.salons(id) on delete cascade,
  date       date not null,
  time       text not null check (time ~ '^[0-2][0-9]:[0-5][0-9]$'),
  dur        integer not null check (dur between 5 and 480),
  service    text not null,
  price      numeric(8,2) check (price is null or price > 0),
  price_mode text not null default 'exact' check (price_mode in ('exact','from','ask')),
  promo      numeric(8,2) check (promo is null or promo > 0),
  promo_pct  integer check (promo_pct is null or promo_pct between 1 and 90),
  taken      boolean not null default false,
  constraint slots_price_required_check check (price_mode = 'ask' or price is not null),
  created_at timestamptz not null default now()
);
create index if not exists slots_salon_idx on public.slots (salon_id);
create index if not exists slots_date_idx  on public.slots (date);

-- 3) Zabezpieczenia: klienci (bez logowania) tylko czytają,
--    zapisywać może wyłącznie zalogowany salon i tylko swoje dane.
alter table public.salons enable row level security;
alter table public.slots  enable row level security;

drop policy if exists "salons_read"   on public.salons;
drop policy if exists "salons_insert" on public.salons;
drop policy if exists "salons_update" on public.salons;
drop policy if exists "salons_delete" on public.salons;
create policy "salons_read"   on public.salons for select using (true);
create policy "salons_insert" on public.salons for insert to authenticated with check (auth.uid() = id);
create policy "salons_update" on public.salons for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);
create policy "salons_delete" on public.salons for delete to authenticated using (auth.uid() = id);

drop policy if exists "slots_read"   on public.slots;
drop policy if exists "slots_insert" on public.slots;
drop policy if exists "slots_update" on public.slots;
drop policy if exists "slots_delete" on public.slots;
create policy "slots_read"   on public.slots for select using (true);
create policy "slots_insert" on public.slots for insert to authenticated with check (auth.uid() = salon_id);
create policy "slots_update" on public.slots for update to authenticated using (auth.uid() = salon_id) with check (auth.uid() = salon_id);
create policy "slots_delete" on public.slots for delete to authenticated using (auth.uid() = salon_id);

-- 4) Zmiany na żywo (klient widzi nowy termin bez odświeżania)
do $$ begin
  alter publication supabase_realtime add table public.slots;
exception when duplicate_object then null; end $$;
do $$ begin
  alter publication supabase_realtime add table public.salons;
exception when duplicate_object then null; end $$;

-- 5) Anonimowe statystyki (odsłony i kliknięcia "Zadzwoń")
create table if not exists public.views_daily (
  day   date primary key,
  count integer not null default 0
);
create table if not exists public.calls_daily (
  day      date not null,
  salon_id uuid not null references public.salons(id) on delete cascade,
  count    integer not null default 0,
  primary key (day, salon_id)
);

-- Tabele są zamknięte dla aplikacji; zapis odbywa się tylko przez funkcje poniżej.
alter table public.views_daily enable row level security;
alter table public.calls_daily enable row level security;

-- Zalogowany salon może odczytać statystyki tylko własnego salonu.
drop policy if exists "calls_owner_read" on public.calls_daily;
create policy "calls_owner_read" on public.calls_daily for select to authenticated using (auth.uid() = salon_id);

create or replace function public.track_view() returns void
language sql security definer set search_path = public as $$
  insert into public.views_daily (day, count)
  values ((now() at time zone 'Europe/Warsaw')::date, 1)
  on conflict (day) do update set count = views_daily.count + 1;
$$;

create or replace function public.track_call(p_salon uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.salons where id = p_salon) then return; end if;
  insert into public.calls_daily (day, salon_id, count)
  values ((now() at time zone 'Europe/Warsaw')::date, p_salon, 1)
  on conflict (day, salon_id) do update set count = calls_daily.count + 1;
end;
$$;

revoke all on function public.track_view() from public;
revoke all on function public.track_call(uuid) from public;
grant execute on function public.track_view() to anon, authenticated;
grant execute on function public.track_call(uuid) to anon, authenticated;
