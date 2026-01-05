import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

export const config: CodegenConfig = {
  schema: process.env.VITE_API_ENDPOINT_DEV,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      },
      config: {
        scalars: {
          DateTime: 'Date',
          JSON: 'any'
        },
        enumsAsConst: true
      }
    }
  }
}

export default config
