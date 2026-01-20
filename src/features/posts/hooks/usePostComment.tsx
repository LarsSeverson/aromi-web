import { useQuery } from '@apollo/client/react'
import { POST_COMMENT_QUERY } from '../graphql/queries'

export const usePostComment = (commentId: string) => {
  const {
    data,
    loading: isLoading,
    error,
    refetch
  } = useQuery(
    POST_COMMENT_QUERY,
    {
      variables: { id: commentId },
      fetchPolicy: 'cache-only'
    }
  )

  return {
    comment: data?.postComment,
    isLoading,
    error,
    refetch
  }
}