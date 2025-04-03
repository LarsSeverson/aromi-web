import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ReviewPage from '@/pages/ReviewPage'

export interface ReviewSearch {
  rating: number
}

export const Route = createFileRoute('/fragrance/$id/review')({
  component: Review,
  validateSearch: (search: Record<string, unknown>): ReviewSearch => (
    {
      rating: Number(search.rating) ?? 0
    }
  ),
  loader: ({ context }) => context
})

function Review () {
  const { rating } = Route.useSearch()
  const { fragrance } = Route.useLoaderData()

  return (
    <ReviewPage
      rating={rating}
      fragrance={fragrance}
    />
  )
}
