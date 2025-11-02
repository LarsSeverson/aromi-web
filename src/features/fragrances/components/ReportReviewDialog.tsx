import React, { useRef, useState } from 'react'
import { Dialog, Form } from '@base-ui-components/react'
import { TbFlag } from 'react-icons/tb'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'
import type { AllFragranceReviewFragment } from '@/generated/graphql'

const MIN_LENGTH = 100
const MAX_LENGTH = 1000

export interface ReportReviewDialogProps {
  review: AllFragranceReviewFragment
}

const ReportReviewDialog = (props: ReportReviewDialogProps) => {
  const reportRef = useRef<HTMLTextAreaElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isReportEmpty, setIsReportEmpty] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [characterCount, setCharacterCount] = useState(0)

  const handleReportChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    const length = value.length

    setCharacterCount(prev => (prev === length ? prev : length))
    setIsReportEmpty(length === 0)
  }

  const handleReportSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setIsLoading(true)

    setIsLoading(false)
  }

  return (
    <Dialog.Root
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <Dialog.Trigger
        className='w-full flex p-3 hover:brightness-95 bg-white rounded-xl gap-2 items-center justify-start'
      >
        <TbFlag
          size={20}
        />

        <span
          className='font-semibold text-md'
        >
          Report this review
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />

        <Dialog.Popup
          className='flex flex-col w-[720px] h-[520px] bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden'
        >
          <Dialog.Title
            className='text-3xl text-center font-medium p-6'
          >
            Report Review
          </Dialog.Title>

          <Form
            onSubmit={(event) => { void handleReportSubmit(event) }}
            className='flex-1 flex flex-col'
          >
            <div className='flex px-8 pb-8 pt-5 gap-8 flex-1'>
              <div
                className='flex-2 flex flex-col gap-2'
              >
                <textarea
                  ref={reportRef}
                  placeholder='Notice something concerning? Tell us here...'
                  className={clsx(
                    'border border-gray-300 rounded-md w-full h-full p-4 resize-none outline-none hover:border-sinopia',
                    'transition-colors ease-in-out duration-300 focus:border-sinopia focus:border-2 focus:outline-none'
                  )}
                  onInput={handleReportChange}
                />

                <div
                  className='flex ml-auto gap-1'
                >
                  {characterCount < 100 && (
                    <span
                      className='text-sm text-gray-500'
                    >
                      Reports need to be at least {MIN_LENGTH} characters.
                    </span>
                  )}

                  <span
                    className='text-sm text-gray-500'
                  >
                    ({characterCount} / {MAX_LENGTH})
                  </span>
                </div>
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

              {!isReportEmpty && (characterCount >= MIN_LENGTH) && (
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

export default ReportReviewDialog
