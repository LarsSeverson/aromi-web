import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_MUTATION } from '../graphql/mutations'
import type { AllVoteInfoFragment, FragranceVoteInfoFragment, VoteOnFragranceInput, VoteOnFragranceMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'
import { client } from '@/common/client'
import { FRAGRANCE_VOTE_INFO_FRAGMENT } from '../graphql/fragments'

export const useVoteOnFragrance = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    input: VoteOnFragranceInput,
    data: Nullable<VoteOnFragranceMutation>,
    prevVote: Nullable<number>
  ) => {
    const voteResult = data?.voteOnFragrance
    if (voteResult == null) return

    const { vote, fragranceId } = input

    const cachedFragranceId = cache.identify({ __typename: 'Fragrance', id: fragranceId })

    cache.modify({
      id: cachedFragranceId,
      broadcast: false,
      fields: {
        votes: (existing) => {
          const typed = existing as AllVoteInfoFragment

          const upvotes = typed.upvotes ?? 0
          const downvotes = typed.downvotes ?? 0

          const addUpvote = vote === 1 && prevVote !== 1
          const removeUpvote = vote !== 1 && prevVote === 1
          const addDownvote = vote === -1 && prevVote !== -1
          const removeDownvote = vote !== -1 && prevVote === -1

          const upvoteDelta = (addUpvote ? 1 : 0) - (removeUpvote ? 1 : 0)
          const downvoteDelta = (addDownvote ? 1 : 0) - (removeDownvote ? 1 : 0)

          const newUpvotes = upvotes + upvoteDelta
          const newDownvotes = downvotes + downvoteDelta
          const newScore = (newUpvotes - newDownvotes)

          return {
            ...typed,
            upvotes: newUpvotes,
            downvotes: newDownvotes,
            score: newScore,
            myVote: vote
          }
        }
      }
    })
  }

  const vote = (input: VoteOnFragranceInput) => {
    const cachedFragranceId = client.cache.identify({ __typename: 'Fragrance', id: input.fragranceId })

    const prev = client.cache.readFragment<FragranceVoteInfoFragment>({
      id: cachedFragranceId,
      fragmentName: 'FragranceVoteInfo',
      fragment: FRAGRANCE_VOTE_INFO_FRAGMENT
    })

    const prevVote = prev?.votes.myVote

    return wrapQuery(voteInner({
      variables: { input },
      update: (cache, { data }) => { handleUpdateCache(cache, input, data, prevVote) }
    }))
  }

  return {
    vote
  }
}