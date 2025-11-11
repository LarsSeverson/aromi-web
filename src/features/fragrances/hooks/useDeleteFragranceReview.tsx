import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_REVIEW_MUTATION } from '../graphql/mutations'
import type { DeleteFragranceReviewInput, DeleteFragranceReviewMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'

export const useDeleteFragranceReview = () => {
  const [deleteReviewInner] = useMutation(DELETE_FRAGRANCE_REVIEW_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<DeleteFragranceReviewMutation>
  ) => {
    const deletedReview = data?.deleteFragranceReview
    if (deletedReview == null) return

    const reviewId = deletedReview.id
    const fragranceId = deletedReview.fragrance.id

    const cachedFragranceId = cache.identify({ __typename: 'Fragrance', id: fragranceId })
    cache.modify({
      id: cachedFragranceId,
      fields: {
        myReview: () => null
      }
    })

    const cachedReviewId = cache.identify({ __typename: 'FragranceReview', id: reviewId })
    cache.evict({ id: cachedReviewId })

    cache.gc()
  }

  const deleteReview = (input: DeleteFragranceReviewInput) => {
    return wrapQuery(
      deleteReviewInner({
        variables: { input },
        update (cache, { data }) {
          handleUpdateCache(cache, data)
        }
      })
    )
  }

  return { deleteReview }
}