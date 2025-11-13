import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import FragranceImageCard from './FragranceImageCard'
import SaveFragrancePopover from './SaveFragrancePopover'
import ShareFragrancePopover from './ShareFragrancePopover'
import CollectionItemOptionsPopover from './CollectionItemOptionsPopover'
import { LuGrip } from 'react-icons/lu'

export interface CollectionItemCardProps {
  item: AllFragranceCollectionItemFragment
  isDragging?: boolean
}

const CollectionItemCard = (props: CollectionItemCardProps) => {
  const { item, isDragging = false } = props
  const { fragrance } = item
  const { id, name, brand } = fragrance

  const [isSubPopoverOpen, setIsSubPopoverOpen] = React.useState(false)
  const [isLinkFocused, setIsLinkFocused] = React.useState(false)

  const handleLinkFocus = () => {
    setIsLinkFocused(true)
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
          onFocus={handleLinkFocus}
          tabIndex={0}
          disabled={isDragging}
        >
          <FragranceImageCard
            isActive={isLinkFocused || isSubPopoverOpen}
            fragrance={fragrance}
          />
        </Link>

        <div
          className={clsx(
            isDragging && 'hidden',
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
            className='pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <LuGrip
              size={25}
            />
          </div>

          <div
            className='pointer-events-auto absolute right-3 bottom-3 flex gap-2'
          >
            <CollectionItemOptionsPopover
              item={item}
              onOpenChangeComplete={setIsSubPopoverOpen}
            />

            <ShareFragrancePopover
              fragrance={fragrance}
              onOpenChangeComplete={setIsSubPopoverOpen}
            />
          </div>
        </div>
      </div>

      <Link
        to='/fragrances/$id'
        params={{ id }}
        className='px-1 pt-2'
        disabled={isDragging}
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

export default CollectionItemCard
