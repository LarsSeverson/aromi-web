import React, { useState } from 'react'
import fallbackImage from '@/assets/fall-back-fi.svg'
import { type IFragrancePreviewSummary } from '../types'
import { Dialog, Form } from '@base-ui-components/react'
import { TbFlag } from 'react-icons/tb'
import { Overlay } from '@/components/Overlay'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'

export interface ReportFragranceDialogProps {
  fragrance: IFragrancePreviewSummary
}

const ReportFragranceDialog = (props: ReportFragranceDialogProps) => {
  const { fragrance } = props
  const { brand, name, images } = fragrance

  const [isLoading, setIsLoading] = useState(false)
  const [isReportEmpty, setIsReportEmpty] = useState(true)

  const handleReportChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    const isEmpty = value.length === 0

    setIsReportEmpty(isEmpty)
  }

  const handleReportSubmit = () => {
    setIsLoading(true)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className='w-full flex p-3 hover:brightness-95 bg-white rounded-xl gap-2 items-center justify-start'
      >
        <TbFlag
          size={20}
        />

        <span
          className='font-semibold text-md'
        >
          Report this fragrance
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />

        <Dialog.Popup
          className='w-[720px] bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden'
        >
          <Dialog.Title
            className='text-3xl text-center font-medium p-6'
          >
            Report Fragrance
          </Dialog.Title>

          <Form
            onSubmit={handleReportSubmit}
          >
            <div className='flex px-8 pb-8 pt-5 gap-8'>
              <div
                className='flex-1 overflow-hidden'
              >
                <div
                  className='relative rounded-2xl overflow-hidden'
                >
                  <img
                    src={images.at(0)?.src ?? fallbackImage}
                    alt={name}
                    className='object-cover w-full'
                  />

                  <Overlay />
                </div>

                <p
                  className='mx-2 mt-2 font-medium text-md truncate'
                >
                  {name}
                </p>

                <p
                  className='mx-2 font-light text-md'
                >
                  {brand}
                </p>
              </div>

              <div
                className='flex-[2]'
              >
                <textarea
                  placeholder='Notice something incorrect or missing? Tell us here...'
                  className={clsx(
                    'border border-gray-300 rounded-md w-full h-full p-4 resize-none outline-none hover:border-sinopia',
                    'transition-colors ease-in-out duration-300 focus:border-sinopia focus:border-2 focus:outline-none'
                  )}
                  onInput={handleReportChange}
                />
              </div>
            </div>

            <div
              className='flex justify-end gap-3 px-5 bg-white py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
            >
              <Dialog.Close
                className='bg-empty rounded-full px-7 py-3 hover:brightness-95'
              >
                Cancel
              </Dialog.Close>

              {!isReportEmpty && (
                <button
                  type='submit'
                  disabled={isLoading}
                  className={clsx(
                    'bg-sinopia text-white rounded-full px-7 py-3 hover:shadow-lg brightness-100 hover:brightness-105'
                  )}
                >
                  {isLoading && <Spinner />}
                  <div
                    className={clsx(isLoading && 'opacity-0')}
                  >
                    Done
                  </div>
                </button>
              )}
            </div>
          </Form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ReportFragranceDialog
