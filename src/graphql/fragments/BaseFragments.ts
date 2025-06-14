import { gql } from '@/generated'

export const PageInfoFragment = gql(/* GraphQL */`
  fragment PageInfoBase on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`)

export const AuditFragment = gql(/* GraphQL */`
  fragment AuditBase on Audit {
    createdAt
    updatedAt
    deletedAt
  }
`)
