import { gql } from '@/generated'

export const UPSERT_FRAGRANCE_REVIEW_MUTATION = gql(/* GraphQL */ `
  mutation UpsertFragranceReview(
    $input: UpsertFragranceReviewInput!
  ) {
    upsertFragranceReview(input: $input) {
      ...FragranceReviewSummary
    }
  }
`)

export const DELETE_FRAGRANCE_REVIEW_MUTATION = gql(/* GraphQL */ `
  mutation DeleteFragranceReview(
    $input: DeleteFragranceReviewInput!
  ) {
    deleteFragranceReview(input: $input) {
      ...FragranceReviewSummary
    }
  }
`)

export const VOTE_ON_REVIEW_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnReview(
    $input: VoteOnReviewInput!
  ) {
    voteOnReview(input: $input) {
      id
    }
  }
`)

export const CREATE_REVIEW_REPORT_MUTATION = gql(/* GraphQL */ `
  mutation CreateReviewReport(
    $input: CreateReviewReportInput!
  ) {
    createReviewReport(input: $input) {
      id
    }
  }
`)
