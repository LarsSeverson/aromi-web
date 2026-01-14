import { useLazyQuery } from '@apollo/client/react'
import { POST_COMMENT_COMMENTS_QUERY } from '../graphql/queries'
import type { PostCommentPaginationInput } from '@/generated/graphql'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import React from 'react'

export const useCommentsLazy = (parentId: string, input?: PostCommentPaginationInput) => {
  const [
    query,
    {
      data,
      loading: isLoading,
      networkStatus,
      fetchMore
    }
  ] = useLazyQuery(POST_COMMENT_COMMENTS_QUERY)

  const load = () => {
    return wrapQuery(query({ variables: { parentId, input } }))
      .map(data => flattenConnections(data.postComment.comments))
  }

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

    return wrapQuery(fetchMore({ variables }))
      .map(data => flattenConnections(data.postComment.comments))
  }

  const comments = React.useMemo(
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

    load,
    loadMore
  }
}