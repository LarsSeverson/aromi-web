import { gql } from '@/generated'

export const LOG_FRAGRANCE_VIEW_MUTATION = gql(/* GraphQL */`
  mutation LogFragranceView(
    $input: LogFragranceViewInput!
  ) {
    logFragranceView(input: $input)
  }
`)

export const CREATE_FRAGRANCE_REVIEW_MUTATION = gql(/* GraphQL */`
  mutation CreateFragranceReview(
    $input: CreateFragranceReviewInput!
  ) {
    createFragranceReview(input: $input) {
      ...FragranceReviewSummary
    }
  }
`)

export const VOTE_ON_FRAGRANCE_MUTATION = gql(/* GraphQL */`
  mutation VoteOnFragrance(
    $input: VoteOnFragranceInput!
  ) {
    voteOnFragrance(input: $input) {
      id
    }
  }
`)

export const VOTE_ON_REVIEW_MUTATION = gql(/* GraphQL */`
  mutation VoteOnReview(
    $input: VoteOnReviewInput!
  ) {
    voteOnReview(input: $input) {
      id
    }
  }
`)

export const VOTE_ON_TRAIT_MUTATION = gql(/* GraphQL */`
  mutation VoteOnTrait(
    $input: VoteOnTraitInput!
  ) {
    voteOnTrait(input: $input) {
      ...FragranceTraitSummary
    }
  }
`)

export const VOTE_ON_ACCORD_MUTATION = gql(/* GraphQL */`
  mutation VoteOnAccord(
    $input: VoteOnAccordInput!
  ) {
    voteOnAccord(input: $input) {
      ...FragranceAccordSummary
    }
  }
`)

export const VOTE_ON_NOTE_MUTATION = gql(/* GraphQL */`
  mutation VoteOnNote(
    $input: VoteOnNoteInput!
  ) {
    voteOnNote(input: $input) {
      ...FragranceNoteSummary
    }
  }
`)

export const CREATE_FRAGRANCE_REPORT_MUTATION = gql(/* GraphQL */`
  mutation CreateFragranceReport(
    $input: CreateFragranceReportInput!
  ) {
    createFragranceReport(input: $input) {
      id
    }
  }
`)

export const CREATE_REVIEW_REPORT_MUTATION = gql(/* GraphQL */`
  mutation CreateReviewReport(
    $input: CreateReviewReportInput!
  ) {
    createReviewReport(input: $input) {
      id
    }
  }
`)
