import { Overlay } from '@/components/Overlay'
import type { AllFragranceNoteFragment, AllNoteFragment } from '@/generated/graphql'
import React from 'react'
import { FaMinus } from 'react-icons/fa'
import clsx from 'clsx'

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
      className={clsx(
        'group relative flex cursor-pointer flex-col items-start focus:outline-none'
      )}
    >
      <div
        className={clsx(
          'outline-sinopia rounded-md p-0.5 group-hover:outline-2'
        )}
      >
        <div
          className={clsx(
            'aspect-square overflow-hidden rounded-md bg-gray-200',
            'w-20 min-w-20',
            'md:w-32 md:min-w-28'
          )}
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
        className={clsx(
          'absolute flex items-center justify-center rounded-full bg-gray-200 text-white shadow-sm hover:bg-gray-300',
          '-top-1 -right-1 h-4 w-4',
          'md:-top-1.5 md:-right-1.5 md:h-5 md:w-5'
        )}
      >
        <FaMinus
          className='h-1.5 w-1.5 text-black/80 md:h-2 md:w-2'
        />
      </div>

      <span
        className={clsx(
          'block truncate font-medium text-black/80',
          'mt-0.5 ml-0.5 text-[10px]',
          'md:mt-1 md:ml-1 md:text-sm'
        )}
      >
        {name}
      </span>
    </button>
  )
}

export default VotedNotesListItem