import { useQuery } from '@apollo/client/react'
import { USER_QUERY } from '../graphql/queries'

export const useUser = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(USER_QUERY, { variables: { id } })

  const user = data?.user

  return {
    user,
    isLoading,
    error
  }
}
