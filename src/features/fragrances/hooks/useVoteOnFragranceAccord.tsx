import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_ACCORD_MUTATION } from '../graphql/mutations'
import type { VoteOnFragranceAccordInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnFragranceAccord = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_ACCORD_MUTATION)

  const voteOnFragranceAccord = (input: VoteOnFragranceAccordInput) => {
    return wrapQuery(
      voteInner({ variables: { input } })
    ).map(data => data.voteOnFragranceAccord)
  }

  return {
    voteOnFragranceAccord
  }
}