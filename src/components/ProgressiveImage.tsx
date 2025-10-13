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
        'w-full h-full relative overflow-hidden bg-empty'
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
        className='object-cover absolute w-full h-full'
        onLoad={() => { setIsLoading(false) }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = fallbackImage
        }}
      />

      <div
        className='bg-gray-400 w-full h-full absolute opacity-10'
      />
    </div>
  )
}

export default ProgressiveImage
