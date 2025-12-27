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

    cache.modify({
      id: fragranceCacheId,
      fields: {
        myAccords: (existingAccords = [], { readField }) => {
          const accords = existingAccords as AllAccordFragment[]

          if (input.vote !== VOTE_TYPES.UPVOTE) {
            return accords.filter(ref => readField('id', ref) !== input.accordId)
          }

          const exists = accords.find(ref => readField('id', ref) === input.accordId)

          if (exists != null) {
            return accords.map(ref =>
              readField('id', ref) === input.accordId ? updatedAccord : ref
            )
          }

          return [updatedAccord, ...accords]
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