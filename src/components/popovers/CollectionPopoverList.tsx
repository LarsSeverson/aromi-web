import useUserCollections from '@/hooks/useUserCollections'
import React from 'react'
import CollectionPreviewBarCheck from '../fragrance/CollectionPreviewBarCheck'

export interface CollectionPopoverListProps {
  userId: number
  fragranceId: number
}

const CollectionPopoverList = (props: CollectionPopoverListProps) => {
  const { userId, fragranceId } = props

  const { data } = useUserCollections(userId, undefined, fragranceId)

  return (
    <div
      className='overflow-auto w-full mb-2'
      style={{ scrollbarGutter: 'stable both-edges' }}
    >
      {data
        .map(collection => (
          <CollectionPreviewBarCheck
            key={collection.id}
            collection={collection}
          />
        ))}
    </div>
  )
}

export default CollectionPopoverList
