import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_QUERY } from '../graphql/queries'

export const useFragrance = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(FRAGRANCE_QUERY, { variables: { id } })

  return {
    fragrance: data?.fragrance,
    isLoading,
    error
  }
}