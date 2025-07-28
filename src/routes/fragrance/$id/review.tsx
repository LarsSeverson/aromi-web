import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import FragranceReviewPage from '@/features/review/pages/FragranceReviewPage'
import { z } from 'zod'
import topbar from 'topbar'
import { client } from '@/common/client'
import { MY_FRAGRANCE_REVIEW_QUERY } from '@/features/review'
import { ResultAsync } from 'neverthrow'

export const Route = createFileRoute('/fragrance/$id/review')({
  component: Review,
  validateSearch: z
    .object({
      rating: z
        .number()
        .int()
        .optional()
        .transform(val => {
          if (val == null) return val
          return Math.max(1, Math.min(5, val))
        })
    }),
  beforeLoad: async ({ params }) => {
    topbar.show()

    await ResultAsync
      .fromPromise(
        client
          .query({
            query: MY_FRAGRANCE_REVIEW_QUERY,
            variables: { fragranceId: Number(params.id) }
          }),
        error => error
      )

    topbar.hide()
  },
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
