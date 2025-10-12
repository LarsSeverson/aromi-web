import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_COLLECTION_QUERY } from '../graphql/queries'

const useFragranceCollection = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(FRAGRANCE_COLLECTION_QUERY, { variables: { id } })

  return {
    collection: data?.fragranceCollection,
    isLoading,
    error
  }
}

export default useFragranceCollection
