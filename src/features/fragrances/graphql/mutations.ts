import { gql } from '@/generated'

export const CREATE_FRAGRANCE_REVIEW_MUTATION = gql(/* GraphQL */ `
  mutation CreateFragranceReview(
    $input: CreateFragranceReviewInput!
  ) {
    createFragranceReview(input: $input) {
      ...AllFragranceReview
    }
  }
`)

export const CREATE_FRAGRANCE_COLLECTION_MUTATION = gql(/* GraphQL */ `
  mutation CreateFragranceCollection(
    $input: CreateFragranceCollectionInput!
  ) {
    createFragranceCollection(input: $input) {
      ...AllFragranceCollection
    }
  }
`)

export const DELETE_FRAGRANCE_COLLECTION_MUTATION = gql(/* GraphQL */ `
  mutation DeleteFragranceCollection(
    $input: DeleteFragranceCollectionInput!
  ) {
    deleteFragranceCollection(input: $input) {
      ...AllFragranceCollection
    }
  }
`)

export const CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION = gql(/* GraphQL */ `
  mutation CreateFragranceCollectionItem(
    $input: CreateFragranceCollectionItemInput!
  ) {
    createFragranceCollectionItem(input: $input) {
      ...AllFragranceCollectionItem
    }
  }
`)

export const MOVE_FRAGRANCE_COLLECTION_ITEMS_MUTATION = gql(/* GraphQL */ `
  mutation MoveFragranceCollectionItems(
    $input: MoveFragranceCollectionItemsInput!
  ) {
    moveFragranceCollectionItems(input: $input) {
      ...AllFragranceCollectionItem
    }
  }
`)

export const DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION = gql(/* GraphQL */ `
  mutation DeleteFragranceCollectionItem(
    $input: DeleteFragranceCollectionItemInput!
  ) {
    deleteFragranceCollectionItem(input: $input) {
      ...AllFragranceCollectionItem
    }
  }
`)

export const VOTE_ON_FRAGRANCE_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnFragrance(
    $input: VoteOnFragranceInput!
  ) {
    voteOnFragrance(input: $input) {
      ...FragrancePreview
    }
  }
`)

export const VOTE_ON_FRAGRANCE_ACCORD_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnFragranceAccord(
    $input: VoteOnFragranceAccordInput!
  ) {
    voteOnFragranceAccord(input: $input) {
      ...AllAccord
    }
  }
`)

export const VOTE_ON_FRAGRANCE_NOTE_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnFragranceNote(
    $input: VoteOnFragranceNoteInput!
  ) {
    voteOnFragranceNote(input: $input) {
      ...AllNote
    }
  }
`)

export const VOTE_ON_FRAGRANCE_TRAIT_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnFragranceTrait(
    $input: VoteOnFragranceTraitInput!
  ) {
    voteOnFragranceTrait(input: $input) {
      ...AllTraitVote
    }
  }
`)

export const VOTE_ON_FRAGRANCE_REVIEW_MUTATION = gql(/* GraphQL */ `
  mutation VoteOnFragranceReview(
    $input: VoteOnFragranceReviewInput!
  ) {
    voteOnFragranceReview(input: $input) {
      ...AllFragranceReview
    }
  }
`)