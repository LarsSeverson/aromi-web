import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ConfirmPasswordResetPage from '@/pages/account-recovery/ConfirmPasswordResetPage'
import { z } from 'zod'

export const Route = createFileRoute('/account-recovery/confirm')({
  component: Confirm,
  validateSearch: z.object({
    email: z.string().optional()
  })
})

function Confirm () {
  const { email } = Route.useSearch()

  return (
    <ConfirmPasswordResetPage
      email={email ?? 'this email'}
    />
  )
}
