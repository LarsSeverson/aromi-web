import { UserLikesTab } from '@/features/users/components/UserLikesTab'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id/likes')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/users/$id')
  const { user } = api.useLoaderData()

  return (
    <UserLikesTab
      user={user}
    />
  )
}
