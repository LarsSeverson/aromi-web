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
        className='bg-white w-[26rem] max-h-[32rem] rounded-xl shadow-xl flex flex-col justify-center items-center overflow-hidden'
        onClick={handlePopoverClick}
      >
        <Popover.Title
          className='font-semibold p-5'
        >
          Save
        </Popover.Title>

        <CollectionPopoverList
          fragrance={fragrance}
        />

        <div
          className='w-full h-full flex-1 p-2 justify-between flex shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
        >

          <div
            className='flex text-md font-semibold items-center gap-2 ml-auto'
          >
            <BouncyButton
              className='rounded-3xl w-20 h-10'
              onClick={handleOnCancel}
            >
              Cancel
            </BouncyButton>

            {hasModified && (
              <BouncyButton
                className='bg-sinopia rounded-3xl w-20 text-white h-10'
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
