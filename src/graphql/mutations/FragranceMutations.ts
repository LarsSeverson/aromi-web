import { gql } from '@/generated'

export const LOG_FRAGRANCE_VIEW_MUTATION = gql(/* GraphQL */`
  mutation LogFragranceView (
    $input: LogFragranceViewInput!
  ) {
    logFragranceView(input: $input)
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

export const CREATE_FRAGRANCE_REPORT_MUTATION = gql(/* GraphQL */`
  mutation CreateFragranceReport(
    $input: CreateFragranceReportInput!
  ) {
    createFragranceReport(input: $input) {
      id
    }
  }
`)
