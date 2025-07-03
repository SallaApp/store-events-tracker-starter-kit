import { defineConfig } from 'vite'
import { resolve } from 'path'
import { AutoRegistryEventsPlugin } from '@salla.sa/ecommerce-events-base/plugin'

export default defineConfig({
  plugins: [AutoRegistryEventsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'StoreEventsTracker',
      fileName: 'tracker',
      formats: ['umd', 'es']
    },
    rollupOptions: {
      output: {
        globals: {
          // Add any global dependencies here if needed
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    open: '/example.html'
  },
  preview: {
    open: '/example.html'
  }
})