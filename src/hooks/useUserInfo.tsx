import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type UserInfoQuery, type UserInfoQueryVariables } from '../generated/graphql'
import { useQuery } from '@apollo/client'
import { INVALID_ID, type QueryHookReturn } from '../common/util-types'

const USER_INFO_QUERY = graphql(/* GraphQL */`
  query UserInfo(
    $userId: Int!
  ) {
    user(id: $userId) {
      id
      username
      followers
      following
    }
  }
`)

const useUserInfo = (userId: number): QueryHookReturn<UserInfoQuery['user']> => {
  const variables = useMemo<UserInfoQueryVariables>(() => ({
    userId
  }), [userId])

  const { data, loading, error, refetch } = useQuery(USER_INFO_QUERY, {
    variables,
    skip: variables.userId === INVALID_ID
  })

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  return {
    data: data?.user,
    loading,
    error,
    refresh
  }
}

export default useUserInfo
