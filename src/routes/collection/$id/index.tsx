import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/collection/$id/')({
  component: RouteComponent,
  loader: ({ context }) => context
})

function RouteComponent () {
  const { collection } = Route.useLoaderData()

  return <div>{collection.name}</div>
}
