import React from 'react'
import AccountRecoveryPage from '@/pages/account-recovery/AccountRecoveryPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account-recovery/')({
  component: AccountRecovery
})

function AccountRecovery () {
  return <AccountRecoveryPage />
}
