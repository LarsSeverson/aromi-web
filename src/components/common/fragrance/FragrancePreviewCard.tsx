import BouncyButton from '@/components/BouncyButton'
import { type FragranceImage, type Fragrance } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useCallback } from 'react'
import { Link } from 'react-router'
import { VoteButton } from '../VoteButton'

export type CardFragrancePreview = Omit<Pick<Fragrance, 'id' | 'name' | 'brand' | 'votes'>, 'images'> & {
  images: FragranceImage[]
}

export interface FragrancePreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  fragrance: CardFragrancePreview
  onFragranceVote?: (myVote: boolean | null) => void
}

export const FragrancePreviewCard = (props: FragrancePreviewCardProps) => {
  const { fragrance, onFragranceVote, className, ...rest } = props
  const votes = fragrance.votes.likes - fragrance.votes.dislikes

  const handleVote = useCallback((myVote: boolean | null) => {
    onFragranceVote?.(myVote)
  }, [onFragranceVote])

  return (
    <div
      className={clsx('flex flex-col', 'h-full')}
      {...rest}
    >
      <Link
        to='/'
        className='flex-1 bg-gray-200 rounded-2xl px-0 py-0 relative'
      >
        {}
        <VoteButton
          votes={0}
          className='absolute'
          style={{ right: 10, bottom: 10 }}
        />
      </Link>
      <div className='px-1 pt-2 pb-4'>
        <div
          className='flex flex-row'
        >
          <Link
            to='/'
            className='flex-1 truncate font-semibold text-sm'
          >
            {fragrance.name}
          </Link>
        </div>
        <Link
          to='/'
          className='truncate text-sm'
        >
          {fragrance.brand}
        </Link>
      </div>
    </div>
  )
}
