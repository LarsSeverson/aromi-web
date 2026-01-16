import { useLazyQuery } from '@apollo/client/react'
import { POST_COMMENT_COMMENTS_QUERY } from '../graphql/queries'
import type { PostCommentPaginationInput, PostCommentWithCommentsFragment } from '@/generated/graphql'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { flattenConnections, flattenTopLevelConnection, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import React from 'react'

export interface UsePostCommentCommentsLazyOptions {
  parentId: string
  input?: PostCommentPaginationInput
  parentData?: PostCommentWithCommentsFragment
}

export const usePostCommentCommentsLazy = (options: UsePostCommentCommentsLazyOptions) => {
  const { parentId, input, parentData } = options

  const [
    query,
    {
      data,
      loading: isLoading,
      networkStatus,
      called,
      fetchMore
    }
  ] = useLazyQuery(POST_COMMENT_COMMENTS_QUERY)

  const load = () => {
    return wrapQuery(query({ variables: { parentId, input } }))
      .map(data => flattenConnections(data.postComment.comments))
  }

  const loadMore = () => {
    const pageInfo = data?.postComment.comments.pageInfo ?? parentData?.comments?.pageInfo
    const endCursor = validatePagination(pageInfo, networkStatus)
    if (endCursor == null) return noRes

    const variables = {
      parentId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    if (!called) {
      return wrapQuery(query({ variables }))
        .map(data => flattenTopLevelConnection(data.postComment.comments))
    }

    return wrapQuery(fetchMore({ variables }))
      .map(data => flattenTopLevelConnection(data.postComment.comments))
  }

  const comments = React.useMemo(
    () => flattenTopLevelConnection(parentData?.comments ?? []),
    [parentData?.comments]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = called
    ? hasNextPage(data?.postComment.comments?.pageInfo)
    : hasNextPage(parentData?.comments?.pageInfo)

  return {
    comments,

    isLoading,
    isLoadingMore,
    hasMore,

    load,
    loadMore
  }
}