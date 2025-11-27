import UserErrorPage from '@/features/users/pages/UserErrorPage'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
  component: RouteComponent,
  errorComponent: UserErrorPage
})

function RouteComponent () {
  return <Outlet />
}
