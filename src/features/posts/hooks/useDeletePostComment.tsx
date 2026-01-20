import { useMutation } from '@apollo/client/react'
import { DELETE_POST_COMMENT_MUTATION } from '../graphql/mutations'
import type { DeletePostCommentInput, DeletePostCommentMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'

export const useDeletePostComment = () => {
  const [mutation] = useMutation(DELETE_POST_COMMENT_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<DeletePostCommentMutation>
  ) => {
    const deletedComment = data?.deletePostComment
    if (deletedComment == null) return

    const postId = cache.identify(deletedComment.post)
    if (postId == null) return

    const commentId = cache.identify(deletedComment)
    const parentId = deletedComment.parent == null ? null : cache.identify(deletedComment.parent)
    const idToModify = parentId ?? postId

    cache.modify({
      id: idToModify,
      fields: {
        commentCount: (existingCount = 0) => existingCount - 1
      }
    })

    if (idToModify !== postId) {
      cache.modify({
        id: postId,
        fields: {
          commentCount: (existingCount = 0) => existingCount - 1
        }
      })
    }

    cache.evict({ id: commentId })
    cache.gc()
  }

  const deletePostComment = (input: DeletePostCommentInput) => {
    return wrapQuery(
      mutation({
        variables: { input },
        update: (cache, { data }) => {
          handleUpdateCache(cache, data)
        }
      })
    )
  }

  return { deletePostComment }
}