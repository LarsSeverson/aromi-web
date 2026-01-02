import type { SearchInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { SEARCH_POST_COMMENTS_QUERY } from '../graphql/queries'
import { flattenConnections } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchPostComments = (postId: string, input?: SearchInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(SEARCH_POST_COMMENTS_QUERY, { variables: { postId, input } })

  const loadMore = () => {
    const endOffset = data?.post.searchComments.pageInfo.endOffset

    if (endOffset == null) return noRes

    const variables = {
      postId,
      input: {
        ...input,
        pagination: {
          ...(input?.pagination ?? {}),
          after: endOffset
        }
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.post.searchComments))
  }

  const comments = useMemo(
    () => flattenConnections(data?.post.searchComments ?? []),
    [data?.post.searchComments]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.post.searchComments.pageInfo)

  return {
    comments,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}