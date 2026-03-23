import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/new/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'build',     // 👈 Output folder renamed
    emptyOutDir: true    // clear old files
  }
})