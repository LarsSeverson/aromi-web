import { useMyContext } from '@/features/users'
import type { PostCommentPreviewFragment } from '@/generated/graphql'
import { Popover } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { MyPostCommentOptions } from './MyPostCommentOptions'

export interface MoreOptionsPostCommentPopoverProps extends Popover.Trigger.Props {
  comment: PostCommentPreviewFragment
  onEdit?: () => void
}

export const MoreOptionsPostCommentPopover = (props: MoreOptionsPostCommentPopoverProps) => {
  const { comment, onEdit, ...rest } = props
  const { user } = comment
  const { id } = user

  const { me } = useMyContext()
  const showMyPostOptions = me?.id === id

  const [isOpen, setIsOpen] = React.useState(false)

  const handleOnTriggerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    rest.onClick?.(event as Parameters<NonNullable<Popover.Trigger.Props['onClick']>>[0])
    event.preventDefault()
    event.stopPropagation()
  }

  const handleOnPopoverClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  const handleOnEdit = () => {
    setIsOpen(false)
    onEdit?.()
  }

  if (!showMyPostOptions) return null

  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Popover.Trigger
        {...rest}
        className={clsx(
          rest.className,
          'aspect-square cursor-pointer rounded-full p-2 hover:bg-gray-200'
        )}
        onClick={handleOnTriggerClick}
      >
        <HiDotsHorizontal
          size={18}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner
          align='end'
        >
          <Popover.Popup
            className={clsx(
              'shadow-symmetrical gap-2 overflow-hidden rounded-xl bg-white p-2',
              'flex max-h-128 w-[20rem] flex-col items-center justify-center'
            )}
            onClick={handleOnPopoverClick}
          >
            <MyPostCommentOptions
              comment={comment}
              onEdit={handleOnEdit}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
