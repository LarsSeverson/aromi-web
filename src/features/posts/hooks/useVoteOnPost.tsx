import { useMutation } from '@apollo/client/react'
import { VOTE_ON_POST_MUTATION } from '../graphql/mutations'
import type { AllVoteInfoFragment, PostVoteInfoFragment, VoteOnPostInput, VoteOnPostMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'
import { client } from '@/common/client'
import { POST_VOTE_INFO_FRAGMENT } from '../graphql/fragments'

export const useVoteOnPost = () => {
  const [mutation] = useMutation(VOTE_ON_POST_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    input: VoteOnPostInput,
    data: Nullable<VoteOnPostMutation>,
    prevVote: Nullable<number>
  ) => {
    const voteResult = data?.voteOnPost
    if (voteResult == null) return

    const { vote, postId } = input
    const postCacheId = cache.identify({ __typename: 'Post', id: postId })

    cache.modify({
      id: postCacheId,
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

  const voteOnPost = (input: VoteOnPostInput) => {
    const cachedPostId = client.cache.identify({ __typename: 'Post', id: input.postId })
    const existingVotes = client.cache.readFragment<PostVoteInfoFragment>({
      id: cachedPostId,
      fragmentName: 'PostVoteInfo',
      fragment: POST_VOTE_INFO_FRAGMENT
    })

    const prevVote = existingVotes?.votes.myVote ?? null

    return wrapQuery(
      mutation({
        variables: { input },
        update: (cache, { data }) => {
          handleUpdateCache(cache, input, data, prevVote)
        }
      })
    )
  }

  return { voteOnPost }
}