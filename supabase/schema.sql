-- ==========================================
-- ToolSphere Relational Database Schema (PostgreSQL)
-- For Supabase / PostgreSQL Ingestion
-- ==========================================

-- Enable UUID extension if not enabled
create extension if not exists "uuid-ossp";

-- 1. Profiles Table (Linked to Auth users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null unique,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Profiles
alter table public.profiles enable row level security;

-- 2. Blog Articles Table
create table public.articles (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  content text not null,
  summary text not null,
  cover_image text,
  category text not null,
  tags text[],
  seo_title text,
  seo_description text,
  published_at timestamp with time zone default timezone('utc'::text, now()) not null,
  author_id uuid references public.profiles(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexing for blog search and routing speed
create index idx_articles_slug on public.articles(slug);
create index idx_articles_category on public.articles(category);

-- Enable RLS for Blog Articles
alter table public.articles enable row level security;

-- 3. Tools Configuration Overrides
create table public.tool_configs (
  slug text primary key,
  status text not null default 'active' check (status in ('active', 'coming-soon', 'disabled')),
  is_popular boolean default false,
  is_featured boolean default false,
  seo_title text,
  seo_description text,
  faqs jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Tool Configs
alter table public.tool_configs enable row level security;

-- 4. Analytics & Telemetry Log Table
create table public.analytics_logs (
  id bigint generated always as identity primary key,
  tool_slug text,
  event_type text not null,
  ip_hash text,
  user_agent text,
  referer text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexing for analytics log aggregation speed
create index idx_analytics_slug on public.analytics_logs(tool_slug);
create index idx_analytics_event on public.analytics_logs(event_type);

-- Enable RLS for Analytics
alter table public.analytics_logs enable row level security;

-- 5. Newsletter Subscribers
create table public.newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for newsletter
alter table public.newsletter_subscribers enable row level security;

-- 6. Ad Placements and Custom Configurations
create table public.ads_config (
  key text primary key,
  value text,
  is_enabled boolean default true,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for ads
alter table public.ads_config enable row level security;


-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Profiles RLS
create policy "Allow users to read their own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Allow admins complete access to profiles" on public.profiles
  for all using (
    exists (
      select 1 from public.profiles 
      where id = auth.uid() and role = 'admin'
    )
  );

-- Blog Articles RLS
create policy "Allow public read access to articles" on public.articles
  for select using (true);

create policy "Allow admins full CRUD access to articles" on public.articles
  for all using (
    exists (
      select 1 from public.profiles 
      where id = auth.uid() and role = 'admin'
    )
  );

-- Tool Configurations RLS
create policy "Allow public read access to configs" on public.tool_configs
  for select using (true);

create policy "Allow admins full access to configs" on public.tool_configs
  for all using (
    exists (
      select 1 from public.profiles 
      where id = auth.uid() and role = 'admin'
    )
  );

-- Analytics Logs RLS
create policy "Allow public to write telemetry" on public.analytics_logs
  for insert with check (true);

create policy "Allow admins to read analytics logs" on public.analytics_logs
  for select using (
    exists (
      select 1 from public.profiles 
      where id = auth.uid() and role = 'admin'
    )
  );

-- Newsletter Subscribers RLS
create policy "Allow public to subscribe to newsletter" on public.newsletter_subscribers
  for insert with check (true);

create policy "Allow admins to read subscriber list" on public.newsletter_subscribers
  for select using (
    exists (
      select 1 from public.profiles 
      where id = auth.uid() and role = 'admin'
    )
  );

-- Ad Configuration RLS
create policy "Allow public read access to ads configs" on public.ads_config
  for select using (true);

create policy "Allow admins full access to ads configs" on public.ads_config
  for all using (
    exists (
      select 1 from public.profiles 
      where id = auth.uid() and role = 'admin'
    )
  );


-- ==========================================
-- AUTOMATIC TIMESTAMP TRIGGER PROCEDURES
-- ==========================================

create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Apply triggers
create trigger trigger_update_profiles
  before update on public.profiles
  for each row execute function public.handle_updated_at();

create trigger trigger_update_articles
  before update on public.articles
  for each row execute function public.handle_updated_at();

create trigger trigger_update_tool_configs
  before update on public.tool_configs
  for each row execute function public.handle_updated_at();

create trigger trigger_update_ads_config
  before update on public.ads_config
  for each row execute function public.handle_updated_at();
