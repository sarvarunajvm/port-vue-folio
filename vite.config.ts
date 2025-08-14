// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Prefer env override, else default by mode
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
}));
