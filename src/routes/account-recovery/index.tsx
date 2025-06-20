import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import AccountRecoveryPage from '@/pages/account-recovery/AccountRecoveryPage'

export const Route = createFileRoute('/account-recovery/')({
  component: AccountRecovery
})

function AccountRecovery () {
  return <AccountRecoveryPage />
}
