import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        format: 'es',
        entryFileNames: '[name]-[hash].mjs',
        chunkFileNames: '[name]-[hash].mjs'
      }
    },
    target: 'esnext',
    minify: 'esbuild'
  }
})