import React from 'react'
import useUserCollections from '@/features/user/hooks/useUserCollections'
import CollectionPreviewBarCheck from './CollectionPreviewBarCheck'
import CreateCollectionDialog from '@/features/collection/components/CreateCollectionDialog'
import Divider from '@/components/Divider'
import { type FragrancePreviewCardFragrance } from '@/features/fragrance/components/FragrancePreviewCard'

export interface CollectionPopoverListProps {
  userId: number
  fragrance: FragrancePreviewCardFragrance
  onCollectionSelected?: (collectionId: number, value: boolean, prevValue: boolean) => void
}

const CollectionPopoverList = (props: CollectionPopoverListProps) => {
  const { userId, fragrance, onCollectionSelected } = props

  const { data } = useUserCollections(userId, undefined, fragrance.id)

  return (
    <div
      className='overflow-auto w-full mb-4'
      style={{ scrollbarGutter: 'stable both-edges' }}
    >
      <CreateCollectionDialog
        fragrance={fragrance}
      />

      <Divider
        horizontal
      />

      {data
        .map(collection => (
          <CollectionPreviewBarCheck
            key={collection.id}
            collection={collection}
            onCheckedChange={onCollectionSelected}
          />
        ))}
    </div>
  )
}

export default CollectionPopoverList
