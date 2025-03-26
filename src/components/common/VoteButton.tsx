import React, { useMemo, useState, useCallback } from 'react'
import BouncyButton from '../BouncyButton'
import Divider from '../Divider'
import clsx from 'clsx'
import { DislikeIcon, FillDislikeIcon, FillLikeIcon, LikeIcon } from './Icons'
import { formatNumber } from '@/common/string-utils'

export interface VoteButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  votes: number
  myVote?: boolean | undefined

  onRenderForIcon?: (active: boolean) => React.ReactNode
  onRenderAgainstIcon?: (active: boolean) => React.ReactNode
  onVote?: (vote: boolean | null) => void
}

export const VoteButton = (props: VoteButtonProps) => {
  const {
    votes,
    myVote = null,
    onRenderForIcon,
    onRenderAgainstIcon,
    onVote,
    className,
    ...rest
  } = props

  const [curVote, setCurVote] = useState<boolean | null>(myVote)

  const curVotes = useMemo(() => {
    const getVoteValue = (vote: boolean | null) => vote === true ? 1 : vote === false ? -1 : 0

    return votes - getVoteValue(myVote) + getVoteValue(curVote)
  }, [votes, myVote, curVote])

  const onFor = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const newVote = (curVote ?? false) ? null : true
    setCurVote(newVote)
    onVote?.(newVote)
  }, [curVote, onVote])

  const onAgainst = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const newVote = curVote === false ? null : false
    setCurVote(newVote)
    onVote?.(newVote)
  }, [curVote, onVote])

  return (
    <div
      className={clsx(
        'flex flex-row rounded-full border-[1px]',
        curVote == null ? 'bg-white border-gray-200' : curVote ? 'bg-sinopia border-sinopia' : 'bg-som border-som',
        className)}
      {...rest}
    >
      <BouncyButton
        className={clsx(
          'px-0 py-0 rounded-full aspect-square',
          'hover:backdrop-brightness-95',
          curVote !== null ? 'text-white' : 'hover:text-sinopia'
        )}
        style={{ width: '2rem' }}
        onClick={onFor}
      >
        {curVote === true ? <FillLikeIcon /> : <LikeIcon />}
      </BouncyButton>
      <p
        className={clsx(
          'font-semibold text-sm flex items-center',
          curVote !== null ? 'text-white' : ''
        )}
      >
        {curVotes === 0 ? 'vote' : formatNumber(curVotes)}
      </p>
      <div className='py-2 pl-2'>
        <Divider />
      </div>
      <BouncyButton
        className={clsx(
          'px-0 rounded-full aspect-square',
          curVote !== null ? 'text-white' : 'hover:text-som'
        )}
        style={{ width: '2rem' }}
        onClick={onAgainst}
      >
        {curVote === false ? <FillDislikeIcon /> : <DislikeIcon />}
      </BouncyButton>
    </div>
  )
}
