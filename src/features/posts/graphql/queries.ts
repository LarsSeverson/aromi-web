import { gql } from '@/generated'

export const POST_QUERY = gql(/* GraphQL */ `
  query Post($id: ID!) { 
    post(id: $id) {
      ...PostPreview
    }
  }
`)

export const POSTS_QUERY = gql(/* GraphQL */ `
  query Posts($input: PostPaginationInput) {
    posts(input: $input) {
      edges {
        node {
          ...PostPreview
        }
        cursor
      }

      pageInfo { 
        ...AllPageInfo
      }
    }
  }
`)

export const SEARCH_POSTS_QUERY = gql(/* GraphQL */ `
  query SearchPosts($input: SearchInput) {
    searchPosts(input: $input) {
      edges {
        node {
          ...PostPreview
        }
        offset
      }

      pageInfo {
        ...AllSearchPageInfo
      }
    }
  }
`)

export const POST_COMMENTS_QUERY = gql(/* GraphQL */ `
  query PostComments(
    $postId: ID!
    $input: PostCommentPaginationInput
  ) {
    post(id: $postId) {
      id
      comments(input: $input) {
        edges {
          node {
            ...PostCommentPreview
          }
          cursor
        }

        pageInfo {
          ...AllPageInfo
        }
      }
    }
  }
`)

export const SEARCH_POST_COMMENTS_QUERY = gql(/* GraphQL */ `
  query SearchPostComments(
    $postId: ID!
    $input: SearchInput
  ) {
    post(id: $postId) {
      searchComments(input: $input) {
        edges {
          node {
            ...PostCommentPreview
          }
          offset
        }

        pageInfo {
          ...AllSearchPageInfo
        }
      }
    }
  }
`)

export const POST_COMMENT_COMMENTS_QUERY = gql(/* GraphQL */ `
  query PostCommentReplies(
    $parentId: ID!
    $input: PostCommentPaginationInput
  ) {
    postComment(id: $parentId) { 
      id
      comments(input: $input) {
        edges {
          node {
            ...PostCommentPreview
          }
          cursor
        }

        pageInfo {
          ...AllPageInfo
        }
      }
    }
  }
`)