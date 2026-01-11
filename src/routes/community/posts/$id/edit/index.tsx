import { EditPostProvider } from '@/features/posts/contexts/providers/EditPostProvider'
import EditPostPage from '@/features/posts/pages/EditPostPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/community/posts/$id/edit/')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/community/posts/$id/edit')
  const { post } = api.useLoaderData()

  return (
    <EditPostProvider
      post={post}
    >
      <EditPostPage />
    </EditPostProvider>
  )
}
