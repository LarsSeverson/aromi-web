import { INVALID_ID } from '@/common/util-types'
import { type User } from '@/generated/graphql'

export interface IUserSummary extends Pick<User, 'id' | 'email' | 'username' | 'followerCount' | 'followingCount' | 'audit'> {}

export const PLACEHOLDER_USER: IUserSummary = {
  id: INVALID_ID,
  email: 'user@example.com',
  username: 'Username',
  followerCount: 0,
  followingCount: 0,
  audit: {
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  }
}
