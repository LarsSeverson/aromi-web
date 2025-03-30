import React from 'react'
import { HomePage } from '@/pages/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home
})

function Home () {
  return (
    <HomePage />
  )
}
