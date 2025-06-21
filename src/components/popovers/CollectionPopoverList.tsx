import useUserCollections from '@/hooks/useUserCollections'
import React from 'react'
import CollectionPreviewBarCheck from '../fragrance/CollectionPreviewBarCheck'

export interface CollectionPopoverListProps {
  userId: number
}

const CollectionPopoverList = (props: CollectionPopoverListProps) => {
  const { userId } = props

  const { data } = useUserCollections(userId)

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
