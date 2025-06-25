import { type FragranceImage, type FragranceCollection } from '@/generated/graphql'
import React from 'react'
import GridImages from '../common/GridImages'
import clsx from 'clsx'
import { type FlattenEdges } from '@/common/pagination'

type FlattenedCollection = FlattenEdges<FragranceCollection>
type PartialImage = Pick<FragranceImage, 'id' | 'src'>
interface PartialFragrance { images: PartialImage[] }
type PartialItem = Pick<FlattenedCollection['items'][number], 'id'> & { fragrance: PartialFragrance }
export type BarCollectionPreview = Pick<FlattenedCollection, 'name' | 'hasFragrance'> & { items: PartialItem[] }

export interface CollectionPreviewBarProps extends React.HTMLAttributes<HTMLDivElement> {
  collection: BarCollectionPreview
}

const CollectionPreviewBar = (props: CollectionPreviewBarProps) => {
  const { collection, className, ...rest } = props
  const { items, name } = collection
  const images = items.map(item => item.fragrance.images.at(0)?.src ?? '')

  return (
    <div
      className={clsx(
        'flex h-16 items-center gap-4 overflow-hidden',
        className
      )}
      {...rest}
    >
      <GridImages
        images={images}
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
