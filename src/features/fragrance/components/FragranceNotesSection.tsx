import PageCategory from '@/components/PageCategory'
import React from 'react'
import NotesPyramid from './NotesPyramid'
import { type FragrancePageFragrance } from '../pages/FragrancePage'
import useFragranceNotes from '../hooks/useFragranceNotes'
import { NoteLayer } from '@/generated/graphql'

export interface FragranceNotesSectionProps {
  fragrance: FragrancePageFragrance
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
    >
      <div className='w-full flex flex-col items-center'>
        <NotesPyramid
          layers={layers}
          className='mx-5 w-full max-w-4xl'
        />
      </div>
    </PageCategory>
  )
}

export default FragranceNotesSection
