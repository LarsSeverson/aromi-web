import { gql } from '@/generated'

export const FRAGRANCE_QUERY = gql(/* GraphQL */`
  query Fragrance(
    $id: Int!
  ) {
    fragrance(id: $id) {
      ...FragranceSummary
      rating
      reviewsCount
      reviewDistribution {
        one
        two
        three
        four
        five
      }
    }
  }
`)

export const SUGGESTED_FRAGRANCES_QUERY = gql(/* GraphQL */`
  query SuggestedFragrances(
    $input: PaginationInput
  ) {
    fragrances(input: $input) {
      edges {
        node {
          ...FragranceSummary
        }
      } 
      pageInfo {
        ...PageInfoBase
      }
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
        edges {
          node {
            ...FragranceAccordSummary
          }
        } 
        pageInfo {
          ...PageInfoBase
        }
      }
    } 
  }
`)

export const FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query FragranceNotes(
    $fragranceId: Int!
    $input: NotesInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        top(input: $input) {
          ...FragranceNoteConnection
        }

        middle(input: $input) {
          ...FragranceNoteConnection
        }

        base(input: $input) {
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

export const MY_FRAGRANCE_REVIEW_QUERY = gql(/* GraphQL */`
  query MyFragranceReview(
    $fragranceId: Int!
  ) {
    fragrance(id: $fragranceId) {
      ...FragranceSummary
      myReview {
        ...FragranceReviewSummary
      }
    }
  }
`)
