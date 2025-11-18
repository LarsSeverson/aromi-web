import FragranceSearchPage from '@/features/fragrances/pages/FragranceSearchPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/search/fragrances/')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/search/fragrances')
  const { term } = api.useSearch()

  return (
    <FragranceSearchPage
      term={term}
    />
  )
}
