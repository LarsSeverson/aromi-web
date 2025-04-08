import React, { type SyntheticEvent } from 'react'
import { Popover } from '@base-ui-components/react'
import useUserCollections from '@/hooks/useUserCollections'
import CollectionPreviewBarCheck from './CollectionPreviewBarCheck'
import NewCollectionDialog from '../dialogs/NewCollectionDialog'
import { type CardFragrancePreview } from './FragrancePreviewCard'

export interface CollectionPopoverProps extends Popover.Root.Props {
  userId: number
  fragrance: CardFragrancePreview
}

const CollectionPopover = (props: CollectionPopoverProps) => {
  const { userId, fragrance, ...rest } = props

  const { data: collections } = useUserCollections(userId, 10)

  const handlePopoverTriggerClick = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handlePopoverClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  return (
    <Popover.Root
      {...rest}
    >
      <Popover.Trigger
        className='bg-sinopia text-white rounded-full px-7 py-3 hover:shadow-lg hover:brightness-105'
        onClick={handlePopoverTriggerClick}
      >
        Save
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          sideOffset={8}
        >
          <Popover.Popup
            className='bg-white w-[23rem] max-h-[32rem] rounded-xl shadow-xl flex flex-col justify-center items-center'
            onClick={handlePopoverClick}
          >
            <Popover.Title
              className='font-semibold p-5'
            >
              Save
            </Popover.Title>
            <div
              className='overflow-auto w-full mb-2'
              style={{ scrollbarGutter: 'stable both-edges' }}
            >
              {collections.map(collection => (
                <CollectionPreviewBarCheck
                  key={collection.id}
                  collection={collection}
                />
              ))}
            </div>
            <NewCollectionDialog
              fragrance={fragrance}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default CollectionPopover
