import { VOTE_ON_FRAGRANCE_MUTATION } from '@/graphql/mutations/FragranceMutations'
import { useMutation } from '@apollo/client'

export const useVoteOnFragrance = () => {
  const [voteOnFragrance, { data, loading, error }] = useMutation(VOTE_ON_FRAGRANCE_MUTATION)

  return {
    data,
    loading,
    error,

    voteOnFragrance
  }
}
