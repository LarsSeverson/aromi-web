import { gql } from '@/generated'

export const ALL_ASSET_FRAGMENT = gql(/* GraphQL */`
  fragment AllAsset on Asset {
    id
    name
    contentType
    sizeBytes
    url
  }
`)

export const ALL_PRESIGNED_UPLOAD_FRAGMENT = gql(/* GraphQL */`
  fragment AllPresignedUpload on PresignedUpload { 
    assetId
    url
    fields
  }
`)
