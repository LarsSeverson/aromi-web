import React from 'react'

export const Route = createFileRoute({
  component: RouteComponent,
  loader: ({ context }) => context
})

function RouteComponent () {
  const { collection } = Route.useLoaderData()

  return <div>{collection.name}</div>
}
