-- Weryfikacja salonów: nowy salon jest ukryty dla klientów, dopóki administrator go nie zatwierdzi.
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- Salony, które już istnieją, zostaną automatycznie oznaczone jako zatwierdzone (nic im nie zniknie).
-- MUSI być uruchomione PRZED wgraniem nowej wersji aplikacji na GitHub.

-- 1) administratorzy (konto, które zatwierdza salony)
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.admins enable row level security;   -- brak polityk: aplikacja nie może czytać tej tabeli

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

-- 2) kolumna "approved" (nowe salony domyślnie niezatwierdzone, istniejące zatwierdzamy raz)
do $$
begin
  if not exists (select 1 from information_schema.columns
                 where table_schema = 'public' and table_name = 'salons' and column_name = 'approved') then
    alter table public.salons add column approved boolean not null default false;
    update public.salons set approved = true;
  end if;
end $$;

-- 3) salon nie może sam sobie nadać zatwierdzenia (zmienić może tylko administrator lub panel Supabase)
create or replace function public.salons_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is not null and not public.is_admin() then
    if tg_op = 'INSERT' then
      new.approved := false;
    else
      new.approved := old.approved;
    end if;
  end if;
  return new;
end;
$$;
drop trigger if exists salons_guard_trg on public.salons;
create trigger salons_guard_trg before insert or update on public.salons
  for each row execute function public.salons_guard();

-- 4) widoczność: klienci widzą tylko zatwierdzone salony (właściciel widzi własny, administrator wszystkie)
drop policy if exists "salons_read" on public.salons;
create policy "salons_read" on public.salons for select
  using (approved or auth.uid() = id or public.is_admin());

drop policy if exists "salons_update" on public.salons;
create policy "salons_update" on public.salons for update to authenticated
  using (auth.uid() = id or public.is_admin()) with check (auth.uid() = id or public.is_admin());

drop policy if exists "salons_delete" on public.salons;
create policy "salons_delete" on public.salons for delete to authenticated
  using (auth.uid() = id or public.is_admin());

drop policy if exists "slots_read" on public.slots;
create policy "slots_read" on public.slots for select using (
  exists (select 1 from public.salons s
          where s.id = slots.salon_id and (s.approved or s.id = auth.uid() or public.is_admin()))
);

-- 5) anonimowe zgłoszenia nadużyć ("to nie jest mój salon") - zapisujemy tylko liczbę zgłoszeń
create table if not exists public.salon_reports (
  salon_id uuid primary key references public.salons(id) on delete cascade,
  count    integer not null default 0,
  last_at  timestamptz not null default now()
);
alter table public.salon_reports enable row level security;
drop policy if exists "reports_admin_read" on public.salon_reports;
create policy "reports_admin_read" on public.salon_reports for select to authenticated using (public.is_admin());
drop policy if exists "reports_admin_delete" on public.salon_reports;
create policy "reports_admin_delete" on public.salon_reports for delete to authenticated using (public.is_admin());

create or replace function public.report_salon(p_salon uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.salons where id = p_salon) then return; end if;
  insert into public.salon_reports (salon_id, count, last_at) values (p_salon, 1, now())
  on conflict (salon_id) do update set count = salon_reports.count + 1, last_at = now();
end;
$$;
revoke all on function public.report_salon(uuid) from public;
grant execute on function public.report_salon(uuid) to anon, authenticated;

-- 6) KROK RĘCZNY: nadaj sobie uprawnienia administratora.
-- Najpierw załóż w aplikacji konto (Dla salonów -> Załóż konto), np. z loginem  admin-radomsko
-- Potem zamień login poniżej na swój (małe litery) i uruchom OSOBNO to polecenie:
--
-- insert into public.admins (user_id)
--   select id from auth.users where email = 'admin-radomsko@radomskofryzjerlastminute-lab.github.io'
--   on conflict do nothing;
