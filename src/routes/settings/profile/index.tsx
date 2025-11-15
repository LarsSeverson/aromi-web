import EditProfilePage from '@/features/users/pages/EditProfilePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/profile/')({
  component: RouteComponent
})

function RouteComponent () {
  return <EditProfilePage />
}
