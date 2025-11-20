import { SEARCH_FILTER_OPTIONS } from '@/utils/constants'
import { ValidSearchTerm } from '@/utils/validation'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
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
        .transform(val => val === 'fragrances' ? undefined : val)
    }),
  loaderDeps: ({ search }) => ({ term: search.term, filter: search.filter }),
  loader: ({ deps }) => {
    const parsed = ValidSearchTerm.safeParse(deps.term)

    if (!parsed.success) {
      throw redirect({ to: '/' })
    }
  },
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
