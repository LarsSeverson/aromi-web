import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_MUTATION } from '../graphql/mutations'
import type { VoteOnFragranceInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnFragrance = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_MUTATION)

  const vote = (input: VoteOnFragranceInput) => {
    return wrapQuery(
      voteInner({ variables: { input } })
    ).map(data => data.voteOnFragrance)
  }

  return {
    vote
  }
}