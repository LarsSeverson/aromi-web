import React from 'react'
import clsx from 'clsx'
import blankFragranceThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import emptyCollectionThumbnail from '@/assets/empty-collection-thumbnail.svg'
import { Overlay } from './Overlay'

export interface GridImagesProps extends React.HTMLAttributes<HTMLDivElement> {
  urls: string[]
  fallback?: string
  emptyImage?: string
}

const GridImages = (props: GridImagesProps) => {
  const {
    urls,
    fallback = blankFragranceThumbnail,
    emptyImage = emptyCollectionThumbnail,
    className,
    ...rest
  } = props

  const itemsShown = urls.slice(0, Math.min(urls.length, 4))

  return (
    <div
      className={clsx(
        className,
        'relative grid overflow-hidden rounded-2xl bg-white group-hover:brightness-[.85]',
        itemsShown.length === 1 && 'grid-cols-1 grid-rows-1',
        itemsShown.length !== 1 && 'grid-cols-2 grid-rows-2'
      )}
      {...rest}
    >
      {itemsShown.map((url, index) => (
        <img
          key={index}
          className={clsx(
            'h-full w-full object-cover',
            itemsShown.length === 2 && 'row-span-2',
            (itemsShown.length === 3 && index === 0) && 'row-span-2'
          )}
          src={url ?? fallback}
        />
      ))}

      {itemsShown.length === 0 && (
        <img
          src={emptyImage}
          className='col-span-2 row-span-2 h-full w-full'
        />
      )}

      <Overlay />
    </div>
  )
}

export default GridImages
