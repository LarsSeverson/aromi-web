import { gql } from '@/generated'

export const FragranceReviewFragment = gql(/* GraphQL */ `
  fragment FragranceReviewSummary on FragranceReview {
    id
    rating
    text
    votes {
      voteScore
      likesCount
      dislikesCount
      myVote
    }
    user {
      ...UserSummary
    }
    fragrance {
      ...FragranceSummary
    }
    audit {
      ...AuditBase
    }
  }
`)

export const FragranceReviewConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceReviewConnection on FragranceReviewConnection {
    edges {
      node {
        ...FragranceReviewSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)

export const MY_REVIEW_CACHE_FRAGMENT = gql(/* GraphQL */`
  fragment MyReviewFragment on Fragrance {
    id
    myReview {
      id
    }
  }  
`)
