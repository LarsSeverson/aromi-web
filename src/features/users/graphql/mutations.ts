import { gql } from '@/generated'

export const UPDATE_ME_MUTATION = gql(/* GraphQL */`
  mutation UpdateMe(
    $input: UpdateMeInput!
  ) {
    updateMe(input: $input) {
      ...Me
    }
  }
`)

export const SET_MY_AVATAR_MUTATION = gql(/* GraphQL */`
  mutation SetMyAvatar(
    $input: SetMyAvatarInput!
  ) {
    setMyAvatar(input: $input) {
      ...Me
    }
  }
`)

export const FOLLOW_USER_MUTATION = gql(/* GraphQL */ `
  mutation FollowUser(
    $input: FollowUserInput!
  ) {
    follow(input: $input) {
      ...AllUserFollow
    }
  }
`)

export const UNFOLLOW_USER_MUTATION = gql(/* GraphQL */`
  mutation UnfollowUser(
    $input: UnfollowUserInput!
  ) {
    unfollow(input: $input) {
      ...AllUserFollow
    }
  }
`)