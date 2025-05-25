import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collection/$id/')({
  component: RouteComponent,
  loader: ({ context }) => context
})

function RouteComponent () {
  const { collection } = Route.useLoaderData()

  return <div>{collection.name}</div>
}
