import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/new/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,          // ✅ Any IP allowed (0.0.0.0)
    port: 3000           // (optional) port change karna ho to
  },
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
})