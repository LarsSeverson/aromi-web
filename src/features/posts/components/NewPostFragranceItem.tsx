import { InputPopover } from '@/components/input-popover'
import ProgressiveImage from '@/components/ProgressiveImage'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'

export interface NewPostFragranceItemProps {
  fragrance: FragrancePreviewFragment
  index: number
}

const NewPostFragranceItem = (props: NewPostFragranceItemProps) => {
  const { fragrance, index } = props
  const { name, brand, thumbnail } = fragrance

  const { onFragranceIdChange } = useNewPostContext()

  const [isActive, setIsActive] = React.useState(false)

  const handleOnClick = () => {
    onFragranceIdChange(fragrance.id)
  }

  return (
    <InputPopover.Item
      index={index}
      onActiveChange={setIsActive}
      className={clsx(
        'flex min-h-10 w-full items-center gap-4 px-4',
        'group cursor-pointer rounded-md',
        'hover:bg-empty',
        isActive && 'bg-empty'
      )}
      onClick={handleOnClick}
    >
      <div
        className='h-15 w-10 overflow-hidden rounded-lg p-2'
      >
        <ProgressiveImage
          src={thumbnail?.url ?? ''}
          alt={name}
          placeholderColor={thumbnail?.primaryColor}
        />
      </div>

      <div
        className='text-md'
      >
        {name}
      </div>

      <div
        className='text-xs text-black/60'
      >
        {brand.name}
      </div>
    </InputPopover.Item>
  )
}

export default NewPostFragranceItem
