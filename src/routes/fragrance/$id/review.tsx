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
  )
})

function Review () {
  const { rating } = Route.useSearch()
  const { id: fragranceId } = Route.useParams()

  return (
    <ReviewPage
      rating={rating}
      fragranceId={Number(fragranceId)}
    />
  )
}
