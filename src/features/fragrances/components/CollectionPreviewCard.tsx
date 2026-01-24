import React from 'react'
import { Link } from '@tanstack/react-router'
import GridImages from '@/components/GridImages'
import clsx from 'clsx'
import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import { useMyContext } from '@/features/users'
import { LuGrip } from 'react-icons/lu'
import CollectionOptionsPopover from './CollectionOptionsPopover'
import { HiDotsHorizontal } from 'react-icons/hi'

export interface CollectionPreviewCardProps {
  collection: AllFragranceCollectionFragment
  isDragging?: boolean
}

export const CollectionPreviewCard = (props: CollectionPreviewCardProps) => {
  const { collection, isDragging = false } = props
  const { id, name, previewItems, user, info } = collection

  const { me } = useMyContext()

  const [isSubPopoverOpen, setIsSubPopoverOpen] = React.useState(false)

  const isMyCollection = me?.id === user.id
  const thumbnailUrls = previewItems.map(item => item.fragrance.thumbnail?.url ?? '')

  return (
    <div
      className='group flex h-full w-full flex-col gap-2'
    >
      <div
        className='relative flex h-full w-full flex-col overflow-hidden'
        tabIndex={-1}
      >
        <Link
          to='/collections/$id'
          params={{ id }}
          className={clsx(
            isDragging && 'cursor-grabbing!',
            'group relative flex h-full w-full flex-col gap-2'
          )}
          disabled={isDragging}
        >
          <GridImages
            urls={thumbnailUrls}
            className={clsx(
              'h-full w-full group-hover:brightness-80 group-focus:brightness-80',
              isSubPopoverOpen && 'brightness-80'
            )}
            tabIndex={-1}
          />
        </Link>

        <div
          className={clsx(
            'pointer-events-none absolute inset-0 opacity-0 ',
            'group-hover:opacity-100 group-focus:opacity-100',
            isSubPopoverOpen && 'opacity-100'
          )}
        >
          {isMyCollection && (
            <div
              className={clsx(
                isDragging && 'cursor-grabbing',
                'pointer-events-auto absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-grab'
              )}
            >
              <LuGrip
                size={32}
                className='text-white/90 mix-blend-difference'
              />
            </div>
          )}

          <div
            className={clsx(
              isDragging && 'hidden',
              'pointer-events-auto absolute right-3 bottom-3 z-30 flex gap-2'
            )}
          >
            <CollectionOptionsPopover
              showAdditional
              collection={collection}
              onOpenChangeComplete={setIsSubPopoverOpen}
              onRenderTrigger={() => (
                <div
                  className='flex aspect-square h-9 cursor-pointer items-center justify-center rounded-full bg-white p-2 hover:brightness-95'
                >
                  <HiDotsHorizontal
                    size={18}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <Link
        to='/collections/$id'
        params={{ id }}
        className={clsx(
          isDragging && 'cursor-grabbing!'
        )}
        disabled={isDragging}
      >
        <h4
          className='truncate text-sm font-semibold'
        >
          {name}
        </h4>

        <p
          className='mt-1 text-xs font-normal'
        >
          {info.itemCount} {info.itemCount === 1 ? 'Fragrance' : 'Fragrances'}
        </p>
      </Link>
    </div>
  )
}
