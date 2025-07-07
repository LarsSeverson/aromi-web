import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { UserLikesTab } from '@/features/user/tabs/UserLikesTab'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { useMyContext } from '@/features/user/contexts/MyContext'

export const Route = createFileRoute('/user/$id/likes')({
  component: Likes,
  loader: ({ context }) => context
})

function Likes () {
  const { user } = Route.useLoaderData()
  const { me } = useMyContext()
  const { mainContentRect } = useMainLayoutContext()

  return (
    <UserLikesTab
      user={user}
      myLikes={me?.id === user.id}
      containerWidth={mainContentRect.width}
    />
  )
}
