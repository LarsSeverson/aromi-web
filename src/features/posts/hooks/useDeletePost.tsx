import { useMutation } from '@apollo/client/react'
import { DELETE_POST_MUTATION } from '../graphql/mutations'
import type { DeletePostInput, DeletePostMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'

export const useDeletePost = () => {
  const [mutation] = useMutation(DELETE_POST_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<DeletePostMutation>
  ) => {
    const deletedPost = data?.deletePost
    if (deletedPost == null) return

    const postId = deletedPost.id
    const cachedPostId = cache.identify({ __typename: 'Post', id: postId })
    cache.evict({ id: cachedPostId })
    cache.gc()
  }

  const deletePost = (input: DeletePostInput) => {
    return wrapQuery(
      mutation({
        variables: { input },
        update (cache, { data }) {
          handleUpdateCache(cache, data)
        }
      })
    )
  }

  return { deletePost }
}