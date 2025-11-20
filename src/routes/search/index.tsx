import { client } from '@/common/client'
import BrandSearchPage from '@/features/brands/pages/BrandSearchPage'
import FragranceSearchPage from '@/features/fragrances/pages/FragranceSearchPage'
import UserSearchPage from '@/features/users/pages/UserSearchPage'
import { wrapQuery } from '@/utils/util'
import { getSearchQuery } from '@/utils/util-functions'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import topbar from 'topbar'

export const Route = createFileRoute('/search/')({
  component: RouteComponent,
  loaderDeps: ({ search }) => search,
  loader: async ({ deps }) => {
    const query = getSearchQuery(deps.filter)

    topbar.show()

    // Just fill cache
    await wrapQuery(
      client.query({ query, variables: { input: { term: deps.term } } })
    )

    topbar.hide()
  }
})

function RouteComponent () {
  const api = getRouteApi('/search')
  const { term, filter } = api.useSearch()

  if (filter === 'brands') {
    return (
      <BrandSearchPage
        term={term}
      />
    )
  }

  if (filter === 'users') {
    return (
      <UserSearchPage
        term={term}
      />
    )
  }

  return (
    <FragranceSearchPage
      term={term}
    />
  )
}
