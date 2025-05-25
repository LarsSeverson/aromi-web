import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import App from './App'
import { AuthProvider } from './contexts/providers/AuthProvider'
import { ApolloProvider } from '@apollo/client'
import { client } from './common/client'
import { MyProvider } from './contexts/providers/MyContextProvider'

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined
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
      <ApolloProvider
        client={client}
      >
        <AuthProvider>
          <MyProvider>
            <App />
          </MyProvider>
        </AuthProvider>
      </ApolloProvider>
    </StrictMode>
  )
} else {
  console.error('Root element not found')
}
