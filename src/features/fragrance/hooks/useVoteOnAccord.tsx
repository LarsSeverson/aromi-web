import { type VoteOnAccordInput } from '@/generated/graphql'
import { VOTE_ON_ACCORD_MUTATION } from '@/graphql/mutations/FragranceMutations'
import { type ApolloError, useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useVoteOnAccord = () => {
  const [
    voteOnAccordInner,
    { data, loading, error }
  ] = useMutation(VOTE_ON_ACCORD_MUTATION)

  const voteOnAccord = (input: VoteOnAccordInput) => {
    return ResultAsync
      .fromPromise(
        voteOnAccordInner({ variables: { input } }),
        error => error as ApolloError
      )
  }

  return {
    data,
    loading,
    error,

    voteOnAccord
  }
}
