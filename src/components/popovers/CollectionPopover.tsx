import React, { type SyntheticEvent } from 'react'
import { Popover } from '@base-ui-components/react'
import NewCollectionDialog from '../dialogs/NewCollectionDialog'
import { type FragrancePreviewCardFragrance } from '../fragrance/FragrancePreviewCard'
import clsx from 'clsx'
import CollectionPopoverList from './CollectionPopoverList'

export interface CollectionPopoverProps extends Popover.Root.Props {
  userId: number
  fragrance: FragrancePreviewCardFragrance
}

const CollectionPopover = (props: CollectionPopoverProps) => {
  const { userId, fragrance, ...rest } = props

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
        tabIndex={0}
        className={clsx(
          'bg-sinopia text-white rounded-full px-7 py-3 hover:shadow-lg hover:brightness-105 absolute top-3 right-3'
        )}
        onClick={handlePopoverTriggerClick}
      >
        Save
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          sideOffset={8}
        >
          <Popover.Popup
            className='bg-white w-[23rem] max-h-[32rem] rounded-xl shadow-xl flex flex-col justify-center items-center overflow-hidden'
            onClick={handlePopoverClick}
          >
            <Popover.Title
              className='font-semibold p-5'
            >
              Save
            </Popover.Title>
            <CollectionPopoverList
              userId={userId}
            />
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
