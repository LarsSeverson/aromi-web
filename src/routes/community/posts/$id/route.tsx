import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/community/posts/$id')({
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
