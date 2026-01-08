import PostsPage from '@/features/posts/pages/PostsPage'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/community/')({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({ to: '/community/posts' })
  }
})

function RouteComponent () {
  return <PostsPage />
}
