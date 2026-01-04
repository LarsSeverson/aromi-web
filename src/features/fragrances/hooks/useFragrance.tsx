import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_QUERY } from '../graphql/queries'
import { INVALID_ID } from '@/utils/util'

export const useFragrance = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(
    FRAGRANCE_QUERY,
    {
      variables: { id },
      skip: id === INVALID_ID
    }
  )

  return {
    fragrance: data?.fragrance,
    isLoading,
    error
  }
}