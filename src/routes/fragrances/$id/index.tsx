import { client } from '@/common/client'
import { FRAGRANCE_QUERY } from '@/features/fragrances'
import { FragrancePage } from '@/features/fragrances/pages/FragrancePage'
import { wrapQuery } from '@/utils/util'
import { createFileRoute } from '@tanstack/react-router'
import topbar from 'topbar'

export const Route = createFileRoute('/fragrances/$id/')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { id } = params

    topbar.show()

    const fragranceRes = await wrapQuery(client.query({ query: FRAGRANCE_QUERY, variables: { id } }))

    topbar.hide()

    if (fragranceRes.isErr()) throw fragranceRes.error

    const fragrance = fragranceRes.value.fragrance

    return { fragrance }
  }
})

function RouteComponent () {
  const { fragrance } = Route.useLoaderData()

  return (
    <FragrancePage
      fragrance={fragrance}
    />
  )
}
