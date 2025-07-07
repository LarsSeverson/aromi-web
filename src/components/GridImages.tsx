import React from 'react'
import clsx from 'clsx'
import emptyFragranceImage from '@/assets/fall-back-fi.svg'
import collectionImage from '@/assets/collection.svg'
import { Overlay } from './Overlay'

export interface GridImagesProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
  fallback?: string
  emptyImage?: string
}

const GridImages = (props: GridImagesProps) => {
  const {
    images: urls,
    fallback = emptyFragranceImage,
    emptyImage = collectionImage,
    className,
    ...rest
  } = props
  const itemsShown = urls.slice(0, Math.min(urls.length, 4))

  return (
    <div
      className={clsx(
        'rounded-2xl overflow-hidden grid relative group-hover:brightness-[.85] bg-white',
        className,
        itemsShown.length === 1 && 'grid-cols-1 grid-rows-1',
        itemsShown.length !== 1 && 'grid-cols-2 grid-rows-2'
      )}
      {...rest}
    >
      {itemsShown.map((url, index) => (
        <img
          key={index}
          className={clsx(
            'w-full h-full object-cover',
            itemsShown.length === 2 && 'row-span-2',
            (itemsShown.length === 3 && index === 0) && 'row-span-2'
          )}
          src={url ?? fallback}
        />
      ))}
      {itemsShown.length === 0 && (
        <img
          src={emptyImage}
          className='w-full h-full row-span-2 col-span-2'
        />
      )}
      <Overlay />
    </div>
  )
}

export default GridImages
