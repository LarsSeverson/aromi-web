import { UserCollectionsTab } from '@/features/users/components/UserCollectionsTab'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id/collections')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/users/$id')
  const { user } = api.useLoaderData()

  return (
    <UserCollectionsTab
      user={user}
    />
  )
}
