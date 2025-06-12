import React from 'react'
import ReviewsTab from '@/pages/profile/ReviewsTab'
import { useMyContext } from '@/contexts/MyContext'

export const Route = createFileRoute({
  component: Reviews,
  loader: ({ context }) => context
})

function Reviews () {
  const { user } = Route.useLoaderData()
  const { me } = useMyContext()

  return (
    <ReviewsTab
      user={user}
      myReviews={me?.id === user.id}
    />
  )
}
