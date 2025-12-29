import type { UserPreviewFragment } from '@/generated/graphql'
import { formatNumber } from '@/utils/string-utils'
import { Dialog } from '@base-ui/react'
import React from 'react'
import UserRelationshipList from './UserRelationshipList'
import DialogPopup from '@/components/DialogPopup'
import DialogBackdrop from '@/components/DialogBackdrop'
import clsx from 'clsx'
import { IoClose } from 'react-icons/io5'
import { useLocation } from '@tanstack/react-router'
import { useUser } from '../hooks/useUser'

export interface UserRelationshipPopoverProps {
  user: UserPreviewFragment
  type: 'followers' | 'following'
}

const UserRelationshipPopover = (props: UserRelationshipPopoverProps) => {
  const { type } = props
  const { id } = props.user

  const { user } = useUser(id)
  const { followerCount = 0, followingCount = 0 } = user ?? {}

  const pathname = useLocation({
    select: (location) => location.pathname
  })

  const count = type === 'followers' ? followerCount : followingCount
  const text = type === 'following' ? type : count === 1 ? 'follower' : 'followers'

  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(
    () => {
      setIsOpen(false)
    },
    [pathname]
  )

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger
        className='flex cursor-pointer flex-row gap-1'
      >
        <p
          className='font-bold'
        >
          {formatNumber(count)}
        </p>

        <p
          className='font-medium text-black/60'
        >
          {text}
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogBackdrop />

        <DialogPopup
          className='flex max-h-142 min-h-138 w-full max-w-96 flex-col overflow-hidden px-2 pt-4'
        >
          <Dialog.Title
            className='mb-4 flex items-center justify-between px-2 text-center font-semibold'
          >
            <div
              className='flex-1'
            />

            {type === 'followers' ? 'Followers' : 'Following'}

            <div
              className='flex flex-1 items-center justify-end'
            >
              <Dialog.Close
                className={clsx(
                  'flex aspect-square h-9 items-center justify-center rounded-full select-none',
                  'bg-empty border hover:bg-black/10',
                  'text-base font-medium',
                  'focus-visible:outline-2 focus-visible:-outline-offset-1'
                )}
              >
                <IoClose
                  className='ml-[0.3px]'
                />
              </Dialog.Close>
            </div>
          </Dialog.Title>

          <UserRelationshipList
            user={props.user}
            type={type}
          />
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default UserRelationshipPopover
