import { Popover } from '@base-ui/react'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import clsx from 'clsx'
import type { PostPreviewFragment } from '@/generated/graphql'
import { useMyContext } from '@/features/users'
import MyPostOptions from './MyPostOptions'

export interface MoreOptionsPostPopoverProps extends Popover.Trigger.Props {
  post: PostPreviewFragment
}

const MoreOptionsPostPopover = (props: MoreOptionsPostPopoverProps) => {
  const { post, ...rest } = props
  const { user } = post
  const { id } = user

  const { me } = useMyContext()
  const showMyPostOptions = me?.id === id

  const handleOnTriggerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    rest.onClick?.(event as Parameters<NonNullable<Popover.Trigger.Props['onClick']>>[0])
    event.preventDefault()
    event.stopPropagation()
  }

  const handleOnPopoverClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  if (!showMyPostOptions) return null

  return (
    <Popover.Root>
      <Popover.Trigger
        {...rest}
        className={clsx(
          rest.className,
          'aspect-square cursor-pointer rounded-full p-2 hover:bg-gray-200'
        )}
        onClick={handleOnTriggerClick}
      >
        <HiDotsHorizontal
          size={20}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner
          align='end'
        >
          <Popover.Popup
            className={clsx(
              'shadow-symmetrical gap-2 overflow-hidden rounded-xl bg-white p-3',
              'flex max-h-128 w-[20rem] flex-col items-center justify-center'
            )}
            onClick={handleOnPopoverClick}
          >
            <MyPostOptions
              post={post}
            />
            {/* : (
                 <ReviewOptions
                   review={review}
                 />
               ) */}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default MoreOptionsPostPopover
