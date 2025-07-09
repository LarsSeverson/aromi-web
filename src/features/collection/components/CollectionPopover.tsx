import React, { useRef, useState, type SyntheticEvent } from 'react'
import { Popover } from '@base-ui-components/react'
import clsx from 'clsx'
import CollectionPopoverList from '@/features/collection/components/CollectionPopoverList'
import BouncyButton from '@/components/BouncyButton'
import { type FragrancePreviewCardFragrance } from '@/features/fragrance/components/FragrancePreviewCard'
import { useModifyCollections } from '../hooks/useModifyCollections'
import { useToastError } from '@/hooks/useToastError'
import Spinner from '@/components/Spinner'

export interface CollectionPopoverProps extends Popover.Root.Props {
  userId: number
  fragrance: FragrancePreviewCardFragrance
}

const CollectionPopover = (props: CollectionPopoverProps) => {
  const { userId, fragrance, ...rest } = props

  const { modifyCollections } = useModifyCollections()
  const { toastApolloError } = useToastError()

  const collectionsModified = useRef(new Map<number, boolean>())
  const [hasModifiedCollections, setHasModifiedCollections] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePopoverTriggerClick = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handlePopoverClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const clearCollectionsSelected = () => {
    collectionsModified.current.clear()
    setHasModifiedCollections(false)
  }

  const handleOnCollectionSelected = (
    collectionId: number,
    value: boolean,
    prevValue: boolean
  ) => {
    const shouldDelete = value === prevValue
    const shouldAdd = !shouldDelete

    if (shouldDelete) {
      collectionsModified.current.delete(collectionId)
    }

    if (shouldAdd) {
      collectionsModified.current.set(collectionId, value)
    }

    setHasModifiedCollections(collectionsModified.current.size > 0)
  }

  const handleOnOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) clearCollectionsSelected()
  }

  const handleOnCancel = () => {
    setIsOpen(false)
    clearCollectionsSelected()
  }

  const handleOnSubmit = async () => {
    setIsLoading(true)

    await modifyCollections(collectionsModified.current, fragrance.id)
      .match(
        () => {
          //
        },
        toastApolloError
      )

    clearCollectionsSelected()
    setIsLoading(false)
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
                {hasModifiedCollections && (
                  <BouncyButton
                    className='bg-sinopia rounded-3xl w-20 text-white h-10'
                    onClick={() => { void handleOnSubmit() }}
                  >
                    {isLoading && <Spinner />}
                    <span
                      className={clsx(isLoading && 'opacity-0')}
                    >
                      Done
                    </span>
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
