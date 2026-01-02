import { gql } from '@/generated'

export const CREATE_POST_MUTATION = gql(/* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      ...PostPreview
    }
  }
`)

export const UPDATE_POST_MUTATION = gql(/* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      ...PostPreview
    }
  }
`)

export const DELETE_POST_MUTATION = gql(/* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
      ...PostPreview
    } 
  }
`)

export const VOTE_ON_POST_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnPost($input: VoteOnPostInput!) {
    voteOnPost(input: $input) {
      ...PostPreview
    }
  }
`)

export const CREATE_POST_COMMENT_MUTATION = gql(/* GraphQL */ `
  mutation CreatePostComment($input: CreatePostCommentInput!) {
    createPostComment(input: $input) {
      ...PostCommentPreview
    }
  }
`)

export const UPDATE_POST_COMMENT_MUTATION = gql(/* GraphQL */ `
  mutation UpdatePostComment($input: UpdatePostCommentInput!) {
    updatePostComment(input: $input) {
      ...PostCommentPreview
    }
  }
`)

export const DELETE_POST_COMMENT_MUTATION = gql(/* GraphQL */ `
  mutation DeletePostComment($input: DeletePostCommentInput!) {
    deletePostComment(input: $input) {
      ...PostCommentPreview
    }
  }
`)
