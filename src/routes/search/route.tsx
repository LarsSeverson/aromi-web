import { SEARCH_FILTER_OPTIONS } from '@/utils/constants'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import z from 'zod'

export const Route = createFileRoute('/search')({
  validateSearch: z
    .object({
      term: z
        .string()
        .optional()
        .default(''),
      filter: z
        .enum(SEARCH_FILTER_OPTIONS.map(option => option.value))
        .optional()
    }),
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
