import { type FlattenType } from '@/common/util-types'
import { type FragranceCollection } from '@/generated/graphql'
import React from 'react'
import { Link } from '@tanstack/react-router'
import { FaPen } from 'react-icons/fa6'
import BouncyButton from '../common/BouncyButton'
import GridImages from '../common/GridImages'

type FlattenedCollection = FlattenType<FragranceCollection>
type PartialUser = Pick<FlattenedCollection['user'], 'username'>
type PartialFragrance = Pick<FlattenedCollection['items'][number]['fragrance'], 'images'>
type PartialItem = Pick<FlattenedCollection['items'][number], 'id'> & { fragrance: PartialFragrance }
export type CardCollectionPreview = Pick<FlattenedCollection, 'name'> & { user: PartialUser, items: PartialItem[] }

export interface CollectionPreviewCardProps {
  collection: CardCollectionPreview
  navigateTo?: string | undefined
}

export const CollectionPreviewCard = (props: CollectionPreviewCardProps) => {
  const { collection, navigateTo } = props
  const { name, items } = collection

  return (
    <div className='w-full h-full'>
      <Link
        to={navigateTo ?? ''}
        className='group w-full h-full flex flex-col gap-2 relative'
      >
        <GridImages
          images={items.map(item => item.fragrance.images.at(0)?.url ?? '')}
        />
        <BouncyButton
          className='absolute top-3 right-3 rounded-full bg-sinopia aspect-square px-[10px] hidden group-hover:flex'
        >
          <FaPen
            color='white'
            size={14}
          />
        </BouncyButton>
        <div>
          <h4
            className='font-pd text-xl truncate'
          >
            {name}
          </h4>
          <p
            className='text-xs font-normal mt-1'
          >
            {items.length} {items.length === 1 ? 'Fragrance' : 'Fragrances'}
          </p>
        </div>
      </Link>
    </div>
  )
}
