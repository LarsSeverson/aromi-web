import { useMutation } from '@apollo/client/react'
import { VOTE_ON_POST_COMMENT_MUTATION } from '../graphql/mutations'
import type { AllVoteInfoFragment, PostCommentVoteInfoFragment, VoteOnPostCommentInput, VoteOnPostCommentMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'
import { client } from '@/common/client'
import { POST_COMMENT_VOTE_INFO_FRAGMENT } from '../graphql/fragments'

export const useVoteOnPostComment = () => {
  const [mutation] = useMutation(VOTE_ON_POST_COMMENT_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    input: VoteOnPostCommentInput,
    data: Nullable<VoteOnPostCommentMutation>,
    prevVote: Nullable<number>
  ) => {
    const voteResult = data?.voteOnPostComment
    if (voteResult == null) return

    const { vote, commentId } = input
    const commentCacheId = cache.identify({ __typename: 'PostComment', id: commentId })

    cache.modify({
      id: commentCacheId,
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

  const voteOnPostComment = (input: VoteOnPostCommentInput) => {
    const cachedCommentId = client.cache.identify({ __typename: 'PostComment', id: input.commentId })
    const existingVotes = client.cache.readFragment<PostCommentVoteInfoFragment>({
      id: cachedCommentId,
      fragment: POST_COMMENT_VOTE_INFO_FRAGMENT,
      fragmentName: 'PostCommentVoteInfo'
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

  return { voteOnPostComment }
}