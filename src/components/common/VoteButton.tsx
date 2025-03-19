import React, { useMemo, useState, useCallback } from 'react'
import { FaRegHeart } from 'react-icons/fa6'
import BouncyButton from '../BouncyButton'
import Divider from '../Divider'
import clsx from 'clsx'
import { DislikeIcon, LikeIcon } from './Icons'

export interface VoteButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  votes: number
  size?: number | undefined
  myVote?: boolean | undefined

  onRenderForIcon?: (active: boolean) => React.ReactNode
  onRenderAgainstIcon?: (active: boolean) => React.ReactNode
  onVote?: (vote: boolean | null) => void
}

export const VoteButton = (props: VoteButtonProps) => {
  const {
    votes,
    size = 14,
    myVote = null,
    onRenderForIcon,
    onRenderAgainstIcon,
    onVote,
    className,
    ...rest
  } = props

  const [curVote, setCurVote] = useState<boolean | null>(myVote)
  const forActive = curVote === true
  const againstActive = curVote === false

  const curVotes = useMemo(() => {
    const getVoteValue = (vote: boolean | null) => vote === true ? 1 : vote === false ? -1 : 0

    return votes - getVoteValue(myVote) + getVoteValue(curVote)
  }, [votes, myVote, curVote])

  const onFor = useCallback(() => {
    const newVote = (curVote ?? false) ? null : true
    setCurVote(newVote)
    onVote?.(newVote)
  }, [curVote, onVote])

  const onAgainst = useCallback(() => {
    const newVote = curVote === false ? null : false
    setCurVote(newVote)
    onVote?.(newVote)
  }, [curVote, onVote])

  return (
    <div
      className={clsx(`
        flex 
        flex-row
        rounded-full
        bg-white
      `,
      className)}
      {...rest}
    >
      <BouncyButton
        className='px-0 py-0 rounded-full aspect-square'
        style={{ width: '2rem' }}
      >
        <LikeIcon />
      </BouncyButton>
      <div className='py-2'>
        <Divider />
      </div>
      <BouncyButton
        className='px-0 rounded-full aspect-square'
        style={{ width: '2rem' }}
      >
        <DislikeIcon />
      </BouncyButton>
    </div>
  )
}
