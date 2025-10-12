import { gql } from '@/generated'

export const MY_QUERY = gql(/* GraphQL */ `
  query Me {
    me {
      ...Me
    }
  }
`)

export const USER_QUERY = gql(/* GraphQL */`
  query User(
    $id: ID!
  ) {
    user(id: $id) {
      ...UserPreview
    }
  }
`)

export const SEARCH_USERS_QUERY = gql(/* GraphQL */`
  query SearchUsers(
    $input: SearchInput
  ) {
    searchUsers(input: $input) {
      edges {
        node {
          ...UserPreview
        }
        offset
      }
      pageInfo {
        ...AllSearchPageInfo
      }
    }
  }
`)

export const USER_COLLECTION_QUERY = gql(/* GraphQL */`
  query UserCollection(
    $userId: ID!
    $collectionId: ID!
  ) {
    user(id: $userId) {
      ...UserPreview
      collection(id: $collectionId) {
        ...AllFragranceCollection
      }
    }
  }
`)

export const USER_COLLECTIONS_QUERY = gql(/* GraphQL */`
  query UserCollections(
    $userId: ID!
    $input: FragranceCollectionPaginationInput
  ) {
    user(id: $userId) {
      ...UserPreview
      collections(input: $input) {
        edges {
          node {
            ...AllFragranceCollection
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

export const USER_REVIEW_QUERY = gql(/* GraphQL */`
  query UserReview(
    $userId: ID!
    $reviewId: ID!
  ) {
    user(id: $userId) {
      ...UserPreview
      review(id: $reviewId) {
        ...AllFragranceReview
      }
    }
  }
`)

export const USER_REVIEWS_QUERY = gql(/* GraphQL */`
  query UserReviews(
    $userId: ID!
    $input: FragranceReviewPaginationInput
  ) {
    user(id: $userId) {
      ...UserPreview
      reviews(input: $input) {
        edges {
          node {
            ...AllFragranceReview
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