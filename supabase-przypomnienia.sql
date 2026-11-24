-- Przypomnienia dla salonów (powiadomienia push) i lista aktywności dla administratora.
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- Wymaga wcześniej uruchomionego supabase-weryfikacja.sql (funkcja is_admin).
-- MUSI być uruchomione PRZED wgraniem nowej wersji aplikacji na GitHub.

-- 1) Kiedy salon ostatnio zmieniał terminy (dodanie, edycja, "Zajęty", usunięcie przyszłego terminu).
--    Osobna tabela, bez aktualizacji "na żywo", żeby nie zwiększać transferu u klientów.
create table if not exists public.salon_activity (
  salon_id         uuid primary key references public.salons(id) on delete cascade,
  last_slot_change timestamptz not null default now(),
  last_reminder_at timestamptz,
  reminder_count   integer not null default 0
);
alter table public.salon_activity enable row level security;   -- brak polityk: dostęp tylko przez funkcje poniżej

-- stan początkowy: data ostatnio dodanego terminu albo założenia salonu
insert into public.salon_activity (salon_id, last_slot_change)
select s.id, greatest(s.created_at, coalesce(max(sl.created_at), s.created_at))
from public.salons s left join public.slots sl on sl.salon_id = s.id
group by s.id, s.created_at
on conflict (salon_id) do nothing;

create or replace function public.slots_touch_activity() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  sid uuid := coalesce(new.salon_id, old.salon_id);
begin
  -- automatyczne kasowanie minionych terminów nie jest aktywnością salonu
  if tg_op = 'DELETE' and old.date < (now() at time zone 'Europe/Warsaw')::date then
    return old;
  end if;
  insert into public.salon_activity (salon_id, last_slot_change, reminder_count)
  values (sid, now(), 0)
  on conflict (salon_id) do update set last_slot_change = now(), reminder_count = 0;
  return coalesce(new, old);
exception when foreign_key_violation then
  return coalesce(new, old);   -- salon właśnie usuwany razem z terminami
end;
$$;
drop trigger if exists slots_touch_activity_trg on public.slots;
create trigger slots_touch_activity_trg after insert or update or delete on public.slots
  for each row execute function public.slots_touch_activity();

-- 2) Telefony salonów z włączonymi przypomnieniami (subskrypcje push)
create table if not exists public.salon_push_subs (
  endpoint   text primary key check (char_length(endpoint) between 10 and 1000),
  salon_id   uuid not null references public.salons(id) on delete cascade,
  p256dh     text not null check (char_length(p256dh) <= 200),
  auth       text not null check (char_length(auth) <= 100),
  created_at timestamptz not null default now()
);
create index if not exists salon_push_subs_salon_idx on public.salon_push_subs (salon_id);
alter table public.salon_push_subs enable row level security;   -- brak polityk: zapis tylko przez funkcje poniżej

create or replace function public.save_salon_push(p_endpoint text, p_p256dh text, p_auth text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null or not exists (select 1 from public.salons where id = auth.uid()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_endpoint !~ '^https://' then raise exception 'invalid_endpoint'; end if;
  -- najwyżej 5 telefonów na salon
  if (select count(*) from public.salon_push_subs where salon_id = auth.uid() and endpoint <> p_endpoint) >= 5 then
    delete from public.salon_push_subs where endpoint = (
      select endpoint from public.salon_push_subs where salon_id = auth.uid() and endpoint <> p_endpoint order by created_at limit 1);
  end if;
  insert into public.salon_push_subs (endpoint, salon_id, p256dh, auth)
  values (p_endpoint, auth.uid(), p_p256dh, p_auth)
  on conflict (endpoint) do update set salon_id = auth.uid(), p256dh = excluded.p256dh, auth = excluded.auth;
end;
$$;

create or replace function public.remove_salon_push(p_endpoint text) returns void
language sql security definer set search_path = public as $$
  delete from public.salon_push_subs where endpoint = p_endpoint and salon_id = auth.uid();
$$;

revoke all on function public.save_salon_push(text, text, text) from public;
revoke all on function public.remove_salon_push(text) from public;
grant execute on function public.save_salon_push(text, text, text) to authenticated;
grant execute on function public.remove_salon_push(text) to authenticated;

-- 3) Telefony administratora (poranne podsumowanie: nowe salony, zgłoszenia, salony do przypomnienia)
create table if not exists public.admin_push_subs (
  endpoint   text primary key check (char_length(endpoint) between 10 and 1000),
  user_id    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  p256dh     text not null check (char_length(p256dh) <= 200),
  auth       text not null check (char_length(auth) <= 100),
  created_at timestamptz not null default now()
);
alter table public.admin_push_subs enable row level security;
drop policy if exists "admin_push_all" on public.admin_push_subs;
create policy "admin_push_all" on public.admin_push_subs for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- 4) Lista aktywności dla administratora
create or replace function public.admin_activity_list()
returns table (salon_id uuid, last_slot_change timestamptz, last_reminder_at timestamptz, reminder_count integer, push_devices integer)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  return query
    select s.id,
           coalesce(a.last_slot_change, s.created_at),
           a.last_reminder_at,
           coalesce(a.reminder_count, 0),
           (select count(*)::integer from public.salon_push_subs p where p.salon_id = s.id)
    from public.salons s
    left join public.salon_activity a on a.salon_id = s.id;
end;
$$;
revoke all on function public.admin_activity_list() from public;
grant execute on function public.admin_activity_list() to authenticated;
