import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { type ControlledPaginationInput } from '@/generated/graphql'
import { flatten } from '@/common/pagination'
import { COLLECTION_ITEMS_QUERY } from '../graphql/queries'

const useCollectionItems = (
  collectionId: number,
  input?: ControlledPaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(COLLECTION_ITEMS_QUERY, {
    variables: { collectionId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = useCallback(() => {
    if (data?.collection == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const { hasNextPage, endCursor } = data.collection.items.pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const variables = {
      collectionId,
      input: { after: endCursor }
    }

    void fetchMore({ variables })
  }, [collectionId, data, networkStatus, fetchMore])

  const collections = useMemo(() => flatten(data?.collection.items ?? []), [data?.collection.items])

  return {
    data: collections,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    loadMore,
    refetch
  }
}

export default useCollectionItems
