import type useAuth from '@/hooks/useAuth'
import { type useClient } from '@/hooks/useClient'
import MainLayout from '@/layouts/MainLayout'
import { createRootRouteWithContext } from '@tanstack/react-router'

interface RouterContext {
  auth: ReturnType<typeof useAuth> | undefined
  client: ReturnType<typeof useClient> | undefined
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: MainLayout,
  beforeLoad: async ({ context }) => {
    if (context.auth?.userInfo.user != null) return
    return await context.auth?.userGetInfo()
  }
})
