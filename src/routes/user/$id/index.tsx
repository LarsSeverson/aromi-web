import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { UserCollectionsTab } from '@/features/user/tabs/UserCollectionsTab'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { useMe } from '@/features/user/hooks/useMe'

export const Route = createFileRoute('/user/$id/')({
  component: Collections,
  loader: ({ context }) => context
})

function Collections () {
  const { user } = Route.useLoaderData()
  const { me } = useMe()
  const { mainContentRect } = useMainLayoutContext()

  return (
    <UserCollectionsTab
      user={user}
      myCollections={me?.id === user.id}
      containerWidth={mainContentRect.width}
    />
  )
}
