import type { PostCommentPreviewFragment } from '@/generated/graphql'

export interface EditPostCommentProviderProps {
  comment: PostCommentPreviewFragment
  children: React.ReactNode
}

export const EditPostCommentProvider = (props: EditPostCommentProviderProps) => {
  const { children } = props
}