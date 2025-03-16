import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import App from './App.tsx'

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

const root = document.getElementById('root')
if (root != null) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
