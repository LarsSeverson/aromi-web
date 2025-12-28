import { gql } from '@/generated'

export const MY_QUERY = gql(/* GraphQL */ `
  query Me {
    me {
      ...Me
    }
  }
`)

export const MY_COLLECTIONS_QUERY = gql(/* GraphQL */`
  query MyCollections(
    $input: FragranceCollectionPaginationInput
  ) {
    me {
      ...Me
      collections(input: $input) {
        edges {
          node {
            ...FragranceCollectionPreview
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

export const MY_COLLECTIONS_HAS_FRAGRANCE_QUERY = gql(/* GraphQL */`
  query MyCollectionsHasFragrance(
    $fragranceId: ID!
    $input: FragranceCollectionPaginationInput
  ) {
    me {
      ...Me
      collections(input: $input) { 
        edges {
          node {
            ...FragranceCollectionPreview
            hasFragrance(fragranceId: $fragranceId)
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

export const USER_FOLLOWERS_QUERY = gql(/* GraphQL */ `
  query UserFollowers(
    $userId: ID!
    $input: UserFollowPaginationInput
  ) {
    user(id: $userId) {
      ...UserPreview
      followers(input: $input) {
        edges {
          node {
            ...AllUserFollow
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

export const USER_FOLLOWING_QUERY = gql(/* GraphQL */ `
  query UserFollowing(
    $userId: ID!
    $input: UserFollowPaginationInput
  ) {
    user(id: $userId) {
      ...UserPreview
      following(input: $input) {
        edges {
          node {
            ...AllUserFollow
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

export const USER_LIKES_QUERY = gql(/* GraphQL */`
  query UserLikes(
    $userId: ID!
    $input: FragranceVotePaginationInput
  ) {
    user(id: $userId) {
      ...UserPreview

      likes(input: $input) {
        edges {
          node {
            ...AllFragranceVote
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