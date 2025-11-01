import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'

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
  return <div>Hello "/fragrances/$id/review/"!</div>
}
