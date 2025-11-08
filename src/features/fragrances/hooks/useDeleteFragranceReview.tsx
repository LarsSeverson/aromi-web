import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_REVIEW_MUTATION } from '../graphql/mutations'
import type { DeleteFragranceReviewInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useDeleteFragranceReview = () => {
  const [deleteReviewInner] = useMutation(DELETE_FRAGRANCE_REVIEW_MUTATION)

  const deleteReview = (input: DeleteFragranceReviewInput) => {
    return wrapQuery(
      deleteReviewInner({
        variables: { input }
      })
    )
  }

  return { deleteReview }
}