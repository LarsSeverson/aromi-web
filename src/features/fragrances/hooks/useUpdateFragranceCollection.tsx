import { useMutation } from '@apollo/client/react'
import { UPDATE_FRAGRANCE_COLLECTION_MUTATION } from '../graphql/mutations'
import { wrapQuery } from '@/utils/util'
import type { UpdateFragranceCollectionInput } from '@/generated/graphql'

export const useUpdateFragranceCollection = () => {
  const [updateInner] = useMutation(UPDATE_FRAGRANCE_COLLECTION_MUTATION)

  const updateCollection = (input: UpdateFragranceCollectionInput) => {
    return wrapQuery(
      updateInner({ variables: { input } })
    )
  }

  return { updateCollection }
}