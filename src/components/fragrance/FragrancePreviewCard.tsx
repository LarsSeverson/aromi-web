import { type Fragrance } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useState } from 'react'
import { VoteButton } from '../common/VoteButton'
import { HiDotsHorizontal } from 'react-icons/hi'
import { Link, type LinkProps } from '@tanstack/react-router'
import BouncyButton from '../common/BouncyButton'
import CollectionPopover from '../popovers/CollectionPopover'
import { INVALID_ID } from '@/common/util-types'
import FragranceImageCard, { type FragranceImageCardImage } from './FragranceImageCard'
import { useMyContext } from '@/contexts/MyContext'

export type CardFragrancePreview = Omit<Pick<Fragrance, 'id' | 'name' | 'brand' | 'votes'>, 'images'> & {
  images: FragranceImageCardImage[]
}

export interface FragrancePreviewCardProps extends LinkProps {
  fragrance: CardFragrancePreview
  className?: string | undefined
  onFragranceVote?: (myVote: boolean | null) => void
}

export const FragrancePreviewCard = (props: FragrancePreviewCardProps) => {
  const myContext = useMyContext()

  const { fragrance, onFragranceVote, className, to, params, ...rest } = props

  const [active, setActive] = useState(false)

  return (
    <Link
      to={to ?? '/fragrance/$id'}
      params={params ?? { id: String(fragrance.id) }}
      className={clsx(
        'group flex flex-col h-full'
      )}
      {...rest}
    >
      <div
        className='group flex-1 flex rounded-2xl relative'
      >
        <FragranceImageCard
          active={active}
          image={fragrance.images.at(0)}
        />
        <div
          className={clsx(
            'absolute w-full h-full',
            active ? 'inline' : 'hidden group-hover:inline'
          )}
        >
          <div
            className='absolute top-3 right-3'
          >
            <CollectionPopover
              userId={myContext.me?.id ?? INVALID_ID}
              fragrance={fragrance}
              onOpenChangeComplete={setActive}
            />
          </div>
          <BouncyButton
            className='rounded-full px-2 py-2 bg-white border-[1px] left-3 bottom-3'
            style={{ position: 'absolute' }}
          >
            <HiDotsHorizontal />
          </BouncyButton>
        </div>
        <VoteButton
          votes={fragrance.votes.voteScore}
          myVote={fragrance.votes.myVote}
          className='absolute bottom-3 right-3 bottom'
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
