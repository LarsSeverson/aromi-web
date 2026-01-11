import { gql } from '@/generated'

export const POST_PREVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment PostPreview on Post { 
    id
    type

    title
    content

    user {
      ...UserPreview
    }

    fragrance {
      ...FragrancePreview
    }

    assets {
      ...AllPostAsset
    }

    commentCount

    votes {
      ...AllVoteInfo
    }

    createdAt
  }
`)

export const ALL_POST_ASSET_FRAGMENT = gql(/* GraphQL */ `
  fragment AllPostAsset on PostAsset { 
    id
    displayOrder
    asset {
      ...AllAsset
    }
    post {
      id
    }
  }
`)

export const POST_COMMENT_SHELL_FRAGMENT = gql(/* GraphQL */ `
  fragment PostCommentShell on PostComment { 
    id
    depth
    content

    user {
      ...UserPreview
    }
  }
`)

export const POST_COMMENT_PREVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment PostCommentPreview on PostComment { 
    id

    depth
    content

    parent {
      ...PostCommentShell
    }

    user {
      ...UserPreview
    }

    assets {
      ...AllPostCommentAsset
    }

    createdAt
  }
`)

export const ALL_POST_COMMENT_ASSET_FRAGMENT = gql(/* GraphQL */ `
  fragment AllPostCommentAsset on PostCommentAsset { 
    id
    displayOrder
    asset {
      ...AllAsset
    }
  }
`)

export const POST_VOTE_INFO_FRAGMENT = gql(/* GraphQL */ `
  fragment PostVoteInfo on Post {
    id
    votes {
      ...AllVoteInfo
    }
  } 
`)