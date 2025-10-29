import type { FragrancePreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
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
}

export const FragrancePreviewCard = (props: FragrancePreviewCardProps) => {
  const { fragrance, ...rest } = props
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
    }
  )

  const handleOnVote = (vote: number) => {
    handleVoteOnFragrance(vote)
  }

  useEffect(() => {
    if (fragrance.name === 'Of the Immortals') {
      console.log(fragrance.votes)
    }
  }, [fragrance])

  return (
    <div
      className={clsx(
        'group hover:cursor-pointer relative flex flex-col h-full'
      )}
      onMouseEnter={setIsLinkFocused.bind(null, false)}
    >
      <div
        className='flex-1 flex flex-col rounded-2xl relative pointer-events-none'
      >
        <Link
          to='/fragrances/$id'
          params={{ id }}
          className='flex flex-1 rounded-2xl pointer-events-auto'
          onFocus={handleLinkFocus}
          tabIndex={0}
          {...rest}
        >
          <FragranceImageCard
            isActive={isLinkFocused || isSubPopoverOpen}
            fragrance={fragrance}
          />
        </Link>

        <div
          className={clsx(
            'absolute inset-0 opacity-0 transition-opacity pointer-events-none',
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
            className='pointer-events-auto'
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
            className='absolute bottom-3 right-3 z-10'
            onVote={handleOnVote}
          />
        </div>
      </div>

      <div
        className='px-1 pt-2'
      >
        <div
          className='flex flex-row'
        >
          <h5
            className='flex-1 truncate font-semibold text-sm'
          >
            {name}
          </h5>
        </div>

        <h6
          className='truncate text-sm'
        >
          {brand.name}
        </h6>
      </div>
    </div>
  )
}
