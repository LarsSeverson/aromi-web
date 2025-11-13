import ConfirmationDialog from '@/components/ConfirmationDialog'
import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import { Dialog, Popover } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiDotsHorizontal } from 'react-icons/hi'
import UpdateCollectionDialog from './UpdateCollectionDialog'

export interface CollectionOptionsPopoverProps {
  collection: AllFragranceCollectionFragment
}

const CollectionOptionsPopover = (props: CollectionOptionsPopoverProps) => {
  const { collection } = props

  return (
    <Popover.Root>
      <Popover.Trigger
        className='aspect-square cursor-pointer rounded-lg bg-white p-3 hover:brightness-95'
      >
        <HiDotsHorizontal
          size={24}
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
              <UpdateCollectionDialog
                collection={collection}
              />

              <ConfirmationDialog>
                <Dialog.Trigger
                  className='group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
                >
                  <AiOutlineDelete
                    size={20}
                    className='group-hover:text-red-700'
                  />

                  <span
                    className='text-md font-semibold group-hover:text-red-700'
                  >
                    Delete collection
                  </span>
                </Dialog.Trigger>
              </ConfirmationDialog>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default CollectionOptionsPopover
