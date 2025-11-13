import FragranceCollectionPage from '@/features/fragrances/pages/FragranceCollectionPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/collections/$id/')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/collections/$id')
  const { collection } = api.useLoaderData()

  return (
    <FragranceCollectionPage
      collectionId={collection.id}
    />
  )
}
