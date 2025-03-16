/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string
  readonly VITE_API_ENDPOINT_DEV: string
  readonly VITE_USER_POOL_ID: string
  readonly VITE_USER_POOL_CLIENT_ID: string
  readonly VITE_IDENTITY_POOL_ID: string
  readonly VITE_OAUTH_DOMAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
