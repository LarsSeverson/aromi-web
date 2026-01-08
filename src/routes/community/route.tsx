import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/community')({
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
