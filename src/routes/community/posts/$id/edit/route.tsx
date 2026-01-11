import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/community/posts/$id/edit')({
  component: RouteComponent,

  loader: ({ context, location }) => {
    const { post, isMyPost, me, utils, auth } = context

    if (me == null) {
      utils?.toastMessage('Hold On', 'You need to log in first')
      auth?.dialogs.openLogInDialog()

      const redirectTo = location.href

      throw redirect({
        to: '/',
        search: { redirect: redirectTo }
      })
    }

    if (!isMyPost) {
      utils?.toastMessage('You cannot edit this post')
      throw redirect({ to: '/' })
    }

    return { post }
  }
})

function RouteComponent () {
  return <Outlet />
}
