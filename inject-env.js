// Roda no Vercel antes do build — injeta credenciais no HTML
const fs = require('fs');
const url = process.env.VITE_SUPABASE_URL || 'https://ojerbwqhlizggifydqwf.supabase.co';
const key = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_InrprwwBZHmIWKxbHx5xOA_2945x7g6';
console.log('Supabase URL:', url ? 'OK' : 'FALTANDO');
console.log('Supabase KEY:', key ? 'OK' : 'FALTANDO');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('%%ANON_KEY%%', key);
if (!fs.existsSync('dist')) fs.mkdirSync('dist');
fs.writeFileSync('dist/index.html', html);
console.log('dist/index.html gerado OK');
