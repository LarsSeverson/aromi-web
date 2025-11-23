import type { FragrancePreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useState } from 'react'
import { VoteButtonGroup } from '@/components/VoteButtonGroup'
import { Link } from '@tanstack/react-router'
import FragranceImageCard from './FragranceImageCard'
import { useVoteOnFragrance } from '../hooks/useVoteOnFragrance'
import ShareFragrancePopover from './ShareFragrancePopover'
import SaveFragrancePopover from './SaveFragrancePopover'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useDebounce } from '@/hooks/useDebounce'

export interface FragrancePreviewCardProps {
  fragrance: FragrancePreviewFragment
  isDisabled?: boolean
}

export const FragrancePreviewCard = (props: FragrancePreviewCardProps) => {
  const { fragrance, isDisabled = false, ...rest } = props
  const { id, name, brand, votes } = fragrance

  const { toastError } = useToastMessage()

  const { vote } = useVoteOnFragrance()

  const [isSubPopoverOpen, setIsSubPopoverOpen] = useState(false)
  const [isLinkFocused, setIsLinkFocused] = useState(false)

  const handleLinkFocus = () => {
    setIsLinkFocused(true)
  }

  const handleVoteOnFragrance = useDebounce(
    async (userVote: number) => {
      const res = await vote({ fragranceId: id, vote: userVote })

      res.match(
        () => {
          //
        },
        () => {
          toastError('', 'Something went wrong')
        }
      )
    },
    150
  )

  const handleOnVote = (vote: number) => {
    handleVoteOnFragrance(vote)
  }

  return (
    <div
      className={clsx(
        'group relative flex h-full flex-col hover:cursor-pointer'
      )}
      onMouseEnter={setIsLinkFocused.bind(null, false)}
    >
      <div
        className='pointer-events-none relative flex flex-1 flex-col rounded-2xl'
      >
        <Link
          to='/fragrances/$id'
          params={{ id }}
          className='pointer-events-auto flex flex-1 rounded-2xl'
          onClick={handleLinkFocus}
          tabIndex={0}
          disabled={isDisabled}
          {...rest}
        >
          <FragranceImageCard
            isActive={isLinkFocused || isSubPopoverOpen}
            fragrance={fragrance}
          />
        </Link>

        <div
          className={clsx(
            isDisabled && 'hidden',
            'pointer-events-none absolute inset-0 opacity-0 transition-opacity',
            'group-hover:opacity-100 group-focus:opacity-100',
            (isLinkFocused || isSubPopoverOpen) && 'opacity-100'
          )}
        >
          <div
            className='pointer-events-auto absolute top-3 right-3'
          >
            <SaveFragrancePopover
              fragrance={fragrance}
              onOpenChangeComplete={setIsSubPopoverOpen}
            />
          </div>

          <div
            className='pointer-events-auto absolute bottom-3 left-3'
          >
            <ShareFragrancePopover
              fragrance={fragrance}
              onOpenChangeComplete={setIsSubPopoverOpen}
            />
          </div>
        </div>

        <div
          className='pointer-events-auto'
        >
          <VoteButtonGroup
            votes={votes}
            className='absolute right-3 bottom-3 z-10'
            onVote={handleOnVote}
          />
        </div>
      </div>

      <Link
        to='/fragrances/$id'
        params={{ id }}
        className='px-1 pt-2'
        disabled={isDisabled}
      >
        <div
          className='flex flex-row'
        >
          <h5
            className='flex-1 truncate text-sm font-semibold'
          >
            {name}
          </h5>
        </div>

        <h6
          className='truncate text-sm'
        >
          {brand.name}
        </h6>
      </Link>
    </div>
  )
}
