import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: './',
  build: {
    outDir: 'build',
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  optimizeDeps: {
    force: true,
  },

  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, 'src')}/`,
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.tsx', '.json', '.scss'],
  },
  server: {
    port: 3000,
    proxy: {
      // 필요한 경우 proxy 설정
    },
  },
})
