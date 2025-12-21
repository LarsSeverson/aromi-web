import type { UserPreviewFragment } from '@/generated/graphql'
import { INVALID_ID } from '@/utils/util'

export const PLACEHOLDER_USER: UserPreviewFragment = {
  id: INVALID_ID,
  username: 'Your Username',
  followerCount: 0,
  followingCount: 0,
  relationship: 'NONE'
}