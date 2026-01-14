import type { PostCommentPaginationInput } from '@/generated/graphql'
import { noRes } from '@/utils/error'
import { validatePagination, flattenConnections, flattenTopLevelConnection } from '@/utils/pagination'
import { POST_COMMENTS_WITH_COMMENTS_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const usePostCommentsWithComments = (postId: string, input?: PostCommentPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(POST_COMMENTS_WITH_COMMENTS_QUERY, { variables: { postId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.post.comments.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      postId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.post.comments))
  }

  const comments = useMemo(
    () => flattenTopLevelConnection(data?.post.comments ?? []),
    [data?.post.comments]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.post.comments.pageInfo)

  return {
    comments,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}