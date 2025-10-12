import { gql } from '@/generated'

export const ME_FRAGMENT = gql(/* GraphQL */ `
  fragment Me on User {
    id
    username
    email
    avatar {
      ...AllAsset
    }
  }
`)

export const USER_PREVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment UserPreview on User {
    id
    username
    avatar {
      ...AllAsset
    }
  }
`)
