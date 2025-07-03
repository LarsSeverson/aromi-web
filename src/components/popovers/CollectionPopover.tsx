import React, { useRef, useState, type SyntheticEvent } from 'react'
import { Popover } from '@base-ui-components/react'
import { type FragrancePreviewCardFragrance } from '../fragrance/FragrancePreviewCard'
import clsx from 'clsx'
import CollectionPopoverList from './CollectionPopoverList'
import BouncyButton from '../common/BouncyButton'

export interface CollectionPopoverProps extends Popover.Root.Props {
  userId: number
  fragrance: FragrancePreviewCardFragrance
}

const CollectionPopover = (props: CollectionPopoverProps) => {
  const { userId, fragrance, ...rest } = props

  const collectionsSelected = useRef(new Set<number>())
  const [isOneCollectionSelected, setIsOneCollectionSelected] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handlePopoverTriggerClick = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handlePopoverClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const clearCollectionsSelected = () => {
    collectionsSelected.current.clear()
    setIsOneCollectionSelected(false)
  }

  const handleOnCollectionSelected = (
    collectionId: number,
    value: boolean
  ) => {
    const doesExist = collectionsSelected.current.has(collectionId)

    if (doesExist && !value) {
      collectionsSelected.current.delete(collectionId)
    }

    if (!doesExist && value) {
      collectionsSelected.current.add(collectionId)
    }

    setIsOneCollectionSelected(collectionsSelected.current.size > 0)
  }

  const handleOnOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) clearCollectionsSelected()
  }

  const handleOnCancel = () => {
    setIsOpen(false)
    clearCollectionsSelected()
  }

  return (
    <Popover.Root
      {...rest}
      open={isOpen}
      onOpenChange={handleOnOpenChange}
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
            className='bg-white w-[26rem] max-h-[32rem] rounded-xl shadow-xl flex flex-col justify-center items-center overflow-hidden'
            onClick={handlePopoverClick}
          >
            <Popover.Title
              className='font-semibold p-5'
            >
              Save
            </Popover.Title>

            <CollectionPopoverList
              userId={userId}
              fragrance={fragrance}
              onCollectionSelected={handleOnCollectionSelected}
            />

            <div
              className='w-full h-full flex-1 p-2 justify-between flex shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
            >

              <div
                className='flex text-md font-semibold items-center gap-2 ml-auto'
              >
                <BouncyButton
                  className='rounded-3xl w-20 h-10'
                  onClick={handleOnCancel}
                >
                  Cancel
                </BouncyButton>
                {isOneCollectionSelected && (
                  <BouncyButton
                    className='bg-sinopia rounded-3xl w-20 text-white h-10'
                  >
                    Done
                  </BouncyButton>
                )}
              </div>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default CollectionPopover
