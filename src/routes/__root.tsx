import type { AuthContextValue } from '@/features/auth'
import type { MeFragment } from '@/generated/graphql'
import type { UseRouterUtilsReturn } from '@/hooks/useRouterUtils'
import MainLayout from '@/layouts/MainLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import type { Nullable } from '@/utils/util'
import { createRootRouteWithContext } from '@tanstack/react-router'
import z from 'zod'

interface RouterContext {
  auth: Nullable<AuthContextValue>
  me: Nullable<MeFragment>
  utils: Nullable<UseRouterUtilsReturn>
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: MainLayout,
  notFoundComponent: NotFoundPage,
  validateSearch: z.object({
    redirect: z.string().optional()
  })
})
