import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ReviewPage from '@/pages/ReviewPage'
import { z } from 'zod'

export const Route = createFileRoute('/fragrance/$id/review')({
  component: Review,
  validateSearch: z
    .object({
      rating: z
        .number()
        .optional()
    }),
  loader: ({ context }) => context
})

function Review () {
  const { rating } = Route.useSearch()
  const { fragrance } = Route.useLoaderData()

  return (
    <ReviewPage
      rating={rating ?? 0}
      fragrance={fragrance}
    />
  )
}
