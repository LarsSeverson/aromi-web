import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { type PaginationInput } from '@/generated/graphql'
import { USER_COLLECTIONS_QUERY } from '@/graphql/queries/UserQueries'
import { flatten } from '@/common/pagination'

const useUserCollections = (
  userId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(USER_COLLECTIONS_QUERY, {
    variables: { userId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = useCallback(() => {
    if (data?.user == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const { hasNextPage, endCursor } = data.user.collections.pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const variables = {
      userId,
      input: { after: endCursor }
    }

    void fetchMore({ variables })
  }, [userId, data, networkStatus, fetchMore])

  const collections = useMemo(() => flatten(data?.user?.collections ?? []), [data?.user?.collections])

  return {
    data: collections,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    loadMore,
    refetch
  }
}

export default useUserCollections
