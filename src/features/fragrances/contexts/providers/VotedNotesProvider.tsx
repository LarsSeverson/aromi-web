import type { AllNoteFragment, NoteLayer } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useVoteOnFragranceNote } from '../../hooks/useVoteOnFragranceNote'
import { useMyFragranceNotes } from '../../hooks/useMyFragranceNotes'
import React from 'react'
import { useDebounces } from '@/hooks/useDebounces'
import { VOTE_TYPES, type VoteType } from '@/utils/util'
import { MAX_NOTE_VOTES } from '../../utils/constants'
import { VotedNotesContext } from '../VotedNotesContext'
import { useAuthHelpers } from '@/features/auth/hooks/useAuthHelpers'

export interface VotedNotesProviderProps {
  fragranceId: string
  layer: NoteLayer
  children: React.ReactNode
}

export const VotedNotesProvider = (props: VotedNotesProviderProps) => {
  const { fragranceId, layer, children } = props

  const { checkAuthenticated } = useAuthHelpers()
  const { toastError } = useToastMessage()

  const { vote } = useVoteOnFragranceNote()
  const { notes, isLoading } = useMyFragranceNotes(fragranceId, layer)

  const votedNotesMapInternal = React.useRef(new Map<string, AllNoteFragment>())

  const [currentVotedSize, setCurrentVotedSize] = React.useState(0)
  const [votedNotes, setVotedNotes] = React.useState<AllNoteFragment[]>([])

  const votedNotesMap = React.useMemo(
    () => new Map(votedNotes.map(note => [note.id, note])),
    [votedNotes]
  )

  const { run: debouncedVote } = useDebounces(400, [fragranceId, layer])

  const handleVoteOnNote = async (note: AllNoteFragment, userVote: VoteType) => {
    const noteId = note.id

    const voteRes = await vote({ fragranceId, noteId, layer, vote: userVote })

    if (voteRes.isErr()) {
      toastError('')
    }
  }

  const voteOnNote = (note: AllNoteFragment) => {
    if (!checkAuthenticated('You need to log in before voting on notes')) return

    const noteId = note.id
    const currentSize = votedNotesMapInternal.current.size
    const shouldAdd = !votedNotesMapInternal.current.has(noteId)
    const userVote = shouldAdd ? VOTE_TYPES.UPVOTE : VOTE_TYPES.NOVOTE

    if (shouldAdd && currentSize >= MAX_NOTE_VOTES) return

    debouncedVote(noteId, () => {
      handleVoteOnNote(note, userVote)
    })

    if (shouldAdd) votedNotesMapInternal.current.set(noteId, note)
    else votedNotesMapInternal.current.delete(noteId)

    setVotedNotes(Array.from(votedNotesMapInternal.current.values()))
    setCurrentVotedSize(votedNotesMapInternal.current.size)
  }

  React.useEffect(
    () => {
      if (!isLoading) {
        votedNotesMapInternal.current = new Map(notes.map(note => [note.id, note]))
        setVotedNotes(notes)
        setCurrentVotedSize(notes.length)
      }
    },
    [isLoading, notes]
  )

  return (
    <VotedNotesContext.Provider
      value={{
        layer,
        votedNotes,
        votedNotesMap,
        currentVotedSize,
        voteOnNote
      }}
    >
      {children}
    </VotedNotesContext.Provider>
  )
}