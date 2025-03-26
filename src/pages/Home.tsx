import React from 'react'
import { HomeSuggestedSection } from '@/components/HomeSuggestedSection'
import { rootRoute } from '@/routes/__root'
import { createRoute } from '@tanstack/react-router'

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />
})

export const Home = () => {
  return (
    <HomeSuggestedSection />
  )
}

export default Home

homeRoute.addChildren([])
