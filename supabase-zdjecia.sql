-- Zdjęcia salonu i zdjęcia prac (np. fryzur).
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- Wymaga wcześniej uruchomionego supabase-logo-swieta.sql i supabase-weryfikacja.sql (funkcja is_admin).
-- MUSI być uruchomione PRZED wgraniem nowej wersji aplikacji na GitHub.

-- 1) lista zdjęć salonu: [{id, kind: "salon" | "work", url, thumb}]
alter table public.salons add column if not exists photos jsonb not null default '[]'::jsonb;
alter table public.salons drop constraint if exists salons_photos_check;
alter table public.salons add constraint salons_photos_check
  check (jsonb_typeof(photos) = 'array' and jsonb_array_length(photos) <= 30);

-- 2) publiczny magazyn zdjęć (maks. 800 KB na plik, tylko obrazki)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('zdjecia', 'zdjecia', true, 800000, array['image/webp', 'image/jpeg', 'image/png'])
on conflict (id) do update
  set public = true,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 3) salon wgrywa i usuwa pliki tylko we własnym folderze (nazwa folderu = id salonu)
drop policy if exists "zdjecia_own_select" on storage.objects;
drop policy if exists "zdjecia_own_insert" on storage.objects;
drop policy if exists "zdjecia_own_update" on storage.objects;
drop policy if exists "zdjecia_own_delete" on storage.objects;

create policy "zdjecia_own_select" on storage.objects for select to authenticated
  using (bucket_id = 'zdjecia' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "zdjecia_own_insert" on storage.objects for insert to authenticated
  with check (bucket_id = 'zdjecia' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "zdjecia_own_update" on storage.objects for update to authenticated
  using (bucket_id = 'zdjecia' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'zdjecia' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "zdjecia_own_delete" on storage.objects for delete to authenticated
  using (bucket_id = 'zdjecia' and (storage.foldername(name))[1] = auth.uid()::text);

-- 4) administrator może usuwać zdjęcia i logo każdego salonu (moderacja)
drop policy if exists "media_admin_select" on storage.objects;
drop policy if exists "media_admin_delete" on storage.objects;
create policy "media_admin_select" on storage.objects for select to authenticated
  using (bucket_id in ('zdjecia', 'logos') and public.is_admin());
create policy "media_admin_delete" on storage.objects for delete to authenticated
  using (bucket_id in ('zdjecia', 'logos') and public.is_admin());

-- Tylko jeśli zapis zdjęć zgłasza "Brak uprawnień"
-- (masz ograniczone uprawnienia do kolumn), odkomentuj i uruchom:
-- grant insert (photos), update (photos) on public.salons to authenticated;
