import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community/posts_/$id')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/community/posts_/$id"!</div>
}
