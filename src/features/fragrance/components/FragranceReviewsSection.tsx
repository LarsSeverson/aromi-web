import React, { forwardRef, useState } from 'react'
import PageCategory from '@/components/PageCategory'
import MyReviewSection from './MyReviewSection'
import { useMyReview } from '@/features/user'
import { ReviewsSummary } from './ReviewsSummary'
import Divider from '@/components/Divider'
import { ReviewsList } from './ReviewsList'
import useFragranceReviews from '../hooks/useFragranceReviews'
import { PageNav } from '@/components/PageNav'
import { type IFragranceSummary } from '../types'
import StartReviewButton from './StartReviewButton'

const REVIEWS_PER_PAGE = 4

export interface FragranceReviewsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fragrance: IFragranceSummary
}

const FragranceReviewsSection = forwardRef<HTMLDivElement, FragranceReviewsSectionProps>((props, ref) => {
  const { fragrance, ...rest } = props

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
            {myReview != null
              ? (
                <MyReviewSection
                  myReview={myReview}
                />
                )
              : (
                <StartReviewButton
                  fragrance={fragrance}
                />
                )}

            <ReviewsSummary
              rating={fragrance.rating}
              reviewCount={fragrance.reviewsCount}
              reviewDistribution={fragrance.reviewDistribution}
              className='w-full max-w-4xl mt-3'
            />

            <Divider
              horizontal
              className='my-5'
            />

            <ReviewsList
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
