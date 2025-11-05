import React from 'react'
import NotePreviewCard from './NotePreviewCard'
import clsx from 'clsx'
import type { AllFragranceNoteFragment, NoteLayer } from '@/generated/graphql'

export interface NotesPyramidRowProps extends React.HTMLAttributes<HTMLDivElement> {
  notes: AllFragranceNoteFragment[]
  layer: NoteLayer
}

const NotesPyramidRow = (props: NotesPyramidRowProps) => {
  const { notes, layer, className, ...rest } = props

  return (
    <div
      className={clsx(
        'flex w-full min-w-0 flex-col justify-center',
        className
      )}
      {...rest}
    >
      <h6
        className='text-md font-medium text-black/50'
      >
        {layer}
      </h6>

      <div
        className='flex justify-center'
      >
        <div
          className='flex overflow-x-auto'
        >
          {notes
            .map(note => (
              <NotePreviewCard
                key={note.id}
                fragranceNote={note}
                className='w-full max-w-40 min-w-28'
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NotesPyramidRow
