import { gql } from '@/generated'

export const PageInfoFragment = gql(/* GraphQL */`
  fragment PageInfoBase on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`)
