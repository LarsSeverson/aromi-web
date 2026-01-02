import type { PostCommentPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { POST_COMMENT_REPLIES_QUERY } from '../graphql/queries'
import { noRes } from '@/utils/error'
import { flattenConnections } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const usePostCommentReplies = (parentId: string, input?: PostCommentPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(POST_COMMENT_REPLIES_QUERY, { variables: { parentId, input } })

  const loadMore = () => {
    const endCursor = data?.postComment.comments.pageInfo.endCursor

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

  const replies = useMemo(
    () => flattenConnections(data?.postComment.comments ?? []),
    [data?.postComment.comments]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.postComment.comments.pageInfo)

  return {
    replies,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}