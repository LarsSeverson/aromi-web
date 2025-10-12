import { gql } from '@/generated'

export const FRAGRANCE_QUERY = gql(/* GraphQL */ `
  query Fragrance(
    $id: ID!
  ) {
    fragrance(id: $id) {
      ...FragrancePreview
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
    $id: ID!
  ) {
    fragrance(id: $id) {
      id
      images {
        ...AllFragranceImage
      }
    }
  }
`)

export const FRAGRANCE_ACCORDS_QUERY = gql(/* GraphQL */ `
  query FragranceAccords(
    $id: ID!
    $input: FragranceAccordPaginationInput
  ) { 
    fragrance(id: $id) {
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
    $id: ID!
    $input: FragranceNotePaginationInput
  ) { 
    fragrance(id: $id) {
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
    $id: ID!
  ) { 
    fragrance(id: $id) {
      id
      traits {
        ...AllFragranceTrait
      }
    }
  }
`)

export const FRAGRANCE_REVIEWS_QUERY = gql(/* GraphQL */ `
  query FragranceReviews(
    $id: ID!
    $input: FragranceReviewPaginationInput
  ) { 
    fragrance(id: $id) {
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