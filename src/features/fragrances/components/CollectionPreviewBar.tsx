import React from 'react'
import GridImages from '@/components/GridImages'
import clsx from 'clsx'
import type { FragranceCollectionPreviewFragment } from '@/generated/graphql'

export interface CollectionPreviewBarProps extends React.HTMLAttributes<HTMLDivElement> {
  collection: FragranceCollectionPreviewFragment
}

const CollectionPreviewBar = (props: CollectionPreviewBarProps) => {
  const { collection, className, ...rest } = props
  const { name, previewItems } = collection

  const thumbnailUrls = previewItems.map(item => item.fragrance.thumbnail?.url ?? '')

  return (
    <div
      className={clsx(
        className,
        'flex h-16 items-center gap-4 overflow-hidden'
      )}
      {...rest}
    >
      <GridImages
        urls={thumbnailUrls}
        className='h-12 aspect-square rounded-md shrink-0'
      />

      <h2
        className='font-semibold truncate'
      >
        {name}
      </h2>
    </div>
  )
}

export default CollectionPreviewBar
