import { useMemo } from 'react'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { type PaginationInput } from '../../../generated/graphql'
import { SUGGESTED_FRAGRANCES_QUERY } from '@/features/fragrance/graphql/queries'
import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { ResultAsync } from 'neverthrow'

const useSuggestedFragrances = (
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SUGGESTED_FRAGRANCES_QUERY, {
    variables: { input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrances.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const variables = {
      input: { after: endCursor }
    }

    return ResultAsync
      .fromPromise(
        fetchMore({ variables }),
        error => error as ApolloError
      )
      .map(result => result.data.fragrances)
  }

  const fragrances = useMemo(() => flatten(data?.fragrances ?? []), [data])

  return {
    data: fragrances,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    loadMore,
    refetch
  }
}

export default useSuggestedFragrances
