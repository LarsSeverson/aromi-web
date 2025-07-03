import React, { useRef, useState, type SyntheticEvent } from 'react'
import { Dialog, Field, Form } from '@base-ui-components/react'
import clsx from 'clsx'
import { type FragrancePreviewCardFragrance } from '../fragrance/FragrancePreviewCard'
import empty from '@/assets/fall-back-fi.svg'
import { Overlay } from '../common/Overlay'
import Spinner from '../common/Spinner'
import CollectionPreviewBar, { type CollectionPreviewBarCollection } from '../fragrance/CollectionPreviewBar'
import { INVALID_ID } from '@/common/util-types'
import { FiPlus } from 'react-icons/fi'
import { useCreateFragranceCollectionWithItem } from '@/hooks/useCreateFragranceCollectionWithItem'

const NEW_COLLECTION_PLACEHOLDER = (fragrance: FragrancePreviewCardFragrance): CollectionPreviewBarCollection => ({
  id: INVALID_ID,
  name: 'New Collection',
  items: [{
    id: INVALID_ID,
    fragrance
  }],
  hasFragrance: false
})

export interface NewCollectionDialogProps {
  fragrance: FragrancePreviewCardFragrance
}

const NewCollectionDialog = (props: NewCollectionDialogProps) => {
  const { fragrance } = props

  const { createFragranceCollectionWithItem } = useCreateFragranceCollectionWithItem()

  const nameRef = useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()

    setLoading(true)

    await createFragranceCollectionWithItem({
      name: nameRef.current?.value ?? 'My new collection',
      fragranceId: fragrance.id
    })
      .andTee(console.log)
      .orTee(error => {
        console.log(error.graphQLErrors)
      })
      .match(
        () => {
          setIsOpen(false)
        },
        error => {
          setError(error
            .graphQLErrors
            .map(e => e.message)
            .join('; ')
          )
        }
      )

    setLoading(false)
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger
        className='w-full flex items-center px-2 py-0 hover:backdrop-brightness-95 gap-2 cursor-pointer justify-between'
      >
        <CollectionPreviewBar
          collection={NEW_COLLECTION_PLACEHOLDER(fragrance)}
        />
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
            onSubmit={(event) => { void handleSubmit(event) }}
          >
            <div className='flex px-8 pb-8 pt-5 gap-8'>
              <div
                className='flex-1 overflow-hidden'
              >
                <div
                  className='relative rounded-2xl overflow-hidden'
                >
                  <img
                    src={fragrance.images.at(0)?.src ?? empty}
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
                <Field.Root
                  name='collection'
                >
                  <Field.Label
                    className='font-semibold text-md'
                  >
                    Name
                  </Field.Label>
                  <Field.Control
                    ref={nameRef}
                    className={({ valid }) =>
                      clsx(
                        'w-full h-11 px-2 my-1 border-2 rounded-md outline-2 -outline-offset-1 outline-none focus:outline-sinopia',
                        !(valid ?? true) && 'focus:outline-red-700'
                      )}
                    required
                    placeholder='My New Collection'
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
                className='bg-empty rounded-full px-7 py-3 hover:brightness-95'
              >
                Cancel
              </Dialog.Close>
              <button
                type='submit'
                disabled={loading}
                className={clsx(
                  'bg-sinopia text-white rounded-full px-7 py-3 hover:shadow-lg brightness-100 hover:brightness-105'
                )}
              >
                {loading && <Spinner />}
                <div
                  className={clsx(loading && 'opacity-0')}
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

export default NewCollectionDialog
