import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'
import { SET_MY_AVATAR_MUTATION } from '../graphql/mutations'
import type { SetMyAvatarInput, StageAssetInput } from '@/generated/graphql'
import { useStageAsset } from '@/features/assets'
import { usePresignedUpload } from '@/features/assets/hooks/usePresignedUpload'

export const useSetMyAvatar = () => {
  const [setAvatarInner] = useMutation(SET_MY_AVATAR_MUTATION)

  const { stageAsset } = useStageAsset()
  const { upload } = usePresignedUpload()

  const setAvatar = (input: SetMyAvatarInput) => {
    return wrapQuery(setAvatarInner({ variables: { input } })).map(data => data.setMyAvatar)
  }

  const setAvatarWithFile = (
    file: File,
    onProgress?: (progress: number) => void
  ) => {
    const fileName = file.name
    const contentType = file.type
    const sizeBytes = file.size

    const stageInput: StageAssetInput = {
      key: 'USER_IMAGES',
      fileName,
      contentType,
      sizeBytes
    }

    return stageAsset(stageInput)
      .andThrough(presigned => upload(presigned, file, onProgress))
      .andThen(presigned => setAvatar({ assetId: presigned.assetId }))
  }

  return { setAvatar, setAvatarWithFile }
}