import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_REVIEW_MUTATION } from '../graphql/mutations'
import type { CreateFragranceReviewInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { MY_FRAGRANCE_REVIEW_FRAGMENT } from '../graphql/fragments'

export const useCreateFragranceReview = () => {
  const [createReviewInner] = useMutation(CREATE_FRAGRANCE_REVIEW_MUTATION)

  const createFragranceReview = (input: CreateFragranceReviewInput) => {
    return wrapQuery(
      createReviewInner({
        variables: { input },
        update (cache, { data }) {
          const newReview = data?.createFragranceReview
          if (newReview == null) return

          const cachedFragranceId = cache.identify({
            __typename: 'Fragrance',
            id: input.fragranceId
          })

          cache.writeFragment({
            id: cachedFragranceId,
            fragment: MY_FRAGRANCE_REVIEW_FRAGMENT,
            fragmentName: 'MyFragranceReview',
            data: { id: input.fragranceId, myReview: newReview },
            broadcast: false
          })
        }
      })
    )
  }

  return {
    createFragranceReview
  }
}