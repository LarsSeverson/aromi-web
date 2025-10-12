import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_COLLECTION_HAS_FRAGRANCE_QUERY } from '../graphql/queries'

export const useFragranceCollectionHasFragrance = (collectionId: string, fragranceId: string) => {
  const { data, loading: isLoading, error } = useQuery(FRAGRANCE_COLLECTION_HAS_FRAGRANCE_QUERY, {
    variables: { collectionId, fragranceId }
  })

  const hasFragrance = data?.fragranceCollection.hasFragrance ?? false

  return {
    hasFragrance,

    isLoading,
    error
  }
}
