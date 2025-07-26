import { gql } from '@/generated'

export const FragranceCollectionFragment = gql(/* GraphQL */ `
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

export const FragranceCollectionItemFragment = gql(/* GraphQL */ `
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

export const FragranceCollectionConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceCollectionConnection on FragranceCollectionConnection {
    edges {
      node {
        ...FragranceCollectionSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)

export const FragranceCollectionItemConnectionFragment = gql(/* GraphQL */ `
  fragment FragranceCollectionItemConnection on FragranceCollectionItemConnection {
    edges {
      node {
        ...FragranceCollectionItemSummary
      }
    }
    pageInfo {
      ...PageInfoBase
    }
  }
`)
