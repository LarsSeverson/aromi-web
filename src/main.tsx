import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import App from './App'
import { client } from './common/client'
import topbar from 'topbar'
import { AuthProvider } from './features/auth'
import { Toast } from '@base-ui-components/react'
import { Toaster } from './components/Toaster'
import { MyProvider } from './features/users'
import { Colors } from './styles/Colors'
import { ApolloProvider } from '@apollo/client/react'

topbar.config({ barThickness: 2, barColors: { 0: Colors.sinopia } })

export const router = createRouter({
  routeTree,

  context: {
    auth: undefined,
    me: undefined,
    utils: undefined
  },

  notFoundMode: 'root',
  scrollRestoration: true
})

const root = document.getElementById('root')

if (root == null) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <ApolloProvider
      client={client}
    >
      <AuthProvider>
        <MyProvider>
          <Toast.Provider>
            <App />
            <Toaster />
          </Toast.Provider>
        </MyProvider>
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>
)
