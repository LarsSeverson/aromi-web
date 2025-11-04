import type { AllAccordFragment } from '@/generated/graphql'
import React from 'react'
import { useVotedAccordsContext } from '../contexts/VotedAccordsContext'
import clsx from 'clsx'
import { FaCheck } from 'react-icons/fa'
import { MAX_ACCORD_VOTES } from '../utils/constants'

export interface VoteOnAccordsPopoverItemProps {
  accord: AllAccordFragment
}

const VoteOnAccordsPopoverItem = (props: VoteOnAccordsPopoverItemProps) => {
  const { accord } = props
  const { id, name, color } = accord

  const { votedAccordsMap, currentVotedSize, voteOnAccord } = useVotedAccordsContext()

  const isSelected = votedAccordsMap.has(id)
  const isDisabled = !isSelected && currentVotedSize >= MAX_ACCORD_VOTES

  return (
    <button
      type='button'
      disabled={isDisabled}
      className={clsx(
        'pl-4 pr-8 grid-cols-[0.75rem_1fr] grid items-center gap-2 w-full h-full',
        'rounded-md',
        isDisabled ? 'opacity-50' : 'cursor-pointer hover:bg-empty'
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
