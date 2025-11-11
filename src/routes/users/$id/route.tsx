import { client } from '@/common/client'
import { USER_QUERY } from '@/features/users'
import { UserPage } from '@/features/users/pages/UserPage'
import { DocumentTitleBuilder } from '@/utils/DocumentTitleBuilder'
import { wrapQuery } from '@/utils/util'
import { createFileRoute } from '@tanstack/react-router'
import topbar from 'topbar'

export const Route = createFileRoute('/users/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { id } = params

    topbar.show()

    const userRes = await wrapQuery(
      client.query({ query: USER_QUERY, variables: { id } })
    )

    topbar.hide()

    if (userRes.isErr()) throw userRes.error

    const user = userRes.value.user

    new DocumentTitleBuilder()
      .prepend(user.username)
      .apply()

    return { user }
  }
})

function RouteComponent () {
  const { user } = Route.useLoaderData()

  return (
    <UserPage
      user={user}
    />
  )
}
