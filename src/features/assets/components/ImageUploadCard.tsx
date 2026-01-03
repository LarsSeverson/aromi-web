import ProgressSpinner from '@/components/ProgressSpinner'
import clsx from 'clsx'
import React from 'react'

export interface ImageUploadCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  uploadProgress?: number
  onRemoveClick?: () => void
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
