import { client } from '@/common/client'
import { POST_QUERY } from '@/features/posts'
import { wrapQuery } from '@/utils/util'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import topbar from 'topbar'

export const Route = createFileRoute('/community/posts/$id/edit')({
  component: RouteComponent,
  loader: async ({ context, params, location }) => {
    const { me, utils, auth } = context
    const { id } = params

    if (me == null) {
      utils?.toastMessage('Hold On', 'You need to log in first')
      auth?.dialogs.openLogInDialog()

      const redirectTo = location.href

      throw redirect({
        to: '/',
        search: { redirect: redirectTo }
      })
    }

    topbar.show()

    const postRes = await wrapQuery(client.query({ query: POST_QUERY, variables: { id } }))

    topbar.hide()

    if (postRes.isErr()) throw postRes.error

    const post = postRes.value.post

    if (post.user.id !== me.id) {
      utils?.toastMessage('You cannot edit this post')
      throw redirect({ to: '/' })
    }

    return { post }
  }
})

function RouteComponent () {
  return <Outlet />
}
