import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

export const config: CodegenConfig = {
  schema: process.env.VITE_API_ENDPOINT_DEV,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/generated/': {
      preset: 'client',
      presetConfig: {
        filename: 'graphql.ts'
      },
      config: {
        scalars: {
          DateTime: 'Date'
        },
        enumsAsConst: true
      }
    }
  }
}

export default config
