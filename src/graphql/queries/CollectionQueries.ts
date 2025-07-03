import { gql } from '@/generated'

export const COLLECTION_QUERY = gql(/* GraphQL */`
  query Collection(
    $id: Int!
  ) {
    collection(id: $id) {
      ...FragranceCollectionSummary
    }
  }
`)

export const COLLECTION_ITEMS_QUERY = gql(/* GraphQL */`
  query CollectionItems(
    $collectionId: Int!
    $input: ControlledPaginationInput 
  ) {
    collection(id: $collectionId) {
      id
      items(input: $input) {
        ...FragranceCollectionItemConnection
      }
    }
  }
`)
