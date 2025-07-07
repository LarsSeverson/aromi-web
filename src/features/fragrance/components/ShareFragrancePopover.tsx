import React, { useState, type SyntheticEvent } from 'react'
import { Popover } from '@base-ui-components/react'
import { type FragrancePreviewCardFragrance } from './FragrancePreviewCard'
import { GoShare } from 'react-icons/go'
import BouncyButton from '@/components/BouncyButton'
import { HiOutlineLink } from 'react-icons/hi'
import { useRouter } from '@tanstack/react-router'
import { ResultAsync } from 'neverthrow'
import Divider from '@/components/Divider'

export interface ShareFragrancePopoverProps extends Popover.Root.Props {
  userId: number
  fragrance: FragrancePreviewCardFragrance
}

const ShareFragrancePopover = (props: ShareFragrancePopoverProps) => {
  const router = useRouter()
  const { userId, fragrance, ...rest } = props

  const [isLinkLoading, setIsLinkLoading] = useState(false)
  const [showLinkFeedback, setShowLinkFeedback] = useState(false)

  const handlePopoverTriggerClick = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handlePopoverClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const handleShareLink = async () => {
    setIsLinkLoading(true)

    const href = router
      .buildLocation({
        to: '/fragrance/$id',
        params: { id: String(fragrance.id) }
      })
      .href

    const url = `${window.location.origin}${href}`

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
        error => {
          console.log(error)
        }
      )
      .finally(() => {
        setIsLinkLoading(false)
      })
  }

  return (
    <Popover.Root
      {...rest}
    >
      <Popover.Trigger
        className='rounded-full p-2 bg-white border-[1px] left-3 bottom-3 absolute text-center transition-transform active:scale-95 hover:brightness-95'
        onClick={handlePopoverTriggerClick}
      >
        <GoShare
          size={18}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          sideOffset={8}
        >
          <Popover.Popup
            className='bg-white w-[23rem] max-h-[32rem] rounded-xl shadow-xl flex flex-col justify-center items-center overflow-hidden'
            onClick={handlePopoverClick}
          >
            <Popover.Title
              className='font-semibold text-center pt-4'
            >
              <p>
                Share
              </p>
              <p
                className='text-sm font-medium text-gray-600'
              >
                {fragrance.name}
              </p>
              <p
                className='text-xs font-light text-gray-500'
              >
                {fragrance.brand}
              </p>
            </Popover.Title>
            <div
              className='overflow-auto w-full mb-4 space-y-4 px-2'
              style={{ scrollbarGutter: 'stable' }}
            >
              <div
                className='flex'
              >
                <div
                  className='flex flex-col items-center gap-2 min-w-[70px] pt-1'
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

export default ShareFragrancePopover
