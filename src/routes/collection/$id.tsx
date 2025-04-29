import React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { COLLECTION_INFO_QUERY } from '@/hooks/useCollectionInfo'

export const Route = createFileRoute('/collection/$id')({
  component: Collection,
  beforeLoad: async ({ context, params }) => {
    const { client, auth } = context
    if (client == null) throw new Error('Client not found')

    const { data } = await client.client.query({
      query: COLLECTION_INFO_QUERY,
      variables: { collectionId: Number(params.id) }
    })

    if (data.collection == null) throw new Error('Collection not found')

    const collection = data.collection
    const user = auth?.userInfo.user

    return { collection, user }
  }
})

function Collection () {
  return <Outlet />
}
