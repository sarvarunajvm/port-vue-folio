// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: process.env.BASE_URL ?? (mode === 'production' ? '/port-vue-folio/' : '/'),
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'heroui-vendor': ['@heroui/react'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
}))
