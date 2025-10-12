import { useQuery } from '@apollo/client/react'
import { USER_QUERY } from '../graphql/queries'

export const useUser = (id: string) => {
  const { data, loading, error } = useQuery(USER_QUERY, { variables: { id } })

  const user = data?.user

  return {
    data: user,
    loading,
    error
  }
}
