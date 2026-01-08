import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community/posts/$id/edit')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/community/posts/$id/edit"!</div>
}
