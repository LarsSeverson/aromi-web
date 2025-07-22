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
      id
      traits {
        ...FragranceTraitSummary
      }
    }
  }
`)

export const FRAGRANCE_ACCORDS_QUERY = gql(/* GraphQL */`
  query FragranceAccords(
    $fragranceId: Int!
    $input: VotePaginationInput
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

export const FILLER_FRAGRANCE_ACCORDS_QUERY = gql(/* GraphQL */`
  query FillerFragranceAccords(
    $fragranceId: Int!
    $input: PaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      fillerAccords(input: $input) {
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
    $topInput: VotePaginationInput
    $middleInput: VotePaginationInput
    $baseInput: VotePaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        top(input: $topInput) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }

        middle(input: $middleInput) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }

        base(input: $baseInput) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }
      }
    }
  }
`)

export const FILLER_FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query FillerFragranceNotes(
    $fragranceId: Int!
    $topInput: PaginationInput
    $middleInput: PaginationInput
    $baseInput: PaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        fillerTop(input: $topInput) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }

        fillerMiddle(input: $middleInput) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }

        fillerBase(input: $baseInput) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }
      }
    }
  }
`)

export const TOP_FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query TopFragranceNotes(
    $fragranceId: Int!
    $input: VotePaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        top(input: $input) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }
      }
    }
  }
`)

export const MIDDLE_FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query MiddleFragranceNotes(
    $fragranceId: Int!
    $input: VotePaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        middle(input: $input) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }
      }
    }
  }
`)

export const BASE_FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query BaseFragranceNotes(
    $fragranceId: Int!
    $input: VotePaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        base(input: $input) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }
      }
    }
  }
`)

export const TOP_FILLER_FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query TopFillerFragranceNotes(
    $fragranceId: Int!
    $input: PaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        fillerTop(input: $input) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }
      }
    }
  }
`)

export const MIDDLE_FILLER_FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query MiddleFillerFragranceNotes(
    $fragranceId: Int!
    $input: PaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        fillerMiddle(input: $input) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
        }
      }
    }
  }
`)

export const BASE_FILLER_FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query BaseFillerFragranceNotes(
    $fragranceId: Int!
    $input: PaginationInput
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        fillerBase(input: $input) {
          edges {
            node {
              ...FragranceNoteSummary
            }
          }
          pageInfo {
            ...PageInfoBase
          }
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
