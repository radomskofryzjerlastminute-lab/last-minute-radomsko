-- Własny link salonu (#s/nazwa-salonu) i widoczność "tylko dla moich klientów".
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- MUSI być uruchomione PRZED wgraniem nowej wersji aplikacji na GitHub.

-- hidden = true: salonu nie ma na wspólnej liście, klienci widzą go tylko przez jego link / kod QR
alter table public.salons add column if not exists hidden boolean not null default false;
-- slug: stała końcówka linku salonu, nadawana automatycznie z nazwy i niezmienna (wydrukowane kody QR działają dalej)
alter table public.salons add column if not exists slug text;
create unique index if not exists salons_slug_key on public.salons (slug);

create or replace function public.flm_slugify(t text) returns text
language sql immutable as $$
  select coalesce(nullif(left(trim(both '-' from regexp_replace(
           translate(lower(coalesce(t, '')), 'ąćęłńóśźżäöüéèáàíóúšžčř', 'acelnoszzaoueeaaioeszcr'),
           '[^a-z0-9]+', '-', 'g')), 40), ''), 'salon');
$$;

create or replace function public.salons_slug() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  base text;
  cand text;
  n integer := 1;
begin
  if tg_op = 'UPDATE' and old.slug is not null then
    new.slug := old.slug;                 -- link salonu się nie zmienia, nawet po zmianie nazwy
    return new;
  end if;
  base := trim(both '-' from public.flm_slugify(coalesce(nullif(new.name, ''), new.name_key)));
  cand := base;
  while exists (select 1 from public.salons where slug = cand and id <> new.id) loop
    n := n + 1;
    cand := base || '-' || n;
  end loop;
  new.slug := cand;
  return new;
end;
$$;
drop trigger if exists salons_slug_trg on public.salons;
create trigger salons_slug_trg before insert or update on public.salons
  for each row execute function public.salons_slug();

-- linki dla salonów, które już są w bazie (od najstarszego, żeby pierwszy dostał krótszy link)
do $$
declare r record;
begin
  for r in select id from public.salons where slug is null order by created_at loop
    update public.salons set slug = null where id = r.id;
  end loop;
end $$;
