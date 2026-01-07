import FragranceImageCard from '@/features/fragrances/components/FragranceImageCard'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

export interface PostPreviewCardFragranceProps {
  fragrance: FragrancePreviewFragment
}

const PostPreviewCardFragrance = (props: PostPreviewCardFragranceProps) => {
  const { fragrance } = props
  const { name, brand, thumbnail } = fragrance ?? {}

  const handleOnFragranceClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  if (fragrance == null) return null

  return (
    <div
      className={clsx(
        'group relative flex flex-col items-center overflow-hidden rounded-2xl border hover:cursor-pointer'
      )}
    >
      <div
        className="absolute inset-0 -z-10 blur-3xl"
        style={{ backgroundColor: thumbnail?.primaryColor ?? Colors.empty2 }}
      />

      <div
        className='flex h-130 w-90 flex-col py-3'
      >
        <div
          className='relative flex h-full w-full flex-col overflow-hidden rounded-4xl'
        >
          <FragranceImageCard
            isActive={false}
            fragrance={fragrance}
            className='group-hover:brightness-100!'
          />

          <Link
            to='/fragrances/$id'
            params={{ id: fragrance.id }}
            className='absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-2xl hover:bg-black/70'
            onClick={handleOnFragranceClick}
          >
            <HiOutlineExternalLink />
          </Link>
        </div>

        <div
          className='px-1 pt-2 text-center'
        >
          <div
            className='flex flex-row'
          >
            <h5
              className='text-md flex-1 truncate font-semibold'
            >
              {name}
            </h5>
          </div>

          <h6
            className='truncate text-sm'
          >
            {brand.name}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default PostPreviewCardFragrance
