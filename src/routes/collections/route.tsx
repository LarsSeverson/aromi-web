import FragranceCollectionErrorPage from '@/features/fragrances/pages/FragranceCollectionErrorPage'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/collections')({
  component: RouteComponent,
  errorComponent: FragranceCollectionErrorPage,
  beforeLoad: ({ params }) => {
    const id = (params as { id: string | undefined }).id

    if (id == null) {
      throw redirect({ to: '/users' })
    }
  }
})

function RouteComponent () {
  return <Outlet />
}
