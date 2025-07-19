import { gql } from '@/generated'

export const FragranceFragment = gql(/* GraphQL */`
  fragment FragranceSummary on Fragrance {
    id
    brand
    name
    votes {
      voteScore
      likesCount
      dislikesCount
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
    width
    height
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
    audit {
      ...AuditBase
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
    thumbnail
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

export const FragranceCollectionFragment = gql(/* GraphQL */`
  fragment FragranceCollectionSummary on FragranceCollection {
    id
    name
    user {
      id
      username
    }
    items(input: { first: 4 }) {
      ...FragranceCollectionItemConnection
    }
    audit {
      ...AuditBase
    }
  }
`)

export const FragranceCollectionItemFragment = gql(/* GraphQL */`
  fragment FragranceCollectionItemSummary on FragranceCollectionItem {
    id
    rank
    fragrance {
      ...FragranceSummary
    }
    audit {
      ...AuditBase
    }
  }
`)

export const FragranceVoteFragment = gql(/* GraphQL */`
  fragment FragranceVoteSummary on FragranceVote {
    id
    vote
    fragrance {
      ...FragranceSummary
    }
  }
`)
