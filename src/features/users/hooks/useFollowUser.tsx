import type { FollowUserInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { FOLLOW_USER_MUTATION } from '../graphql/mutations'

export const useFollowUser = () => {
  const [followInner] = useMutation(FOLLOW_USER_MUTATION)

  const follow = (input: FollowUserInput) => {
    return wrapQuery(
      followInner({ variables: { input } })
    )
  }

  return { follow }
}