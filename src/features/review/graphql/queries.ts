import { gql } from '@/generated'

export const FRAGRANCE_REVIEWS_QUERY = gql(/* GraphQL */ `
  query FragranceReviews(
    $fragranceId: Int!
    $input: VotePaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      reviews(input: $input) {
        ...FragranceReviewConnection
      }
    }
  }
`)

export const MY_FRAGRANCE_REVIEW_QUERY = gql(/* GraphQL */ `
  query MyFragranceReview(
    $fragranceId: Int!
  ) {
    fragrance(id: $fragranceId) {
      ...FragranceSummary
      myReview {
        ...FragranceReviewSummary
      }
    }
  }
`)
