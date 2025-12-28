import { FragranceProvider } from '@/features/fragrances/contexts/providers/FragranceProvider'
import { FragrancePage } from '@/features/fragrances/pages/FragrancePage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrances/$id/')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/fragrances/$id')
  const { fragrance } = api.useLoaderData()

  return (
    <FragranceProvider
      fragrance={fragrance}
    >
      <FragrancePage />
    </FragranceProvider>
  )
}
