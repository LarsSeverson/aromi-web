import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { LikesTab } from '@/pages/profile/LikesTab'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'

export const Route = createFileRoute('/user/$id/likes')({
  component: Likes,
  loader: ({ context }) => context
})

function Likes () {
  const { user, me } = Route.useLoaderData()
  const { mainContentRect } = useMainLayoutContext()

  return (
    <LikesTab
      user={user}
      myLikes={me}
      containerWidth={mainContentRect.width}
    />
  )
}
