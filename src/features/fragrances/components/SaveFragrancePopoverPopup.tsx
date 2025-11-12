import { Popover } from '@base-ui-components/react'
import React, { type SyntheticEvent, useState } from 'react'
import CollectionPopoverList from './CollectionPopoverList'
import BouncyButton from '@/components/BouncyButton'
import Spinner from '@/components/Spinner'
import clsx from 'clsx'
import { useSaveFragranceContext } from '../contexts/SaveFragranceContext'

export interface SaveFragrancePopoverPopupProps extends Popover.Popup.Props {
  onCancel?: () => void
  onSubmit?: () => void
}

const SaveFragrancePopoverPopup = (props: SaveFragrancePopoverPopupProps) => {
  const { onCancel, onSubmit } = props

  const {
    fragrance,
    hasModified,
    clearModifications,
    submitChanges
  } = useSaveFragranceContext()

  const [isLoading, setIsLoading] = useState(false)

  const handlePopoverClick = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const handleOnCancel = () => {
    clearModifications()
    onCancel?.()
  }

  const handleSubmitChanges = async () => {
    setIsLoading(true)
    await submitChanges()
    setIsLoading(false)

    clearModifications()
    onSubmit?.()
  }

  const handleOnSubmit = () => {
    handleSubmitChanges()
  }

  return (
    <div>
      <Popover.Popup
        className='flex max-h-128 w-104 flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-xl'
        onClick={handlePopoverClick}
      >
        <Popover.Title
          className='p-5 font-semibold'
        >
          Save
        </Popover.Title>

        <CollectionPopoverList
          fragrance={fragrance}
        />

        <div
          className='flex h-full w-full flex-1 justify-between p-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
        >

          <div
            className='text-md ml-auto flex items-center gap-2 font-semibold'
          >
            <BouncyButton
              className='h-10 w-20 rounded-3xl'
              onClick={handleOnCancel}
            >
              Cancel
            </BouncyButton>

            {hasModified && (
              <BouncyButton
                className='bg-sinopia h-10 w-20 rounded-3xl text-white'
                onClick={handleOnSubmit}
              >
                {isLoading && (
                  <Spinner
                    className='border-white'
                  />
                )}

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
    </div>
  )
}

export default SaveFragrancePopoverPopup
