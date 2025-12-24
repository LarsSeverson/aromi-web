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
        'gap-1 md:gap-2',
        className
      )}
      {...rest}
    >
      <h6
        className='md:text-md text-xs font-medium text-black/50'
      >
        {layer}
      </h6>

      <div
        className='flex justify-center'
      >
        <div
          className={clsx(
            'flex w-full overflow-x-auto pb-1',
            'justify-center'
          )}
        >
          {notes.map(note => (
            <NotePreviewCard
              key={note.id}
              fragranceNote={note}
              className='w-24 min-w-24 md:w-full md:max-w-40 md:min-w-28'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotesPyramidRow