import { Dialog } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'
import { PiPlusBold } from 'react-icons/pi'
import { type CardFragrancePreview } from '../fragrance/FragrancePreviewCard'
import empty from '@/assets/fall-back-fi.svg'
import { Overlay } from '../common/Overlay'

export interface NewCollectionDialogProps {
  fragrance: CardFragrancePreview
}

const NewCollectionDialog = (props: NewCollectionDialogProps) => {
  const { fragrance } = props

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={clsx(
          'flex items-center justify-center w-full p-5 font-semibold shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)] active:scale-[0.99] gap-2 mt-auto',
          'hover:brightness-95 bg-white'
        )}
      >
        <PiPlusBold
          size={20}
        />
        New collection
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />
        <Dialog.Popup
          id='123'
          className='w-[720px] bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden'
        >
          <Dialog.Title
            className='text-3xl text-center font-medium p-6'
          >
            Create Collection
          </Dialog.Title>

          <div
            className='relative'
          >
            <div className='flex px-8 pb-8 pt-5 gap-8'>
              <div
                className='flex-1 overflow-hidden'
              >
                <div
                  className='relative rounded-2xl overflow-hidden'
                >
                  <img
                    src={fragrance.images.at(0)?.url ?? empty}
                    alt={fragrance.name}
                    className='object-cover aspect-square w-full'
                  />
                  <Overlay />
                </div>
                <p
                  className='mx-2 mt-2 font-medium text-md truncate'
                >
                  {fragrance.name}
                </p>
                <p
                  className='mx-2 font-light text-md'
                >
                  {fragrance.brand}
                </p>
              </div>
              <div
                className='flex-[2]'
              >
                <h6
                  className='font-medium text-sm'
                >
                  Name
                </h6>
              </div>
            </div>
            <div
              className='flex justify-between px-5 bg-white py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
            >
              <Dialog.Close
                className='bg-empty rounded-full px-7 py-3 hover:shadow-lg hover:brightness-95'
              >
                Cancel
              </Dialog.Close>
              <Dialog.Close
                className='bg-sinopia text-white rounded-full px-7 py-3 hover:shadow-lg hover:brightness-105'
              >
                Create
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default NewCollectionDialog
