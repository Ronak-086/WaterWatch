import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   server: {
    proxy: {
      '/api': {
        target: 'https://water-watch-si4e.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
