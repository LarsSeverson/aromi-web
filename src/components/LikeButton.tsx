import AuthButton from '@/features/auth/components/AuthButton'
import type { AllVoteInfoFragment } from '@/generated/graphql'
import { formatNumber } from '@/utils/string-utils'
import { VOTE_TYPES } from '@/utils/util'
import clsx from 'clsx'
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export interface LikeButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  votes: AllVoteInfoFragment
  onVote?: (vote: number) => void | Promise<void>
}

export const LikeButton = (props: LikeButtonProps) => {
  const {
    votes,
    onVote,

    className,
    ...rest
  } = props

  const { score, myVote } = votes
  const myVoteNormalized = myVote ?? VOTE_TYPES.NOVOTE

  const initialScore = React.useMemo(
    () => (score - myVoteNormalized),
    [score, myVoteNormalized]
  )

  const [currentVote, setCurrentVote] = React.useState(myVoteNormalized)
  const [userHasInteracted, setUserHasInteracted] = React.useState(false)

  if (!userHasInteracted && myVoteNormalized !== currentVote) {
    setCurrentVote(myVoteNormalized)
  }

  const currentScore = initialScore + currentVote

  const onLikeClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setUserHasInteracted(true)
    setCurrentVote(prev => {
      const newValue = prev === VOTE_TYPES.UPVOTE ? VOTE_TYPES.NOVOTE : VOTE_TYPES.UPVOTE
      onVote?.(newValue)
      return newValue
    })
  }

  const getBackgroundColor = () => {
    if (currentVote === VOTE_TYPES.UPVOTE) return 'text-sinopia'
    return 'border-black/10'
  }

  return (
    <div
      className={clsx(
        className,
        'flex items-center'
      )}
      {...rest}
    >
      <AuthButton
        className={clsx(
          'flex aspect-square cursor-pointer items-center justify-center rounded-full',
          'p-1.5 hover:bg-gray-200 md:p-2',
          getBackgroundColor(),
          currentVote === VOTE_TYPES.NOVOTE && 'hover:text-sinopia text-gray-500'
        )}
        onClick={onLikeClick}
      >
        {currentVote === VOTE_TYPES.UPVOTE
          ? (
            <FaHeart
              className='size-4'
            />
          )
          : (
            <FaRegHeart
              className='size-4'
            />
          )
        }
      </AuthButton>

      <span
        className={clsx(
          'flex items-center',
          'mx-px text-xs font-semibold text-gray-500'
        )}
      >
        {formatNumber(currentScore)}
      </span>
    </div>
  )
}
