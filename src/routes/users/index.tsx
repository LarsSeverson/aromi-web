import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/users/')({
  beforeLoad: ({ context }) => {
    const { me, utils } = context

    if (me == null) {
      utils?.toastMessage('Hold On', 'You need to log in first')

      throw redirect({
        to: utils?.lastRoute.current?.pathname ?? '/',
        search: { showLogIn: true }
      })
    }

    throw redirect({
      to: '/users/$id',
      params: { id: me.id }
    })
  }
})
