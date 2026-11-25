-- Tryb "Tylko dla moich klientów" tylko za zgodą administratora.
-- Uruchom RAZ w Supabase -> SQL Editor -> New query -> Run. Bezpieczne do ponownego uruchomienia.
-- Wymaga wcześniej uruchomionego supabase-widocznosc.sql.
-- Domyślnie każdy salon jest publiczny. Salon może się ukryć tylko, gdy administrator mu na to zezwoli.

alter table public.salons add column if not exists hide_allowed boolean not null default false;

create or replace function public.salons_hide_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  -- zgodę może nadać lub cofnąć tylko administrator (salon nie zmieni jej sam)
  if not public.is_admin() then
    if tg_op = 'INSERT' then new.hide_allowed := false;
    else new.hide_allowed := old.hide_allowed; end if;
  end if;
  -- bez zgody salon jest zawsze publiczny (cofnięcie zgody od razu przywraca go na wspólną listę)
  if not new.hide_allowed then new.hidden := false; end if;
  return new;
end;
$$;
drop trigger if exists salons_hide_guard_trg on public.salons;
create trigger salons_hide_guard_trg before insert or update on public.salons
  for each row execute function public.salons_hide_guard();

-- salony, które ukryły się przed tą zmianą, wracają na wspólną listę (lista poniżej w wynikach)
update public.salons set hidden = false where hidden and not hide_allowed returning name as "przywrócone do publicznych";
