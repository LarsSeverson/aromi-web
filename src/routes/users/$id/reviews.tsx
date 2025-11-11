import UserReviewsTab from '@/features/users/components/UserReviewsTab'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id/reviews')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/users/$id')
  const { user } = api.useLoaderData()

  return (
    <UserReviewsTab
      user={user}
    />
  )
}
