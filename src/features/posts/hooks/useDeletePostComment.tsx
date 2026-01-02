import { useMutation } from '@apollo/client/react'
import { DELETE_POST_COMMENT_MUTATION } from '../graphql/mutations'
import type { DeletePostCommentInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useDeletePostComment = () => {
  const [mutation] = useMutation(DELETE_POST_COMMENT_MUTATION)

  const deletePostComment = (input: DeletePostCommentInput) => {
    return wrapQuery(
      mutation({
        variables: { input }
      })
    )
  }

  return { deletePostComment }
}