import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import App from './App'
import { ClientProvider } from './contexts/providers/ClientProvider'
import { AuthProvider } from './contexts/providers/AuthProvider'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_USER_POOL_ID ?? '',
      userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID ?? '',
      identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID ?? '',
      allowGuestAccess: true,
      signUpVerificationMethod: 'code'
    }
  }
})

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  context: {
    auth: undefined,
    client: undefined
  }
})

declare module '@tanstack/react-router' {
  export interface Register {
    router: typeof router
  }
}

const root = document.getElementById('root')
if (root != null) {
  createRoot(root).render(
    <StrictMode>
      <ClientProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ClientProvider>
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
