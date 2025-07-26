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
    id
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
    thumbnail
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

export const FragranceVoteFragment = gql(/* GraphQL */`
  fragment FragranceVoteSummary on FragranceVote {
    id
    vote
    fragrance {
      ...FragranceSummary
    }
  }
`)

export const FragranceConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceConnection on FragranceConnection {
    edges {
      node {
        ...FragranceSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)

export const FragranceImageConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceImageConnection on FragranceImageConnection {
    edges {
      node {
        ...FragranceImageSummary
      }
    }
  }
`)

export const FragranceAccordConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceAccordConnection on FragranceAccordConnection {
    edges {
      node {
        ...FragranceAccordSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)

export const FragranceNoteConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceNoteConnection on FragranceNoteConnection {
    edges {
      node {
        ...FragranceNoteSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)

export const FragranceVoteConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceVoteConnection on FragranceVoteConnection {
    edges {
      node {
        ...FragranceVoteSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)
