import { gql } from '@/generated'

export const ME_FRAGMENT = gql(/* GraphQL */ `
  fragment Me on User {
    id
    username
    email

    followerCount
    followingCount

    avatar {
      ...AllAsset
    }
  }
`)

export const USER_PREVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment UserPreview on User {
    id
    username

    followerCount
    followingCount
    relationship

    avatar {
      ...AllAsset
    }
  }
`)

export const ALL_USER_FOLLOW_FRAGMENT = gql(/* GraphQL */ `
  fragment AllUserFollow on UserFollow {
    id
    user {
      ...UserPreview
    }
  }
`)
