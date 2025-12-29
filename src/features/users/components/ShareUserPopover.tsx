import BouncyButton from '@/components/BouncyButton'
import Divider from '@/components/Divider'
import type { UserPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import { Popover } from '@base-ui/react'
import { useRouter } from '@tanstack/react-router'
import { ResultAsync } from 'neverthrow'
import React, { type SyntheticEvent } from 'react'
import { HiOutlineLink } from 'react-icons/hi'
import { RxShare2 } from 'react-icons/rx'

export interface ShareUserPopoverProps extends Popover.Root.Props {
  user: UserPreviewFragment
}

const ShareUserPopover = (props: ShareUserPopoverProps) => {
  const { user, ...rest } = props
  const { id, username } = user

  const router = useRouter()
  const { toastError } = useToastMessage()

  const [isLinkLoading, setIsLinkLoading] = React.useState(false)
  const [showLinkFeedback, setShowLinkFeedback] = React.useState(false)

  const handlePopoverTriggerClick = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handlePopoverClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const handleShareLink = async () => {
    setIsLinkLoading(true)

    const location = router.buildLocation({
      to: '/users/$id',
      params: { id }
    })

    const url = `${window.location.origin}${location.href}`

    await ResultAsync
      .fromPromise(
        navigator.clipboard.writeText(url),
        error => error
      )
      .match(
        () => {
          setShowLinkFeedback(true)
          setTimeout(() => {
            setShowLinkFeedback(false)
          }, 2500)
        },
        _ => {
          toastError('Failed to copy link to clipboard. Please try again.')
        }
      )

    setIsLinkLoading(false)
  }

  return (
    <Popover.Root
      {...rest}
    >
      <Popover.Trigger
        className='text-md cursor-pointer rounded-lg p-3 font-medium hover:bg-gray-200'
        disabled={showLinkFeedback}
        onClick={handlePopoverTriggerClick}
      >
        <RxShare2
          size={24}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner
          sideOffset={8}
        >
          <Popover.Popup
            className='flex max-h-128 w-92 flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-xl'
            onClick={handlePopoverClick}
          >
            <Popover.Title
              className='pt-4 text-center font-semibold'
            >
              <p>
                Share
              </p>

              <p
                className='text-sm font-medium text-gray-600'
              >
                {username}
              </p>
            </Popover.Title>

            <div
              className='mb-4 w-full space-y-4 overflow-auto px-2'
              style={{ scrollbarGutter: 'stable' }}
            >
              <div
                className='flex'
              >
                <div
                  className='flex min-w-[70px] flex-col items-center gap-2 pt-1'
                >
                  <BouncyButton
                    className='bg-empty hover:brightness-95'
                    disabled={isLinkLoading || showLinkFeedback}
                    onClick={() => { void handleShareLink() }}
                  >
                    <HiOutlineLink
                      size={20}
                    />
                  </BouncyButton>

                  <p
                    className='text-xs'
                  >
                    {showLinkFeedback ? 'Link copied!' : 'Copy link'}
                  </p>
                </div>
              </div>

              <div
                className='px-2'
              >
                <Divider
                  horizontal
                />
              </div>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default ShareUserPopover
