import { type VoteOnNoteInput } from '@/generated/graphql'
import { VOTE_ON_NOTE_MUTATION } from '../graphql/mutations'
import { type ApolloError, useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useVoteOnNote = () => {
  const [
    voteOnNoteInner,
    { data, loading, error }
  ] = useMutation(VOTE_ON_NOTE_MUTATION)

  const voteOnNote = (input: VoteOnNoteInput) => {
    return ResultAsync
      .fromPromise(
        voteOnNoteInner({ variables: { input } }),
        error => error as ApolloError
      )
  }

  return {
    data,
    loading,
    error,

    voteOnNote
  }
}
