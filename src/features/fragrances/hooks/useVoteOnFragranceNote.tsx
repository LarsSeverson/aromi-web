import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_NOTE_MUTATION } from '../graphql/mutations'
import type { VoteOnFragranceNoteInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnFragranceNote = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_NOTE_MUTATION)

  const vote = (input: VoteOnFragranceNoteInput) => {
    return wrapQuery(
      voteInner({ variables: { input } })
    )
  }

  return {
    vote
  }
}