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
        'grid h-full w-full grid-cols-[0.75rem_1fr] items-center gap-2 pr-8 pl-4',
        'rounded-md',
        isDisabled ? 'opacity-50' : 'hover:bg-empty cursor-pointer'
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
          className='flex h-11 items-center gap-2 rounded-md p-1'
        >
          <div
            className='z-10 flex aspect-square h-full items-center justify-center overflow-hidden rounded-md'
            style={{ backgroundColor: color }}
          />

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

export default VoteOnAccordsPopoverItem
