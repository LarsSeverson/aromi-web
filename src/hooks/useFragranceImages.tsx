import { flatten } from '@/common/pagination'
import { type PaginationInput } from '@/generated/graphql'
import { FRAGRANCE_IMAGES_QUERY } from '@/graphql/queries/FragranceQueries'
import { useQuery } from '@apollo/client'

const useFragranceImages = (
  fragranceId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(FRAGRANCE_IMAGES_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const images = flatten(data?.fragrance?.images ?? [])

  return {
    data: images,
    loading,
    error,

    refetch
  }
}

export default useFragranceImages
