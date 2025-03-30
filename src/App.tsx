import React from 'react'
import './styles/output.css'
import { useAuthContext } from './contexts/AuthContext'
import { useClientContext } from './contexts/ClientContext'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './main'

const App = () => {
  const auth = useAuthContext()
  const client = useClientContext()

  return (
    <RouterProvider
      router={router}
      context={{ auth, client }}
    />
  )
}

export default App
