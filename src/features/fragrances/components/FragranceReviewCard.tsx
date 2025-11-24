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

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const { review, isFragranceFocused = false, ...rest } = props
  const { author, rating, body, createdAt, fragrance } = review
  const { thumbnail, name, brand } = fragrance
  const { username } = author

  const [showFull, setShowFull] = React.useState(false)

  const { url, primaryColor } = thumbnail ?? {}
  const showBody = body != null && body.length > 0
  const isLong = (body?.length ?? 0) > MAX_REVIEW_BODY_DISPLAY_LENGTH
  const displayText = showFull ? body : body?.slice(0, MAX_REVIEW_BODY_DISPLAY_LENGTH)

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-5 border-b p-5',
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
              <Link
                to='/fragrances/$id'
                params={{ id: fragrance.id }}
              >
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
          className='flex flex-col gap-1'
        >
          <div
            className='flex w-full min-w-0 flex-row items-center gap-3 self-start'
          >
            <p
              className='truncate'
            >
              <Link
                to={isFragranceFocused ? '/fragrances/$id' : '/users/$id'}
                params={{ id: isFragranceFocused ? fragrance.id : author.id }}
                className='text-md font-medium'
              >
                {isFragranceFocused ? name : username}
              </Link>

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
        <div
          className='flex flex-col gap-2'
        >
          <p
            className='text-md text-black/90'
          >
            {displayText}
            {(!showFull && isLong) && '...'}
          </p>

          {isLong && (
            <button
              onClick={setShowFull.bind(null, prev => !prev)}
              className='cursor-pointer self-start text-sm font-medium text-black'
            >
              {showFull ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
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
