import { type FlattenType } from '@/common/util-types'
import { type FragranceCollection } from '@/generated/graphql'
import collectionImage from '@/assets/collection.svg'
import emptyFragranceImage from '@/assets/fall-back-fi.svg'
import clsx from 'clsx'
import React from 'react'
import { Overlay } from '../Overlay'
import { Link } from '@tanstack/react-router'
import { FaPen } from 'react-icons/fa6'
import BouncyButton from '@/components/BouncyButton'

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
  const itemsShown = items.slice(0, Math.min(items.length, 4))

  return (
    <div className='w-full h-full'>
      <Link
        to={navigateTo ?? ''}
        className='group w-full h-full flex flex-col gap-2 relative'
      >
        <div
          className={clsx(
            'flex-1 rounded-2xl overflow-hidden grid relative group-hover:brightness-[.85] bg-white',
            itemsShown.length === 1 && 'grid-cols-1 grid-rows-1',
            itemsShown.length !== 1 && 'grid-cols-2 grid-rows-2'
          )}
        >
          {itemsShown.map((item, index) => (
            <img
              key={index}
              className={clsx(
                'w-full h-full object-cover',
                itemsShown.length === 2 && 'row-span-2',
                (itemsShown.length === 3 && index === 0) && 'row-span-2'
              )}
              src={item.fragrance.images.at(0)?.url ?? emptyFragranceImage}
            />
          ))}
          {itemsShown.length === 0 && (
            <img
              src={collectionImage}
              className='w-full h-full row-span-2 col-span-2'
            />
          )}
          <Overlay />

        </div>
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
