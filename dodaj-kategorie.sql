-- Uruchom w Supabase: SQL Editor -> New query -> Run.
-- WAŻNE: wykonaj to PRZED wgraniem nowych plików aplikacji.

alter table public.salons
  add column if not exists category text not null default 'fryzjer';

alter table public.salons
  drop constraint if exists salons_category_len;
alter table public.salons
  add constraint salons_category_len check (char_length(category) <= 100);

-- Wszystkie dotychczasowe salony dostają wartość 'fryzjer' automatycznie (default).

-- Tylko jeśli po wgraniu aplikacji zapis profilu zgłasza "Brak uprawnień"
-- (czyli masz ograniczone uprawnienia do kolumn), odkomentuj i uruchom:
-- grant insert (category), update (category) on public.salons to authenticated;
