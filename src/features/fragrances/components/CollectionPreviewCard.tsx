import React from 'react'
import { Link } from '@tanstack/react-router'
import { FaPen } from 'react-icons/fa6'
import GridImages from '@/components/GridImages'
import clsx from 'clsx'
import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import { useMyContext } from '@/features/users'

export interface CollectionPreviewCardProps {
  collection: AllFragranceCollectionFragment
}

export const CollectionPreviewCard = (props: CollectionPreviewCardProps) => {
  const { collection } = props
  const { id, name, previewItems, user, info } = collection

  const { me } = useMyContext()

  const isMyCollection = me?.id === user.id
  const thumbnailUrls = previewItems.map(item => item.fragrance.thumbnail?.url ?? '')

  return (
    <Link
      to='/collections/$id'
      params={{ id }}
      className={clsx(
        'group relative flex h-full w-full flex-col gap-2'
      )}
    >
      <GridImages
        urls={thumbnailUrls}
        className='h-full w-full'
      />

      {isMyCollection && (
        <button
          className={clsx(
            'bg-sinopia absolute top-3 right-3 hidden aspect-square items-center justify-center rounded-full px-2.5 group-hover:flex',
            'cursor-pointer'
          )}
        >
          <FaPen
            color='white'
            size={14}
          />
        </button>
      )}

      <div>
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
      </div>
    </Link>
  )
}
