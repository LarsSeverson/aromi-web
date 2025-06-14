import React from 'react'
import { Outlet } from '@tanstack/react-router'
import { COLLECTION_INFO_QUERY } from '@/hooks/useCollection'
import { client } from '@/common/client'

export const Route = createFileRoute({
  component: Collection,
  beforeLoad: async ({ params }) => {
    const { data } = await client.query({
      query: COLLECTION_INFO_QUERY,
      variables: { collectionId: Number(params.id) }
    })

    if (data.collection == null) throw new Error('Collection not found')

    const collection = data.collection

    return { collection }
  }
})

function Collection () {
  return <Outlet />
}
