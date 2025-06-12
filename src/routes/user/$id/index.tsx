import React from 'react'
import { CollectionsTab } from '@/pages/profile/CollectionsTab'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { useMe } from '@/hooks/useMe'

export const Route = createFileRoute({
  component: Collections,
  loader: ({ context }) => context
})

function Collections () {
  const { user } = Route.useLoaderData()
  const { me } = useMe()
  const { mainContentRect } = useMainLayoutContext()

  return (
    <CollectionsTab
      user={user}
      myCollections={me?.id === user.id}
      containerWidth={mainContentRect.width}
    />
  )
}
