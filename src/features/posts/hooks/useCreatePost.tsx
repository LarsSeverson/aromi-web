import { useMutation } from '@apollo/client/react'
import { CREATE_POST_MUTATION } from '../graphql/mutations'
import type { CreatePostInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreatePost = () => {
  const [mutation] = useMutation(CREATE_POST_MUTATION)

  const createPost = (input: CreatePostInput) => {
    return wrapQuery(
      mutation({
        variables: { input }
      })
    )
  }

  return { createPost }
}