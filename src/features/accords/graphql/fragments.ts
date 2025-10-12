import { gql } from '@/generated'

export const ALL_ACCORD_FRAGMENT = gql(/* GraphQL */`
  fragment AllAccord on Accord {
    id
    name
    color
  }
`)