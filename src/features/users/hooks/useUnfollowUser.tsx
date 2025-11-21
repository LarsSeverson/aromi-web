import type { UnfollowUserInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { UNFOLLOW_USER_MUTATION } from '../graphql/mutations'

export const useUnfollowUser = () => {
  const [unfollowInner] = useMutation(UNFOLLOW_USER_MUTATION)

  const unfollow = (input: UnfollowUserInput) => {
    return wrapQuery(
      unfollowInner({ variables: { input } })
    )
  }

  return { unfollow }
}