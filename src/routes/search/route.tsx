import GeneralErrorPage from '@/pages/GeneralErrorPage'
import { SearchPageSearchSchema, ValidSearchTerm } from '@/utils/validation'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/search')({
  component: RouteComponent,

  errorComponent: GeneralErrorPage,

  validateSearch: SearchPageSearchSchema,

  loaderDeps: ({ search }) => ({ term: search.term, filter: search.filter }),

  loader: ({ deps }) => {
    const parsed = ValidSearchTerm.safeParse(deps.term)

    if (!parsed.success) {
      throw redirect({ to: '/' })
    }
  }
})

function RouteComponent () {
  return <Outlet />
}
