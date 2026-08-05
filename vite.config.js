import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // Split heavy third-party libs into stable, cacheable chunks
        // (function form is required by rolldown/Vite 8)
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('framer-motion') || id.includes('/motion/') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'framer-motion'
          }
          if (id.includes('react') || id.includes('scheduler') || id.includes('@remix-run')) {
            return 'react-vendor'
          }
          return undefined
        },
      },
    },
  },
})
