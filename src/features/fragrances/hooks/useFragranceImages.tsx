import { FRAGRANCE_IMAGES_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'

export const useFragranceImages = (fragranceId: string) => {
  const { data, loading, error } = useQuery(FRAGRANCE_IMAGES_QUERY, { variables: { fragranceId } })

  const images = data?.fragrance.images ?? []

  return {
    images,
    isLoading: loading,
    error
  }
}
