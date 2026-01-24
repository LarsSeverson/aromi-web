import ConfirmationDialog from '@/components/ConfirmationDialog'
import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import { Dialog, Popover, type PopoverRootChangeEventDetails } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiDotsHorizontal } from 'react-icons/hi'
import UpdateCollectionDialog from './UpdateCollectionDialog'
import { useNavigate } from '@tanstack/react-router'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useDeleteFraganceCollection } from '../hooks/useDeleteFragranceCollection'
import { Result } from 'neverthrow'
import { useCollectionsContext } from '../contexts/CollectionsContext'
import { useMyContext } from '@/features/users'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export interface CollectionOptionsPopoverProps extends Popover.Root.Props {
  collection: AllFragranceCollectionFragment
  showAdditional?: boolean
  onRenderTrigger?: () => React.ReactNode
}

const CollectionOptionsPopover = (props: CollectionOptionsPopoverProps) => {
  const {
    collection,
    showAdditional = false,
    onRenderTrigger,

    ...restProps
  } = props

  const { me } = useMyContext()

  const {
    deleteCollection: ctxDeleteCollection,

    moveCollectionLeft,
    moveCollectionRight,

    canMoveCollectionLeft,
    canMoveCollectionRight
  } = Result.fromThrowable(useCollectionsContext)().unwrapOr(undefined) ?? {}

  const navigate = useNavigate()
  const { toastMessage, toastError } = useToastMessage()

  const { deleteCollection } = useDeleteFraganceCollection()

  const [isOpen, setIsOpen] = React.useState(false)

  const isMyCollection = me?.id === collection.user.id
  const isLeftMovable = canMoveCollectionLeft?.(collection.id) ?? false
  const isRightMovable = canMoveCollectionRight?.(collection.id) ?? false

  const handleConfirmDelete = async () => {
    const fn = ctxDeleteCollection ?? deleteCollection
    const res = await fn({ collectionId: collection.id })

    if (ctxDeleteCollection == null) {
      res.match(
        () => {
          toastMessage('Collection deleted')
          navigate({ to: '/collections' })
        },
        error => {
          toastError(error.message)
        }
      )
    }
  }

  const handleOnMoveItemLeft = () => {
    moveCollectionLeft?.(collection.id)
  }

  const handleOnMoveItemRight = () => {
    moveCollectionRight?.(collection.id)
  }

  const handleOnOpenChange = (open: boolean, eventDetails: PopoverRootChangeEventDetails) => {
    setIsOpen(open)
    restProps.onOpenChange?.(open, eventDetails)
  }

  const handleOnPopoverClick = (event: React.SyntheticEvent) => {
    event.stopPropagation()
  }

  if (!isMyCollection) return null

  return (
    <Popover.Root
      {...restProps}
      open={isOpen}
      onOpenChange={handleOnOpenChange}
    >
      <Popover.Trigger
        onClick={handleOnPopoverClick}
      >
        {onRenderTrigger?.() ?? (
          <div
            className='aspect-square cursor-pointer rounded-lg bg-white p-3 hover:brightness-95'
          >
            <HiDotsHorizontal
              size={24}
            />
          </div>
        )}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup
            className={clsx(
              'shadow-symmetrical gap-2 overflow-hidden rounded-xl bg-white p-3',
              'flex max-h-128 w-[20rem] flex-col items-center justify-center'
            )}
            onClick={handleOnPopoverClick}
          >
            <div
              className='w-full'
            >
              <UpdateCollectionDialog
                collection={collection}
                onClose={setIsOpen.bind(null, false)}
              />

              {(showAdditional && isMyCollection) && (
                <>
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
                </>
              )}

              <ConfirmationDialog
                onCancel={setIsOpen.bind(null, false)}
                onConfirm={handleConfirmDelete}
              >
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
