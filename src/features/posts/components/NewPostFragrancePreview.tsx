import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import { useFragrance } from '@/features/fragrances'
import { INVALID_ID } from '@/utils/util'
import ProgressiveImage from '@/components/ProgressiveImage'
import { CgClose } from 'react-icons/cg'
import { Field } from '@base-ui/react'

export interface NewPostFragrancePreviewProps {}

const NewPostFragrancePreview = (_props: NewPostFragrancePreviewProps) => {
  const { fragranceId, onFragranceIdChange } = useNewPostContext()

  const { fragrance } = useFragrance(fragranceId ?? INVALID_ID)
  const { name, brand, thumbnail } = fragrance ?? {}

  const handleOnClearClick = () => {
    onFragranceIdChange(null)
  }

  if (fragrance == null || fragranceId == null) return null

  return (
    <Field.Root
      name='fragranceId'
      className='flex flex-col'
    >
      <div
        className='relative flex w-full flex-col items-center rounded-2xl border p-4'
      >
        <div
          className='flex flex-col'
        >
          <div
            className='h-100 w-80 overflow-hidden rounded-2xl'
          >
            <ProgressiveImage
              src={thumbnail?.url ?? ''}
              alt={name ?? ''}
              placeholderColor={thumbnail?.primaryColor}
            />
          </div>

          <div
            className='mt-2 text-center text-lg font-semibold'
          >
            {name}
          </div>

          <div
            className='text-center text-sm text-black/60'
          >
            {brand?.name}
          </div>
        </div>

        <button
          type='button'
          className='absolute top-4 right-4 z-20 cursor-pointer rounded-full bg-black/50 p-1 text-white hover:bg-black/70'
          onClick={handleOnClearClick}
        >
          <CgClose />
        </button>

        <Field.Control
          required
          className='sr-only'
          value={fragranceId}
          readOnly
        />
      </div>
    </Field.Root>
  )
}

export default NewPostFragrancePreview
