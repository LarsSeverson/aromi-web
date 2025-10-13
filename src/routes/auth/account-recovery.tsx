import React from 'react'
import AccountRecoveryPage from '@/features/auth/pages/AccountRecoveryPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/account-recovery')({
  component: RouteComponent
})

function RouteComponent () {
  return <AccountRecoveryPage />
}
