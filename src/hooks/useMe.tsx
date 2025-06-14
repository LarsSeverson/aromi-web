import { useAuthContext } from '@/contexts/AuthContext'
import { MY_QUERY } from '@/graphql/queries/UserQueries'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

export const useMe = () => {
  const { isAuthenticated } = useAuthContext()
  const { data, loading, error, refetch } = useQuery(MY_QUERY)

  useEffect(() => {
    void refetch()
  }, [isAuthenticated, refetch])

  const me = data?.me

  return {
    me,
    loading,
    error,

    refetch
  }
}
