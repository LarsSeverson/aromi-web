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

export interface FragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: AllFragranceReviewFragment
  isFragranceFocused?: boolean
}

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const { review, isFragranceFocused = false, ...rest } = props
  const { author, rating, body, createdAt, fragrance } = review
  const { thumbnail, name, brand } = fragrance
  const { username } = author

  const { url, primaryColor } = thumbnail ?? {}
  const showBody = body != null && body.length > 0

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-5 p-5',
        rest.className
      )}
      {...rest}
    >
      <div
        className='flex flex-row gap-5'
      >
        <div
          className={clsx(
            isFragranceFocused ? 'h-20' : 'h-14'
          )}
        >
          {isFragranceFocused ?
            (
              <div
                className='relative h-full w-16 overflow-hidden rounded-lg border'
              >
                <ProgressiveImage
                  src={url ?? blankPreviewThumbnail}
                  alt={`Thumbnail image for ${fragrance.name} by ${fragrance.brand.name}`}
                  placeholderColor={primaryColor}
                  fallbackImage={blankPreviewThumbnail}
                />
              </div>
            )
            :
            (
              <UserAvatar
                user={author}
              />
            )}

        </div>

        <div
          className='flex flex-col gap-1'
        >
          <div
            className='flex w-full min-w-0 flex-row items-center gap-3 self-start'
          >
            <p
              className='truncate'
            >
              <span
                className='text-md font-medium'
              >
                {isFragranceFocused ? name : username}
              </span>

              <span> • </span>

              <span
                className='text-xs'
              >
                {formatDate(createdAt)}
              </span>
            </p>
          </div>

          {isFragranceFocused && (
            <span
              className='text-sm text-black/70'
            >
              {brand.name}
            </span>
          )}

          <RatingStars
            rating={rating}
            filledColor={Colors.sinopia}
            emptyColor={Colors.empty}
            size={18}
            className='mt-1'
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
        <p>
          {body}
        </p>
      )}

      <div
        className='ml-auto'
      >
        {/* <VoteButtonGroup
          votes={votes}
        /> */}
      </div>
    </div>
  )
}
