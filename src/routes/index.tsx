import React from 'react'
import { HomePage } from '@/pages/HomePage'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: z.object({
    showLogin: z.string().optional()
  })
})

function Home () {
  return (
    <HomePage />
  )
}
