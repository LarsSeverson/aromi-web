import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_TRAIT_MUTATION } from '../graphql/mutations'
import type { AllFragranceTraitFragment, VoteOnFragranceTraitInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'

export const useVoteOnFragranceTrait = () => {
  const [voteInner] = useMutation(
    VOTE_ON_FRAGRANCE_TRAIT_MUTATION,
    { fetchPolicy: 'no-cache' }
  )

  const handleUpdateCache = (
    cache: ApolloCache,
    input: VoteOnFragranceTraitInput
  ) => {
    const { fragranceId, traitId, traitOptionId } = input

    const cachedFragranceId = cache.identify({ __typename: 'Fragrance', id: fragranceId })
    if (cachedFragranceId == null) return

    cache.modify({
      id: cachedFragranceId,
      broadcast: false,
      fields: {
        traits (existingTraits = []) {
          const newTraits = (existingTraits as AllFragranceTraitFragment[]).map(
            trait => {
              if (trait.id !== traitId) return trait

              const newOptions = trait.options.map(option => {
                const voteExists = option.votes.myVote !== 0
                const shouldUpvote = option.id === traitOptionId && !voteExists
                const shouldRemoveVote = voteExists && option.id !== traitOptionId

                if (shouldUpvote) {
                  return {
                    ...option,
                    votes: {
                      ...option.votes,
                      myVote: 1,
                      score: option.votes.score + 1
                    }
                  }
                }

                if (shouldRemoveVote) {
                  return {
                    ...option,
                    votes: {
                      ...option.votes,
                      myVote: 0,
                      score: option.votes.score - 1
                    }
                  }
                }

                return option
              })

              return {
                ...trait,
                options: newOptions
              }
            }
          )

          return newTraits
        }
      }
    })
  }

  const vote = (input: VoteOnFragranceTraitInput) => {
    return wrapQuery(
      voteInner({
        variables: { input },
        update: (cache) => {
          handleUpdateCache(cache, input)
        }
      })
    )
  }

  return {
    vote
  }
}