import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_TRAIT_MUTATION } from '../graphql/mutations'
import type { VoteOnFragranceTraitInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnFragranceTrait = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_TRAIT_MUTATION)

  const voteOnFragranceTrait = (input: VoteOnFragranceTraitInput) => {
    return wrapQuery(
      voteInner({ variables: { input } })
    ).map(data => data.voteOnFragranceTrait)
  }

  return {
    voteOnFragranceTrait
  }
}