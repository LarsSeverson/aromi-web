import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './common/client'
import { MyProvider } from './features/user/contexts/MyContextProvider'
import topbar from 'topbar'
import { Colors } from './styles/Colors'
import { AuthProvider } from './features/auth'

topbar.config({ barThickness: 2, barColors: { 0: Colors.sinopia } })

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined
  },
  scrollRestoration: true,
  getScrollRestorationKey: location => {
    if (location.pathname === '/') return 'homeScrollPos'
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return location.state.key!
  },
  notFoundMode: 'root'
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
