import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tanstackRouter from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { babelOptimizerPlugin } from '@graphql-codegen/client-preset'
import BabelPluginReactCompiler from 'babel-plugin-react-compiler'

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
            BabelPluginReactCompiler,
            babelOptimizerPlugin,
            { artifactDirectory: './src/generated', gqlTagName: 'gql' }
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
  }
})
