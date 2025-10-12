import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_REVIEW_MUTATION } from '../graphql/mutations'
import type { CreateFragranceReviewInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import type { NodeWithEdges } from '@/utils/pagination'
import type { Reference } from '@apollo/client'

export const useCreateFragranceReview = () => {
  const [createReviewInner] = useMutation(CREATE_FRAGRANCE_REVIEW_MUTATION)

  const createFragranceReview = (input: CreateFragranceReviewInput) => {
    return wrapQuery(
      createReviewInner({
        variables: { input },
        update (cache, { data }) {
          const newReview = data?.createFragranceReview
          if (newReview == null) return

          cache.modify({
            id: cache.identify({
              __typename: 'Fragrance',
              id: input.fragranceId
            }),
            fields: {
              myReview: () => newReview,
              reviews: (existing = { edges: [] }, { toReference }) => {
                const typedExisting = existing as NodeWithEdges<Reference>

                const newEdge = {
                  __typename: 'FragranceReviewEdge',
                  node: toReference(newReview)
                }

                const oldEdges = typedExisting.edges

                return {
                  ...typedExisting,
                  edges: [...oldEdges, newEdge]
                }
              }
            }
          })
        }
      })
    )
  }

  return {
    createFragranceReview
  }
}