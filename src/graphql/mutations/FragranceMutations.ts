import { gql } from '@/generated'

export const LOG_FRAGRANCE_VIEW_MUTATION = gql(/* GraphQL */`
  mutation LogFragranceView (
    $input: LogFragranceViewInput!
  ) {
    logFragranceView(input: $input)
  }
`)
