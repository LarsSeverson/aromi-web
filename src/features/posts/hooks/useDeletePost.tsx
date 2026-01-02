import { useMutation } from '@apollo/client/react'
import { DELETE_POST_MUTATION } from '../graphql/mutations'
import type { DeletePostInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useDeletePost = () => {
  const [mutation] = useMutation(DELETE_POST_MUTATION)

  const deletePost = (input: DeletePostInput) => {
    return wrapQuery(
      mutation({
        variables: { input }
      })
    )
  }

  return { deletePost }
}