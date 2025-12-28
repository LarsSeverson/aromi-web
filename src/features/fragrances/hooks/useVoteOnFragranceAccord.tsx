import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_ACCORD_MUTATION } from '../graphql/mutations'
import type {
  VoteOnFragranceAccordInput,
  VoteOnFragranceAccordMutation,
  AllAccordFragment
} from '@/generated/graphql'
import { type Nullable, VOTE_TYPES, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'

export const useVoteOnFragranceAccord = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_ACCORD_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    input: VoteOnFragranceAccordInput,
    data: Nullable<VoteOnFragranceAccordMutation>
  ) => {
    const updatedAccord = data?.voteOnFragranceAccord
    if (updatedAccord == null) return

    const fragranceCacheId = cache.identify({
      __typename: 'Fragrance',
      id: input.fragranceId
    })

    const accordCacheId = cache.identify({
      __typename: 'Accord',
      id: updatedAccord.id
    })

    if (fragranceCacheId == null || accordCacheId == null) return

    cache.modify({
      id: fragranceCacheId,
      fields: {
        myAccords (existingAccords = [], { readField, toReference }) {
          const typedExistingAccords = existingAccords as AllAccordFragment[]

          if (input.vote !== VOTE_TYPES.UPVOTE) {
            return typedExistingAccords.filter(ref => readField('id', ref) !== input.accordId)
          }

          const exists = typedExistingAccords.some(ref => readField('id', ref) === input.accordId)
          if (exists) return typedExistingAccords

          return [...typedExistingAccords, toReference(updatedAccord)]
        }
      }
    })
  }

  const vote = (input: VoteOnFragranceAccordInput) => {
    return wrapQuery(
      voteInner({
        variables: { input },
        update: (cache, { data }) => { handleUpdateCache(cache, input, data) }
      })
    )
  }

  return {
    vote
  }
}