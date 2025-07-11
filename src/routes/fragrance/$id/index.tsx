import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { FragrancePage } from '@/features/fragrance/pages/FragrancePage'

export const Route = createFileRoute('/fragrance/$id/')({
  component: FragranceIndex,
  loader: ({ context }) => context
})

function FragranceIndex () {
  const { fragrance } = Route.useLoaderData()
  console.log(fragrance.id)

  return (
    <FragrancePage
      fragrance={fragrance}
    />
  )
}
