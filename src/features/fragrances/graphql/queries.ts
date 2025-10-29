import { gql } from '@/generated'

export const FRAGRANCE_QUERY = gql(/* GraphQL */ `
  query Fragrance(
    $id: ID!
  ) {
    fragrance(id: $id) {
      ...FragranceDetail
    }
  }
`)

export const FRAGRANCES_QUERY = gql(/* GraphQL */ `
  query Fragrances(
    $input: FragrancePaginationInput
  ) {
    fragrances(input: $input) { 
      edges {
        node {
          ...FragrancePreview
        }
        cursor
      }
      pageInfo {
        ...AllPageInfo
      }
    }
  }
`)

export const SEARCH_FRAGRANCES_QUERY = gql(/* GraphQL */ `
  query SearchFragrances(
    $input: SearchInput
  ) {
    searchFragrances(input: $input) { 
      edges {
        node { 
          ...FragrancePreview
        }
        offset
      }
      pageInfo {
        ...AllSearchPageInfo
      }
    }
  }
`)

export const FRAGRANCE_IMAGES_QUERY = gql(/* GraphQL */ `
  query FragranceImages(
    $fragranceId: ID!
  ) {
    fragrance(id: $fragranceId) {
      id
      images {
        ...AllFragranceImage
      }
    }
  }
`)

export const FRAGRANCE_ACCORDS_QUERY = gql(/* GraphQL */ `
  query FragranceAccords(
    $fragranceId: ID!
    $input: FragranceAccordPaginationInput
  ) { 
    fragrance(id: $fragranceId) {
      id
      accords(input: $input) {
        edges {
          node {
            ...AllFragranceAccord
          }
          cursor
        }
        pageInfo {
          ...AllPageInfo
        }
      }
    }
  }
`)

export const FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */ `
  query FragranceNotes(
    $fragranceId: ID!
    $input: FragranceNotePaginationInput
  ) { 
    fragrance(id: $fragranceId) {
      id
      notes(input: $input) {
        edges {
          node {
            ...AllFragranceNote
          }
          cursor
        }
        pageInfo {
          ...AllPageInfo
        }
      }
    }
  }
`)

export const FRAGRANCE_TRAITS_QUERY = gql(/* GraphQL */ `
  query FragranceTraits(
    $fragranceId: ID!
  ) { 
    fragrance(id: $fragranceId) {
      id
      traits {
        ...AllFragranceTrait
      }
    }
  }
`)

export const FRAGRANCE_REVIEWS_QUERY = gql(/* GraphQL */ `
  query FragranceReviews(
    $fragranceId: ID!
    $input: FragranceReviewPaginationInput
  ) { 
    fragrance(id: $fragranceId) {
      id
      reviews(input: $input) {
        edges {
          node {
            ...AllFragranceReview
          }
          cursor
        }
        pageInfo {
          ...AllPageInfo
        }
      }
    }
  }
`)

export const FRAGRANCE_COLLECTION_QUERY = gql(/* GraphQL */ `
  query FragranceCollection(
    $id: ID!
  ) { 
    fragranceCollection(id: $id) {
      ...AllFragranceCollection
    }
  }
`)

export const FRAGRANCE_COLLECTIONS_QUERY = gql(/* GraphQL */ `
  query FragranceCollections(
    $input: FragranceCollectionPaginationInput
  ) { 
    fragranceCollections(input: $input) {
      edges {
        node {
          ...FragranceCollectionPreview
        }
        cursor
      }
      pageInfo {
        ...AllPageInfo
      }
    }
  }
`)

export const FRAGRANCE_COLLECTION_HAS_FRAGRANCE_QUERY = gql(/* GraphQL */ `
  query FragranceCollectionHasFragrance(
    $collectionId: ID!
    $fragranceId: ID!
  ) { 
    fragranceCollection(id: $collectionId) { 
      id
      hasFragrance(fragranceId: $fragranceId)
    }
  }
`)