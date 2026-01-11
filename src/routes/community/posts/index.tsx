import PostsPage from '@/features/posts/pages/PostsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community/posts/')({
  component: RouteComponent
})

function RouteComponent () {
  return (
    <PostsPage />
  )
}
