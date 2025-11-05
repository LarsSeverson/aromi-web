import PageCategory from '@/components/PageCategory'
import React from 'react'
import NotesPyramid from './NotesPyramid'
import { type FragranceDetailFragment, NoteLayer } from '@/generated/graphql'
import { useFragranceNotes } from '../hooks/useFragranceNotes'

export interface FragranceNotesSectionProps {
  fragrance: FragranceDetailFragment
}

const FragranceNotesSection = (props: FragranceNotesSectionProps) => {
  const { fragrance } = props

  const { notes: topNotes, isLoading: isTopLoading } = useFragranceNotes(fragrance.id, { layer: NoteLayer.Top })
  const { notes: middleNotes, isLoading: isMiddleLoading } = useFragranceNotes(fragrance.id, { layer: NoteLayer.Middle })
  const { notes: baseNotes, isLoading: isBaseLoading } = useFragranceNotes(fragrance.id, { layer: NoteLayer.Base })

  const layers = [
    {
      layer: NoteLayer.Top,
      notes: topNotes
    },
    {
      layer: NoteLayer.Middle,
      notes: middleNotes
    },
    {
      layer: NoteLayer.Base,
      notes: baseNotes
    }
  ].filter(item => item.notes.length > 0)

  if (isTopLoading || isMiddleLoading || isBaseLoading) return null

  return (
    <PageCategory
      title='Notes'
      emptyTitle='No notes yet'
      emptyButtonText='Vote on Notes'
      isEmpty={layers.length === 0}
      className='flex w-full min-w-0 flex-col'
    >
      <NotesPyramid
        layers={layers}
        className='w-full max-w-4xl self-center'
      />
    </PageCategory>
  )
}

export default FragranceNotesSection
