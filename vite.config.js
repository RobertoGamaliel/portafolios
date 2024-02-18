import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portafolios/',
  build: {
    outDir: 'docs',// Carpeta de salida personalizada
  },
})
