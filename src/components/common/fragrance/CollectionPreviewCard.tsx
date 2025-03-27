import { type FlattenType } from '@/common/util-types'
import { type FragranceCollection } from '@/generated/graphql'
import React from 'react'

type FlattenedCollection = FlattenType<FragranceCollection>
type PartialUser = Pick<FlattenedCollection['user'], 'username'>
type PartialFragrance = Pick<FlattenedCollection['items'][number]['fragrance'], 'images'>
type PartialItem = Pick<FlattenedCollection['items'][number], 'id'> & { fragrance: PartialFragrance }
export type CardCollectionPreview = Pick<FlattenedCollection, 'name'> & { user: PartialUser, items: PartialItem[] }

export interface CollectionPreviewCardProps {
  collection: CardCollectionPreview
}

export const CollectionPreviewCard = (props: CollectionPreviewCardProps) => {
  const { collection } = props
  const { name, items } = collection

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex-1 grid grid-cols-2 rounded-3xl overflow-hidden'>
        <div className='row-span-2 bg-gray-200' />
        <div className='bg-gray-500' />
        <div className='bg-gray-800' />
      </div>
      {name}
    </div>
  )
}
