import DialogBackdrop from '@/components/DialogBackdrop'
import DialogPopup from '@/components/DialogPopup'
import { Dialog } from '@base-ui/react'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import clsx from 'clsx'
import type { AllAssetFragment } from '@/generated/graphql'

/*
  This is a temporary solution until parallel routes are supported in tanstack/router
*/

export interface AssetModalProps extends Dialog.Root.Props {
  assets: AllAssetFragment[]
  assetIndex: number
}

export const AssetModal = (props: AssetModalProps) => {
  const { assets, assetIndex } = props

  const asset = assets.at(assetIndex)

  const handleOnModalClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  if (asset == null) return null

  return (
    <Dialog.Root
      {...props}
    >
      <Dialog.Portal
        onClick={handleOnModalClick}
      >
        <DialogBackdrop
          onClick={handleOnModalClick}
        />

        <DialogPopup
          className="m-0! flex max-h-[90%] min-h-[50%] max-w-7xl min-w-3xl flex-col justify-center overflow-hidden p-4! md:p-8"
          onClick={handleOnModalClick}
        >
          <Dialog.Close
            className={clsx(
              'absolute top-4 right-4 flex aspect-square h-9 items-center justify-center rounded-full select-none',
              'border bg-gray-200 hover:bg-black/20',
              'text-base font-medium',
              'cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-1'
            )}
          >
            <IoClose
              size={18}
              className='border-black'
            />
          </Dialog.Close>

          <img
            src={asset.url ?? ''}
            className="h-full w-full object-contain"
          />
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default AssetModal
