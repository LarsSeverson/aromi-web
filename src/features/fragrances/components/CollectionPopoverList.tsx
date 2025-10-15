import React from 'react'
import CollectionPreviewBarCheck from './CollectionPreviewBarCheck'
import Divider from '@/components/Divider'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useMyCollections } from '@/features/users/hooks/useMyCollections'
import CreateCollectionDialog from './CreateCollectionDialog'

export interface CollectionPopoverListProps {
  fragrance: FragrancePreviewFragment
}

const CollectionPopoverList = (props: CollectionPopoverListProps) => {
  const { fragrance } = props

  const { collections } = useMyCollections()

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

      {collections
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
