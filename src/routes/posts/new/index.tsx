import { NewPostProvider } from '@/features/posts/contexts/providers/NewPostProvider'
import NewPostPage from '@/features/posts/pages/NewPostPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/new/')({
  component: RouteComponent
})

function RouteComponent () {
  return (
    <NewPostProvider>
      <NewPostPage />
    </NewPostProvider>
  )
}
