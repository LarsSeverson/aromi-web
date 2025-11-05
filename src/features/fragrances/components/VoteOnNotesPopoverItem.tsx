import type { AllNoteFragment } from '@/generated/graphql'
import React from 'react'
import clsx from 'clsx'
import { FaCheck } from 'react-icons/fa'
import { useVotedNotesContext } from '../contexts/VotedNotesContext'
import { MAX_NOTE_VOTES } from '../utils/constants'

export interface VoteOnNotesPopoverItemProps {
  note: AllNoteFragment
}

const VoteOnNotesPopoverItem = (props: VoteOnNotesPopoverItemProps) => {
  const { note } = props
  const { id, name, thumbnail } = note

  const { votedNotesMap, currentVotedSize, voteOnNote } = useVotedNotesContext()

  const isSelected = votedNotesMap.has(id)
  const isDisabled = !isSelected && currentVotedSize >= MAX_NOTE_VOTES

  return (
    <button
      type='button'
      disabled={isDisabled}
      className={clsx(
        'grid h-full w-full grid-cols-[0.75rem_1fr] items-center gap-2 pr-8 pl-4',
        'rounded-md',
        isDisabled ? 'opacity-50' : 'hover:bg-empty cursor-pointer'
      )}
      onClick={voteOnNote.bind(null, note)}
    >
      <div
        className={clsx(
          'col-start-1 text-black/80',
          !isSelected && 'hidden'
        )}
      >
        <FaCheck
          size={12}
        />
      </div>

      <div
        className='col-start-2'
      >
        <div
          className='flex h-11 items-center gap-2 rounded-md p-1'
        >
          <div
            className='bg-empty z-10 flex aspect-square h-full items-center justify-center overflow-hidden rounded-md'
          >
            {thumbnail?.url != null && (
              <img
                src={thumbnail.url}
                alt={name}
                className='object-cover'
              />
            )}
          </div>

          <span
            className='truncate text-sm font-semibold'
          >
            {name}
          </span>
        </div>
      </div>
    </button>
  )
}

export default VoteOnNotesPopoverItem
