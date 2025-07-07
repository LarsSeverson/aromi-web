import { type Fragrance } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useState } from 'react'
import { VoteButton } from '@/components/VoteButton'
import { Link, type LinkProps } from '@tanstack/react-router'
import CollectionPopover from '@/features/collection/components/CollectionPopover'
import { INVALID_ID } from '@/common/util-types'
import FragranceImageCard, { type FragranceImageCardImage } from './FragranceImageCard'
import { useMyContext } from '@/features/user/contexts/MyContext'
import { type FlattenEdges } from '@/common/pagination'
import { useVoteOnFragrance } from '@/features/fragrance/hooks/useVoteOnFragrance'
import { ResultAsync } from 'neverthrow'
import { type ApolloError } from '@apollo/client'
import ShareFragrancePopover from '@/features/fragrance/components/ShareFragrancePopover'

export type FragrancePreviewCardFragrance = Pick<FlattenEdges<Fragrance>, 'id' | 'name' | 'brand' | 'votes'> & {
  images: FragranceImageCardImage[]
}

export interface FragrancePreviewCardProps extends LinkProps {
  fragrance: FragrancePreviewCardFragrance
  className?: string | undefined
}

export const FragrancePreviewCard = (props: FragrancePreviewCardProps) => {
  const myContext = useMyContext()
  const { voteOnFragrance } = useVoteOnFragrance()

  const { fragrance, className, to, params, ...rest } = props

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [isLinkFocused, setIsLinkFocused] = useState(false)

  const handleLinkFocus = () => {
    setIsLinkFocused(true)
  }

  const handleLinkBlur = () => {
    // setIsLinkFocused(false)
  }

  const handleVoteOnFragrance = async (vote: boolean | null) => {
    await ResultAsync
      .fromPromise(
        voteOnFragrance({
          variables: {
            input: { fragranceId: fragrance.id, vote }
          }
        }),
        error => error as ApolloError
      )
      .match(
        _ => {},
        error => {
          console.log(error)
        }
      )
  }

  return (
    <div
      className={clsx(
        'group hover:cursor-pointer relative flex flex-col h-full',
        className
      )}
      onMouseEnter={() => { setIsLinkFocused(false) }}
    >
      <div
        className='flex-1 flex flex-col rounded-2xl relative pointer-events-none'
      >
        <Link
          to={to ?? '/fragrance/$id'}
          params={params ?? { id: String(fragrance.id) }}
          className='flex flex-1 rounded-2xl pointer-events-auto'
          onFocus={handleLinkFocus}
          onBlur={handleLinkBlur}
          tabIndex={0}
          {...rest}
        >
          <FragranceImageCard
            active={isLinkFocused || isPopoverOpen}
            image={fragrance.images.at(0)}
          />
        </Link>
        <div
          className={clsx(
            'absolute inset-0 opacity-0 transition-opacity pointer-events-none',
            'group-hover:opacity-100 group-focus:opacity-100',
            (isLinkFocused || isPopoverOpen) && 'opacity-100'
          )}
        >
          <div
            className='pointer-events-auto'
          >
            <CollectionPopover
              userId={myContext.me?.id ?? INVALID_ID}
              fragrance={fragrance}
              onOpenChangeComplete={setIsPopoverOpen}
            />
          </div>
          <div
            className='pointer-events-auto'
          >
            <ShareFragrancePopover
              userId={myContext.me?.id ?? INVALID_ID}
              fragrance={fragrance}
              onOpenChangeComplete={setIsPopoverOpen}
            />
          </div>
        </div>
        <div
          className='pointer-events-auto'
        >
          <VoteButton
            votes={fragrance.votes.voteScore}
            myVote={fragrance.votes.myVote}
            className='absolute bottom-3 right-3 z-10'
            onVote={handleVoteOnFragrance}
          />
        </div>
      </div>

      <div className='px-1 pt-2'>
        <div className='flex flex-row'>
          <h5 className='flex-1 truncate font-semibold text-sm'>
            {fragrance.name}
          </h5>
        </div>
        <h6 className='truncate text-sm'>
          {fragrance.brand}
        </h6>
      </div>
    </div>
  )
}
