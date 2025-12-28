import PageCategory from '@/components/PageCategory'
import React from 'react'
import NotesPyramid from './NotesPyramid'
import { NoteLayer } from '@/generated/graphql'
import { useFragranceNotes } from '../hooks/useFragranceNotes'
import clsx from 'clsx'
import { VotedNotesProvider } from '../contexts/providers/VotedNotesProvider'
import VoteOnNotesSectionContent from './VoteOnNotesSectionContent'
import Divider from '@/components/Divider'
import { useFragranceContext } from '../contexts/FragranceContext'

export interface FragranceNotesSectionProps {}

const FragranceNotesSection = (_: FragranceNotesSectionProps) => {
  const { fragrance, isVotingOnNotes, onVoteOnNotes } = useFragranceContext()

  const { notes: topNotes, isLoading: isTopLoading } = useFragranceNotes(fragrance.id, { layer: NoteLayer.Top })
  const { notes: middleNotes, isLoading: isMiddleLoading } = useFragranceNotes(fragrance.id, { layer: NoteLayer.Middle })
  const { notes: baseNotes, isLoading: isBaseLoading } = useFragranceNotes(fragrance.id, { layer: NoteLayer.Base })

  const utilRef = React.useRef<HTMLDivElement>(null)

  const [layer, setLayer] = React.useState<NoteLayer>(NoteLayer.Top)
  const title = isVotingOnNotes ? 'How do the notes develop?' : 'Notes'

  const layers = [
    { layer: NoteLayer.Top, notes: topNotes },
    { layer: NoteLayer.Middle, notes: middleNotes },
    { layer: NoteLayer.Base, notes: baseNotes }
  ].filter(item => item.notes.length > 0)

  React.useEffect(() => {
    if (!isVotingOnNotes) return

    utilRef.current?.scrollIntoView({ block: 'center' })
  }, [isVotingOnNotes])

  if (isTopLoading || isMiddleLoading || isBaseLoading) return null

  return (
    <PageCategory
      title={title}
      showButton={!isVotingOnNotes}
      emptyTitle='No notes yet'
      emptyButtonText='Vote on Notes'
      isEmpty={layers.length === 0}
      className='flex w-full min-w-0 flex-col'
      onButtonClick={onVoteOnNotes.bind(null, true)}
    >
      {isVotingOnNotes ?
        (
          <VotedNotesProvider
            layer={layer}
            fragranceId={fragrance.id}
          >
            <VoteOnNotesSectionContent
              onLayerChange={setLayer}
            />
          </VotedNotesProvider>
        )
        :
        (
          <NotesPyramid
            layers={layers}
            className={clsx(
              'w-full max-w-4xl self-center',
              'px-1 md:px-0'
            )}
          />
        )
      }

      {isVotingOnNotes && (
        <>
          <div
            ref={utilRef}
            className='flex w-full items-center justify-center self-center'
          >
            <button
              className='bg-sinopia md:text-md cursor-pointer rounded-3xl p-2 px-5 text-sm text-white hover:brightness-95 md:rounded-xl md:px-6'
              onClick={onVoteOnNotes.bind(null, false)}
            >
              Done
            </button>
          </div>

          <Divider
            horizontal
            className='my-3'
          />
        </>
      )}
    </PageCategory>
  )
}

export default FragranceNotesSection