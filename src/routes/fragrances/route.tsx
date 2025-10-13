import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrances')({
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
