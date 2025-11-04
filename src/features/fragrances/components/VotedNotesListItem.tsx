import { Overlay } from '@/components/Overlay'
import type { AllFragranceNoteFragment, AllNoteFragment } from '@/generated/graphql'
import React from 'react'

export interface VotedNotesListItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  note: AllNoteFragment
  fragranceNote?: AllFragranceNoteFragment
}

const VotedNotesListItem = (props: VotedNotesListItemProps) => {
  const { note, ...rest } = props
  const { name, thumbnail } = note

  return (
    <button
      {...rest}
      className='group cursor-pointer flex flex-col items-start focus:outline-none'
    >
      <div
        className='p-0.5 group-hover:outline-2 outline-sinopia rounded-md'
      >
        <div
          className='aspect-square max-w-32 min-w-28 w-full rounded-md overflow-hidden bg-gray-200'
        >
          {thumbnail?.url != null && (
            <div
              className='relative'
            >
              <img
                src={thumbnail.url}
                className='object-cover'
              />

              <Overlay />
            </div>
          )}
        </div>
      </div>

      <span
        className='mt-1 ml-1 text-sm font-medium text-black/80 block truncate'
      >
        {name}
      </span>
    </button>
  )
}

export default VotedNotesListItem
