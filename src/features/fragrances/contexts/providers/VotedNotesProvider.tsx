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
  const {
    fragranceId,
    layer,
    children
  } = props

  const { run: debouncedVote } = useDebounces(400, [fragranceId, layer])
  const { checkAuthenticated } = useAuthHelpers()
  const { toastError } = useToastMessage()

  const { vote } = useVoteOnFragranceNote()
  const { notes, isLoading } = useMyFragranceNotes(fragranceId, layer)

  const lastInitializedKey = React.useRef<string | null>(null)

  const [votedNotes, setVotedNotes] = React.useState<AllNoteFragment[]>([])
  const currentVotedSize = votedNotes.length

  const votedNotesMap = React.useMemo(
    () => new Map(votedNotes.map((note) => [note.id, note])),
    [votedNotes]
  )

  const handleVoteOnNote = async (note: AllNoteFragment, userVote: VoteType) => {
    const res = await vote({
      fragranceId,
      noteId: note.id,
      layer,
      vote: userVote
    })

    if (res.isErr()) {
      toastError(res.error.message)
      setVotedNotes(notes)
    }
  }

  const voteOnNote = (note: AllNoteFragment) => {
    if (!checkAuthenticated('Log in to vote on notes')) return

    const exists = votedNotesMap.has(note.id)

    if (!exists && currentVotedSize >= MAX_NOTE_VOTES) return

    const nextVote = exists ? VOTE_TYPES.NOVOTE : VOTE_TYPES.UPVOTE

    setVotedNotes((prev) => {
      if (exists) return prev.filter((n) => n.id !== note.id)
      return [...prev, note]
    })

    debouncedVote(note.id, () => {
      handleVoteOnNote(note, nextVote)
    })
  }

  React.useEffect(
    () => {
      const currentKey = `${fragranceId}-${layer}`

      if (!isLoading && lastInitializedKey.current !== currentKey) {
        setVotedNotes(notes)
        lastInitializedKey.current = currentKey
      }
    },
    [notes, isLoading, fragranceId, layer]
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