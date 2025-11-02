import React, { forwardRef, useState } from 'react'
import PageCategory from '@/components/PageCategory'
import Divider from '@/components/Divider'
import { PageNav } from '@/components/PageNav'
import type { FragranceDetailFragment } from '@/generated/graphql'
import StartReviewButton from './StartReviewButton'
import { ReviewsSummary } from './ReviewsSummary'
import { useFragranceReviews } from '../hooks/useFragranceReviews'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import { ReviewsList } from './ReviewsList'

const REVIEWS_PER_PAGE = 4

export interface FragranceReviewsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fragrance: FragranceDetailFragment
}

const FragranceReviewsSection = forwardRef<HTMLDivElement, FragranceReviewsSectionProps>((props, ref) => {
  const { fragrance, ...rest } = props
  const { id, reviewInfo } = fragrance

  const { myReview } = useMyFragranceReview(id)
  const { reviews } = useFragranceReviews(id)

  const [curReviewPage, setCurReviewPage] = useState(0)

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)

  return (
    <div
      ref={ref}
      {...rest}
    >
      <PageCategory
        title='Reviews'
      >
        <div
          className='w-full flex flex-col items-center'
        >
          <div
            className='max-w-4xl w-full flex flex-col'
          >
            {myReview == null &&
              (
                <div
                  className='max-w-3xl w-full self-center my-10'
                >
                  <StartReviewButton
                    fragrance={fragrance}
                  />
                </div>
              )}

            <ReviewsSummary
              info={reviewInfo}
              className='w-full max-w-4xl mt-3'
            />

            <Divider
              horizontal
              className='my-5'
            />

            <ReviewsList
              myReview={myReview}
              reviews={reviews}
              currentPage={curReviewPage}
              reviewsPerPage={REVIEWS_PER_PAGE}
            />

            <PageNav
              totalPages={totalPages}
              curPage={curReviewPage}
              onPageChange={setCurReviewPage}
              className='mr-auto my-2'
            />
          </div>
        </div>
      </PageCategory>
    </div>
  )
})

export default FragranceReviewsSection
