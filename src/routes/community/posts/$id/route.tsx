import { client } from '@/common/client'
import { POST_QUERY } from '@/features/posts'
import { DocumentTitleBuilder } from '@/utils/DocumentTitleBuilder'
import { wrapQuery } from '@/utils/util'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import React from 'react'
import topbar from 'topbar'

export const Route = createFileRoute('/community/posts/$id')({
  component: RouteComponent,

  beforeLoad: async ({ context, params }) => {
    const { me } = context
    const { id } = params

    topbar.show()

    const postRes = await wrapQuery(client.query({ query: POST_QUERY, variables: { id } }))

    topbar.hide()

    if (postRes.isErr()) throw postRes.error

    const post = postRes.value.post
    const isMyPost = post.user.id === me?.id

    return { post, isMyPost }
  },

  loader: ({ context }) => {
    const { post } = context
    return { post }
  }
})

function RouteComponent () {
  const { post } = Route.useLoaderData()

  React.useEffect(
    () => {
      new DocumentTitleBuilder()
        .prepend(post.title)
        .apply()
    },
    [post.title]
  )

  return <Outlet />
}
