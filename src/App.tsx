import React from 'react'
import './styles/output.css'
import { ClientProvider } from './contexts/providers/ClientProvider'
import { AuthProvider } from './contexts/providers/AuthProvider'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <ClientProvider>
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    </ClientProvider>
  )
}

export default App
