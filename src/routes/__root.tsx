import { type UseAuthReturn } from '@/features/auth'
import MainLayout from '@/layouts/MainLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import { createRootRouteWithContext } from '@tanstack/react-router'

interface RouterContext {
  auth: UseAuthReturn | undefined
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: MainLayout,
  notFoundComponent: NotFoundPage
})
