import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/users/')({
  beforeLoad: ({ context, location }) => {
    const { auth, me, utils } = context

    if (me == null) {
      utils?.toastMessage('Hold On', 'You need to log in first')
      auth?.dialogs.openLogInDialog()

      const redirectTo = location.href

      throw redirect({
        to: '/',
        search: { redirect: redirectTo }
      })
    }

    throw redirect({
      to: '/users/$id',
      params: { id: me.id }
    })
  }
})
