import type { AssetKey, StageAssetInput } from '@/generated/graphql'
import { useMutation } from '@apollo/client/react'
import { STAGE_ASSET_MUTATION } from '../graphql/mutations'
import { wrapQuery } from '@/utils/util'
import { usePresignedUpload } from '@/features/assets/hooks/usePresignedUpload'
import type { OnUploadProgressFn } from '../types'

export const useStageAsset = () => {
  const [stageAssetInner] = useMutation(STAGE_ASSET_MUTATION)

  const { upload } = usePresignedUpload()

  const stageAsset = (input: StageAssetInput) => {
    return wrapQuery(stageAssetInner({ variables: { input } })).map(data => data.stageAsset)
  }

  const stageAssetWithFile = (
    file: File,
    key: AssetKey,
    onProgress?: OnUploadProgressFn
  ) => {
    const fileName = file.name
    const contentType = file.type
    const contentSize = file.size

    return stageAsset({ key, fileName, contentType, contentSize })
      .andThrough(presigned => upload(presigned, file, onProgress))
  }

  return { stageAsset, stageAssetWithFile }
}