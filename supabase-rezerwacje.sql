-- Last Minute Radomsko: REZERWACJE ONLINE (etap 1)
-- Konta klientów (pseudonim + hasło, bez telefonu i e-maila), rezerwacja z potwierdzeniem przez salon,
-- "Moje rezerwacje", powiadomienia dla salonu i klienta.
-- Uruchom raz w Supabase -> SQL Editor (można uruchamiać ponownie).

-- 1) salon sam włącza rezerwacje online w swoim profilu
alter table public.salons add column if not exists booking boolean not null default false;

-- 2) konta klientów: tylko pseudonim (unikalny bez względu na wielkość liter, polskie znaki i . _ -)
create table if not exists public.clients (
  id         uuid primary key references auth.users(id) on delete cascade,
  nick       text not null check (char_length(nick) between 3 and 20),
  nick_key   text not null unique,
  blocked    boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.clients enable row level security;   -- brak polityk: dostęp tylko przez funkcje poniżej

-- klucz pseudonimu: małe litery, bez polskich znaków i bez . _ -  (ta sama zasada jest w aplikacji)
create or replace function public.flm_nick_key(t text) returns text
language sql immutable as $$
  select regexp_replace(translate(lower(coalesce(t, '')), 'ąćęłńóśźż', 'acelnoszz'), '[._-]', '', 'g');
$$;

-- 'ok' | 'invalid' | 'reserved' | 'taken'
create or replace function public.flm_nick_status(p_nick text) returns text
language plpgsql stable security definer set search_path = public as $$
declare k text := public.flm_nick_key(p_nick);
begin
  if p_nick is null or p_nick !~ '^[A-Za-z0-9ĄĆĘŁŃÓŚŹŻąćęłńóśźż._-]{3,20}$' or char_length(k) < 3 or k !~ '^[a-z0-9]+$' then
    return 'invalid';
  end if;
  if k ~ '(admin|moderator|salon|lastminute|radomsko|obsluga|support|system|claude|anthropic|kurw|chuj|huj|pizd|jeba|jebi|pierdol|cipa|dziwk|spierd|kutas|fuck|shit)'
     or k in ('root', 'test', 'klient', 'fryzjer', 'barber') then
    return 'reserved';
  end if;
  if exists (select 1 from public.clients where nick_key = k) then return 'taken'; end if;
  return 'ok';
end;
$$;

-- limit zakładania kont klientów z jednej sieci (ochrona przed masowym zakładaniem kont).
-- Zapisujemy tylko skrót (hash) adresu IP – zmienia się codziennie, więc nie da się go połączyć z innymi dniami;
-- wpisy znikają po 2 dniach. Limit: 5 kont na godzinę i 15 na dobę z jednego adresu.
create table if not exists public.client_signups (
  ip_hash    text not null,
  created_at timestamptz not null default now()
);
create index if not exists client_signups_ip_idx on public.client_signups (ip_hash, created_at);
alter table public.client_signups enable row level security;

create or replace function public.flm_req_ip_hash() returns text
language plpgsql stable security definer set search_path = public as $$
declare h json; ip text;
begin
  begin h := current_setting('request.headers', true)::json; exception when others then h := null; end;
  if h is null then return null; end if;
  ip := coalesce(nullif(h->>'cf-connecting-ip', ''), nullif(trim(split_part(coalesce(h->>'x-forwarded-for', ''), ',', 1)), ''), nullif(h->>'x-real-ip', ''));
  if ip is null then return null; end if;
  return encode(extensions.digest(ip || '|' || current_date::text || '|flm-limit', 'sha256'), 'hex');
end;
$$;

create or replace function public.flm_signup_limited() returns boolean
language plpgsql stable security definer set search_path = public as $$
declare hh text := public.flm_req_ip_hash();
begin
  if hh is null then return false; end if;
  return (select count(*) from public.client_signups where ip_hash = hh and created_at > now() - interval '1 hour') >= 5
      or (select count(*) from public.client_signups where ip_hash = hh and created_at > now() - interval '24 hours') >= 15;
end;
$$;

-- sprawdzenie pseudonimu przed założeniem konta (bez logowania); zwraca też klucz do loginu
create or replace function public.client_nick_check(p_nick text) returns table (status text, nick_key text)
language sql stable security definer set search_path = public as $$
  select case when public.flm_signup_limited() then 'limit' else public.flm_nick_status(p_nick) end, public.flm_nick_key(p_nick);
$$;

-- po założeniu konta logowania: zapis profilu klienta
create or replace function public.create_client(p_nick text) returns text
language plpgsql security definer set search_path = public as $$
declare st text;
begin
  if auth.uid() is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if exists (select 1 from public.salons where id = auth.uid()) then raise exception 'is_salon' using errcode = '42501'; end if;
  if exists (select 1 from public.clients where id = auth.uid()) then return 'ok'; end if;
  st := public.flm_nick_status(p_nick);
  if st <> 'ok' then return st; end if;
  if public.flm_signup_limited() then return 'limit'; end if;
  begin
    insert into public.clients (id, nick, nick_key) values (auth.uid(), p_nick, public.flm_nick_key(p_nick));
  exception when unique_violation then return 'taken';
  end;
  delete from public.client_signups where created_at < now() - interval '2 days';
  if public.flm_req_ip_hash() is not null then
    insert into public.client_signups (ip_hash) values (public.flm_req_ip_hash());
  end if;
  return 'ok';
end;
$$;

-- kim jestem (po odświeżeniu strony)
create or replace function public.client_me() returns table (nick text, blocked boolean)
language sql stable security definer set search_path = public as $$
  select c.nick, c.blocked from public.clients c where c.id = auth.uid();
$$;

-- konto klienta nie może założyć salonu
create or replace function public.salons_client_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if exists (select 1 from public.clients where id = new.id) then
    raise exception 'client_account' using errcode = '42501';
  end if;
  return new;
end;
$$;
drop trigger if exists salons_client_guard_trg on public.salons;
create trigger salons_client_guard_trg before insert on public.salons
  for each row execute function public.salons_client_guard();

-- 3) rezerwacje (kopia danych terminu: zostaje czytelna, gdy salon usunie termin)
create table if not exists public.bookings (
  id          uuid primary key default gen_random_uuid(),
  slot_id     uuid references public.slots(id) on delete set null,
  salon_id    uuid not null references public.salons(id) on delete cascade,
  client_id   uuid not null references public.clients(id) on delete cascade,
  date        date not null,
  time        text not null,
  dur         integer,
  service     text not null default '',
  status      text not null default 'pending'
              check (status in ('pending', 'confirmed', 'rejected', 'expired', 'cancelled_client', 'cancelled_salon')),
  expires_at  timestamptz not null,
  created_at  timestamptz not null default now(),
  decided_at  timestamptz
);
-- rezerwacja z "wolnych godzin": po odrzuceniu / wygaśnięciu / odwołaniu czas wraca do okienka
alter table public.bookings add column if not exists from_range boolean not null default false;
create unique index if not exists bookings_active_slot on public.bookings (slot_id) where status in ('pending', 'confirmed');
create index if not exists bookings_client_idx on public.bookings (client_id);
create index if not exists bookings_salon_idx on public.bookings (salon_id);
alter table public.bookings enable row level security;   -- brak polityk: dostęp tylko przez funkcje poniżej

-- kolejka powiadomień o rezerwacjach (wysyła je funkcja "powiadomienia-klientow" co minutę)
create table if not exists public.booking_events (
  id          bigserial primary key,
  booking_id  uuid not null references public.bookings(id) on delete cascade,
  target      text not null check (target in ('salon', 'client')),
  kind        text not null,
  created_at  timestamptz not null default now(),
  sent        boolean not null default false
);
create index if not exists booking_events_unsent on public.booking_events (sent, id);
alter table public.booking_events enable row level security;

-- 3b) CZAT przy rezerwacji (tylko tekst, do 500 znaków) i blokady klientów przez salon
create table if not exists public.booking_messages (
  id          bigserial primary key,
  booking_id  uuid not null references public.bookings(id) on delete cascade,
  sender      text not null check (sender in ('client', 'salon')),
  body        text not null check (char_length(body) between 1 and 500),
  created_at  timestamptz not null default now()
);
create index if not exists booking_messages_bk on public.booking_messages (booking_id, id);
alter table public.booking_messages enable row level security;   -- brak polityk: dostęp tylko przez funkcje
alter table public.bookings add column if not exists client_read bigint not null default 0;
alter table public.bookings add column if not exists salon_read bigint not null default 0;

create table if not exists public.salon_blocks (
  salon_id    uuid not null references public.salons(id) on delete cascade,
  client_id   uuid not null references public.clients(id) on delete cascade,
  created_at  timestamptz not null default now(),
  primary key (salon_id, client_id)
);
alter table public.salon_blocks enable row level security;

-- telefony klientów zalogowanych (powiadomienia o ich rezerwacjach)
create table if not exists public.client_account_push (
  endpoint    text primary key check (char_length(endpoint) between 10 and 1000),
  client_id   uuid not null references public.clients(id) on delete cascade,
  p256dh      text not null check (char_length(p256dh) <= 200),
  auth        text not null check (char_length(auth) <= 100),
  created_at  timestamptz not null default now()
);
create index if not exists client_account_push_idx on public.client_account_push (client_id);
alter table public.client_account_push enable row level security;

create or replace function public.save_account_push(p_endpoint text, p_p256dh text, p_auth text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null or not exists (select 1 from public.clients where id = auth.uid()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;
  if p_endpoint !~ '^https://(fcm\.googleapis\.com|android\.googleapis\.com|updates\.push\.services\.mozilla\.com|[a-z0-9.-]+\.push\.services\.mozilla\.com|web\.push\.apple\.com|[a-z0-9.-]+\.push\.apple\.com|[a-z0-9.-]+\.notify\.windows\.com)/' then
    raise exception 'invalid_endpoint';
  end if;
  if (select count(*) from public.client_account_push where client_id = auth.uid() and endpoint <> p_endpoint) >= 5 then
    delete from public.client_account_push where endpoint = (
      select endpoint from public.client_account_push where client_id = auth.uid() and endpoint <> p_endpoint order by created_at limit 1);
  end if;
  insert into public.client_account_push (endpoint, client_id, p256dh, auth)
  values (p_endpoint, auth.uid(), p_p256dh, p_auth)
  on conflict (endpoint) do update set client_id = auth.uid(), p256dh = excluded.p256dh, auth = excluded.auth;
end;
$$;

-- początek terminu jako chwila w czasie (strefa Warszawa)
create or replace function public.flm_slot_start(d date, t text) returns timestamptz
language sql immutable as $$ select (d + t::time) at time zone 'Europe/Warsaw'; $$;

-- 4) klient rezerwuje termin
create or replace function public.book_slot(p_slot uuid) returns uuid
language plpgsql security definer set search_path = public as $$
declare
  c   public.clients;
  s   public.slots;
  sal public.salons;
  st  timestamptz;
  exp timestamptz;
  loc timestamp := now() at time zone 'Europe/Warsaw';
  bid uuid;
begin
  select * into c from public.clients where id = auth.uid();
  if not found then raise exception 'not_client' using errcode = '42501'; end if;
  if c.blocked then raise exception 'blocked' using errcode = '42501'; end if;

  select * into s from public.slots where id = p_slot for update;
  if not found then raise exception 'no_slot'; end if;
  select * into sal from public.salons where id = s.salon_id;
  if not sal.approved or not sal.booking then raise exception 'booking_off'; end if;
  if exists (select 1 from public.salon_blocks k where k.salon_id = sal.id and k.client_id = c.id) then raise exception 'blocked_salon'; end if;
  if s.taken then raise exception 'taken'; end if;
  if coalesce(s.service, '') = '' then raise exception 'use_range'; end if;
  st := public.flm_slot_start(s.date, s.time);
  if st <= now() + interval '20 minutes' then raise exception 'too_late'; end if;
  if (select count(*) from public.bookings b
       where b.client_id = c.id and (b.status = 'pending'
         or (b.status = 'confirmed' and public.flm_slot_start(b.date, b.time) > now()))) >= 2 then
    raise exception 'limit';
  end if;

  -- salon ma 30 minut na potwierdzenie; w nocy (21:00–8:00) czas liczy się od 8:00; zawsze najpóźniej 15 min przed wizytą
  exp := now() + interval '30 minutes';
  if extract(hour from loc) >= 21 then
    exp := ((loc::date + 1) + time '08:30') at time zone 'Europe/Warsaw';
  elsif extract(hour from loc) < 8 then
    exp := (loc::date + time '08:30') at time zone 'Europe/Warsaw';
  end if;
  if exp > st - interval '15 minutes' then exp := st - interval '15 minutes'; end if;

  insert into public.bookings (slot_id, salon_id, client_id, date, time, dur, service, expires_at)
  values (s.id, s.salon_id, c.id, s.date, s.time, s.dur, s.service, exp)
  returning id into bid;
  update public.slots set taken = true where id = s.id;
  insert into public.booking_events (booking_id, target, kind) values (bid, 'salon', 'new');
  return bid;
end;
$$;

-- klient odwołuje swoją rezerwację
create or replace function public.cancel_my_booking(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare b public.bookings;
begin
  select * into b from public.bookings where id = p_id and client_id = auth.uid() for update;
  if not found then raise exception 'forbidden' using errcode = '42501'; end if;
  if b.status not in ('pending', 'confirmed') then return; end if;
  if public.flm_slot_start(b.date, b.time) <= now() then raise exception 'too_late'; end if;
  update public.bookings set status = 'cancelled_client', decided_at = now() where id = b.id;
  perform public.flm_release_slot(b.slot_id, b.from_range);
  insert into public.booking_events (booking_id, target, kind) values (b.id, 'salon', 'cancelled_client');
end;
$$;

-- salon potwierdza albo odrzuca prośbę
create or replace function public.salon_decide(p_id uuid, p_accept boolean) returns text
language plpgsql security definer set search_path = public as $$
declare b public.bookings;
begin
  select * into b from public.bookings where id = p_id and salon_id = auth.uid() for update;
  if not found then raise exception 'forbidden' using errcode = '42501'; end if;
  if b.status <> 'pending' then return b.status; end if;
  if p_accept then
    update public.bookings set status = 'confirmed', decided_at = now() where id = b.id;
    insert into public.booking_events (booking_id, target, kind) values (b.id, 'client', 'confirmed');
    return 'confirmed';
  end if;
  update public.bookings set status = 'rejected', decided_at = now() where id = b.id;
  perform public.flm_release_slot(b.slot_id, b.from_range);
  insert into public.booking_events (booking_id, target, kind) values (b.id, 'client', 'rejected');
  return 'rejected';
end;
$$;

-- salon odwołuje potwierdzoną wizytę (termin wraca na listę; salon może go potem usunąć)
create or replace function public.salon_cancel_booking(p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
declare b public.bookings;
begin
  select * into b from public.bookings where id = p_id and salon_id = auth.uid() for update;
  if not found then raise exception 'forbidden' using errcode = '42501'; end if;
  if b.status not in ('pending', 'confirmed') then return; end if;
  update public.bookings set status = 'cancelled_salon', decided_at = now() where id = b.id;
  perform public.flm_release_slot(b.slot_id, b.from_range);
  insert into public.booking_events (booking_id, target, kind) values (b.id, 'client', 'cancelled_salon');
end;
$$;

-- gdy salon sam zwolni albo usunie zarezerwowany (przyszły) termin, rezerwacja jest odwoływana i klient dostaje powiadomienie
create or replace function public.slots_booking_guard() returns trigger
language plpgsql security definer set search_path = public as $$
declare b public.bookings;
begin
  if tg_op = 'DELETE' or (old.taken and not new.taken) then
    select * into b from public.bookings
     where slot_id = old.id and status in ('pending', 'confirmed')
       and public.flm_slot_start(date, time) > now();
    if found then
      update public.bookings set status = 'cancelled_salon', decided_at = now() where id = b.id;
      insert into public.booking_events (booking_id, target, kind) values (b.id, 'client', 'cancelled_salon');
    end if;
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;
drop trigger if exists slots_booking_guard_trg on public.slots;
create trigger slots_booking_guard_trg before update or delete on public.slots
  for each row execute function public.slots_booking_guard();

-- 4b) rezerwacja w "wolnych godzinach": klient wybiera usługę z cennika salonu i godzinę rozpoczęcia;
--     okienko jest dzielone: [przed] [zarezerwowana usługa] [po] (resztki krótsze niż 15 min znikają)
create or replace function public.flm_tmin(t text) returns integer
language sql immutable as $$ select split_part(t, ':', 1)::int * 60 + split_part(t, ':', 2)::int; $$;
create or replace function public.flm_tstr(m integer) returns text
language sql immutable as $$ select lpad((m / 60)::text, 2, '0') || ':' || lpad((m % 60)::text, 2, '0'); $$;

create or replace function public.book_range(p_slot uuid, p_service text, p_time text) returns uuid
language plpgsql security definer set search_path = public as $$
declare
  c public.clients; s public.slots; sal public.salons; svc jsonb;
  sname text; sdur integer; sprice numeric; spm text;
  rs integer; re integer; bs integer; be integer;
  st timestamptz; exp timestamptz; loc timestamp := now() at time zone 'Europe/Warsaw';
  nid uuid; bid uuid;
begin
  select * into c from public.clients where id = auth.uid();
  if not found then raise exception 'not_client' using errcode = '42501'; end if;
  if c.blocked then raise exception 'blocked' using errcode = '42501'; end if;

  select * into s from public.slots where id = p_slot for update;
  if not found then raise exception 'no_slot'; end if;
  if coalesce(s.service, '') <> '' then raise exception 'not_range'; end if;
  select * into sal from public.salons where id = s.salon_id;
  if not sal.approved or not sal.booking then raise exception 'booking_off'; end if;
  if exists (select 1 from public.salon_blocks k where k.salon_id = sal.id and k.client_id = c.id) then raise exception 'blocked_salon'; end if;
  if s.taken then raise exception 'taken'; end if;
  if p_time is null or p_time !~ '^[0-2][0-9]:[0-5][0-9]$' then raise exception 'bad_time'; end if;

  -- usługa: domyślna albo z cennika salonu (stomatolog: tylko domyślna – usługę ustala się w gabinecie)
  if coalesce(p_service, 'default') = 'default' then
    sname := 'Usługi fryzjerskie'; sdur := 30; sprice := null; spm := 'ask';
  else
    if coalesce(sal.category, '') like '%stomatolog%' then raise exception 'bad_service'; end if;
    select e into svc from jsonb_array_elements(coalesce(sal.services, '[]'::jsonb)) e where e->>'id' = p_service limit 1;
    if svc is null then raise exception 'bad_service'; end if;
    sname := nullif(trim(svc->>'name'), '');
    begin sdur := (svc->>'dur')::int; exception when others then sdur := null; end;
    begin sprice := nullif(svc->>'price', '')::numeric; exception when others then sprice := null; end;
    spm := coalesce(svc->>'pm', 'exact');
    if sname is null or sdur is null or sdur < 5 or sdur > 480 then raise exception 'bad_service'; end if;
    if spm not in ('exact', 'from', 'ask') then spm := 'exact'; end if;
    if sprice is not null and sprice <= 0 then sprice := null; end if;
    if spm <> 'ask' and sprice is null then spm := 'ask'; end if;
  end if;

  rs := public.flm_tmin(s.time); re := rs + s.dur;
  bs := public.flm_tmin(p_time); be := bs + sdur;
  if bs < rs or be > re or bs >= 24 * 60 then raise exception 'bad_time'; end if;
  st := public.flm_slot_start(s.date, p_time);
  if st <= now() + interval '20 minutes' then raise exception 'too_late'; end if;
  if (select count(*) from public.bookings b
       where b.client_id = c.id and (b.status = 'pending'
         or (b.status = 'confirmed' and public.flm_slot_start(b.date, b.time) > now()))) >= 2 then
    raise exception 'limit';
  end if;

  exp := now() + interval '30 minutes';
  if extract(hour from loc) >= 21 then
    exp := ((loc::date + 1) + time '08:30') at time zone 'Europe/Warsaw';
  elsif extract(hour from loc) < 8 then
    exp := (loc::date + time '08:30') at time zone 'Europe/Warsaw';
  end if;
  if exp > st - interval '15 minutes' then exp := st - interval '15 minutes'; end if;

  -- podział okienka (created_at jak w oryginale, żeby nie wysłać powiadomień "nowy wolny termin")
  insert into public.slots (salon_id, date, time, dur, service, price, price_mode, taken, created_at)
  values (s.salon_id, s.date, p_time, sdur, sname, sprice, spm, true, s.created_at) returning id into nid;
  if re - be >= 15 then
    insert into public.slots (salon_id, date, time, dur, service, price, price_mode, taken, created_at)
    values (s.salon_id, s.date, public.flm_tstr(be), re - be, '', null, 'ask', false, s.created_at);
  end if;
  if bs - rs >= 15 then update public.slots set dur = bs - rs where id = s.id;
  else delete from public.slots where id = s.id; end if;

  insert into public.bookings (slot_id, salon_id, client_id, date, time, dur, service, expires_at, from_range)
  values (nid, s.salon_id, c.id, s.date, p_time, sdur, sname, exp, true)
  returning id into bid;
  insert into public.booking_events (booking_id, target, kind) values (bid, 'salon', 'new');
  return bid;
end;
$$;

-- zwolnienie terminu po odrzuceniu / wygaśnięciu / odwołaniu
create or replace function public.flm_release_slot(p_slot uuid, p_range boolean) returns void
language plpgsql security definer set search_path = public as $$
declare x public.slots; y public.slots;
begin
  if p_slot is null then return; end if;
  if not coalesce(p_range, false) then
    update public.slots set taken = false where id = p_slot;
    return;
  end if;
  -- kawałek z "wolnych godzin" wraca jako wolne godziny i łączy się z sąsiednimi okienkami
  update public.slots set service = '', price = null, price_mode = 'ask', promo = null, promo_pct = null, taken = false
   where id = p_slot returning * into x;
  if not found then return; end if;
  select * into y from public.slots
   where salon_id = x.salon_id and date = x.date and id <> x.id and coalesce(service, '') = '' and not taken
     and public.flm_tmin(time) + dur = public.flm_tmin(x.time) and dur + x.dur <= 480
   limit 1;
  if found then
    update public.slots set dur = y.dur + x.dur where id = y.id;
    delete from public.slots where id = x.id;
    select * into x from public.slots where id = y.id;
  end if;
  select * into y from public.slots
   where salon_id = x.salon_id and date = x.date and id <> x.id and coalesce(service, '') = '' and not taken
     and public.flm_tmin(time) = public.flm_tmin(x.time) + x.dur and dur + x.dur <= 480
   limit 1;
  if found then
    update public.slots set dur = x.dur + y.dur where id = x.id;
    delete from public.slots where id = y.id;
  end if;
end;
$$;

-- 5) listy (z liczbą nieprzeczytanych wiadomości i informacją, czy rozmowa jest otwarta)
-- czat jest otwarty dla rezerwacji oczekujących i potwierdzonych, do 24 godzin po wizycie
create or replace function public.flm_chat_open(b public.bookings) returns boolean
language sql stable as $$
  select b.status in ('pending', 'confirmed') and now() < public.flm_slot_start(b.date, b.time) + interval '24 hours';
$$;
drop function if exists public.my_bookings();
drop function if exists public.salon_bookings();
create or replace function public.my_bookings()
returns table (id uuid, status text, date date, "time" text, dur integer, service text,
               salon_id uuid, salon_name text, salon_phone text, salon_slug text,
               created_at timestamptz, expires_at timestamptz, unread integer, chat_open boolean, msgs integer)
language sql stable security definer set search_path = public as $$
  select b.id, b.status, b.date, b.time, b.dur, b.service, b.salon_id, s.name, s.phone, s.slug, b.created_at, b.expires_at,
         (select count(*)::int from public.booking_messages m where m.booking_id = b.id and m.sender = 'salon' and m.id > b.client_read),
         public.flm_chat_open(b),
         (select count(*)::int from public.booking_messages m where m.booking_id = b.id)
  from public.bookings b join public.salons s on s.id = b.salon_id
  where b.client_id = auth.uid() and b.date >= (now() at time zone 'Europe/Warsaw')::date - 30
  order by b.date desc, b.time desc
  limit 50;
$$;

create or replace function public.salon_bookings()
returns table (id uuid, status text, date date, "time" text, dur integer, service text, nick text,
               created_at timestamptz, expires_at timestamptz, slot_id uuid, unread integer, chat_open boolean, msgs integer, blocked boolean)
language sql stable security definer set search_path = public as $$
  select b.id, b.status, b.date, b.time, b.dur, b.service, c.nick, b.created_at, b.expires_at, b.slot_id,
         (select count(*)::int from public.booking_messages m where m.booking_id = b.id and m.sender = 'client' and m.id > b.salon_read),
         public.flm_chat_open(b),
         (select count(*)::int from public.booking_messages m where m.booking_id = b.id),
         exists (select 1 from public.salon_blocks k where k.salon_id = b.salon_id and k.client_id = b.client_id)
  from public.bookings b join public.clients c on c.id = b.client_id
  where b.salon_id = auth.uid() and b.date >= (now() at time zone 'Europe/Warsaw')::date - 7
  order by b.date, b.time
  limit 200;
$$;

-- 5b) czat
create or replace function public.flm_chat_side(b public.bookings) returns text
language sql stable as $$
  select case when b.client_id = auth.uid() then 'client' when b.salon_id = auth.uid() then 'salon' end;
$$;

create or replace function public.send_message(p_booking uuid, p_body text) returns bigint
language plpgsql security definer set search_path = public as $$
declare b public.bookings; side text; txt text := btrim(coalesce(p_body, '')); mid bigint;
begin
  select * into b from public.bookings where id = p_booking for update;
  if not found then raise exception 'forbidden' using errcode = '42501'; end if;
  side := public.flm_chat_side(b);
  if side is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if not public.flm_chat_open(b) then raise exception 'closed'; end if;
  if side = 'client' and exists (select 1 from public.salon_blocks k where k.salon_id = b.salon_id and k.client_id = b.client_id) then
    raise exception 'blocked_salon';
  end if;
  if char_length(txt) < 1 or char_length(txt) > 500 then raise exception 'bad_text'; end if;
  if (select count(*) from public.booking_messages where booking_id = b.id) >= 60 then raise exception 'too_many'; end if;
  if exists (select 1 from public.booking_messages where booking_id = b.id and sender = side and created_at > now() - interval '3 seconds') then
    raise exception 'too_fast';
  end if;
  insert into public.booking_messages (booking_id, sender, body) values (b.id, side, txt) returning id into mid;
  if side = 'client' then update public.bookings set client_read = mid where id = b.id;
  else update public.bookings set salon_read = mid where id = b.id; end if;
  -- jedno powiadomienie na raz: kolejne wiadomości przed wysłaniem go nie dodają nowych
  if not exists (select 1 from public.booking_events e where e.booking_id = b.id and not e.sent and e.kind = 'msg'
                 and e.target = case side when 'client' then 'salon' else 'client' end) then
    insert into public.booking_events (booking_id, target, kind) values (b.id, case side when 'client' then 'salon' else 'client' end, 'msg');
  end if;
  return mid;
end;
$$;

-- wiadomości rozmowy (od p_after); oznacza je jako przeczytane przez pytającego
create or replace function public.get_messages(p_booking uuid, p_after bigint default 0)
returns table (id bigint, sender text, body text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
declare b public.bookings; side text; mx bigint;
begin
  select * into b from public.bookings where bookings.id = p_booking;
  if not found then raise exception 'forbidden' using errcode = '42501'; end if;
  side := public.flm_chat_side(b);
  if side is null then raise exception 'forbidden' using errcode = '42501'; end if;
  select max(m.id) into mx from public.booking_messages m where m.booking_id = b.id;
  if mx is not null then
    if side = 'client' and mx > b.client_read then update public.bookings set client_read = mx where bookings.id = b.id;
    elsif side = 'salon' and mx > b.salon_read then update public.bookings set salon_read = mx where bookings.id = b.id; end if;
  end if;
  return query select m.id, m.sender, m.body, m.created_at from public.booking_messages m
    where m.booking_id = b.id and m.id > coalesce(p_after, 0) order by m.id limit 200;
end;
$$;

-- salon blokuje (albo odblokowuje) klienta wskazanego przez jego rezerwację; oczekujące prośby są wtedy odrzucane
create or replace function public.salon_block(p_booking uuid, p_block boolean) returns void
language plpgsql security definer set search_path = public as $$
declare b public.bookings; x public.bookings;
begin
  select * into b from public.bookings where id = p_booking and salon_id = auth.uid();
  if not found then raise exception 'forbidden' using errcode = '42501'; end if;
  if p_block then
    insert into public.salon_blocks (salon_id, client_id) values (b.salon_id, b.client_id) on conflict do nothing;
    for x in select * from public.bookings where salon_id = b.salon_id and client_id = b.client_id and status = 'pending' for update loop
      update public.bookings set status = 'rejected', decided_at = now() where id = x.id;
      perform public.flm_release_slot(x.slot_id, x.from_range);
      insert into public.booking_events (booking_id, target, kind) values (x.id, 'client', 'rejected');
    end loop;
  else
    delete from public.salon_blocks where salon_id = b.salon_id and client_id = b.client_id;
  end if;
end;
$$;

-- 6) co minutę (wywołuje funkcja "powiadomienia-klientow"): wygasanie, sprzątanie, powiadomienia
create or replace function public.flm_collect_booking_notifications(p_now timestamptz default now())
returns table (endpoint text, p256dh text, auth text, title text, body text, url text)
language plpgsql security definer set search_path = public as $$
declare
  d_today date := (p_now at time zone 'Europe/Warsaw')::date;
  ids bigint[];
  r record;
begin
  -- a) prośby bez odpowiedzi salonu wygasają, termin wraca na listę
  for r in update public.bookings b set status = 'expired', decided_at = p_now
            where b.status = 'pending' and b.expires_at <= p_now
           returning b.id, b.slot_id, b.from_range loop
    perform public.flm_release_slot(r.slot_id, r.from_range);
    insert into public.booking_events (booking_id, target, kind) values (r.id, 'client', 'expired');
  end loop;

  -- b) sprzątanie: rezerwacje (z danymi klienta) usuwamy 30 dni po wizycie
  delete from public.bookings b where b.date < d_today - 30;
  delete from public.booking_events e where e.sent and e.created_at < p_now - interval '7 days';

  -- c) powiadomienia do wysłania
  select array_agg(e.id) into ids from (
    select e2.id from public.booking_events e2 where not e2.sent order by e2.id limit 500 for update skip locked
  ) e;
  if ids is not null then
  update public.booking_events set sent = true where id = any(ids);

  return query
  with ev as (
    select e.id, e.target, e.kind, b.salon_id, b.client_id, s.name as salon_name, c.nick,
           (select left(m.body, 120) from public.booking_messages m
             where m.booking_id = b.id and m.sender <> e.target order by m.id desc limit 1) as msg,
           case when b.date = d_today then 'dziś' when b.date = d_today + 1 then 'jutro' else to_char(b.date, 'DD.MM') end
             || ' ' || b.time || coalesce(' · ' || nullif(case when b.service = 'Usługi fryzjerskie' then 'Usługi w salonie' else b.service end, ''), '') as kiedy
    from public.booking_events e
    join public.bookings b on b.id = e.booking_id
    join public.salons s on s.id = b.salon_id
    join public.clients c on c.id = b.client_id
    where e.id = any(ids)
  )
  select p.endpoint, p.p256dh, p.auth,
         case ev.kind when 'new' then 'Nowa prośba o rezerwację' when 'msg' then 'Wiadomość od ' || ev.nick else 'Rezerwacja odwołana' end,
         case ev.kind when 'new' then ev.nick || ': ' || ev.kiedy || '. Potwierdź w aplikacji.'
                      when 'msg' then coalesce(ev.msg, '') || ' (' || ev.kiedy || ')'
                      else ev.nick || ' odwołał(a) wizytę: ' || ev.kiedy end,
         '#rez'
  from ev join public.salon_push_subs p on p.salon_id = ev.salon_id
  where ev.target = 'salon'
  union all
  select p.endpoint, p.p256dh, p.auth,
         ev.salon_name,
         case ev.kind
           when 'confirmed' then 'Rezerwacja potwierdzona: ' || ev.kiedy
           when 'rejected' then 'Salon nie może przyjąć rezerwacji: ' || ev.kiedy
           when 'expired' then 'Salon nie potwierdził rezerwacji na czas: ' || ev.kiedy
           when 'msg' then 'Wiadomość: ' || coalesce(ev.msg, '')
           else 'Salon odwołał wizytę: ' || ev.kiedy end,
         '#moje'
  from ev join public.client_account_push p on p.client_id = ev.client_id
  where ev.target = 'client';
  end if;

  -- d) wiadomości do / od administratora
  delete from public.admin_messages m where m.created_at < p_now - interval '365 days';
  delete from public.admin_threads t where not exists (select 1 from public.admin_messages m where m.user_id = t.user_id);
  delete from public.admin_msg_events e where e.sent and e.created_at < p_now - interval '7 days';
  select array_agg(e.id) into ids from (
    select e2.id from public.admin_msg_events e2 where not e2.sent order by e2.id limit 200 for update skip locked
  ) e;
  if ids is null then return; end if;
  update public.admin_msg_events set sent = true where id = any(ids);

  return query
  with ev as (
    select e.target, t.user_id, t.kind,
           coalesce(case t.kind when 'salon' then s.name else c.nick end, '?') as who,
           (select left(m.body, 120) from public.admin_messages m
             where m.user_id = t.user_id and m.from_admin = (e.target = 'user') order by m.id desc limit 1) as msg
    from public.admin_msg_events e
    join public.admin_threads t on t.user_id = e.user_id
    left join public.salons s on s.id = t.user_id
    left join public.clients c on c.id = t.user_id
    where e.id = any(ids)
  )
  select p.endpoint, p.p256dh, p.auth,
         case ev.kind when 'salon' then 'Wiadomość od salonu: ' else 'Wiadomość od klienta: ' end || ev.who,
         coalesce(ev.msg, ''), '#adm-msg'
  from ev cross join public.admin_push_subs p
  where ev.target = 'admin'
  union all
  select p.endpoint, p.p256dh, p.auth, 'Administrator Last Minute', 'Odpowiedź: ' || coalesce(ev.msg, ''), '#kontakt'
  from ev join public.salon_push_subs p on p.salon_id = ev.user_id
  where ev.target = 'user' and ev.kind = 'salon'
  union all
  select p.endpoint, p.p256dh, p.auth, 'Administrator Last Minute', 'Odpowiedź: ' || coalesce(ev.msg, ''), '#kontakt'
  from ev join public.client_account_push p on p.client_id = ev.user_id
  where ev.target = 'user' and ev.kind = 'client';
end;
$$;

-- 8) KONTAKT Z ADMINISTRATOREM: zalogowany salon albo klient pisze do administratora, administrator odpowiada.
--    Jedna rozmowa na konto. Tylko tekst, do 1000 znaków, najwyżej 20 wiadomości na dobę, co najmniej 5 s odstępu.
--    Wiadomości znikają 365 dni po wysłaniu.
create table if not exists public.admin_threads (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  kind         text not null check (kind in ('salon', 'client')),
  last_at      timestamptz not null default now(),
  admin_unread int not null default 0,
  user_unread  int not null default 0
);
create table if not exists public.admin_messages (
  id         bigserial primary key,
  user_id    uuid not null references public.admin_threads(user_id) on delete cascade,
  from_admin boolean not null default false,
  body       text not null check (char_length(body) between 1 and 1000),
  created_at timestamptz not null default now()
);
create index if not exists admin_messages_user_idx on public.admin_messages (user_id, id);
create table if not exists public.admin_msg_events (
  id         bigserial primary key,
  user_id    uuid not null references public.admin_threads(user_id) on delete cascade,
  target     text not null check (target in ('admin', 'user')),
  sent       boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.admin_threads enable row level security;     -- brak polityk: tylko przez funkcje poniżej
alter table public.admin_messages enable row level security;
alter table public.admin_msg_events enable row level security;

create or replace function public.flm_contact_text(p_body text) returns text
language sql immutable as $$ select nullif(btrim(regexp_replace(coalesce(p_body, ''), '[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]', '', 'g')), '') $$;

-- salon / klient: wysłanie wiadomości do administratora
create or replace function public.contact_admin_send(p_body text) returns text
language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); k text; b text := public.flm_contact_text(p_body);
begin
  if uid is null then raise exception 'forbidden' using errcode = '42501'; end if;
  if public.is_admin() then return 'is_admin'; end if;
  if exists (select 1 from public.salons where id = uid) then k := 'salon';
  elsif exists (select 1 from public.clients where id = uid) then k := 'client';
  else return 'no_account'; end if;
  if b is null or char_length(b) > 1000 then return 'bad_text'; end if;
  if exists (select 1 from public.admin_messages where user_id = uid and not from_admin and created_at > now() - interval '5 seconds') then return 'too_fast'; end if;
  if (select count(*) from public.admin_messages where user_id = uid and not from_admin and created_at > now() - interval '24 hours') >= 20 then return 'too_many'; end if;
  insert into public.admin_threads (user_id, kind, last_at, admin_unread) values (uid, k, now(), 1)
    on conflict (user_id) do update set kind = excluded.kind, last_at = now(), admin_unread = public.admin_threads.admin_unread + 1;
  insert into public.admin_messages (user_id, from_admin, body) values (uid, false, b);
  if not exists (select 1 from public.admin_msg_events where user_id = uid and target = 'admin' and not sent) then
    insert into public.admin_msg_events (user_id, target) values (uid, 'admin');
  end if;
  return 'ok';
end;
$$;

-- salon / klient: własna rozmowa (odczyt zeruje licznik nieprzeczytanych)
create or replace function public.contact_admin_get() returns table (id bigint, from_admin boolean, body text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'forbidden' using errcode = '42501'; end if;
  update public.admin_threads t set user_unread = 0 where t.user_id = auth.uid() and t.user_unread > 0;
  return query select m.id, m.from_admin, m.body, m.created_at from public.admin_messages m
    where m.user_id = auth.uid() order by m.id desc limit 200;
end;
$$;

create or replace function public.contact_admin_unread() returns int
language sql stable security definer set search_path = public as $$
  select coalesce((select user_unread from public.admin_threads where user_id = auth.uid()), 0);
$$;

-- administrator: lista rozmów
drop function if exists public.admin_threads_list();
create or replace function public.admin_threads_list()
returns table (user_id uuid, kind text, who text, extra text, last_at timestamptz, unread int, last_body text, last_from_admin boolean)
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  return query
  select t.user_id, t.kind,
         coalesce(case t.kind when 'salon' then s.name else c.nick end, '(konto usunięte)'),
         case t.kind when 'salon' then coalesce(s.phone, '') else '' end,
         t.last_at, t.admin_unread, lm.body, lm.from_admin
  from public.admin_threads t
  left join public.salons s on s.id = t.user_id
  left join public.clients c on c.id = t.user_id
  left join lateral (select m.body, m.from_admin from public.admin_messages m where m.user_id = t.user_id order by m.id desc limit 1) lm on true
  order by t.last_at desc
  limit 300;
end;
$$;

-- administrator: jedna rozmowa (odczyt zeruje licznik)
create or replace function public.admin_thread_get(p_user uuid) returns table (id bigint, from_admin boolean, body text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  update public.admin_threads t set admin_unread = 0 where t.user_id = p_user and t.admin_unread > 0;
  return query select m.id, m.from_admin, m.body, m.created_at from public.admin_messages m
    where m.user_id = p_user order by m.id desc limit 200;
end;
$$;

-- administrator: odpowiedź
create or replace function public.admin_reply(p_user uuid, p_body text) returns text
language plpgsql security definer set search_path = public as $$
declare b text := public.flm_contact_text(p_body);
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  if not exists (select 1 from public.admin_threads where user_id = p_user) then return 'no_thread'; end if;
  if b is null or char_length(b) > 1000 then return 'bad_text'; end if;
  insert into public.admin_messages (user_id, from_admin, body) values (p_user, true, b);
  update public.admin_threads set last_at = now(), user_unread = user_unread + 1, admin_unread = 0 where user_id = p_user;
  if not exists (select 1 from public.admin_msg_events where user_id = p_user and target = 'user' and not sent) then
    insert into public.admin_msg_events (user_id, target) values (p_user, 'user');
  end if;
  return 'ok';
end;
$$;

-- nieaktualne adresy powiadomień (404/410) usuwamy ze wszystkich list
create or replace function public.flm_drop_any_push(p_endpoints text[]) returns void
language sql security definer set search_path = public as $$
  delete from public.client_push_subs where endpoint = any(p_endpoints);
  delete from public.client_account_push where endpoint = any(p_endpoints);
  delete from public.salon_push_subs where endpoint = any(p_endpoints);
$$;

-- 7) uprawnienia
revoke all on function public.flm_nick_status(text) from public, anon, authenticated;
revoke all on function public.flm_req_ip_hash() from public, anon, authenticated;
revoke all on function public.flm_signup_limited() from public, anon, authenticated;
revoke all on table public.client_signups from public, anon, authenticated;
revoke all on function public.client_nick_check(text) from public;
grant execute on function public.client_nick_check(text) to anon, authenticated;
revoke all on function public.create_client(text) from public, anon;
revoke all on function public.client_me() from public, anon;
revoke all on function public.save_account_push(text, text, text) from public, anon;
revoke all on function public.book_slot(uuid) from public, anon;
revoke all on function public.book_range(uuid, text, text) from public, anon;
revoke all on function public.flm_release_slot(uuid, boolean) from public, anon, authenticated;
revoke all on function public.cancel_my_booking(uuid) from public, anon;
revoke all on function public.salon_decide(uuid, boolean) from public, anon;
revoke all on function public.salon_cancel_booking(uuid) from public, anon;
revoke all on function public.my_bookings() from public, anon;
revoke all on function public.salon_bookings() from public, anon;
revoke all on function public.send_message(uuid, text) from public, anon;
revoke all on function public.get_messages(uuid, bigint) from public, anon;
revoke all on function public.salon_block(uuid, boolean) from public, anon;
grant execute on function public.send_message(uuid, text), public.get_messages(uuid, bigint), public.salon_block(uuid, boolean),
  public.my_bookings(), public.salon_bookings() to authenticated;
grant execute on function public.create_client(text), public.client_me(), public.save_account_push(text, text, text),
  public.book_slot(uuid), public.book_range(uuid, text, text), public.cancel_my_booking(uuid), public.salon_decide(uuid, boolean),
  public.salon_cancel_booking(uuid), public.my_bookings(), public.salon_bookings() to authenticated;
revoke all on function public.flm_collect_booking_notifications(timestamptz) from public, anon, authenticated;
revoke all on function public.flm_drop_any_push(text[]) from public, anon, authenticated;

-- 8) zmiana zajętości terminu przez klienta (rezerwacja) albo automat (wygaśnięcie) nie jest aktywnością salonu
create or replace function public.slots_touch_activity() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  sid uuid := coalesce(new.salon_id, old.salon_id);
begin
  -- automatyczne kasowanie minionych terminów nie jest aktywnością salonu
  if tg_op = 'DELETE' and old.date < (now() at time zone 'Europe/Warsaw')::date then
    return old;
  end if;
  if auth.uid() is distinct from sid and auth.uid() is not null and not public.is_admin() then
    return coalesce(new, old);
  end if;
  if auth.uid() is null and tg_op <> 'INSERT' then
    return coalesce(new, old);   -- automat (wygasanie rezerwacji, łączenie okienek)
  end if;
  insert into public.salon_activity (salon_id, last_slot_change, reminder_count)
  values (sid, now(), 0)
  on conflict (salon_id) do update set last_slot_change = now(), reminder_count = 0;
  return coalesce(new, old);
exception when foreign_key_violation then
  return coalesce(new, old);   -- salon właśnie usuwany razem z terminami
end;
$$;

-- uprawnienia: kontakt z administratorem
revoke all on table public.admin_threads, public.admin_messages, public.admin_msg_events from public, anon, authenticated;
revoke all on function public.contact_admin_send(text), public.contact_admin_get(), public.contact_admin_unread(),
  public.admin_threads_list(), public.admin_thread_get(uuid), public.admin_reply(uuid, text) from public, anon;
grant execute on function public.contact_admin_send(text), public.contact_admin_get(), public.contact_admin_unread(),
  public.admin_threads_list(), public.admin_thread_get(uuid), public.admin_reply(uuid, text) to authenticated;
