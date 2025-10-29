import React, { useRef, useState } from 'react'
import blankFragranceThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import { Dialog, Form } from '@base-ui-components/react'
import { TbFlag } from 'react-icons/tb'
import { Overlay } from '@/components/Overlay'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'
import { useToastMessage } from '@/hooks/useToastMessage'
import type { FragranceDetailFragment } from '@/generated/graphql'
import { useCreateFragranceReport } from '../hooks/useCreateFragranceReport'
import { MAX_REPORT_BODY_LENGTH, MIN_REPORT_BODY_LENGTH } from '../utils/validation'

export interface ReportFragranceDialogProps {
  fragrance: FragranceDetailFragment
}

const ReportFragranceDialog = (props: ReportFragranceDialogProps) => {
  const { fragrance } = props
  const { brand, name, images } = fragrance

  const { toastMessage, toastError } = useToastMessage()
  const { createReport } = useCreateFragranceReport()

  const reportRef = useRef<HTMLTextAreaElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isReportEmpty, setIsReportEmpty] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [characterCount, setCharacterCount] = useState(0)

  const showSubmitButton = !isReportEmpty &&
    characterCount >= MIN_REPORT_BODY_LENGTH &&
    characterCount <= MAX_REPORT_BODY_LENGTH

  const handleReportChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    const length = value.length

    setCharacterCount(prev => (prev === length ? prev : length))
    setIsReportEmpty(length === 0)
  }

  const handleCreateReport = async (body: string) => {
    setIsLoading(true)

    const fragranceId = fragrance.id

    const res = await createReport({ fragranceId, body })

    res.match(
      () => {
        setIsDialogOpen(false)
        toastMessage('Thanks for helping us improve.')
      },
      _ => {
        toastError('', 'Something went wrong creating this report')
      }
    )

    setIsLoading(false)

  }

  const handleSubmitReport = (event: React.FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const body = reportRef.current?.value ?? ''

    handleCreateReport(body)
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
            onSubmit={handleSubmitReport}
          >
            <div className='flex px-8 pb-8 pt-5 gap-8'>
              <div
                className='flex-1 overflow-hidden'
              >
                <div
                  className='relative rounded-2xl overflow-hidden'
                >
                  <img
                    src={images.at(0)?.url ?? blankFragranceThumbnail}
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
                  {brand.name}
                </p>
              </div>

              <div
                className='flex-[2] flex flex-col gap-2'
              >
                <textarea
                  ref={reportRef}
                  placeholder='Notice something incorrect or missing? Tell us here...'
                  className={clsx(
                    'border-2 border-gray-300 rounded-md w-full h-full p-4 resize-none outline-none hover:border-sinopia',
                    'transition-colors ease-in-out duration-300 focus:border-sinopia focus:border-2 focus:outline-none'
                  )}
                  onInput={handleReportChange}
                />

                <div
                  className='flex ml-auto gap-1'
                >
                  {characterCount < MIN_REPORT_BODY_LENGTH && (
                    <span
                      className='text-sm text-gray-500'
                    >
                      Reports need to be at least {MIN_REPORT_BODY_LENGTH} character.
                    </span>
                  )}

                  <span
                    className={clsx(
                      characterCount > MAX_REPORT_BODY_LENGTH && 'text-red-700',
                      'text-sm text-gray-500'
                    )}
                  >
                    ({characterCount} / {MAX_REPORT_BODY_LENGTH})
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

              {showSubmitButton && (
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
