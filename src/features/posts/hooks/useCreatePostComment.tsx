import { useMutation } from '@apollo/client/react'
import { CREATE_POST_COMMENT_MUTATION } from '../graphql/mutations'
import type { CreatePostCommentInput, CreatePostCommentMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache, Reference } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'

export const useCreatePostComment = () => {
  const [mutation] = useMutation(CREATE_POST_COMMENT_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<CreatePostCommentMutation>
  ) => {
    const newComment = data?.createPostComment
    if (newComment == null) return

    const postId = cache.identify(newComment.post)
    if (postId == null) return

    const parentId = newComment.parent == null ? null : cache.identify(newComment.parent)

    const idToModify = parentId ?? postId

    cache.modify({
      id: idToModify,

      fields: {
        comments: (existingComments = { edges: [] }, { toReference }) => {
          const fragments = existingComments as NodeWithEdges<Reference>

          const newEdge = {
            __typename: 'PostCommentEdge',
            node: toReference(newComment),
            cursor: ''
          }

          const oldEdges = fragments.edges
          const newEdges = [newEdge, ...oldEdges]

          return {
            ...fragments,
            edges: newEdges
          }
        },

        commentCount: (existingCount = 0) => (existingCount as number) + 1
      }
    })

    if (idToModify !== postId) {
      cache.modify({
        id: postId,
        fields: {
          commentCount: (existingCount = 0) => (existingCount as number) + 1
        }
      })
    }
  }

  const createPostComment = (input: CreatePostCommentInput) => {
    return wrapQuery(
      mutation({
        variables: { input },
        update: (cache, { data }) => {
          handleUpdateCache(cache, data)
        }
      })
    )
  }

  return { createPostComment }
}