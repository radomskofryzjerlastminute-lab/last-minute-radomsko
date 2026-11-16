-- Zgłoszenia salonów od klientów ("Zgłoś salon nam"): klient wypełnia formularz w aplikacji,
-- a administrator widzi zgłoszenie w zakładce Administrator. Klient nie podaje swoich danych.
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- Wymaga wcześniej uruchomionego supabase-weryfikacja.sql (funkcja is_admin).

create table if not exists public.salon_requests (
  id         uuid primary key default gen_random_uuid(),
  salon_name text not null check (char_length(salon_name) between 2 and 80),
  address    text not null default '' check (char_length(address) <= 200),
  phone      text not null default '' check (char_length(phone) <= 40),
  note       text not null default '' check (char_length(note) <= 500),
  created_at timestamptz not null default now()
);
alter table public.salon_requests enable row level security;

-- odczyt i usuwanie tylko dla administratora; zapis wyłącznie przez funkcję poniżej
drop policy if exists "requests_admin_read" on public.salon_requests;
create policy "requests_admin_read" on public.salon_requests for select to authenticated using (public.is_admin());
drop policy if exists "requests_admin_delete" on public.salon_requests;
create policy "requests_admin_delete" on public.salon_requests for delete to authenticated using (public.is_admin());

create or replace function public.submit_salon_request(p_name text, p_address text, p_phone text, p_note text)
returns void language plpgsql security definer set search_path = public as $$
declare
  n text := btrim(coalesce(p_name, ''));
begin
  if char_length(n) < 2 or char_length(n) > 80 then raise exception 'invalid_request'; end if;
  -- ochrona przed zalewaniem: najwyżej 20 zgłoszeń na godzinę w całej aplikacji
  if (select count(*) from public.salon_requests where created_at > now() - interval '1 hour') >= 20 then
    raise exception 'too_many_requests';
  end if;
  insert into public.salon_requests (salon_name, address, phone, note)
  values (n, left(btrim(coalesce(p_address, '')), 200), left(btrim(coalesce(p_phone, '')), 40), left(btrim(coalesce(p_note, '')), 500));
end;
$$;
revoke all on function public.submit_salon_request(text, text, text, text) from public;
grant execute on function public.submit_salon_request(text, text, text, text) to anon, authenticated;
