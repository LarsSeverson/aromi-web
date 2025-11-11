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
        className='aspect-square h-12 shrink-0 rounded-md'
      />

      <h2
        className='truncate font-semibold'
      >
        {name}
      </h2>
    </div>
  )
}

export default CollectionPreviewBar
