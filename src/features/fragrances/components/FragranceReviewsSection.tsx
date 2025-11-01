import React, { forwardRef, useState } from 'react'
import PageCategory from '@/components/PageCategory'
import Divider from '@/components/Divider'
import { PageNav } from '@/components/PageNav'
import type { FragranceDetailFragment } from '@/generated/graphql'
import StartReviewButton from './StartReviewButton'
import { ReviewsSummary } from './ReviewsSummary'

const REVIEWS_PER_PAGE = 4

export interface FragranceReviewsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fragrance: FragranceDetailFragment
}

const FragranceReviewsSection = forwardRef<HTMLDivElement, FragranceReviewsSectionProps>((props, ref) => {
  const { fragrance, ...rest } = props
  const { reviewInfo } = fragrance

  const { data: myReview } = useMyReview(fragrance.id)
  const { data: reviews } = useFragranceReviews(fragrance.id)

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
            className='max-w-4xl w-full'
          >
            {myReview == null &&
              (
                <StartReviewButton
                  fragrance={fragrance}
                />
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
              reviewsPerPage={4}
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
