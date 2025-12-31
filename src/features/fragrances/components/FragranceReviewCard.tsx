import { Colors } from '@/styles/Colors'
import React from 'react'
import { formatDate } from '@/utils/string-utils'
import RatingStars from '@/components/RatingStars'
import clsx from 'clsx'
import type { AllFragranceReviewFragment } from '@/generated/graphql'
import UserAvatar from '@/features/users/components/UserAvatar'
import MoreOptionsReviewPopover from './MoreOptionsReviewPopover'
import ProgressiveImage from '@/components/ProgressiveImage'
import blankPreviewThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import { Link } from '@tanstack/react-router'
import { MAX_REVIEW_BODY_DISPLAY_LENGTH } from '../utils/constants'

export interface FragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: AllFragranceReviewFragment
  isFragranceFocused?: boolean
}

const MAX_NEWLINES = 4

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const { review, isFragranceFocused = false, ...rest } = props
  const { author, rating, body, createdAt, fragrance } = review
  const { thumbnail, name, brand } = fragrance
  const { username } = author

  const [showFull, setShowFull] = React.useState(false)

  const { url, primaryColor } = thumbnail ?? {}
  const showBody = body != null && body.length > 0

  const newlineCount = (body?.match(/\n/g) ?? []).length
  const isTooLong = (body?.length ?? 0) > MAX_REVIEW_BODY_DISPLAY_LENGTH
  const hasTooManyLines = newlineCount > MAX_NEWLINES
  const isLong = isTooLong || hasTooManyLines

  const displayText = showFull
    ? body
    : body?.split('\n').slice(0, MAX_NEWLINES + 1)
      .join('\n')
      .slice(0, MAX_REVIEW_BODY_DISPLAY_LENGTH)

  return (
    <div
      className={clsx(
        rest.className,
        'flex w-full flex-col border-b',
        'gap-4 p-4 md:gap-5 md:p-5'
      )}
      {...rest}
    >
      <div
        className='flex flex-row gap-4 md:gap-5'
      >
        <div
          className={clsx(
            isFragranceFocused
              ? 'h-16 w-12 md:h-20 md:w-16'
              : 'h-10 w-10 md:h-14 md:w-14'
          )}
        >
          {isFragranceFocused ?
            (
              <Link
                to='/fragrances/$id'
                params={{ id: fragrance.id }}
              >
                <div
                  className='relative h-full w-full overflow-hidden rounded-lg border'
                >
                  <ProgressiveImage
                    src={url ?? blankPreviewThumbnail}
                    alt={`Thumbnail image for ${fragrance.name} by ${fragrance.brand.name}`}
                    placeholderColor={primaryColor}
                    fallbackImage={blankPreviewThumbnail}
                  />
                </div>
              </Link>
            )
            :
            (
              <Link
                to='/users/$id'
                params={{ id: author.id }}
              >
                <UserAvatar
                  user={author}
                />
              </Link>
            )}
        </div>

        <div
          className='flex min-w-0 flex-col gap-0.5 md:gap-1'
        >
          <div
            className='flex w-full min-w-0 flex-row items-center gap-2 self-start md:gap-3'
          >
            <p
              className='truncate'
            >
              <Link
                to={isFragranceFocused ? '/fragrances/$id' : '/users/$id'}
                params={{ id: isFragranceFocused ? fragrance.id : author.id }}
                className='text-sm font-medium md:text-base'
              >
                {isFragranceFocused ? name : username}
              </Link>

              <span className='h-min w-min text-xs text-gray-600'> • </span>

              <span
                className='text-[10px] text-gray-500 md:text-xs'
              >
                {formatDate(createdAt)}
              </span>
            </p>
          </div>

          {isFragranceFocused && (
            <span
              className='truncate text-xs text-black/70 md:text-sm'
            >
              {brand.name}
            </span>
          )}

          <RatingStars
            rating={rating}
            filledColor={Colors.sinopia}
            emptyColor={Colors.empty}
            className='mt-0.5 md:size-5'
          />
        </div>

        <div
          className='ml-auto'
        >
          <MoreOptionsReviewPopover
            review={review}
          />
        </div>
      </div>

      {showBody && (
        <div
          className='flex flex-col gap-1.5 md:gap-2'
        >
          <p
            className='text-sm leading-relaxed whitespace-pre-wrap text-black/90 md:text-base'
          >
            {displayText}
            {(!showFull && isLong) && '...'}
          </p>

          {isLong && (
            <button
              onClick={() => { setShowFull(prev => !prev) }}
              className='cursor-pointer self-start text-xs font-semibold text-black md:text-sm'
            >
              {showFull ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}