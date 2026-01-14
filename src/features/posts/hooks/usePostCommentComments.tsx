import type { PostCommentPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { POST_COMMENT_COMMENTS_QUERY } from '../graphql/queries'
import { noRes } from '@/utils/error'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const usePostCommentComments = (parentId: string, input?: PostCommentPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(POST_COMMENT_COMMENTS_QUERY, { variables: { parentId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.postComment.comments.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      parentId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.postComment.comments))
  }

  const comments = useMemo(
    () => flattenConnections(data?.postComment.comments ?? []),
    [data?.postComment.comments]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.postComment.comments.pageInfo)

  return {
    comments,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}