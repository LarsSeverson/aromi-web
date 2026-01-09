import type { AllAssetFragment } from '@/generated/graphql'

export interface EditPostAsset {
  clientId: string
  displayOrder: number

  assetId: string
  postAsset: AllAssetFragment | null

  upload: {
    file: File
    progress: number
    status: 'idle' | 'uploading' | 'success' | 'error'
    taskId: string
  } | null
}