import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { USER_INFO_QUERY } from '@/hooks/useUserInfo'
import { ProfilePage } from '@/pages/ProfilePage'
import { client } from '@/common/client'

export const Route = createFileRoute('/user/$id')({
  component: User,
  beforeLoad: async ({ context, params }) => {
    const { auth } = context

    const { data } = await client.query({
      query: USER_INFO_QUERY,
      variables: {
        userId: Number(params.id)
      }
    })

    if (data.user == null) throw new Error('User not found')

    const user = data.user
    const me = auth?.userInfo.user?.id === user.id

    return { user, me }
  },
  loader: ({ context }) => {
    return context
  }
})

function User () {
  const { user, me } = Route.useLoaderData()

  return (
    <ProfilePage
      user={user}
      myProfile={me}
    />
  )
}
