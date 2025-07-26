import React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { client } from '@/common/client'
import { COLLECTION_QUERY } from '@/features/collection/graphql/queries'

export const Route = createFileRoute('/collection/$id')({
  component: Collection,
  beforeLoad: async ({ params }) => {
    const { data } = await client
      .query({
        query: COLLECTION_QUERY,
        variables: { id: Number(params.id) }
      })

    if (data.collection == null) throw new Error('Collection not found')

    const collection = data.collection

    return { collection }
  }
})

function Collection () {
  return <Outlet />
}
