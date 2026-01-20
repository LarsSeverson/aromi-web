import { useLazyQuery } from '@apollo/client/react'
import { POST_COMMENT_COMMENTS_QUERY } from '../graphql/queries'
import type { PostCommentPaginationInput } from '@/generated/graphql'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import React from 'react'
import { noRes } from '@/utils/error'

export interface UsePostCommentCommentsLazyOptions {
  parentId: string
  input?: PostCommentPaginationInput
}

export const usePostCommentCommentsLazy = (options: UsePostCommentCommentsLazyOptions) => {
  const { parentId, input } = options

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
    const pageInfo = data?.postComment.comments.pageInfo

    const validatedPagination = validatePagination(pageInfo, networkStatus)
    if (pageInfo != null && validatedPagination == null) return noRes

    const cursorInput = pageInfo == null
      ? {}
      : { after: validatedPagination }

    if (cursorInput == null) return noRes

    const variables = {
      parentId,
      input: {
        ...(input ?? {}),
        ...cursorInput
      }
    }

    if (!called) {
      return wrapQuery(query({ variables }))
    }

    return wrapQuery(fetchMore({ variables }))
  }

  const comments = React.useMemo(() => {
    return flattenConnections(data?.postComment.comments ?? [])
  }, [data?.postComment.comments])

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.postComment.comments?.pageInfo)

  return {
    comments,

    hasCalled: called,
    isLoading,
    isLoadingMore,
    hasMore,

    load,
    loadMore
  }
}