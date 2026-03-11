-- ============================================================
-- ObraSync — Schema Supabase (Key-Value Store)
-- Execute este script inteiro no SQL Editor do Supabase
-- Menu: SQL Editor → New Query → cole tudo → Run
-- ============================================================

-- Tabela principal: armazena todos os dados do app como JSON
create table if not exists kv_store (
  key         text primary key,
  value       jsonb,
  updated_at  timestamptz default now()
);

-- Atualiza o timestamp automaticamente
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger kv_store_updated_at
  before update on kv_store
  for each row execute procedure update_updated_at();

-- Habilita Row Level Security
alter table kv_store enable row level security;

-- Política: acesso público total (sem autenticação por enquanto)
create policy "public_all" on kv_store
  for all using (true) with check (true);
