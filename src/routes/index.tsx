import React from 'react'
import { HomePage } from '@/pages/HomePage'
import { z } from 'zod'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: z
    .object({
      showLogIn: z
        .boolean()
        .optional(),
      showSignUp: z
        .boolean()
        .optional()
    })
})

function RouteComponent () {
  return (
    <HomePage />
  )
}
