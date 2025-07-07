import { MY_QUERY } from '@/graphql/queries/UserQueries'
import { useQuery } from '@apollo/client'

export const useMe = () => {
  const { data, loading, error, refetch } = useQuery(MY_QUERY)

  const me = data?.me

  return {
    me,
    loading,
    error,

    refetch
  }
}
