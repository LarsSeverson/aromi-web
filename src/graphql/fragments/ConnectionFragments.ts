import { gql } from '@/generated'

export const FragranceConnectionFragment = gql(/* GraphQL */`
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

export const FragranceImageConnectionFragment = gql(/* GraphQL */`
  fragment FragranceImageConnection on FragranceImageConnection {
    edges {
      node {
        ...FragranceImageSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)

export const FragranceAccordConnectionFragment = gql(/* GraphQL */`
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

export const FragranceNoteConnectionFragment = gql(/* GraphQL */`
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

export const FragranceReviewConnectionFragment = gql(/* GraphQL */`
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
