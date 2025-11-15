import AccountManagementPage from '@/features/auth/pages/AccountManagementPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/account/')({
  component: RouteComponent
})

function RouteComponent () {
  return <AccountManagementPage />
}
