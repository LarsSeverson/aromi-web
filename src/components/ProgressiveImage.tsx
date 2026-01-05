import React, { useState } from 'react'
import clsx from 'clsx'

export interface ProgressiveImageProps {
  src: string
  alt: string
  placeholderColor?: string | null
  fallbackImage?: string
}

const ProgressiveImage = (props: ProgressiveImageProps) => {
  const {
    src,
    alt,
    placeholderColor,
    fallbackImage = ''
  } = props

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className={clsx(
        'bg-empty relative h-full w-full overflow-hidden'
      )}
      style={{
        backgroundColor: placeholderColor ?? undefined,
        fontSize: isLoading ? 0 : 14
      }}
    >
      <img
        src={src ?? fallbackImage}
        alt={alt}
        loading='lazy'
        className='absolute h-full w-full object-cover'
        onLoad={() => { setIsLoading(false) }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = fallbackImage
        }}
      />

      <div
        className='absolute h-full w-full bg-gray-400 opacity-10'
      />
    </div>
  )
}

export default ProgressiveImage
