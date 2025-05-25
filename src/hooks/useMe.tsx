import { useAuthContext } from '@/contexts/AuthContext'
import { graphql } from '@/generated'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

export const ME_QUERY = graphql(/* GraphQL */`
  query MeQuery {
    me {
      id
      username
      email
    }
  }  
`)

export const useMe = () => {
  const { isAuthenticated } = useAuthContext()
  const { data, loading, error, refetch: refresh } = useQuery(ME_QUERY)

  useEffect(() => {
    void refresh()
  }, [isAuthenticated, refresh])

  return {
    me: data?.me,
    loading,
    error,
    refresh
  }
}
