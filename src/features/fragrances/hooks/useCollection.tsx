import { flatten } from '@/utils/pagination'
import { COLLECTION_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useCollection = (
  id: number
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(COLLECTION_QUERY, { variables: { id } })

  const collection = flatten(data?.collection)

  return {
    data: collection,
    loading,
    error,

    refetch
  }
}

export default useCollection
