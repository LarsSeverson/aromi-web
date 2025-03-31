import { type User } from '@/generated/graphql'
import { INVALID_ID } from './util-types'

export const USER_PLACEHOLDER: Omit<User, 'reviews' | 'collections' | 'likes'> = {
  username: 'Your Username',
  cognitoId: '123',
  email: 'email@example.com',
  followers: 0,
  following: 0,
  id: INVALID_ID
}
