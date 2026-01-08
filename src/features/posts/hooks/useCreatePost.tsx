import { useMutation } from '@apollo/client/react'
import { CREATE_POST_MUTATION } from '../graphql/mutations'
import type { CreatePostInput, CreatePostMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache, Reference } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'
import { useMyContext } from '@/features/users'

export const useCreatePost = () => {
  const { me } = useMyContext()

  const [mutation] = useMutation(CREATE_POST_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<CreatePostMutation>
  ) => {
    const newPost = data?.createPost
    if (newPost == null) return

    cache.modify({
      fields: {
        posts: (existingPosts = { edges: [] }, { toReference }) => {
          const fragments = existingPosts as NodeWithEdges<Reference>

          const newEdge = {
            __typename: 'PostEdge',
            node: toReference(newPost),
            cursor: ''
          }

          const oldEdges = fragments.edges

          return {
            ...fragments,
            edges: [newEdge, ...oldEdges]
          }
        }
      }
    })

    if (me == null) return
    const meCacheId = cache.identify(me)

    cache.modify({
      id: meCacheId,
      fields: {
        posts: (existingPosts = { edges: [] }, { toReference }) => {
          const fragments = existingPosts as NodeWithEdges<Reference>

          const newEdge = {
            __typename: 'PostEdge',
            node: toReference(newPost),
            cursor: ''
          }

          const oldEdges = fragments.edges

          return {
            ...fragments,
            edges: [newEdge, ...oldEdges]
          }
        }
      }
    })
  }

  const createPost = (input: CreatePostInput) => {
    return wrapQuery(
      mutation({
        variables: { input },
        update: (cache, { data }) => {
          handleUpdateCache(cache, data)
        }
      })
    )
  }

  return { createPost }
}