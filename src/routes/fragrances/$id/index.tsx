import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrances/$id/')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/fragrances/$id/"!</div>
}
