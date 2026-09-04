-- 在 Supabase Dashboard -> SQL Editor 中执行一次。
-- 每个登录用户只允许读写自己的同步数据。

create table if not exists public.app_state (
    user_id uuid primary key references auth.users(id) on delete cascade,
    data jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

drop policy if exists "read own app state" on public.app_state;
create policy "read own app state"
on public.app_state for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "insert own app state" on public.app_state;
create policy "insert own app state"
on public.app_state for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "update own app state" on public.app_state;
create policy "update own app state"
on public.app_state for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
