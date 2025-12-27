import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_NOTE_MUTATION } from '../graphql/mutations'
import type {
  VoteOnFragranceNoteInput,
  VoteOnFragranceNoteMutation,
  AllNoteFragment
} from '@/generated/graphql'
import { type Nullable, VOTE_TYPES, wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'

export const useVoteOnFragranceNote = () => {
  const [voteInner] = useMutation(VOTE_ON_FRAGRANCE_NOTE_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    input: VoteOnFragranceNoteInput,
    data: Nullable<VoteOnFragranceNoteMutation>
  ) => {
    const updatedNote = data?.voteOnFragranceNote
    if (updatedNote == null) return

    const fragranceCacheId = cache.identify({
      __typename: 'Fragrance',
      id: input.fragranceId
    })

    cache.modify({
      id: fragranceCacheId,
      fields: {
        myNotes: (existingNotes = [], { readField }) => {
          const notes = existingNotes as AllNoteFragment[]

          if (input.vote !== VOTE_TYPES.UPVOTE) {
            return notes.filter(ref => readField('id', ref) !== input.noteId)
          }

          const exists = notes.find(ref => readField('id', ref) === input.noteId)

          if (exists != null) {
            return notes.map(ref =>
              readField('id', ref) === input.noteId ? updatedNote : ref
            )
          }

          return [updatedNote, ...notes]
        }
      }
    })
  }

  const vote = (input: VoteOnFragranceNoteInput) => {
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