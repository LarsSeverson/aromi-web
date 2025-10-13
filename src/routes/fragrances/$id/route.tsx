import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrances/$id')({
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
