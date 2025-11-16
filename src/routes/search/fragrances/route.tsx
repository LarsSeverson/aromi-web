import { createFileRoute, Outlet } from '@tanstack/react-router'
import z from 'zod'

export const Route = createFileRoute('/search/fragrances')({
  component: RouteComponent,
  validateSearch: z
    .object({
      term: z
        .string()
        .optional()
        .default('')
    })
})

function RouteComponent () {
  return <Outlet />
}
