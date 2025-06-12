import { gql } from '@/generated'

export const FragranceFragment = gql(/* GraphQL */`
  fragment FragranceSummary on Fragrance {
    id
    brand
    name
    votes {
      voteScore
      likesCount
      myVote
    }
    images(input: { first: 1 }) {
      ...FragranceImageConnection 
    }
  }
`)

export const FragranceImageFragment = gql(/* GraphQL */`
  fragment FragranceImageSummary on FragranceImage {
    id
    src
    bg
  }
`)

export const FragranceTraitFragment = gql(/* GraphQL */`
  fragment FragranceTraitSummary on FragranceTrait {
    type
    voteScore
    myVote
  }
`)

export const FragranceAccordFragment = gql(/* GraphQL */`
  fragment FragranceAccordSummary on FragranceAccord {
    id
    accordId
    name
    color
    isFill
    votes {
      voteScore
      likesCount
      dislikesCount
      myVote
    }
  }
`)

export const FragranceNoteFragment = gql(/* GraphQL */`
  fragment FragranceNoteSummary on FragranceNote {
    id
    noteId
    name
    layer
    isFill
    votes {
      voteScore
      likesCount
      dislikesCount
      myVote
    }
  }
`)

export const FragranceReviewFragment = gql(/* GraphQL */`
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
      id
      username
    }
  }
`)
