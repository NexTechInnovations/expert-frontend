import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  define: {
    // Removed the problematic crypto definition that was causing the TypeError
    // The browser's native crypto should be used instead
  },
  build: {
    rollupOptions: {
      external: [], // Make sure crypto is not treated as external
    }
  }
})