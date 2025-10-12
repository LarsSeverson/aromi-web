import { useQuery } from '@apollo/client/react'
import { BRAND_QUERY } from '../graphql/queries'

export const useBrand = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(BRAND_QUERY, { variables: { id } })

  return {
    brand: data?.brand,
    isLoading,
    error
  }
}