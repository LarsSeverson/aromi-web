import { HomeSuggestedSection } from '@/components/HomeSuggestedSection'
import { mainLayoutRoute } from '@/layouts/MainLayout'
import { createRoute } from '@tanstack/react-router'
import React from 'react'

export const homeRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/home',
  component: () => <Home />
})

export const Home = () => {
  return (
    <HomeSuggestedSection />
  )
}

export default Home

homeRoute.addChildren([])
