import type { AllAccordFragment } from '@/generated/graphql'
import React from 'react'
import { useVotedAccordsContext } from '../contexts/VotedAccordsContext'
import clsx from 'clsx'
import { FaCheck } from 'react-icons/fa'

export interface VoteOnAccordsPopoverItemProps {
  accord: AllAccordFragment
}

const VoteOnAccordsPopoverItem = (props: VoteOnAccordsPopoverItemProps) => {
  const { accord } = props
  const { id, name, color } = accord

  const { votedAccordsMap, voteOnAccord } = useVotedAccordsContext()
  const isSelected = votedAccordsMap.has(id)

  return (
    <button
      type='button'
      className={clsx(
        'pl-4 pr-8 grid-cols-[0.75rem_1fr] grid items-center gap-2',
        'border rounded-md border-transparent! hover:bg-surface hover:border-surface2!'
      )}
      onClick={voteOnAccord.bind(null, accord)}
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
          className='flex items-center gap-2 h-11 rounded-md p-1'
        >
          <div
            className='h-full aspect-square flex items-center justify-center rounded-md overflow-hidden z-10'
            style={{ backgroundColor: color }}
          />

          <span
            className='font-semibold text-sm truncate'
          >
            {name}
          </span>
        </div>
      </div>
    </button>
  )
}

export default VoteOnAccordsPopoverItem
