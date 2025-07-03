import { CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '@/graphql/mutations/CollectionMutations'
import { useMutation } from '@apollo/client'

export const useCreateFragranceCollectionItem = () => {
  const [
    createFragranceCollectionItem,
    { data, loading, error }
  ] = useMutation(CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  return {
    data,
    loading,
    error,

    createFragranceCollectionItem
  }
}
