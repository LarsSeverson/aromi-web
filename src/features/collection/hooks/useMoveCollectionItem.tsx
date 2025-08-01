import { MOVE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useMoveCollectionItem = () => {
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
