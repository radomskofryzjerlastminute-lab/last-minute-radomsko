-- Anonimowe statystyki: odsłony aplikacji i kliknięcia "Zadzwoń" przy salonach.
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- Zapisywane są wyłącznie sumy dzienne (bez adresów IP, bez identyfikatorów użytkowników).

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
