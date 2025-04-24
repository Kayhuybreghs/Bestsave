import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender-spa';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: 'dist',
      routes: ['/', '/pricing', '/contact']
    })
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
