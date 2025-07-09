import React from 'react'
import './styles/output.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './main'
import { useAuthContext } from './features/auth'

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
