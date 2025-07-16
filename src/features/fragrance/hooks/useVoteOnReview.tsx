import { type VoteOnReviewInput } from '@/generated/graphql'
import { VOTE_ON_REVIEW_MUTATION } from '@/graphql/mutations/FragranceMutations'
import { useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useVoteOnReview = () => {
  const [
    voteOnReviewInner,
    { data, loading, error }
  ] = useMutation(VOTE_ON_REVIEW_MUTATION)

  const voteOnReview = (input: VoteOnReviewInput) => {
    return ResultAsync
      .fromPromise(
        voteOnReviewInner({ variables: { input } }),
        error => error
      )
  }

  return {
    data,
    loading,
    error,

    voteOnReview
  }
}
