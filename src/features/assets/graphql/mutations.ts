import { gql } from '@/generated'

export const STAGE_ASSET_MUTATION = gql(/* GraphQL */`
  mutation StageAsset(
    $input: StageAssetInput!
  ) {
    stageAsset(input: $input) {
      ...AllPresignedUpload
    }
  }
`)

export const DELETE_ASSET_MUTATION = gql(/* GraphQL */`
  mutation DeleteAsset(
    $input: DeleteAssetInput!
  ) {
    deleteAsset(input: $input)
  }
`)