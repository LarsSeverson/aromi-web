import React from 'react'
import App from '@/App'
import { createRootRoute } from '@tanstack/react-router'
import { mainLayoutRoute } from '@/layouts/MainLayout'

export const rootRoute = createRootRoute({
  component: () => <App />
})

rootRoute.addChildren([mainLayoutRoute])
