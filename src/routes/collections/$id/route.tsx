import { client } from '@/common/client'
import { FRAGRANCE_COLLECTION_QUERY } from '@/features/fragrances'
import { DocumentTitleBuilder } from '@/utils/DocumentTitleBuilder'
import { wrapQuery } from '@/utils/util'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import topbar from 'topbar'

export const Route = createFileRoute('/collections/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { id } = params

    topbar.show()

    const collectionRes = await wrapQuery(
      client.query({ query: FRAGRANCE_COLLECTION_QUERY, variables: { id } })
    )

    topbar.hide()

    if (collectionRes.isErr()) {
      throw collectionRes.error
    }

    const collection = collectionRes.value.fragranceCollection

    new DocumentTitleBuilder()
      .prepend(collection.name)
      .apply()

    return { collection }
  }
})

function RouteComponent () {
  return <Outlet />
}
