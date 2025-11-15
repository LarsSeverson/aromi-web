import SettingsLayout from '@/layouts/SettingsLayout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    const { me, utils } = context

    if (me == null) {
      utils?.toastMessage('Hold On', 'You need to log in first')

      throw redirect({
        to: '/',
        search: { showLogIn: true }
      })
    }
  }
})

function RouteComponent () {
  return <SettingsLayout />
}
