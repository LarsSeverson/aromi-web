import { useQuery } from '@apollo/client'
import { USER_QUERY } from '../graphql/queries'

const useUser = (
  id: number
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(USER_QUERY, {
    variables: { id }
  })

  const user = data?.user

  return {
    data: user,
    loading,
    error,

    refetch
  }
}

export default useUser
