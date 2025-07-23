import { type VoteOnTraitInput } from '@/generated/graphql'
import { VOTE_ON_TRAIT_MUTATION } from '@/graphql/mutations/FragranceMutations'
import { type ApolloError, useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useVoteOnTrait = () => {
  const [
    voteOnTraitInner,
    { data, loading, error }
  ] = useMutation(VOTE_ON_TRAIT_MUTATION)

  const voteOnTrait = (input: VoteOnTraitInput) => {
    return ResultAsync
      .fromPromise(
        voteOnTraitInner({ variables: { input } }),
        error => error as ApolloError
      )
  }

  return {
    data,
    loading,
    error,

    voteOnTrait
  }
}
