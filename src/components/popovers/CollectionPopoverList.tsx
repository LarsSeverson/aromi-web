import useUserCollections from '@/hooks/useUserCollections'
import React from 'react'
import CollectionPreviewBarCheck from '../fragrance/CollectionPreviewBarCheck'
import NewCollectionDialog from '../dialogs/NewCollectionDialog'
import { type FragrancePreviewCardFragrance } from '../fragrance/FragrancePreviewCard'
import Divider from '../common/Divider'

export interface CollectionPopoverListProps {
  userId: number
  fragrance: FragrancePreviewCardFragrance
  onCollectionSelected?: (collectionId: number, value: boolean) => void
}

const CollectionPopoverList = (props: CollectionPopoverListProps) => {
  const { userId, fragrance, onCollectionSelected } = props

  const { data } = useUserCollections(userId, undefined, fragrance.id)

  return (
    <div
      className='overflow-auto w-full mb-4'
      style={{ scrollbarGutter: 'stable both-edges' }}
    >
      <NewCollectionDialog
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
