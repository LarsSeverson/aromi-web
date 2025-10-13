import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
