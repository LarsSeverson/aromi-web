import React, { useMemo, useState } from 'react'
import clsx from 'clsx'
import Divider from './Divider'
import type { AllVoteInfoFragment } from '@/generated/graphql'
import { VOTE_TYPES } from '@/utils/util'
import { formatNumber } from '@/utils/string-utils'
import { TbArrowBigDown, TbArrowBigDownFilled, TbArrowBigUp, TbArrowBigUpFilled } from 'react-icons/tb'
import AuthButton from '@/features/auth/components/AuthButton'

export interface VoteButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  votes: AllVoteInfoFragment
  onVote?: (vote: number) => void | Promise<void>
}

export const VoteButtonGroup = (props: VoteButtonGroupProps) => {
  const { votes, onVote, className, ...rest } = props
  const { score, myVote } = votes
  const myVoteNormalized = myVote ?? VOTE_TYPES.NOVOTE

  const initialScore = useMemo(
    () => (score - myVoteNormalized),
    [score, myVoteNormalized]
  )

  const [currentVote, setCurrentVote] = useState(myVoteNormalized)
  const [userHasInteracted, setUserHasInteracted] = useState(false)

  if (!userHasInteracted && myVoteNormalized !== currentVote) {
    setCurrentVote(myVoteNormalized)
  }

  const currentScore = initialScore + currentVote

  const onFor = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setUserHasInteracted(true)
    setCurrentVote(prev => {
      const newValue = prev === VOTE_TYPES.UPVOTE ? VOTE_TYPES.NOVOTE : VOTE_TYPES.UPVOTE
      onVote?.(newValue)
      return newValue
    })
  }

  const onAgainst = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setUserHasInteracted(true)
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
        'flex flex-row items-center rounded-full border',
        getBackgroundColor(),
        className
      )}
      {...rest}
    >
      <AuthButton
        className={clsx(
          'flex aspect-square cursor-pointer items-center justify-center rounded-full',
          'p-1.5 md:p-2',
          'hover:bg-black/10',
          currentVote === VOTE_TYPES.NOVOTE ? 'hover:text-sinopia' : 'text-white'
        )}
        onClick={onFor}
      >
        {currentVote === VOTE_TYPES.UPVOTE
          ? (
            <TbArrowBigUpFilled
              className='size-4.5'
            />
          )
          : (
            <TbArrowBigUp
              className='size-4.5'
            />
          )
        }
      </AuthButton>

      <span
        className={clsx(
          'flex items-center font-semibold',
          'mx-1 text-xs md:mr-2 md:text-sm',
          currentVote === VOTE_TYPES.NOVOTE ? '' : 'text-white'
        )}
      >
        {currentScore === 0 ? 'vote' : formatNumber(currentScore)}
      </span>

      <div
        className='py-2 md:px-1'
      >
        <Divider
          className={clsx(
            'h-3 md:h-4',
            currentVote === VOTE_TYPES.NOVOTE ? '' : 'bg-white/50'
          )}
        />
      </div>

      <AuthButton
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={clsx(
          'flex aspect-square cursor-pointer items-center justify-center rounded-full',
          'p-1.5 md:p-2',
          ' hover:bg-black/10',
          currentVote === VOTE_TYPES.NOVOTE ? 'hover:text-som' : 'text-white'
        )}
        onClick={onAgainst}
      >
        {currentVote === VOTE_TYPES.DOWNVOTE
          ?
          (
            <TbArrowBigDownFilled
              className='size-4.5'
            />
          )
          : (
            <TbArrowBigDown
              className='size-4.5'
            />
          )
        }
      </AuthButton>
    </div>
  )
}

export default VoteButtonGroup