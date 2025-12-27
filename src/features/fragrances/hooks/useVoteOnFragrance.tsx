import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_MUTATION } from '../graphql/mutations'
import type { AllVoteInfoFragment, FragrancePreviewFragment, FragranceVoteInfoFragment, VoteOnFragranceInput, VoteOnFragranceMutation } from '@/generated/graphql'
import { type Nullable, VOTE_TYPES, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'
import { client } from '@/common/client'
import { FRAGRANCE_VOTE_INFO_FRAGMENT } from '../graphql/fragments'
import { useMyContext } from '@/features/users'
import type { NodeWithEdges } from '@/utils/pagination'

export const useVoteOnFragrance = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_MUTATION)

  const { me } = useMyContext()

  const updateUserLikes = (
    cache: ApolloCache,
    fragranceCacheId: string,
    vote: number
  ) => {
    if (me == null) return

    const userCacheId = cache.identify(me)

    cache.modify({
      id: userCacheId,
      fields: {
        likes: (existing = {}) => {
          const typed = existing as NodeWithEdges<FragrancePreviewFragment>
          if (typed == null) return typed

          const isUpvote = vote === VOTE_TYPES.UPVOTE
          const edges = typed.edges ?? []
          const exists = edges.some(edge => cache.identify(edge.node) === fragranceCacheId)

          if (isUpvote && !exists) {
            const newEdge = {
              __typename: 'FragranceEdge',
              node: { __ref: fragranceCacheId },
              cursor: ''
            }

            return { ...typed, edges: [newEdge, ...edges] }
          }

          if (!isUpvote && exists) {
            return {
              ...typed,
              edges: edges.filter(edge => cache.identify(edge.node) !== fragranceCacheId)
            }
          }

          return typed
        }
      }
    })
  }

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
    if (cachedFragranceId == null) return

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

    updateUserLikes(cache, cachedFragranceId, vote)
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