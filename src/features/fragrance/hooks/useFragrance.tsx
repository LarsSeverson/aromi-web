import { flatten } from '@/common/pagination'
import { FRAGRANCE_QUERY } from '@/features/fragrance/graphql/queries'
import { useQuery } from '@apollo/client'

const useFragrance = (
  id: number
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(FRAGRANCE_QUERY, {
    variables: { id }
  })

  const fragrance = flatten(data?.fragrance)

  return {
    data: fragrance,
    loading,
    error,

    refetch
  }
}

export default useFragrance
