import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { FragrancePage } from '@/pages/FragrancePage'
import { useMyContext } from '@/contexts/MyContext'

export const Route = createFileRoute('/fragrance/$id/')({
  component: FragranceIndex,
  loader: ({ context }) => context
})

function FragranceIndex () {
  const { fragrance } = Route.useLoaderData()
  const { me } = useMyContext()

  return (
    <FragrancePage
      fragrance={fragrance}
      user={me}
    />
  )
}
