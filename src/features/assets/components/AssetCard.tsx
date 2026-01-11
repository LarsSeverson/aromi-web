import clsx from 'clsx'
import React from 'react'

export interface AssetCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
}

const AssetCard = (props: AssetCardProps) => {
  const {
    src,
    alt = '',
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
    </div>
  )
}

export default AssetCard
