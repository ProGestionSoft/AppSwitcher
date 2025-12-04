import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],
    define: {
      'import.meta.env.PGS_API_URL': JSON.stringify(env.PGS_API_URL)
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/standalone/index.ts'),
        name: 'PGSAppSwitcher',
        formats: ['es', 'umd', 'iife'],
        fileName: (format) => {
          if (format === 'es') return 'app-switcher.es.js'
          if (format === 'umd') return 'app-switcher.umd.js'
          return 'app-switcher.iife.js'
        }
      },
      rollupOptions: {
        external: [],
        output: {
          globals: {},
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'app-switcher.css'
            return assetInfo.name || ''
          }
        }
      },
      outDir: 'dist',
      emptyOutDir: true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, '.')
      }
    }
  }
})
