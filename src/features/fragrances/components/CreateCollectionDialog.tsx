import React, { useState } from 'react'
import { Dialog, Field, Form } from '@base-ui-components/react'
import clsx from 'clsx'
import blankFragranceThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import { Overlay } from '@/components/Overlay'
import Spinner from '@/components/Spinner'
import { FiPlus } from 'react-icons/fi'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useCreateFragranceCollection } from '../hooks/useCreateFragranceCollection'
import { useToastMessage } from '@/hooks/useToastMessage'
import GridImages from '@/components/GridImages'

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
        className='w-full flex items-center px-2 pr-4 py-0 hover:backdrop-brightness-95 gap-2 cursor-pointer justify-between rounded-md'
      >
        <div
          className='flex h-16 items-center gap-4 overflow-ellipsis'
        >
          <GridImages
            urls={[thumbnail?.url ?? '']}
            className='h-12 aspect-square rounded-md shrink-0'
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
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />

        <Dialog.Popup
          className='w-[720px] bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden'
        >
          <Dialog.Title
            className='text-3xl text-center font-medium p-6'
          >
            Create Collection
          </Dialog.Title>

          <Form
            className='relative'
            onSubmit={handleFormSubmit}
          >
            <div
              className='flex px-8 pb-8 pt-5 gap-8'
            >
              <div
                className='flex-1 overflow-hidden'
              >
                <div
                  className='relative rounded-2xl overflow-hidden'
                >
                  <img
                    src={thumbnail?.url ?? blankFragranceThumbnail}
                    alt={`${name} by ${brand.name}`}
                    className='object-cover aspect-square w-full'
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
                className='flex-[2]'
              >
                <Field.Root
                  name='name'
                >
                  <Field.Label
                    className='font-semibold text-md'
                  >
                    Name
                  </Field.Label>

                  <Field.Control
                    required
                    placeholder='My New Collection'
                    className={clsx(
                      'w-full h-11 px-2 my-1 border-2 rounded-md outline-2 -outline-offset-1 outline-none focus:outline-sinopia'
                    )}
                  />

                  <Field.Error
                    className='text-red-700 font-semibold text-sm ml-1'
                    match='valueMissing'
                  >
                    Don't forget to name your collection!
                  </Field.Error>
                </Field.Root>
              </div>
            </div>

            <div
              className='flex justify-between px-5 bg-white py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
            >
              <Dialog.Close
                className='bg-empty rounded-full px-7 py-3 hover:brightness-95 cursor-pointer'
              >
                Cancel
              </Dialog.Close>

              <button
                type='submit'
                disabled={isLoading}
                className={clsx(
                  'bg-sinopia text-white rounded-full px-7 py-3 hover:shadow-lg brightness-100 hover:brightness-105',
                  'cursor-pointer relative flex items-center justify-center'
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
