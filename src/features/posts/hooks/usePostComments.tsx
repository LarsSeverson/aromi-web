import type { PostCommentPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { POST_COMMENTS_QUERY } from '../graphql/queries'
import { noRes } from '@/utils/error'
import { flattenConnections } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const usePostComments = (postId: string, input?: PostCommentPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(POST_COMMENTS_QUERY, { variables: { postId, input } })

  const loadMore = () => {
    const endCursor = data?.post.comments.pageInfo.endCursor

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
    () => flattenConnections(data?.post.comments ?? []),
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