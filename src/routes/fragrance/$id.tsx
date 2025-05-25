import React from 'react'
import { FRAGRANCE_INFO_QUERY } from '@/hooks/useFragranceInfo'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { client } from '@/common/client'

export const Route = createFileRoute('/fragrance/$id')({
  component: Fragrance,
  beforeLoad: async ({ params }) => {
    const { data } = await client.query({
      query: FRAGRANCE_INFO_QUERY,
      variables: {
        fragranceId: Number(params.id)
      }
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
