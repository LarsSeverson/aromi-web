import { gql } from '@/generated'

export const CREATE_FRAGRANCE_COLLECTION_MUTATION = gql(/* GraphQL */ `
  mutation CreateFragranceCollection(
    $input: CreateFragranceCollectionInput!
  ) {
    createFragranceCollection(input: $input) {
      ...FragranceCollectionSummary
    }
  }
`)

export const CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION = gql(/* GraphQL */ `
  mutation CreateFragranceCollectionItem(
    $input: CreateFragranceCollectionItemInput!
  ) {
    createFragranceCollectionItem(input: $input) {
      ...FragranceCollectionItemSummary
    }
  }
`)

export const MOVE_FRAGRANCE_COLLECTION_ITEM_MUTATION = gql(/* GraphQL */ `
  mutation MoveFragranceCollectionItem(
    $input: MoveFragranceCollectionItemInput!
  ) {
    moveFragranceCollectionItem(input: $input) {
      ...FragranceCollectionItemSummary
    }
  }
`)

export const DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION = gql(/* GraphQL */ `
  mutation DeleteFragranceCollectionItem(
    $input: DeleteFragranceCollectionItemInput!
  ) {
    deleteFragranceCollectionItem(input: $input) {
      ...FragranceCollectionItemSummary
    }
  }
`)
