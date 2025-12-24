import GridImages from '@/components/GridImages'
import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import React from 'react'
import CollectionOptionsPopover from './CollectionOptionsPopover'
import UserAvatar from '@/features/users/components/UserAvatar'
import ShareCollectionPopover from './ShareCollectionPopover'
import { Link } from '@tanstack/react-router'
import { useMyContext } from '@/features/users'
import { clsx } from 'clsx'

export interface CollectionHeaderProps {
  collection: AllFragranceCollectionFragment
}

const CollectionHeader = (props: CollectionHeaderProps) => {
  const { collection } = props
  const { name, previewItems, user } = collection
  const { username } = user

  const { me } = useMyContext()

  const previewUrls = previewItems.map(item => item.fragrance.thumbnail?.url ?? '')
  const isMyCollection = me?.id === user.id

  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-6 px-6',
        'lg:flex-row lg:items-end lg:px-13'
      )}
    >
      <div
        className={clsx(
          'shadow-sym aspect-square w-48 overflow-hidden rounded-xl',
          'lg:w-56'
        )}
      >
        <GridImages
          urls={previewUrls}
          className='h-full w-full'
        />
      </div>

      <div
        className={clsx(
          'flex flex-1 flex-col items-center gap-2 overflow-hidden',
          'lg:items-start lg:gap-7 lg:self-end'
        )}
      >
        <div
          className={clsx(
            'flex gap-2',
            'lg:ml-auto lg:self-start'
          )}
        >
          <ShareCollectionPopover
            collection={collection}
          />

          {isMyCollection && (
            <CollectionOptionsPopover
              collection={collection}
            />
          )}
        </div>

        <div
          className='flex flex-col gap-1'
        >
          <span
            className={clsx(
              'truncate text-center text-3xl leading-normal font-semibold',
              'lg:text-left lg:text-6xl'
            )}
          >
            {name}
          </span>
        </div>

        <div
          className='flex min-w-0 items-start overflow-hidden'
        >
          <Link
            to='/users/$id'
            params={{
              id: user.id
            }}
            className='group mr-auto flex items-center gap-2 overflow-hidden hover:cursor-pointer'
          >
            <div
              className='h-8 w-8 lg:h-10 lg:w-10'
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
    </div>
  )
}

export default CollectionHeader