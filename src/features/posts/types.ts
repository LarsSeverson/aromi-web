import type { PostCommentPreviewFragment } from '@/generated/graphql'

export type NestedPostComment = PostCommentPreviewFragment & {
  children?: NestedPostComment[]
}