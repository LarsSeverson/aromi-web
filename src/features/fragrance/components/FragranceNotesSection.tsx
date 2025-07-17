import PageCategory from '@/components/PageCategory'
import React from 'react'
import NotesPyramid from './NotesPyramid'
import useFragranceNotes from '../hooks/useFragranceNotes'
import { NoteLayer } from '@/generated/graphql'
import { type IFragranceSummary } from '../types'

export interface FragranceNotesSectionProps {
  fragrance: IFragranceSummary
}

const FragranceNotesSection = (props: FragranceNotesSectionProps) => {
  const { fragrance } = props

  const { top, middle, base } = useFragranceNotes(fragrance.id)
  const layers = [
    {
      layer: NoteLayer.Top,
      notes: top
    },
    {
      layer: NoteLayer.Middle,
      notes: middle
    },
    {
      layer: NoteLayer.Base,
      notes: base
    }
  ].filter(item => item.notes.length > 0)

  return (
    <PageCategory
      title='Notes'
      emptyTitle='No notes yet'
      emptyButtonText='Vote on Notes'
      isEmpty={layers.length === 0}
    >
      <div
        className='w-full flex flex-col items-center flex-1'
      >
        <NotesPyramid
          layers={layers}
          className='mx-5 w-full max-w-4xl flex-1'
        />
      </div>
    </PageCategory>
  )
}

export default FragranceNotesSection
