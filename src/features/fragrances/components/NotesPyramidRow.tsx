import React, { useMemo } from 'react'
import NotePreviewCard from './NotePreviewCard'
import clsx from 'clsx'
import type { AllFragranceNoteFragment, NoteLayer } from '@/generated/graphql'

export interface NotesPyramidRowProps extends React.HTMLAttributes<HTMLDivElement> {
  notes: AllFragranceNoteFragment[]
  layer: NoteLayer
}

const NotesPyramidRow = (props: NotesPyramidRowProps) => {
  const { notes, layer, className, ...rest } = props

  const filteredNotes = useMemo(
    () => notes.filter(note => note.votes.score > 0),
    [notes]
  )

  if (notes.length === 0) return null

  return (
    <div
      className={clsx(
        'flex flex-col justify-center',
        className
      )}
      {...rest}
    >
      <h6
        className='text-md font-medium text-black/50'
      >
        {layer}
      </h6>

      <div className='flex flex-row justify-center'>
        <div
          className='flex flex-row overflow-x-auto'
        >
          {filteredNotes
            .map(note => (
              <NotePreviewCard
                key={note.id}
                fragranceNote={note}
                className='w-[100px] md:w-[144px] flex-none'
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NotesPyramidRow
