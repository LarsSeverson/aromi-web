import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/collections')({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({ to: '/users' })
  }
})

function RouteComponent () {
  return null
}
