-- Logo salonu i dni zamknięte (święta).
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- MUSI być uruchomione PRZED wgraniem nowej wersji aplikacji na GitHub.

-- 1) nowe kolumny w tabeli salonów
alter table public.salons add column if not exists logo_url text not null default '';
alter table public.salons add column if not exists closed_days jsonb not null default '[]'::jsonb;

alter table public.salons drop constraint if exists salons_logo_url_len;
alter table public.salons add constraint salons_logo_url_len check (char_length(logo_url) <= 500);

alter table public.salons drop constraint if exists salons_closed_days_check;
alter table public.salons add constraint salons_closed_days_check
  check (jsonb_typeof(closed_days) = 'array' and jsonb_array_length(closed_days) <= 120);

-- 2) publiczny magazyn plików na logo (maks. 300 KB, tylko obrazki)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('logos', 'logos', true, 300000, array['image/webp', 'image/jpeg', 'image/png'])
on conflict (id) do update
  set public = true,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 3) salon może wgrywać i usuwać pliki tylko we własnym folderze (nazwa folderu = id salonu)
drop policy if exists "logos_own_select" on storage.objects;
drop policy if exists "logos_own_insert" on storage.objects;
drop policy if exists "logos_own_update" on storage.objects;
drop policy if exists "logos_own_delete" on storage.objects;

create policy "logos_own_select" on storage.objects for select to authenticated
  using (bucket_id = 'logos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "logos_own_insert" on storage.objects for insert to authenticated
  with check (bucket_id = 'logos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "logos_own_update" on storage.objects for update to authenticated
  using (bucket_id = 'logos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'logos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "logos_own_delete" on storage.objects for delete to authenticated
  using (bucket_id = 'logos' and (storage.foldername(name))[1] = auth.uid()::text);

-- Tylko jeśli zapis logo lub dnia zamkniętego zgłasza "Brak uprawnień"
-- (masz ograniczone uprawnienia do kolumn), odkomentuj i uruchom:
-- grant insert (logo_url, closed_days), update (logo_url, closed_days) on public.salons to authenticated;
