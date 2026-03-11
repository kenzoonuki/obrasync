# ObraSync — Tutorial de Instalação

Este guia vai do zero até o site no ar. Siga passo a passo.

---

## O que você vai precisar (já instalado)
- ✅ Git
- ✅ Node.js
- ✅ Conta GitHub
- ✅ Conta Supabase
- ✅ Conta Vercel

---

## PARTE 1 — Configurar o banco de dados (Supabase)

### 1.1 — Criar o projeto no Supabase

1. Acesse **supabase.com** e faça login
2. Clique em **New project**
3. Preencha:
   - **Name:** `obrasync`
   - **Database Password:** crie uma senha forte e **anote**
   - **Region:** `South America (São Paulo)`
4. Clique **Create new project** e aguarde ~2 minutos

### 1.2 — Criar a tabela no banco

1. No painel do Supabase, clique em **SQL Editor** (ícone de banco de dados no menu esquerdo)
2. Clique em **New query**
3. Abra o arquivo `supabase/schema.sql` deste projeto
4. Copie **todo o conteúdo** e cole no editor
5. Clique em **Run** (botão verde)
6. Deve aparecer "Success" ✓

### 1.3 — Copiar as credenciais

1. No Supabase, clique em **Project Settings** (ícone de engrenagem)
2. Clique em **API**
3. Copie e anote:
   - **Project URL** → algo como `https://abcdefgh.supabase.co`
   - **anon public** key → uma string longa começando com `eyJ...`

---

## PARTE 2 — Configurar o projeto no seu computador

### 2.1 — Abrir o terminal

- Aperte `Windows + R`, digite `cmd`, Enter
- Ou procure "Prompt de Comando" no menu Iniciar

### 2.2 — Criar uma pasta para o projeto

Digite no terminal (uma linha por vez, Enter após cada uma):

```
cd Desktop
mkdir obrasync
cd obrasync
```

### 2.3 — Copiar os arquivos do projeto

Copie a pasta `obrasync` que você baixou para dentro de `Desktop\obrasync`.

A estrutura deve ficar assim:
```
Desktop\
  obrasync\
    index.html
    package.json
    vite.config.js
    .gitignore
    .env.example
    supabase\
      schema.sql
```

### 2.4 — Criar o arquivo .env

1. Na pasta `obrasync`, crie um arquivo chamado `.env` (sem extensão)
   - No Explorer, clique em "Novo" → "Documento de Texto"
   - Salve como `.env` (com o ponto na frente, sem o `.txt`)
2. Abra o arquivo com o Bloco de Notas e cole:

```
VITE_SUPABASE_URL=https://SEU_PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=eyJSUA_CHAVE_AQUI
```

Substitua pelos valores que você copiou no passo 1.3.

### 2.5 — Instalar as dependências

No terminal, dentro da pasta `obrasync`, digite:

```
npm install
```

Aguarde baixar os pacotes (~30 segundos).

### 2.6 — Testar localmente

```
npm run dev
```

Deve aparecer algo como:
```
  Local:   http://localhost:5173/
```

Abra esse endereço no browser. O ObraSync deve funcionar!

Para parar o servidor: `Ctrl + C`

---

## PARTE 3 — Publicar no GitHub

### 3.1 — Criar repositório no GitHub

1. Acesse **github.com** e faça login
2. Clique no **+** no canto superior direito → **New repository**
3. Preencha:
   - **Repository name:** `obrasync`
   - Deixe como **Public** (ou Private, tanto faz)
   - **NÃO** marque "Add a README"
4. Clique **Create repository**
5. O GitHub vai mostrar uma página com comandos — **não feche ainda**

### 3.2 — Enviar o código para o GitHub

No terminal (dentro da pasta `obrasync`):

```
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/obrasync.git
git push -u origin main
```

**Substitua** `SEU_USUARIO` pelo seu usuário do GitHub.

Se pedir login, use seu usuário e senha do GitHub.

✓ Seu código está no GitHub!

---

## PARTE 4 — Publicar no Vercel

### 4.1 — Importar projeto

1. Acesse **vercel.com** e faça login com GitHub
2. Clique em **Add New Project**
3. Na lista de repositórios, encontre `obrasync` e clique **Import**

### 4.2 — Configurar variáveis de ambiente

**Antes** de clicar em Deploy, clique em **Environment Variables** e adicione:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | `https://SEU_PROJETO.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJSUA_CHAVE...` |

### 4.3 — Deploy

1. Clique **Deploy**
2. Aguarde ~1 minuto
3. Vercel vai mostrar uma URL como `obrasync.vercel.app`

**Pronto! Seu ObraSync está no ar!** 🎉

---

## PARTE 5 — Atualizações futuras

Sempre que receber um arquivo novo do ObraSync:

1. Substitua o `index.html` na pasta do projeto
2. No terminal:

```
git add .
git commit -m "atualização"
git push
```

O Vercel publica automaticamente em ~30 segundos!

---

## Problemas comuns

**"npm não é reconhecido"**
→ Reinstale o Node.js e reinicie o terminal

**Tela branca no browser**
→ Abra F12 → Console e me mande o erro

**"Permission denied" no git push**
→ Configure o token de acesso do GitHub:
  - github.com → Settings → Developer settings → Personal access tokens → Generate new token
  - Marque "repo" e gere o token
  - Use o token como senha no git push
