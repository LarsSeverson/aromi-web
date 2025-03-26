import React from 'react'
import App from '@/App'
import { createRootRoute } from '@tanstack/react-router'
import { homeRoute } from '@/pages/Home'
import { searchRoute } from '@/pages/Search'
import { fragranceRoute } from '@/pages/Fragrance'
import { profileRoute } from '@/pages/Profile'

export const rootRoute = createRootRoute({
  component: () => <App />
})

rootRoute.addChildren([homeRoute, searchRoute, profileRoute, fragranceRoute])
