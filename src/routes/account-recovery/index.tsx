import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import AccountRecoveryPage from '@/features/auth/pages/AccountRecoveryPage'

export const Route = createFileRoute('/account-recovery/')({
  component: AccountRecovery
})

function AccountRecovery () {
  return <AccountRecoveryPage />
}
