import SettingsLayout from '@/layouts/SettingsLayout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    const { auth, me, utils } = context

    if (me == null) {
      utils?.toastMessage('Hold On', 'You need to log in first')
      auth?.dialogs.openLogInDialog()

      const redirectTo = location.href

      throw redirect({ to: '/', search: { redirect: redirectTo } })
    }
  }
})

function RouteComponent () {
  return <SettingsLayout />
}
