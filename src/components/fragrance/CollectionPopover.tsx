import React, { type SyntheticEvent } from 'react'
import { Popover } from '@base-ui-components/react'
import BouncyButton from '../common/BouncyButton'
import { PiPlusBold } from 'react-icons/pi'
import useUserCollections from '@/hooks/useUserCollections'
import CollectionPreviewBarCheck from './CollectionPreviewBarCheck'

export interface CollectionPopoverProps {
  userId: number
}

const CollectionPopover = (props: CollectionPopoverProps) => {
  const { userId } = props

  const { data: collections } = useUserCollections(userId, 10)

  const handlePopoverTriggerClick = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handlePopoverClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  return (
    <Popover.Root>
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
            <BouncyButton
              className='w-full p-5 font-semibold shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)] active:scale-[0.99] gap-2 mt-auto'
            >
              <PiPlusBold
                size={20}
              />
              New collection
            </BouncyButton>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default CollectionPopover
