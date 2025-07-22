import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import FragranceReviewPage from '@/features/fragrance/pages/FragranceReviewPage'
import { z } from 'zod'

export const Route = createFileRoute('/fragrance/$id/review')({
  component: Review,
  validateSearch: z
    .object({
      rating: z
        .number()
        .optional(),
      showAccords: z
        .boolean()
        .optional()
    }),
  loader: ({ context }) => context
})

function Review () {
  const { rating } = Route.useSearch()
  const { fragrance } = Route.useLoaderData()

  return (
    <FragranceReviewPage
      rating={rating ?? 0}
      fragrance={fragrance}
    />
  )
}
