import React from 'react'
import { type FragranceImage, type FragranceCollection } from '@/generated/graphql'
import { Link, type LinkProps } from '@tanstack/react-router'
import { FaPen } from 'react-icons/fa6'
import BouncyButton from '@/components/BouncyButton'
import GridImages from '@/components/GridImages'
import clsx from 'clsx'
import { type FlattenedConnection } from '@/utils/pagination'

type FlattenedCollection = FlattenedConnection<FragranceCollection>
type PartialUser = Pick<FlattenedCollection['user'], 'username'>
type PartialImage = Pick<FragranceImage, 'id' | 'src'>
interface PartialFragrance { images: PartialImage[] }
type PartialItem = Pick<FlattenedCollection['items'][number], 'id'> & { fragrance: PartialFragrance }
export type CardCollectionPreview = Pick<FlattenedCollection, 'id' | 'name'> & { user: PartialUser, items: PartialItem[] }

export interface CollectionPreviewCardProps extends LinkProps {
  collection: CardCollectionPreview
  className?: string | undefined
}

export const CollectionPreviewCard = (props: CollectionPreviewCardProps) => {
  const { collection, className, to, params, ...rest } = props
  const { name, items } = collection

  return (
    <Link
      to={to ?? '/collection/$id'}
      params={params ?? { id: String(collection.id) }}
      className={clsx(
        'group w-full h-full flex flex-col gap-2 relative',
        className
      )}
      {...rest}
    >
      <GridImages
        urls={items.map(item => item.fragrance.images.at(0)?.src ?? '')}
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
  )
}
