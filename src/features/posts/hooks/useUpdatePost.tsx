import { useMutation } from '@apollo/client/react'
import { UPDATE_POST_MUTATION } from '../graphql/mutations'
import type { UpdatePostInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useUpdatePost = () => {
  const [mutation] = useMutation(UPDATE_POST_MUTATION)

  const updatePost = (input: UpdatePostInput) => {
    return wrapQuery(
      mutation({
        variables: { input }
      })
    )
  }

  return { updatePost }
}