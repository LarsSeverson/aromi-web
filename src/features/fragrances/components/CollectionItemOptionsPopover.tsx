import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import { Popover } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiDotsHorizontal } from 'react-icons/hi'
import { useMyContext } from '@/features/users'
import { useCollectionItemsContext } from '../contexts/CollectionItemsContext'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export interface CollectionItemOptionsPopoverProps extends Popover.Root.Props {
  item: AllFragranceCollectionItemFragment
}

const CollectionItemOptionsPopover = (props: CollectionItemOptionsPopoverProps) => {
  const { item } = props
  const { collection } = item
  const { user } = collection

  const { me } = useMyContext()

  const {
    deleteItem,

    moveItemLeft,
    moveItemRight,

    canMoveItemLeft,
    canMoveItemRight
  } = useCollectionItemsContext()

  const isMyCollection = me?.id === user.id
  const isLeftMovable = canMoveItemLeft(item.id)
  const isRightMovable = canMoveItemRight(item.id)

  const handleOnDeleteClick = () => {
    deleteItem(item.id)
  }

  const handleOnMoveItemLeft = () => {
    moveItemLeft(item.id)
  }

  const handleOnMoveItemRight = () => {
    moveItemRight(item.id)
  }

  if (!isMyCollection) return null

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
                disabled={!isLeftMovable}
                className={clsx(
                  !isLeftMovable && 'cursor-default! opacity-50 hover:brightness-100',
                  'group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
                )}
                onClick={handleOnMoveItemLeft}
              >
                <BsArrowLeft
                  size={20}
                />

                <span
                  className='text-md font-semibold'
                >
                  Move left
                </span>
              </button>

              <button
                disabled={!isRightMovable}
                className={clsx(
                  !isRightMovable && 'cursor-default! opacity-50 hover:brightness-100',
                  'group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
                )}
                onClick={handleOnMoveItemRight}
              >
                <BsArrowRight
                  size={20}
                />

                <span
                  className='text-md font-semibold'
                >
                  Move right
                </span>
              </button>

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
