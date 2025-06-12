import React from 'react'
import AccountRecoveryPage from '@/pages/account-recovery/AccountRecoveryPage'

export const Route = createFileRoute({
  component: AccountRecovery
})

function AccountRecovery () {
  return <AccountRecoveryPage />
}
