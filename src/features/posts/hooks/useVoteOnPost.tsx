import { useMutation } from '@apollo/client/react'
import { VOTE_ON_POST_MUTATION } from '../graphql/mutations'
import type { VoteOnPostInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnPost = () => {
  const [mutation] = useMutation(VOTE_ON_POST_MUTATION)

  const voteOnPost = (input: VoteOnPostInput) => {
    return wrapQuery(
      mutation({
        variables: { input }
      })
    )
  }

  return { voteOnPost }
}