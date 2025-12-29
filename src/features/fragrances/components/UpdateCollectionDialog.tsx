import GridImages from '@/components/GridImages'
import { Overlay } from '@/components/Overlay'
import Spinner from '@/components/Spinner'
import type { FragranceCollectionPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import { Dialog, Field, Form } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { MdOutlineRateReview } from 'react-icons/md'
import { useUpdateFragranceCollection } from '../hooks/useUpdateFragranceCollection'
import { useDebounce } from '@/hooks/useDebounce'

export interface UpdateCollectionDialogProps {
  collection: FragranceCollectionPreviewFragment
  onClose?: () => void
}

const UpdateCollectionDialog = (props: UpdateCollectionDialogProps) => {
  const { collection, onClose } = props
  const { name, previewItems } = collection

  const { toastError, toastMessage } = useToastMessage()
  const { updateCollection } = useUpdateFragranceCollection()

  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const previewUrls = previewItems.map(item => item.fragrance.thumbnail?.url ?? '')

  const handleUpdateCollection = useDebounce(
    async (updatedName: string) => {
      const collectionId = collection.id
      const res = await updateCollection({ collectionId, name: updatedName })

      res.match(
        () => {
          toastMessage('Changes saved')

          setIsOpen(false)
          onClose?.()
        },
        error => {
          toastError(error.message)
        }
      )

      setIsLoading(false)
    }
  )

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const updatedName = formData.get('name') as string

    if (updatedName == null) return

    setIsLoading(true)
    handleUpdateCollection(updatedName)
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger
        className='group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
      >
        <MdOutlineRateReview
          size={20}
        />

        <span
          className='text-md font-semibold'
        >
          Edit collection
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm'
        />

        <Dialog.Popup
          className={clsx(
            'fixed z-50 flex flex-col overflow-hidden bg-white',
            'inset-0 h-full w-full',
            'md:top-1/2 md:left-1/2 md:h-auto md:w-180 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl'
          )}
        >
          <Dialog.Title
            className='p-6 text-center text-2xl font-medium md:text-3xl'
          >
            Edit Collection
          </Dialog.Title>

          <Form
            className='relative flex flex-1 flex-col overflow-y-auto'
            onSubmit={handleFormSubmit}
          >
            <div
              className={clsx(
                'flex px-8 pt-5 pb-8',
                'flex-col gap-6 md:flex-row md:gap-8'
              )}
            >
              <div
                className='overflow-hidden md:flex-1'
              >
                <div
                  className='relative overflow-hidden rounded-2xl'
                >
                  <GridImages
                    urls={previewUrls}
                    className='aspect-square w-full object-cover'
                  />

                  <Overlay />
                </div>

                <p
                  className='text-md mx-2 mt-2 truncate font-medium'
                >
                  {name}
                </p>
              </div>

              <div
                className='md:flex-2'
              >
                <Field.Root
                  name='name'
                >
                  <Field.Label
                    className='text-md font-semibold'
                  >
                    Name
                  </Field.Label>

                  <Field.Control
                    defaultValue={name}
                    required
                    placeholder='My New Collection'
                    className={clsx(
                      'focus:outline-sinopia my-1 h-11 w-full rounded-md border-2 px-2 outline-2 -outline-offset-1 outline-none'
                    )}
                  />

                  <Field.Error
                    className='ml-1 text-sm font-semibold text-red-700'
                    match='valueMissing'
                  >
                    Don't forget to name your collection!
                  </Field.Error>
                </Field.Root>
              </div>
            </div>

            <div
              className={clsx(
                'flex justify-between bg-white px-5 py-4 shadow-[0_-2px_10px_0px_rgba(0,0,0,0.05)] md:py-2 md:shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]',
                'sticky bottom-0 mt-auto'
              )}
            >
              <Dialog.Close
                className='bg-empty cursor-pointer rounded-full px-7 py-3 hover:brightness-95'
                onClick={onClose}
              >
                Cancel
              </Dialog.Close>

              <button
                type='submit'
                disabled={isLoading}
                className={clsx(
                  'bg-sinopia rounded-full px-7 py-3 text-white brightness-100 hover:shadow-lg hover:brightness-105',
                  'relative flex cursor-pointer items-center justify-center'
                )}
              >
                {isLoading && (
                  <Spinner className='border-white' />
                )}

                <div
                  className={clsx(isLoading && 'opacity-0')}
                >
                  Save
                </div>
              </button>
            </div>
          </Form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default UpdateCollectionDialog