/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['moduleStringNames']
        }
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: []
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules/framer-motion/')) {
            return 'framer-motion';
          }
          if (id.includes('node_modules/three/') || id.includes('node_modules/@react-three/')) {
            return 'three';
          }
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor';
          }
        }
      }
    },
    sourcemap: true,
    target: 'esnext'
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
    logLevel: 'warning',
    treeShaking: true
  }
});
