import type { UnfollowUserInput, UnfollowUserMutation, UserFollow } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { UNFOLLOW_USER_MUTATION } from '../graphql/mutations'
import type { ApolloCache } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'
import { useMyContext } from '../context/MyContext'

export const useUnfollowUser = () => {
  const [unfollowInner] = useMutation(UNFOLLOW_USER_MUTATION)

  const { me } = useMyContext()

  const handleUpdateCache = (
    cache: ApolloCache,
    result: Nullable<UnfollowUserMutation>,
    input: UnfollowUserInput
  ) => {
    const data = result?.unfollow
    if (data == null) return

    cache.modify({
      id: cache.identify({ __typename: 'User', id: input.userId }),
      fields: {
        followerCount (existing = 0) {
          return (existing as number) + 1
        },

        followers (existing = { edges: [] }, { readField }) {
          const fragments = existing as NodeWithEdges<UserFollow>

          const newEdges = fragments.edges.filter(edge => readField('id', edge.node) !== data.id)

          return {
            ...fragments,
            edges: newEdges
          }
        }
      }
    })

    if (me == null) return

    const myCachedId = cache.identify(me)

    cache.modify({
      id: myCachedId,
      fields: {
        followingCount (existing = 0) {
          return (existing as number) - 1
        },

        followers (existing = { edges: [] }, { readField }) {
          const fragments = existing as NodeWithEdges<UserFollow>

          const newEdges = fragments.edges.filter(edge => readField('id', edge.node) !== data.id)

          return {
            ...fragments,
            edges: newEdges
          }
        },

        following (existing = { edges: [] }, { readField }) {
          const fragments = existing as NodeWithEdges<UserFollow>
          const newEdges = fragments.edges.filter(edge => readField('id', edge.node) !== data.id)

          return {
            ...fragments,
            edges: newEdges
          }
        }
      }
    })
  }

  const unfollow = (input: UnfollowUserInput) => {
    return wrapQuery(
      unfollowInner({
        variables: { input },
        update: (cache, { data }) => { handleUpdateCache(cache, data, input) }
      })
    )
  }

  return { unfollow }
}