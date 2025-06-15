import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { LikesTab } from '@/pages/profile/LikesTab'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { useMyContext } from '@/contexts/MyContext'

export const Route = createFileRoute('/user/$id/likes')({
  component: Likes,
  loader: ({ context }) => context
})

function Likes () {
  const { user } = Route.useLoaderData()
  const { me } = useMyContext()
  const { mainContentRect } = useMainLayoutContext()

  return (
    <LikesTab
      user={user}
      myLikes={me?.id === user.id}
      containerWidth={mainContentRect.width}
    />
  )
}
