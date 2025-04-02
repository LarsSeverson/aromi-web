import React, { useEffect, useState } from 'react'
import './styles/output.css'
import { useAuthContext } from './contexts/AuthContext'
import { useClientContext } from './contexts/ClientContext'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './main'

const App = () => {
  const auth = useAuthContext()
  const client = useClientContext()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const initialize = () => {
      void auth.userGetInfo()
        .then(() => {
          setInitialized(true)
        })
    }

    if (!initialized) {
      initialize()
    }
  }, [auth, initialized, setInitialized])

  if (!initialized) return null

  return (
    <RouterProvider
      router={router}
      context={{ auth, client }}
    />
  )
}

export default App
