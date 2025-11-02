import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import z from 'zod'
import FragranceReviewPage from '@/features/fragrances/pages/FragranceReviewPage'

export const Route = createFileRoute('/fragrances/$id/review/')({
  component: RouteComponent,
  validateSearch: z
    .object({
      rating: z
        .number()
        .min(0)
        .max(5)
        .default(0)
    })
})

function RouteComponent () {
  const parentApi = getRouteApi('/fragrances/$id')

  const { fragrance } = parentApi.useLoaderData()
  const { rating } = Route.useSearch()

  return (
    <FragranceReviewPage
      fragrance={fragrance}
      rating={rating}
    />
  )
}
