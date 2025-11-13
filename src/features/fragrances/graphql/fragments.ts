import { gql } from '@/generated'

export const FRAGRANCE_PREVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment FragrancePreview on Fragrance { 
    id
    name
    description
    releaseYear
    concentration
    status

    brand {
      ...BrandPreview
    }

    thumbnail {
      ...AllFragranceImage
    }

    votes {
      ...AllVoteInfo
    }
  }
`)

export const FRAGRANCE_DETAIL_FRAGMENT = gql(/* GraphQL */ `
  fragment FragranceDetail on Fragrance { 
    ...FragrancePreview

    images {
      ...AllFragranceImage
    }
    
    reviewInfo {
      ...AllFragranceReviewInfo
    }
  }
`)

export const ALL_FRAGRANCE_IMAGE_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceImage on FragranceImage {
    id
    url
    width
    height
    primaryColor
  } 
`)

export const ALL_FRAGRANCE_ACCORD_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceAccord on FragranceAccord {
    id
    accord {
      ...AllAccord
    }
    votes {
      ...AllVoteInfo
    }
  }
`)

export const ALL_FRAGRANCE_NOTE_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceNote on FragranceNote { 
    id
    layer
    note {
      ...AllNote
    }
    votes {
      ...AllVoteInfo
    }
  }
`)

export const ALL_FRAGRANCE_TRAIT_VOTE_FRAGMENT = gql(/* GraphQL */`
  fragment AllFragranceTraitVote on FragranceTraitVote { 
    id
    type
    option {
      ...AllTraitOption
    }
  }
`)

export const ALL_FRAGRANCE_TRAIT_FRAGMENT = gql(/* GraphQL */`
  fragment AllFragranceTrait on FragranceTrait { 
    id
    type
    name
    options {
      ...AllTraitOption
    } 
    stats {
      ...AllTraitStats
    }
    myVote {
      ...AllFragranceTraitVote
    }
  }
`)

export const ALL_FRAGRANCE_REVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceReview on FragranceReview { 
    id
    rating
    body

    author {
      ...UserPreview
    }

    fragrance {
      ...FragrancePreview
    }

    votes {
      ...AllVoteInfo
    }
    
    createdAt
  }
`)

export const ALL_FRAGRANCE_REVIEW_INFO_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceReviewInfo on FragranceReviewInfo { 
    count
    averageRating
    distribution {
      rating
      count
    }
  }
`)

export const ALL_FRAGRANCE_COLLECTION_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceCollection on FragranceCollection { 
    ...FragranceCollectionPreview
    info {
      itemCount
    } 
  }
`)

export const FRAGRANCE_COLLECTION_PREVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment FragranceCollectionPreview on FragranceCollection { 
    id
    name
    previewItems {
      ...AllFragranceCollectionItem
    }
    user {
      ...UserPreview
    }
  }
`)

export const ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceCollectionItem on FragranceCollectionItem { 
    id
    fragrance {
      ...FragrancePreview
    }
    collection {
      id
    }
  }
`)

export const FRAGRANCE_COLLECTION_ITEM_WITH_COLLECTION_FRAGMENT = gql(/* GraphQL */ `
  fragment FragranceCollectionItemWithCollection on FragranceCollectionItem { 
    ...AllFragranceCollectionItem
    collection {
      id
    }
  }
`)

export const HAS_FRAGRANCE_FIELD_FRAGMENT = gql(/* GraphQL */ `
  fragment HasFragranceField on FragranceCollection { 
    id
    hasFragrance(fragranceId: $fragranceId)
  }
`)

export const FRAGRANCE_VOTE_INFO_FRAGMENT = gql(/* GraphQL */ `
  fragment FragranceVoteInfo on Fragrance { 
    id
    votes {
      ...AllVoteInfo
    }
  }
`)

export const MY_FRAGRANCE_REVIEW_FRAGMENT = gql(/* GraphQL */ `
  fragment MyFragranceReview on Fragrance { 
    id
    myReview {
      ...AllFragranceReview
    }
  }
`)