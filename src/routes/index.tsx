import React from 'react'
import { HomePage } from '@/pages/HomePage'
import { z } from 'zod'

export const Route = createFileRoute({
  component: Home,
  validateSearch: z
    .object({
      showLogIn: z
        .string()
        .optional(),
      showSignUp: z
        .string()
        .optional()
    })
})

function Home () {
  return (
    <HomePage />
  )
}
