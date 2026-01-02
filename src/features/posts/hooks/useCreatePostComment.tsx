import { useMutation } from '@apollo/client/react'
import { CREATE_POST_COMMENT_MUTATION } from '../graphql/mutations'
import type { CreatePostCommentInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreatePostComment = () => {
  const [mutation] = useMutation(CREATE_POST_COMMENT_MUTATION)

  const createPostComment = (input: CreatePostCommentInput) => {
    return wrapQuery(
      mutation({
        variables: { input }
      })
    )
  }

  return { createPostComment }
}