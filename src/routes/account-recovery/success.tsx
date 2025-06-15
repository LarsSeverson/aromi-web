import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import ResetSucessPage from '@/pages/account-recovery/ResetSucessPage'

export const Route = createFileRoute('/account-recovery/success')({
  component: Success
})

function Success () {
  return <ResetSucessPage />
}
