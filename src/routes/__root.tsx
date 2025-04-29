import { type UseAuthReturn } from '@/contexts/AuthContext'
import MainLayout from '@/layouts/MainLayout'
import { createRootRouteWithContext } from '@tanstack/react-router'

interface RouterContext {
  auth: UseAuthReturn | undefined
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: MainLayout
})
