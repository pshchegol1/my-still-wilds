-- Still Wilds — отзывы и наблюдения посетителей (шаг 1).
--
-- Как применить: Supabase → проект → SQL Editor → New query → вставить
-- весь файл → Run. Запускать один раз.
--
-- Идея: посетитель ничего не регистрирует, только пишет имя и текст.
-- Всё, что он отправил, попадает в статус 'pending' и НЕ видно на
-- сайте, пока модератор не нажмёт "Approve" на странице /moderation.
-- Публично видны только записи со статусом 'approved'.

create table if not exists public.contributions (
  id           uuid primary key default gen_random_uuid(),
  -- 'review'   — отзыв/совет на странице парка, города или маршрута
  -- 'sighting' — "Я видел(а)" на странице животного
  kind         text not null check (kind in ('review', 'sighting')),
  page_type    text not null check (page_type in ('park', 'city', 'route', 'animal')),
  page_slug    text not null check (page_slug ~ '^[a-z0-9-]{1,80}$'),
  author_name  text not null check (char_length(btrim(author_name)) between 2 and 40),
  rating       smallint check (rating between 1 and 5),
  body         text not null check (char_length(btrim(body)) between 10 and 1000),
  -- месяц поездки/встречи (первое число месяца), необязательно
  visit_month  date,
  -- для наблюдений: только парк или регион, никогда не точное место
  place        text check (place is null or char_length(place) <= 80),
  status       text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at   timestamptz not null default now(),
  reviewed_at  timestamptz,
  -- отзыв обязан иметь оценку, наблюдение — нет
  constraint review_needs_rating check (kind <> 'review' or rating is not null),
  constraint kind_matches_page check (
    (kind = 'review' and page_type in ('park', 'city', 'route')) or
    (kind = 'sighting' and page_type = 'animal')
  )
);

create index if not exists contributions_page_idx
  on public.contributions (page_type, page_slug, status, created_at desc);
create index if not exists contributions_status_idx
  on public.contributions (status, created_at desc);

-- Модераторы — пользователи Supabase Auth, чьи id добавлены сюда.
create table if not exists public.moderators (
  user_id uuid primary key references auth.users (id) on delete cascade
);

create or replace function public.is_moderator()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.moderators where user_id = auth.uid());
$$;

alter table public.contributions enable row level security;
alter table public.moderators enable row level security;

-- Все видят только одобренное; модератор видит всё.
drop policy if exists "read approved or moderator" on public.contributions;
create policy "read approved or moderator" on public.contributions
  for select to anon, authenticated
  using (status = 'approved' or public.is_moderator());

-- Любой посетитель может отправить запись, но только как 'pending'.
drop policy if exists "submit pending" on public.contributions;
create policy "submit pending" on public.contributions
  for insert to anon, authenticated
  with check (status = 'pending' and reviewed_at is null);

-- Одобрять/отклонять/удалять — только модератор.
drop policy if exists "moderator update" on public.contributions;
create policy "moderator update" on public.contributions
  for update to authenticated
  using (public.is_moderator())
  with check (public.is_moderator());

drop policy if exists "moderator delete" on public.contributions;
create policy "moderator delete" on public.contributions
  for delete to authenticated
  using (public.is_moderator());

drop policy if exists "moderator sees own row" on public.moderators;
create policy "moderator sees own row" on public.moderators
  for select to authenticated
  using (user_id = auth.uid());

grant select, insert on public.contributions to anon, authenticated;
grant update, delete on public.contributions to authenticated;
grant select on public.moderators to authenticated;

-- Простая защита от наводнения спамом: не больше 60 новых записей
-- в очереди за 10 минут на весь сайт. Модерация всё равно ловит спам,
-- это лишь не даёт забить очередь тысячами записей.
create or replace function public.limit_contribution_rate()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (select count(*) from public.contributions
      where created_at > now() - interval '10 minutes') >= 60 then
    raise exception 'Too many submissions right now. Please try again later.';
  end if;
  return new;
end;
$$;

drop trigger if exists contributions_rate_limit on public.contributions;
create trigger contributions_rate_limit
  before insert on public.contributions
  for each row execute function public.limit_contribution_rate();

-- =====================================================================
-- ФОТО ПОСЕТИТЕЛЕЙ
-- =====================================================================
-- В записи хранятся пути к файлам (до 3):
--   'pending/<uuid>.jpg'  — в закрытом хранилище photos-pending (ждёт проверки)
--   'approved/<uuid>.jpg' — в открытом хранилище photos (опубликовано)
alter table public.contributions add column if not exists photos text[] not null default '{}';

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'photos_max_3') then
    alter table public.contributions
      add constraint photos_max_3 check (cardinality(photos) <= 3);
  end if;
end $$;

-- Посетитель может прислать только пути в очередь проверки.
drop policy if exists "submit pending" on public.contributions;
create policy "submit pending" on public.contributions
  for insert to anon, authenticated
  with check (
    status = 'pending'
    and reviewed_at is null
    and coalesce((select bool_and(p ~ '^pending/[0-9a-f-]{36}\.jpg$') from unnest(photos) as p), true)
  );

-- Два хранилища: закрытое для проверки и открытое для опубликованного.
-- Только JPEG до 5 МБ (сайт сам пересохраняет фото в JPEG до 1600 px).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('photos-pending', 'photos-pending', false, 5242880, array['image/jpeg']),
  ('photos',         'photos',         true,  5242880, array['image/jpeg'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Посетители: только загрузить новый файл в pending/ (не читать, не менять).
drop policy if exists "visitors upload pending photos" on storage.objects;
create policy "visitors upload pending photos" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'photos-pending' and (storage.foldername(name))[1] = 'pending');

-- Модератор: смотреть и удалять фото на проверке.
drop policy if exists "moderators read pending photos" on storage.objects;
create policy "moderators read pending photos" on storage.objects
  for select to authenticated
  using (bucket_id = 'photos-pending' and public.is_moderator());

drop policy if exists "moderators delete pending photos" on storage.objects;
create policy "moderators delete pending photos" on storage.objects
  for delete to authenticated
  using (bucket_id = 'photos-pending' and public.is_moderator());

-- Модератор: публиковать (копировать) и удалять опубликованные фото.
-- Читать открытое хранилище может кто угодно — оно public.
drop policy if exists "moderators write public photos" on storage.objects;
create policy "moderators write public photos" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'photos' and public.is_moderator());

drop policy if exists "moderators update public photos" on storage.objects;
create policy "moderators update public photos" on storage.objects
  for update to authenticated
  using (bucket_id = 'photos' and public.is_moderator());

drop policy if exists "moderators delete public photos" on storage.objects;
create policy "moderators delete public photos" on storage.objects
  for delete to authenticated
  using (bucket_id = 'photos' and public.is_moderator());

-- ПОСЛЕ создания своего аккаунта модератора (Authentication → Users →
-- Add user, с e-mail и паролем) выполни отдельно, подставив свой e-mail:
--
--   insert into public.moderators (user_id)
--   select id from auth.users where email = 'YOUR-EMAIL@example.com';
