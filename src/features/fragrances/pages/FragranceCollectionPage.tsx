import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import React from 'react'
import CollectionHeader from '../components/CollectionHeader'
import CollectionItemsGrid from '../components/CollectionItemsGrid'
import Divider from '@/components/Divider'

export interface FragranceCollectionPageProps {
  collection: AllFragranceCollectionFragment
}

const FragranceCollectionPage = (props: FragranceCollectionPageProps) => {
  const { collection } = props
  const { info } = collection
  const { itemCount } = info

  return (
    <div
      className='flex flex-col p-5'
    >
      <CollectionHeader
        collection={collection}
      />

      <Divider
        horizontal
        className='mt-10 mb-5'
      />

      <span
        className='mr-5 ml-auto text-sm text-black/80'
      >
        {itemCount} {itemCount === 1 ? 'fragrance' : 'fragrances'}
      </span>

      {itemCount === 0 && (
        <div
          className='flex items-center justify-center'
        >
          <span
            className='font-medium'
          >
            This is an empty collection
          </span>
        </div>
      )}

      <CollectionItemsGrid
        collectionId={collection.id}
      />
    </div>
  )
}

export default FragranceCollectionPage
