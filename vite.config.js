import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    root: '.',
    build: { outDir: 'dist' },
    define: {
      '__SUPABASE_URL__': JSON.stringify(env.VITE_SUPABASE_URL || ''),
      '__SUPABASE_KEY__': JSON.stringify(env.VITE_SUPABASE_ANON_KEY || ''),
    }
  }
})
