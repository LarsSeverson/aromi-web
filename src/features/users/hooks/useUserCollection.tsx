import { useQuery } from '@apollo/client/react'
import { USER_COLLECTION_QUERY } from '../graphql/queries'

export const useUserCollection = (userId: string, collectionId: string) => {
  const { data, loading: isLoading, error } = useQuery(USER_COLLECTION_QUERY, { variables: { userId, collectionId } })

  const collection = data?.user.collection

  return {
    collection,
    isLoading,
    error
  }
}