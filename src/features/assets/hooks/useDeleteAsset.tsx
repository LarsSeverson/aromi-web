import type { DeleteAssetInput } from '@/generated/graphql'
import { useMutation } from '@apollo/client/react'
import { DELETE_ASSET_MUTATION } from '../graphql/mutations'
import { wrapQuery } from '@/utils/util'

export const useDeleteAsset = () => {
  const [deleteAssetInner] = useMutation(DELETE_ASSET_MUTATION)

  const deleteAsset = (input: DeleteAssetInput) => {
    return wrapQuery(deleteAssetInner({ variables: { input } })).map(data => data.deleteAsset)
  }

  return { deleteAsset }
}