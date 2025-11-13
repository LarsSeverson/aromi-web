import React from 'react'
import CollectionHeader from '../components/CollectionHeader'
import CollectionItemsGrid from '../components/CollectionItemsGrid'
import Divider from '@/components/Divider'
import useFragranceCollection from '../hooks/useFragranceCollection'

export interface FragranceCollectionPageProps {
  collectionId: string
}

const FragranceCollectionPage = (props: FragranceCollectionPageProps) => {
  const { collectionId } = props

  const { collection } = useFragranceCollection(collectionId)
  const { info } = collection ?? {}

  const itemCount = info?.itemCount ?? 0

  if (collection == null) return null

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
