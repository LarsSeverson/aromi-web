import React from 'react'
import './styles/output.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './main'
import { useAuthContext } from './features/auth'
import { useRouterUtils } from './hooks/useRouterUtils'

const App = () => {
  const auth = useAuthContext()
  const utils = useRouterUtils()

  return (
    <RouterProvider
      router={router}
      context={{ auth, me: auth.me, utils }}
    />
  )
}

export default App
