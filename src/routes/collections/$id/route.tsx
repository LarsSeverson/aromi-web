import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collections/$id')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/collections/$id"!</div>
}
