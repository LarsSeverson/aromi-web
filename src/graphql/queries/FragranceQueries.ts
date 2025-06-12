import { gql } from '@/generated'

export const SUGGESTED_FRAGRANCES_QUERY = gql(/* GraphQL */`
  query SuggestedFragrances(
    $input: PaginationInput
  ) {
    fragrances(input: $input) {
      ...FragranceConnection
    }
  }
`)

export const FRAGRANCE_IMAGES_QUERY = gql(/* GraphQL */`
  query FragranceImages(
    $fragranceId: Int!
    $input: PaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      images(input: $input) {
        ...FragranceImageConnection
      }
    }
  }
`)

export const FRAGRANCE_TRAITS_QUERY = gql(/* GraphQL */`
  query FragranceTraits(
    $fragranceId: Int!
  ) {
    fragrance (id: $fragranceId) {
      traits {
        ...FragranceTraitSummary
      }
    }
  }
`)

export const FRAGRANCE_ACCORDS_QUERY = gql(/* GraphQL */`
  query FragranceAccords(
    $fragranceId: Int!
    $input: AccordsInput
  ) {
    fragrance(id: $fragranceId) {
      id
      accords(input: $input) {
        ...FragranceAccordConnection
      }
    } 
  }
`)

export const FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query FragranceNotes(
    $fragranceId: Int!
    $includeTop: Boolean = false
    $includeMiddle: Boolean = false
    $includeBase: Boolean = false
    $input: NotesInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        top(input: $input) @include(if: $includeTop) {
          ...FragranceNoteConnection
        }

        middle(input: $input) @include(if: $includeMiddle) {
          ...FragranceNoteConnection
        }

        base(input: $input) @include(if: $includeBase) {
          ...FragranceNoteConnection
        }
      }
    }
  }
`)

export const FRAGRANCE_REVIEWS_QUERY = gql(/* GraphQL */`
  query FragranceReviews(
    $fragranceId: Int!
    $input: VotePaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      reviews(input: $input) {
        ...FragranceReviewConnection
      }
    }
  }
`)
