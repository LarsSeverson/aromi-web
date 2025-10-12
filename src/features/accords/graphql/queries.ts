import { gql } from '@/generated'

export const ACCORD_QUERY = gql(/* GraphQL */`
  query AccordQuery(
    $id: ID!
  ) {
    accord(id: $id) {
      ...AllAccord
    }
  }
`)

export const ACCORDS_QUERY = gql(/* GraphQL */`
  query AccordsQuery(
    $input: AccordPaginationInput
  ) {
    accords(input: $input) {
      edges {
        node {
          ...AllAccord 
        }
      }
      pageInfo {
        ...AllPageInfo
      }
    }
  }
`)

export const SEARCH_ACCORDS_QUERY = gql(/* GraphQL */`
  query SearchAccordsQuery(
    $input: SearchInput
  ) {
    searchAccords(input: $input) {
      edges {
        node {
          ...AllAccord 
        }
        offset
      } 
      pageInfo {
        ...AllSearchPageInfo
      }
    }
  }
`)
