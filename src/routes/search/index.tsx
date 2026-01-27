import { client } from '@/common/client'
import FragranceSearchPage from '@/features/fragrances/pages/FragranceSearchPage'
import { PostSearchPage } from '@/features/posts/pages/PostSearchPage'
import UserSearchPage from '@/features/users/pages/UserSearchPage'
import { SearchPage } from '@/pages/SearchPage'
import { DocumentTitleBuilder } from '@/utils/DocumentTitleBuilder'
import { wrapQuery } from '@/utils/util'
import { getSearchQuery } from '@/utils/util-functions'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import React from 'react'
import topbar from 'topbar'

export const Route = createFileRoute('/search/')({
  component: RouteComponent,
  loaderDeps: ({ search }) => search,
  loader: async ({ deps }) => {
    const query = getSearchQuery(deps.filter)

    topbar.show()

    // Just fill cache
    await wrapQuery(
      client.query({
        query,
        variables: { input: { term: deps.term } }
      })
    )

    topbar.hide()
  }
})

function RouteComponent () {
  const api = getRouteApi('/search')
  const { term, filter } = api.useSearch()

  React.useEffect(
    () => {
      new DocumentTitleBuilder()
        .reset()
        .prepend('Search')
        .apply()
    },
    []
  )

  if (filter === 'users') {
    return (
      <UserSearchPage
        term={term}
      />
    )
  }

  if (filter === 'posts') {
    return (
      <PostSearchPage
        term={term}
      />
    )
  }

  if (filter === 'fragrances') {
    return (
      <FragranceSearchPage
        term={term}
      />
    )
  }

  return (
    <SearchPage />
  )
}
