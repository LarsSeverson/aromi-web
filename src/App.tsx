import React from 'react'
import './styles/output.css'
import { useAuthContext } from './contexts/AuthContext'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './main'

const App = () => {
  const auth = useAuthContext()

  return (
    <RouterProvider
      router={router}
      context={{ auth }}
    />
  )
}

export default App
