import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tanstackRouter from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true
    }),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-react-compiler'
          ]
        ]
      }
    }),
    tailwindcss()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks (id) {
          if (id.includes('node_modules')) {
            const name = id.split('node_modules/')[1].split('/')[0]

            if (['graphql-tag', 'tiny-warning', 'tiny-invariant', 'tslib', 'clsx', '@babel'].includes(name)) {
              return 'vendor-helpers'
            }

            return name
          }
        }
      }
    }
  }
})
