import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import UserReviewsTab from '@/features/user/tabs/UserReviewsTab'
import { useMyContext } from '@/features/user/contexts/MyContext'

export const Route = createFileRoute('/user/$id/reviews')({
  component: Reviews,
  loader: ({ context }) => context
})

function Reviews () {
  const { user } = Route.useLoaderData()
  const { me } = useMyContext()

  return (
    <UserReviewsTab
      user={user}
      myReviews={me?.id === user.id}
    />
  )
}
