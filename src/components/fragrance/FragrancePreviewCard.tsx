import { type Fragrance } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useState } from 'react'
import { VoteButton } from '../common/VoteButton'
import { Link, type LinkProps } from '@tanstack/react-router'
import CollectionPopover from '../popovers/CollectionPopover'
import { INVALID_ID } from '@/common/util-types'
import FragranceImageCard, { type FragranceImageCardImage } from './FragranceImageCard'
import { useMyContext } from '@/contexts/MyContext'
import { type FlattenEdges } from '@/common/pagination'
import { useVoteOnFragrance } from '@/hooks/useVoteOnFragrance'
import { ResultAsync } from 'neverthrow'
import { type ApolloError } from '@apollo/client'
import ShareFragrancePopover from '../popovers/ShareFragrancePopover'

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

  const [hasFocus, setHasFocus] = useState(false)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const isOverlayVisible = hasFocus || isPopoverOpen

  const handleFocus = () => { setHasFocus(true) }
  const handleBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
    const insideCard = e.currentTarget.contains(e.relatedTarget)
    if (!insideCard) { setHasFocus(false) }
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
    <Link
      to={to ?? '/fragrance/$id'}
      params={params ?? { id: String(fragrance.id) }}
      className={clsx(
        'group flex flex-col h-full'
      )}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    >
      <div
        className='group flex-1 flex rounded-2xl relative'
      >
        <FragranceImageCard
          active={isOverlayVisible}
          image={fragrance.images.at(0)}
        />
        <div
          className={clsx(
            'absolute w-full h-full',
            isOverlayVisible ? 'inline' : 'hidden group-hover:inline'
          )}
        >
          <div
            className='absolute top-3 right-3'
          >
            <CollectionPopover
              userId={myContext.me?.id ?? INVALID_ID}
              fragrance={fragrance}
              onOpenChangeComplete={setIsPopoverOpen}
            />
          </div>
          <ShareFragrancePopover
            userId={myContext.me?.id ?? INVALID_ID}
            fragrance={fragrance}
            onOpenChangeComplete={setIsPopoverOpen}
          />
        </div>
        <VoteButton
          votes={fragrance.votes.voteScore}
          myVote={fragrance.votes.myVote}
          className='absolute bottom-3 right-3 bottom'
          onVote={handleVoteOnFragrance}
        />
      </div>
      <div className='px-1 pt-2'>
        <div
          className='flex flex-row'
        >
          <h5
            className='flex-1 truncate font-semibold text-sm'
          >
            {fragrance.name}
          </h5>
        </div>
        <h6
          className='truncate text-sm'
        >
          {fragrance.brand}
        </h6>
      </div>
    </Link>
  )
}
