import type { CreatePostAssetInput } from '@/generated/graphql'

export interface NewPostAsset extends CreatePostAssetInput {
  taskId: string
}