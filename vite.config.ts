// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Import ViteSSG for pre-rendering (SSG)
import { ViteSSG } from 'vite-ssg';

export default defineConfig({
  plugins: [
    react(),
    // Add ViteSSG to pre-render specified routes
    ViteSSG({
      routes: ['/', '/pricing', '/contact', '/404'] // adjust or add routes as needed
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
