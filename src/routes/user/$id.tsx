import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { USER_INFO_QUERY } from '@/hooks/useUserInfo'
import { ProfilePage } from '@/pages/ProfilePage'
import { client } from '@/common/client'
import { useMyContext } from '@/contexts/MyContext'

export const Route = createFileRoute('/user/$id')({
  component: User,
  beforeLoad: async ({ params }) => {
    const { data } = await client.query({
      query: USER_INFO_QUERY,
      variables: {
        userId: Number(params.id)
      }
    })

    if (data.user == null) throw new Error('User not found')

    const user = data.user

    return { user }
  },
  loader: ({ context }) => {
    return context
  }
})

function User () {
  const { user } = Route.useLoaderData()
  const { me } = useMyContext()

  return (
    <ProfilePage
      user={user}
      myProfile={me?.id === user.id}
    />
  )
}
