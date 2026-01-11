import PostPage from '@/features/posts/pages/PostPage'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'

export const Route = createFileRoute('/community/posts/$id/')({
  component: RouteComponent
})

function RouteComponent () {
  const api = getRouteApi('/community/posts/$id')
  const { post } = api.useLoaderData()

  return (
    <PostPage
      post={post}
    />
  )
}
