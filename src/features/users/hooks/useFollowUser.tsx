import type { FollowUserInput, FollowUserMutation, UserFollow } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { FOLLOW_USER_MUTATION } from '../graphql/mutations'
import type { ApolloCache } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'
import { useMyContext } from '../context/MyContext'

export const useFollowUser = () => {
  const [followInner] = useMutation(FOLLOW_USER_MUTATION)

  const { me } = useMyContext()

  const handleUpdateCache = (
    cache: ApolloCache,
    result: Nullable<FollowUserMutation>,
    input: FollowUserInput
  ) => {
    const data = result?.follow
    if (data == null) return

    const cachedUserId = cache.identify({ __typename: 'User', id: input.userId })

    cache.modify({
      id: cachedUserId,
      fields: {
        followerCount (existing = 0) {
          return (existing as number) + 1
        },

        followers (existing = { edges: [] }, { readField }) {
          const fragments = existing as NodeWithEdges<UserFollow>

          const newEdge = {
            __typename: 'UserFollowEdge',
            node: data,
            cursor: data.id
          }

          const isAlreadyFollowing = fragments.edges.some(edge => readField('id', edge.node) === data.id)
          if (isAlreadyFollowing) {
            return fragments
          }

          return {
            ...fragments,
            edges: [newEdge, ...(fragments?.edges ?? [])]
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
          return (existing as number) + 1
        },

        following (existing = { edges: [] }, { readField }) {
          const fragments = existing as NodeWithEdges<UserFollow>

          const newEdge = {
            __typename: 'UserFollowEdge',
            node: data,
            cursor: data.id
          }

          const isAlreadyFollowing = fragments.edges.some(edge => readField('id', edge.node) === data.id)
          if (isAlreadyFollowing) {
            return fragments
          }

          return {
            ...fragments,
            edges: [newEdge, ...(fragments?.edges ?? [])]
          }
        }
      }
    })
  }

  const follow = (input: FollowUserInput) => {
    return wrapQuery(
      followInner({
        variables: { input },
        update: (cache, { data }) => { handleUpdateCache(cache, data, input) }
      })
    )
  }

  return { follow }
}