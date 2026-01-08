import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community/posts/$id')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/posts/$id"!</div>
}
