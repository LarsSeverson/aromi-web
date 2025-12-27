import { Overlay } from '@/components/Overlay'
import type { AllFragranceNoteFragment, AllNoteFragment } from '@/generated/graphql'
import React from 'react'
import { FaMinus } from 'react-icons/fa'

export interface VotedNotesListItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  note: AllNoteFragment
  fragranceNote?: AllFragranceNoteFragment
  onRemove?: (e: React.MouseEvent) => void
}

const VotedNotesListItem = (props: VotedNotesListItemProps) => {
  const { note, onRemove, ...rest } = props
  const { name, thumbnail } = note

  return (
    <button
      {...rest}
      className='group relative flex cursor-pointer flex-col items-start focus:outline-none'
    >
      <div
        className='outline-sinopia rounded-md p-0.5 group-hover:outline-2'
      >
        <div
          className='aspect-square w-full max-w-32 min-w-28 overflow-hidden rounded-md bg-gray-200'
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

      <div
        className='absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-white shadow-sm hover:bg-gray-300'
      >
        <FaMinus
          className='h-2 w-2 text-black/80'
        />
      </div>

      <span
        className='mt-1 ml-1 block truncate text-sm font-medium text-black/80'
      >
        {name}
      </span>
    </button>
  )
}

export default VotedNotesListItem