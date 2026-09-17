import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createPresenceServer } from './server/presenceServer.js'

function livePresencePlugin() {
  return {
    name: 'live-presence-websocket',
    configureServer(server) {
      if (server.httpServer) {
        createPresenceServer(server.httpServer, { path: '/ws' })
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), livePresencePlugin()],
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
