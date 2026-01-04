import ProgressSpinner from '@/components/ProgressSpinner'
import clsx from 'clsx'
import React from 'react'
import { CgClose } from 'react-icons/cg'

export interface ImageUploadCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  uploadProgress?: number
  onRemoveClick?: (event: React.MouseEvent) => void
}

const ImageUploadCard = (props: ImageUploadCardProps) => {
  const {
    src,
    alt = '',
    uploadProgress,
    onRemoveClick,
    className,
    ...rest
  } = props

  const handleOnButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onRemoveClick?.(e)
  }

  return (
    <div
      {...rest}
      className={clsx(
        className,
        'bg-empty relative overflow-hidden rounded-lg border'
      )}
    >
      {src != null && (
        <img
          src={src}
          alt={alt}
          className={clsx(
            'h-full w-full object-cover'
          )}
        />
      )}

      {src != null && (
        <button
          type='button'
          className='absolute top-2 right-2 z-20 cursor-pointer rounded-full bg-black/50 p-1 text-white hover:bg-black/70'
          onClick={handleOnButtonClick}
        >
          <CgClose />
        </button>
      )}

      {uploadProgress != null && uploadProgress < 100 && (
        <div
          className={clsx(
            'absolute inset-0 z-10 flex flex-col items-center justify-center'
          )}
        >
          <div
            className={clsx(
              'absolute inset-0 bg-black opacity-30'
            )}
          />

          <div
            className={clsx(
              'relative z-20'
            )}
          >
            <ProgressSpinner
              percent={uploadProgress}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageUploadCard
