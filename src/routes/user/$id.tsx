import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { ProfilePage } from '@/features/user/pages/ProfilePage'
import { client } from '@/common/client'
import { useMyContext } from '@/features/user/contexts/MyContext'
import { USER_QUERY } from '@/graphql/queries/UserQueries'

export const Route = createFileRoute('/user/$id')({
  component: User,
  beforeLoad: async ({ params }) => {
    const { data } = await client
      .query({
        query: USER_QUERY,
        variables: {
          id: Number(params.id)
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
