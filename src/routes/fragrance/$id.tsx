import React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { client } from '@/common/client'
import { FRAGRANCE_QUERY } from '@/graphql/queries/FragranceQueries'

export const Route = createFileRoute('/fragrance/$id')({
  component: Fragrance,
  beforeLoad: async ({ params }) => {
    const { data } = await client
      .query({
        query: FRAGRANCE_QUERY,
        variables: { id: Number(params.id) }
      })

    if (data.fragrance == null) throw new Error('Fragrance not found')

    const fragrance = data.fragrance

    return { fragrance }
  },
  loader: ({ context }) => context
})

function Fragrance () {
  return <Outlet />
}
