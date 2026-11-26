-- Poprawka: strony branż (#masaz itd.) i salony z kilkoma rodzajami usług.
-- Uruchom raz w Supabase -> SQL Editor. Można uruchamiać wielokrotnie.

create or replace function public.flm_collect_notifications(p_now timestamptz default now())   -- p_now: tylko do testów
returns table (endpoint text, p256dh text, auth text, title text, body text, url text)
language plpgsql security definer set search_path = public as $$
declare
  t_now   timestamptz := p_now;
  t_local timestamp   := p_now at time zone 'Europe/Warsaw';
  d_today date        := (p_now at time zone 'Europe/Warsaw')::date;
  t_from  timestamptz;
  t_to    timestamptz := p_now - interval '60 seconds';   -- minuta na dodanie kilku terminów naraz
begin
  select s.last_processed into t_from from public.client_push_state s where s.id = 1 for update;
  if t_from is null then
    insert into public.client_push_state (id, last_processed) values (1, t_to) on conflict (id) do update set last_processed = t_to;
    return;
  end if;
  -- cisza nocna: nic nie wysyłamy i nie przesuwamy wskaźnika (rano pójdzie zbiorczo)
  if extract(hour from t_local) < 8 or extract(hour from t_local) >= 21 then return; end if;
  if t_to <= t_from then return; end if;
  update public.client_push_state set last_processed = t_to where id = 1;

  return query
  with nowe as (
    select sl.salon_id, sl.date, sl.time, sl.service
    from public.slots sl
    where sl.created_at > t_from and sl.created_at <= t_to
      and not sl.taken
      and ((sl.date + sl.time::time) at time zone 'Europe/Warsaw') > t_now + interval '45 minutes'
  ),
  per_salon as (
    select n.salon_id, count(*)::int as cnt,
           (array_agg(n.date order by n.date, n.time))[1] as d1,
           (array_agg(n.time order by n.date, n.time))[1] as t1,
           (array_agg(n.service order by n.date, n.time))[1] as srv1
    from nowe n group by n.salon_id
  ),
  sal as (
    select p.*, s.name, s.slug, s.hidden, s.category
    from per_salon p join public.salons s on s.id = p.salon_id
    where s.approved
  ),
  pary as (   -- kto może dostać powiadomienie o którym salonie
    select c.endpoint, c.salon_id as sub_salon, a.salon_id, a.cnt, a.d1, a.t1, a.srv1, a.name, a.slug
    from public.client_push_subs c
    join sal a on (c.salon_id = a.salon_id)
               or (c.salon_id is null and not a.hidden
                   and (cardinality(c.categories) = 0 or string_to_array(coalesce(a.category, 'fryzjer'), ',') && c.categories))
    where not exists (select 1 from public.client_push_salon_last l
                      where l.endpoint = c.endpoint and l.salon_id = a.salon_id
                        and l.last_at > t_now - interval '1 hour')
      and (c.salon_id is not null or c.sent_day is distinct from d_today or c.sent_count < 3)
  ),
  zapis_salonow as (
    insert into public.client_push_salon_last (endpoint, salon_id, last_at)
    select p.endpoint, p.salon_id, t_now from pary p
    on conflict on constraint client_push_salon_last_pkey do update set last_at = excluded.last_at
    returning 1
  ),
  per_klient as (
    select p.endpoint, min(p.sub_salon::text) as sub_salon, count(*)::int as n_salonow, sum(p.cnt)::int as n_terminow,
           (array_agg(p.name order by p.d1, p.t1))   as nazwy,
           (array_agg(p.slug order by p.d1, p.t1))[1] as slug1,
           (array_agg(p.d1 order by p.d1, p.t1))[1]  as d1,
           (array_agg(p.t1 order by p.d1, p.t1))[1]  as t1,
           (array_agg(p.srv1 order by p.d1, p.t1))[1] as srv1
    from pary p group by p.endpoint
  ),
  zapis_klientow as (
    update public.client_push_subs c
       set sent_count = case when c.sent_day = d_today then c.sent_count + 1 else 1 end,
           sent_day = d_today
      from per_klient k where c.endpoint = k.endpoint
    returning 1
  )
  select c.endpoint, c.p256dh, c.auth,
         case when k.n_salonow = 1 then k.nazwy[1] else 'Nowe wolne terminy' end,
         case
           when k.n_salonow > 1 then
             'W ' || k.n_salonow || ' salonach: ' || array_to_string(k.nazwy[1:3], ', ') || case when k.n_salonow > 3 then '…' else '' end
           when k.n_terminow = 1 then
             'Nowy wolny termin: ' ||
             case when k.d1 = d_today then 'dziś' when k.d1 = d_today + 1 then 'jutro' else to_char(k.d1, 'DD.MM') end ||
             ' ' || k.t1 || coalesce(' · ' || nullif(k.srv1, ''), '')
           else
             'Nowe wolne terminy: ' || k.n_terminow || ' · najbliższy ' ||
             case when k.d1 = d_today then 'dziś' when k.d1 = d_today + 1 then 'jutro' else to_char(k.d1, 'DD.MM') end ||
             ' ' || k.t1
         end,
         case when k.sub_salon is not null then '#s/' || k.slug1
              when cardinality(c.categories) = 1 then '#' || c.categories[1]
              else '#wszystkie' end
  from per_klient k join public.client_push_subs c on c.endpoint = k.endpoint
  where (select count(*) from zapis_salonow) >= 0 and (select count(*) from zapis_klientow) >= 0;
end;
$$;
revoke all on function public.flm_collect_notifications(timestamptz) from public, anon, authenticated;
