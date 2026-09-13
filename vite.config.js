import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/judge': {
        target: 'https://ce.judge0.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/judge/, '')
      }
    }
  }
})
