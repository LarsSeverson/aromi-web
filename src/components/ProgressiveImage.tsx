import React, { useState } from 'react'
import { Overlay } from './Overlay'
import clsx from 'clsx'

export interface ProgressiveImageProps {
  src: string
  alt: string
  placeholderColor?: string
  fallbackImage?: string
}

const ProgressiveImage = (props: ProgressiveImageProps) => {
  const {
    src,
    alt,
    placeholderColor = 'white',
    fallbackImage = ''
  } = props

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className={clsx(
        'w-full h-full relative overflow-hidden'
      )}
      style={{
        backgroundColor: placeholderColor,
        fontSize: isLoading ? 0 : 14
      }}
    >
      <img
        src={src ?? fallbackImage}
        alt={alt}
        loading='lazy'
        className='object-cover absolute w-full h-full bg-transparent'
        onLoad={() => { setIsLoading(false) }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = fallbackImage
        }}
      />
      <Overlay />
    </div>
  )
}

export default ProgressiveImage
