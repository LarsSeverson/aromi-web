import GridImages from '@/components/GridImages'
import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import React from 'react'
import CollectionOptionsPopover from './CollectionOptionsPopover'
import UserAvatar from '@/features/users/components/UserAvatar'
import ShareCollectionPopover from './ShareCollectionPopover'
import { Link } from '@tanstack/react-router'

export interface CollectionHeaderProps {
  collection: AllFragranceCollectionFragment
}

const CollectionHeader = (props: CollectionHeaderProps) => {
  const { collection } = props
  const { name, previewItems, user } = collection
  const { username } = user

  const previewUrls = previewItems.map(item => item.fragrance.thumbnail?.url ?? '')

  return (
    <div
      className='flex gap-6 px-13'
    >
      <div
        className='aspect-square w-56 overflow-hidden rounded-xl'
      >
        <GridImages
          urls={previewUrls}
          className='h-full w-full'
        />
      </div>

      <div
        className='flex flex-1 flex-col gap-7 self-end overflow-hidden'
      >
        <div
          className='flex flex-col gap-1'
        >
          <span
            className='truncate text-6xl font-semibold'
          >
            {name}
          </span>

        </div>

        <div
          className='flex min-w-0 items-start overflow-hidden'
        >
          <Link
            to='/users/$id'
            params={{ id: user.id }}
            className='group mr-auto flex items-center gap-2 overflow-hidden hover:cursor-pointer'
          >
            <div
              className='h-10 w-10'
            >
              <UserAvatar
                user={user}
              />
            </div>

            <span
              className='text-md truncate font-medium text-black/90 group-hover:underline'
            >
              {username}
            </span>
          </Link>
        </div>
      </div>

      <div
        className='ml-auto flex gap-2 self-start'
      >
        <ShareCollectionPopover
          collection={collection}
        />

        <CollectionOptionsPopover
          collection={collection}
        />
      </div>
    </div>
  )
}

export default CollectionHeader
