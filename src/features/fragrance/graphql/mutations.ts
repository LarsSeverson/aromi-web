import { gql } from '@/generated'

export const CREATE_FRAGRANCE_REPORT_MUTATION = gql(/* GraphQL */ `
  mutation CreateFragranceReport(
    $input: CreateFragranceReportInput!
  ) {
    createFragranceReport(input: $input) {
      id
    }
  }
`)

export const LOG_FRAGRANCE_VIEW_MUTATION = gql(/* GraphQL */ `
  mutation LogFragranceView(
    $input: LogFragranceViewInput!
  ) {
    logFragranceView(input: $input)
  }
`)

export const VOTE_ON_FRAGRANCE_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnFragrance(
    $input: VoteOnFragranceInput!
  ) {
    voteOnFragrance(input: $input) {
      id
    }
  }
`)

export const VOTE_ON_ACCORD_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnAccord(
    $input: VoteOnAccordInput!
  ) {
    voteOnAccord(input: $input) {
      ...FragranceAccordSummary
    }
  }
`)

export const VOTE_ON_NOTE_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnNote(
    $input: VoteOnNoteInput!
  ) {
    voteOnNote(input: $input) {
      ...FragranceNoteSummary
    }
  }
`)

export const VOTE_ON_TRAIT_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnTrait(
    $input: VoteOnTraitInput!
  ) {
    voteOnTrait(input: $input) {
      ...FragranceTraitSummary
    }
  }
`)
