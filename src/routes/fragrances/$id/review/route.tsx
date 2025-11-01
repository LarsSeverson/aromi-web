import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrances/$id/review')({
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
