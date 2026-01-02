import PostsPage from '@/features/posts/pages/PostsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent
})

function RouteComponent () {
  return <PostsPage />
}
