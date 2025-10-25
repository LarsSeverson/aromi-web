import React from 'react'
import CollectionPreviewBarCheck from './CollectionPreviewBarCheck'
import Divider from '@/components/Divider'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import CreateCollectionDialog from './CreateCollectionDialog'
import { useSaveFragranceContext } from '../contexts/SaveFragranceContext'

export interface CollectionPopoverListProps {
  fragrance: FragrancePreviewFragment
}

const CollectionPopoverList = (props: CollectionPopoverListProps) => {
  const { fragrance } = props

  const { collections } = useSaveFragranceContext()

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
            defaultChecked={collection.hasFragrance}
          />
        ))}
    </div>
  )
}

export default CollectionPopoverList
