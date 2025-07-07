import { DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '@/graphql/mutations/CollectionMutations'
import { useMutation } from '@apollo/client'

export const useDeleteCollectionItem = () => {
  const [
    deleteFragranceCollectionItem,
    { data, loading, error }
  ] = useMutation(DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  return {
    data,
    loading,
    error,

    deleteFragranceCollectionItem
  }
}
