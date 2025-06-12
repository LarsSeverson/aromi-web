import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tanstackRouter from '@tanstack/router-plugin/vite'
import { babelOptimizerPlugin } from '@graphql-codegen/client-preset'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      verboseFileRoutes: false
    }),
    react({
      babel: {
        plugins: [
          [babelOptimizerPlugin, { artifactDirectory: './src/generated', gqlTagName: 'gql' }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
