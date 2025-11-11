import React from 'react'
import { Link } from '@tanstack/react-router'
import { FaPen } from 'react-icons/fa6'
import GridImages from '@/components/GridImages'
import clsx from 'clsx'
import type { FragranceCollectionPreviewFragment } from '@/generated/graphql'

export interface CollectionPreviewCardProps {
  collection: FragranceCollectionPreviewFragment
}

export const CollectionPreviewCard = (props: CollectionPreviewCardProps) => {
  const { collection } = props
  const { id, name, previewItems } = collection

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

      <div>
        <h4
          className='truncate font-medium'
        >
          {name}
        </h4>

        {/* <p
          className='mt-1 text-xs font-normal'
        >
          {items.length} {items.length === 1 ? 'Fragrance' : 'Fragrances'}
        </p> */}
      </div>
    </Link>
  )
}
