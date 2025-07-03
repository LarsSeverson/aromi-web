import { CREATE_FRAGRANCE_COLLECTION_MUTATION } from '@/graphql/mutations/CollectionMutations'
import { useMutation } from '@apollo/client'

export const useCreateFragranceCollection = () => {
  const [
    createFragranceCollection,
    { data, loading, error }
  ] = useMutation(CREATE_FRAGRANCE_COLLECTION_MUTATION)

  return {
    data,
    loading,
    error,

    createFragranceCollection
  }
}
