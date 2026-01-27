import GeneralErrorPage from '@/pages/GeneralErrorPage'
import { SearchPageSearchSchema } from '@/utils/validation'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/search')({
  component: RouteComponent,

  errorComponent: GeneralErrorPage,

  validateSearch: SearchPageSearchSchema,

  loaderDeps: ({ search }) => ({ term: search.term, filter: search.filter })
})

function RouteComponent () {
  return <Outlet />
}
