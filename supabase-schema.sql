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
  price      numeric(8,2) not null check (price > 0),
  promo      numeric(8,2) check (promo is null or promo > 0),
  taken      boolean not null default false,
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
