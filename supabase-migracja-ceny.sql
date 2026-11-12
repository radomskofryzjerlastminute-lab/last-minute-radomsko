-- Opcjonalne ceny usług: uruchom RAZ w Supabase -> SQL Editor -> New query -> Run.
-- Bezpieczne do ponownego uruchomienia. Nie zmienia istniejących danych.
-- MUSI być uruchomione PRZED wgraniem nowej wersji aplikacji na GitHub.

-- 1) cena terminu może być pusta (usługa "ustalana w salonie")
alter table public.slots alter column price drop not null;
alter table public.slots drop constraint if exists slots_price_check;
alter table public.slots add constraint slots_price_check check (price is null or price > 0);

-- 2) tryb ceny: exact = dokładna, from = "od ... zł", ask = ustalana w salonie
alter table public.slots add column if not exists price_mode text not null default 'exact';
alter table public.slots drop constraint if exists slots_price_mode_check;
alter table public.slots add constraint slots_price_mode_check check (price_mode in ('exact','from','ask'));

-- 3) zniżka procentowa (dla usług bez ceny)
alter table public.slots add column if not exists promo_pct integer;
alter table public.slots drop constraint if exists slots_promo_pct_check;
alter table public.slots add constraint slots_promo_pct_check check (promo_pct is null or promo_pct between 1 and 90);

-- 4) cena jest wymagana, chyba że tryb to "ask"
alter table public.slots drop constraint if exists slots_price_required_check;
alter table public.slots add constraint slots_price_required_check check (price_mode = 'ask' or price is not null);
