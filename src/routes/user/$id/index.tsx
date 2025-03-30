import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { CollectionsTab } from '@/pages/profile/CollectionsTab'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'

export const Route = createFileRoute('/user/$id/')({
  component: Collections,
  loader: ({ context }) => context
})

function Collections () {
  const { user, me } = Route.useLoaderData()
  const { mainContentRect } = useMainLayoutContext()

  return (
    <CollectionsTab
      user={user}
      myCollections={me}
      containerWidth={mainContentRect.width}
    />
  )
}
