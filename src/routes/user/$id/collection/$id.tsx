import React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$id/collection/$id')({
  component: Collection,
  beforeLoad: async ({ context, params }) => {
    const { client, auth } = context
    if (client == null) throw new Error('Client not found')
    
    const { data } = await client.client.query({
      query: 
    })
  }
})

function Collection () {
  return <Outlet />
}
