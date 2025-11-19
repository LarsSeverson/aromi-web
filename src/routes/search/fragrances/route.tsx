import { client } from '@/common/client'
import { SEARCH_FRAGRANCES_QUERY } from '@/features/fragrances'
import { wrapQuery } from '@/utils/util'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import topbar from 'topbar'

export const Route = createFileRoute('/search/fragrances')({
  component: RouteComponent,
  loaderDeps: ({ search }) => ({ term: search.term }),
  loader: async ({ deps }) => {
    const { term } = deps

    topbar.show()

    // Just fills the cache
    await wrapQuery(
      client.query({ query: SEARCH_FRAGRANCES_QUERY, variables: { input: { term } } })
    )

    topbar.hide()
  }
})

function RouteComponent () {
  return <Outlet />
}
