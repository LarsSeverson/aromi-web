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

const ReportReviewDialog = (_: ReportReviewDialogProps) => {
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

  const handleOnSubmit = (event: React.FormEvent) => {
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
        className='flex w-full items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
      >
        <TbFlag
          size={20}
        />

        <span
          className='text-md font-semibold'
        >
          Report this review
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className='fixed inset-0 bg-black/30 backdrop-blur-sm'
        />

        <Dialog.Popup
          className='fixed top-1/2 left-1/2 flex h-130 w-180 -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl bg-white'
        >
          <Dialog.Title
            className='p-6 text-center text-3xl font-medium'
          >
            Report Review
          </Dialog.Title>

          <Form
            onSubmit={handleOnSubmit}
            className='flex flex-1 flex-col'
          >
            <div className='flex flex-1 gap-8 px-8 pt-5 pb-8'>
              <div
                className='flex flex-2 flex-col gap-2'
              >
                <textarea
                  ref={reportRef}
                  placeholder='Notice something concerning? Tell us here...'
                  className={clsx(
                    'hover:border-sinopia h-full w-full resize-none rounded-md border border-gray-300 p-4 outline-none',
                    'focus:border-sinopia transition-colors duration-300 ease-in-out focus:border-2 focus:outline-none'
                  )}
                  onInput={handleReportChange}
                />

                <div
                  className='ml-auto flex gap-1'
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
              className='flex justify-end gap-3 bg-white px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
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
                    'bg-sinopia rounded-full px-7 py-3 text-white brightness-100 hover:shadow-lg hover:brightness-105'
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
