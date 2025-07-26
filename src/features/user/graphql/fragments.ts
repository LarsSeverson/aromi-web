import { gql } from '@/generated'

export const UserFragment = gql(/* GraphQL */ `
  fragment UserSummary on User {
    id
    username
    email
    followerCount
    followingCount
    audit {
      ...AuditBase
    }
  }
`)
