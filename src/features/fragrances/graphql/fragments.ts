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
      ...AllTraitVote
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
  }
`)

export const ALL_FRAGRANCE_COLLECTION_FRAGMENT = gql(/* GraphQL */ `
  fragment AllFragranceCollection on FragranceCollection { 
    id
    name
    items {
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
  }
`)