import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/collections')({
  component: RouteComponent,
  beforeLoad: ({ params }) => {
    const id = (params as { id: string | undefined }).id

    if (id == null) {
      throw redirect({ to: '/users' })
    }
  }
})

function RouteComponent () {
  return <Outlet />
}
