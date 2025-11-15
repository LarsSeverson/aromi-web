import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/')({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({ to: '/settings/profile' })
  }
})

function RouteComponent () {
  return <Outlet />
}
