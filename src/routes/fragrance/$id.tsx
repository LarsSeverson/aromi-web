import React from 'react'
import { FRAGRANCE_INFO_QUERY } from '@/hooks/useFragranceInfo'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrance/$id')({
  component: Fragrance,
  beforeLoad: async ({ context, params }) => {
    const { client, auth } = context

    if (client == null) throw new Error('Client not found')
    if (auth == null) throw new Error('Auth not found')

    const { data } = await client.client.query({
      query: FRAGRANCE_INFO_QUERY,
      variables: {
        fragranceId: Number(params.id)
      }
    })

    if (data.fragrance == null) throw new Error('Fragrance not found')

    const fragrance = data.fragrance
    const user = auth.userInfo.user

    return { fragrance, user }
  },
  loader: ({ context }) => context
})

function Fragrance () {
  return <Outlet />
}
