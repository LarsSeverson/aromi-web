import React, { useState } from 'react'
import { Dialog, Field, Form } from '@base-ui/react'
import clsx from 'clsx'
import blankFragranceThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import { Overlay } from '@/components/Overlay'
import Spinner from '@/components/Spinner'
import { FiPlus } from 'react-icons/fi'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useCreateFragranceCollection } from '../hooks/useCreateFragranceCollection'
import { useToastMessage } from '@/hooks/useToastMessage'
import GridImages from '@/components/GridImages'
import AuthButton from '@/features/auth/components/AuthButton'

export interface CreateCollectionDialogProps {
  fragrance: FragrancePreviewFragment
}

const CreateCollectionDialog = (props: CreateCollectionDialogProps) => {
  const { fragrance } = props
  const { id, name, brand, thumbnail } = fragrance

  const { toastError } = useToastMessage()
  const { createCollectionWithFragrance } = useCreateFragranceCollection()

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewCollection = async (name: string) => {
    setIsLoading(true)

    await createCollectionWithFragrance(id, name)
      .match(
        () => {
          setIsOpen(false)
        },
        ({ message }) => {
          toastError(message, 'Failed to create collection')
        }
      )

    setIsLoading(false)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string

    handleNewCollection(name)
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger
        className='flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-0 pr-4 hover:backdrop-brightness-95'
        render={AuthButton}
      >
        <div
          className='flex h-16 items-center gap-4 overflow-ellipsis'
        >
          <GridImages
            urls={[thumbnail?.url ?? '']}
            className='aspect-square h-12 shrink-0 rounded-md'
          />

          <h2>
            New Collection
          </h2>
        </div>

        <FiPlus
          size={22}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className='fixed inset-0 bg-black/30 backdrop-blur-sm'
        />

        <Dialog.Popup
          className='fixed top-1/2 left-1/2 w-[720px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white'
        >
          <Dialog.Title
            className='p-6 text-center text-3xl font-medium'
          >
            Create Collection
          </Dialog.Title>

          <Form
            className='relative'
            onSubmit={handleFormSubmit}
          >
            <div
              className='flex gap-8 px-8 pt-5 pb-8'
            >
              <div
                className='flex-1 overflow-hidden'
              >
                <div
                  className='relative overflow-hidden rounded-2xl'
                >
                  <img
                    src={thumbnail?.url ?? blankFragranceThumbnail}
                    alt={`${name} by ${brand.name}`}
                    className='aspect-square w-full object-cover'
                  />

                  <Overlay />
                </div>

                <p
                  className='text-md mx-2 mt-2 truncate font-medium'
                >
                  {name}
                </p>

                <p
                  className='text-md mx-2 font-light'
                >
                  {brand.name}
                </p>
              </div>

              <div
                className='flex-2'
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
              className='flex justify-between bg-white px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
            >
              <Dialog.Close
                className='bg-empty cursor-pointer rounded-full px-7 py-3 hover:brightness-95'
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
                  Create
                </div>
              </button>
            </div>
          </Form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CreateCollectionDialog
