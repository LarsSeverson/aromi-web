import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import { Popover } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiDotsHorizontal } from 'react-icons/hi'
import { useDeleteFragranceCollectionItem } from '../hooks/useDeleteFragranceCollectionItem'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface CollectionItemOptionsPopoverProps extends Popover.Root.Props {
  item: AllFragranceCollectionItemFragment
}

const CollectionItemOptionsPopover = (props: CollectionItemOptionsPopoverProps) => {
  const { item } = props
  const { collection } = item

  const { toastMessage, toastError } = useToastMessage()
  const { deleteItem } = useDeleteFragranceCollectionItem()

  const handleDeleteItem = async () => {
    const collectionId = collection.id
    const itemId = item.id

    const res = await deleteItem({ collectionId, itemId })

    res.match(
      () => {
        toastMessage('Changes saved')
      },
      error => {
        toastError(error.message)
      }
    )
  }

  const handleOnDeleteClick = () => {
    handleDeleteItem()
  }

  return (
    <Popover.Root
      {...props}
    >
      <Popover.Trigger
        className='flex aspect-square h-9 cursor-pointer items-center justify-center rounded-full bg-white p-2 hover:brightness-95'
      >
        <HiDotsHorizontal
          size={18}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup
            className={clsx(
              'shadow-symmetrical gap-2 overflow-hidden rounded-xl bg-white p-3',
              'flex max-h-128 w-[20rem] flex-col items-center justify-center'
            )}
          >
            <div
              className='w-full'
            >
              <button
                className='group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
                onClick={handleOnDeleteClick}
              >
                <AiOutlineDelete
                  size={20}
                  className='group-hover:text-red-700'
                />

                <span
                  className='text-md font-semibold group-hover:text-red-700'
                >
                  Remove from collection
                </span>
              </button>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default CollectionItemOptionsPopover
