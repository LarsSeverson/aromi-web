import React from 'react'
import ReviewPage from '@/pages/ReviewPage'
import { z } from 'zod'

export const Route = createFileRoute({
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
