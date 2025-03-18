import React from 'react'
import './styles/output.css'
import { BrowserRouter } from 'react-router'
import { ClientProvider } from './contexts/providers/ClientProvider'
import { AuthProvider } from './contexts/providers/AuthProvider'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <ClientProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ClientProvider>
  )
}

export default App
