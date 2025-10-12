import React, { useMemo } from 'react'
import NotePreviewCard, { type CardNotePreview } from './NotePreviewCard'
import { type NoteLayer } from '@/generated/graphql'
import clsx from 'clsx'

export interface NotesPyramidRowProps extends React.HTMLAttributes<HTMLDivElement> {
  notes: CardNotePreview[]
  layer: NoteLayer
}

const NotesPyramidRow = (props: NotesPyramidRowProps) => {
  const { notes, layer, className, ...rest } = props

  const filteredNotes = useMemo(() => notes.filter(note => note.votes.voteScore > 0), [notes])

  if (notes.length === 0) {
    return null
  }

  return (
    <div
      className={clsx(
        'flex flex-col justify-center',
        className
      )}
      {...rest}
    >
      <h6
        className='font-pd opacity-60'
      >
        {layer}
      </h6>
      <div className='flex flex-row justify-center'>
        <div
          className='flex flex-row overflow-x-auto'
        >
          {filteredNotes
            .map((note, index) => (
              <NotePreviewCard
                key={`${note.id}-${index}`}
                note={note}
                className='w-[100px] md:w-[144px] flex-none'
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NotesPyramidRow
