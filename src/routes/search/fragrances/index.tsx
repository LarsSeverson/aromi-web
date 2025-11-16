import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/search/fragrances/')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/search/fragrances/"!</div>
}
