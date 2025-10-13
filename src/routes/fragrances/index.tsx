import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrances/')({
  beforeLoad: () => {
    redirect({ to: '/' })
  }
})
