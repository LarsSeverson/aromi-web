import React, { useState } from 'react'
import clsx from 'clsx'
import Divider from './Divider'
import type { AllVoteInfoFragment } from '@/generated/graphql'
import { VOTE_TYPES } from '@/utils/util'
import { formatNumber } from '@/utils/string-utils'
import { TbArrowBigDown, TbArrowBigDownFilled, TbArrowBigUp, TbArrowBigUpFilled } from 'react-icons/tb'

export interface VoteButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  votes: AllVoteInfoFragment
  onVote?: (vote: number) => void | Promise<void>
}

export const VoteButtonGroup = (props: VoteButtonGroupProps) => {
  const { votes, onVote, className, ...rest } = props
  const { score, myVote } = votes

  const [initialScore] = useState(score - (myVote ?? VOTE_TYPES.NOVOTE))
  const [currentVote, setCurrentVote] = useState(myVote ?? VOTE_TYPES.NOVOTE)

  const currentScore = initialScore + currentVote

  const onFor = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentVote(prev => {
      const newValue = prev === VOTE_TYPES.UPVOTE ? VOTE_TYPES.NOVOTE : VOTE_TYPES.UPVOTE
      onVote?.(newValue)
      return newValue
    })
  }

  const onAgainst = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentVote(prev => {
      const newValue = prev === VOTE_TYPES.DOWNVOTE ? VOTE_TYPES.NOVOTE : VOTE_TYPES.DOWNVOTE
      onVote?.(newValue)
      return newValue
    })
  }

  const getBackgroundColor = () => {
    if (currentVote === VOTE_TYPES.UPVOTE) return 'bg-sinopia border-sinopia'
    if (currentVote === VOTE_TYPES.DOWNVOTE) return 'bg-som border-som'
    return 'bg-white border-gray-200'
  }

  return (
    <div
      className={clsx(
        className,
        'flex flex-row rounded-full border',
        getBackgroundColor()
      )}
      {...rest}
    >
      <button
        className={clsx(
          'p-2 rounded-full aspect-square cursor-pointer',
          'hover:bg-black/10',
          'flex items-center justify-center',
          currentVote === VOTE_TYPES.NOVOTE ? 'hover:text-sinopia' : 'text-white'
        )}
        onClick={onFor}
      >
        {currentVote === VOTE_TYPES.UPVOTE
          ? (
            <TbArrowBigUpFilled
              size={18}
            />
          )
          : (
            <TbArrowBigUp
              size={18}
            />
          )
        }
      </button>

      <span
        className={clsx(
          'font-semibold text-sm flex items-center mr-2',
          currentVote === VOTE_TYPES.NOVOTE ? '' : 'text-white'
        )}
      >
        {currentScore === 0 ? 'vote' : formatNumber(currentScore)}
      </span>

      <div
        className='px-1 py-2'
      >
        <Divider
          className={clsx(
            currentVote === VOTE_TYPES.NOVOTE ? '' : 'bg-white/50'
          )}
        />
      </div>

      <button
        className={clsx(
          'p-2 rounded-full aspect-square cursor-pointer',
          ' hover:bg-black/10',
          'flex items-center justify-center',
          currentVote === VOTE_TYPES.NOVOTE ? 'hover:text-som' : 'text-white'
        )}
        onClick={onAgainst}
      >
        {currentVote === VOTE_TYPES.DOWNVOTE
          ?
          (
            <TbArrowBigDownFilled
              size={18}
            />
          )
          : (
            <TbArrowBigDown
              size={18}
            />
          )
        }
      </button>
    </div>
  )
}
