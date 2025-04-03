import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { FragrancePage } from '@/pages/FragrancePage'

export const Route = createFileRoute('/fragrance/$id/')({
  component: FragranceIndex,
  loader: ({ context }) => context
})

function FragranceIndex () {
  const { fragrance, user } = Route.useLoaderData()

  return (
    <FragrancePage
      fragrance={fragrance}
      user={user}
    />
  )
}
