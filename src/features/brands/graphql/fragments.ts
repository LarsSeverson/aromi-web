import { gql } from '@/generated'

export const ALL_BRAND_FRAGMENT = gql(/* GraphQL */`
  fragment AllBrand on Brand {
    id
    name
    website
    description
    avatar {
      ...AllAsset
    }
    votes {
      ...AllVoteInfo
    }
  }
`)

export const BRAND_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment BrandPreview on Brand {
    id
    name
    avatar {
      ...AllAsset
    }
    votes {
      ...AllVoteInfo
    }
  }
`)