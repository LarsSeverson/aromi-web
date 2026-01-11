import FragranceImageCard from '@/features/fragrances/components/FragranceImageCard'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import type { Nullable } from '@/utils/util'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

export interface PostPreviewCardFragranceProps {
  fragrance?: Nullable<FragrancePreviewFragment>
  showLink?: boolean
}

const PostPreviewCardFragrance = (props: PostPreviewCardFragranceProps) => {
  const { fragrance, showLink = true } = props
  const { thumbnail } = fragrance ?? {}

  const handleOnFragranceClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  if (fragrance == null) return null

  return (
    <div
      className='flex flex-col'
    >
      <div
        className={clsx(
          'group relative flex flex-col items-center overflow-hidden rounded-2xl border hover:cursor-pointer'
        )}
      >
        <div
          className="absolute inset-0 -z-10 opacity-50 blur-3xl"
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

            {showLink && (
              <Link
                to='/fragrances/$id'
                params={{ id: fragrance.id }}
                className='absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-2xl hover:bg-black/70'
                onClick={handleOnFragranceClick}
              >
                <HiOutlineExternalLink />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPreviewCardFragrance
