import { MOVE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '@/graphql/mutations/CollectionMutations'
import { useMutation } from '@apollo/client'

export const useMoveFragranceCollectionItem = () => {
  const [
    moveFragranceCollectionItem,
    { data, loading, error }
  ] = useMutation(MOVE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  return {
    data,
    loading,
    error,

    moveFragranceCollectionItem
  }
}
