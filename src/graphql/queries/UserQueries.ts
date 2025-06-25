import { gql } from '@/generated'

export const MY_QUERY = gql(/* GraphQL */`
  query Me {
    me {
      ...UserSummary
    }
  }
`)

export const USER_QUERY = gql(/* GraphQL */`
  query User(
    $id: Int!
  ) {
    user(id: $id) {
      ...UserSummary
    }
  }
`)

export const USER_COLLECTIONS_QUERY = gql(/* GraphQL */`
  query UserCollections(
    $userId: Int!
    $fragranceId: Int
    $input: PaginationInput
  ) {
    user(id: $userId) {
      id
      collections(input: $input) {
        edges {
          node {
            ...FragranceCollectionSummary
            hasFragrance(fragranceId: $fragranceId)
          }
        } 
        pageInfo {
          ...PageInfoBase
        }
      }
    }
  }
`)

export const USER_LIKES_QUERY = gql(/* GraphQL */`
  query UserLikes(
    $userId: Int!
    $input: PaginationInput
  ) {
    user(id: $userId) {
      id
      likes(input: $input) {
        ...FragranceVoteConnection
      }
    }
  }
`)

export const USER_REVIEWS_QUERY = gql(/* GraphQL */`
  query UserReviews(
    $userId: Int!
    $input: PaginationInput
  ) {
    user(id: $userId) {
      id
      reviews(input: $input) {
        ...FragranceReviewConnection
      }
    }
  }
`)
