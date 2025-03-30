import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ReviewsTab from '@/pages/profile/ReviewsTab'

export const Route = createFileRoute('/user/$id/reviews')({
  component: Reviews,
  loader: ({ context }) => context
})

function Reviews () {
  const { user, me } = Route.useLoaderData()

  return (
    <ReviewsTab
      user={user}
      myReviews={me}
    />
  )
}
