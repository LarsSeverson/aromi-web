import React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { client } from '@/common/client'
import { FRAGRANCE_QUERY } from '@/graphql/queries/FragranceQueries'
import topbar from 'topbar'
import { flatten } from '@/common/pagination'

export const Route = createFileRoute('/fragrance/$id')({
  component: Fragrance,
  beforeLoad: async ({ params }) => {
    topbar.show()

    const { data } = await client
      .query({
        query: FRAGRANCE_QUERY,
        variables: { id: Number(params.id) }
      })

    topbar.hide()

    if (data.fragrance == null) throw new Error('Fragrance not found')

    const fragrance = flatten(data.fragrance)

    return { fragrance }
  },
  loader: ({ context }) => context
})

function Fragrance () {
  return <Outlet />
}
