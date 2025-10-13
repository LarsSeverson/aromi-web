import type { UserPreviewFragment } from '@/generated/graphql'
import { INVALID_ID } from '@/utils/util'

export const USER_PLACEHOLDER: UserPreviewFragment = {
  id: INVALID_ID,
  username: 'Unknown user'
}