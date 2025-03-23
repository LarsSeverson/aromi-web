import React from 'react'
import './styles/output.css'
import { ClientProvider } from './contexts/providers/ClientProvider'
import { AuthProvider } from './contexts/providers/AuthProvider'
import { Outlet } from '@tanstack/react-router'

const App = () => {
  return (
    <ClientProvider>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </ClientProvider>
  )
}

export default App
