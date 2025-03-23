import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { rootRoute } from '@/routes/__root'

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

const router = createRouter({
  routeTree: rootRoute,
  scrollRestoration: true
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
      <RouterProvider
        router={router}
      />
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
