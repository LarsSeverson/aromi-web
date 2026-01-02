import { useMutation } from '@apollo/client/react'
import { UPDATE_POST_COMMENT_MUTATION } from '../graphql/mutations'
import type { UpdatePostCommentInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useUpdatePostComment = () => {
  const [mutation] = useMutation(UPDATE_POST_COMMENT_MUTATION)

  const updatePostComment = (input: UpdatePostCommentInput) => {
    return wrapQuery(
      mutation({
        variables: { input }
      })
    )
  }

  return { updatePostComment }
}