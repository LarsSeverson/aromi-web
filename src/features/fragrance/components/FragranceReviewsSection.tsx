import React, { forwardRef, useState } from 'react'
import PageCategory from '@/components/PageCategory'
import { type FragrancePageFragrance } from '../pages/FragrancePage'
import MyReviewSection from './MyReviewSection'
import { useMyReview } from '@/features/user'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import { useNavigate } from '@tanstack/react-router'
import { ReviewsSummary } from './ReviewsSummary'
import Divider from '@/components/Divider'
import { ReviewsList } from './ReviewsList'
import useFragranceReviews from '../hooks/useFragranceReviews'
import { PageNav } from '@/components/PageNav'

const REVIEWS_PER_PAGE = 4

export interface FragranceReviewsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fragrance: FragrancePageFragrance
}

const FragranceReviewsSection = forwardRef<HTMLDivElement, FragranceReviewsSectionProps>((props, ref) => {
  const { fragrance, ...rest } = props

  const navigate = useNavigate()

  const { data: myReview } = useMyReview(fragrance.id)
  const { data: reviews } = useFragranceReviews(fragrance.id)

  const [curReviewPage, setCurReviewPage] = useState(0)
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)

  return (
    <div
      ref={ref}
      {...rest}
    >
      {myReview != null && (
        <MyReviewSection
          myReview={myReview}
        />
      )}

      <PageCategory
        title='Reviews'
      >
        <div
          className='w-full flex flex-col items-center'
        >
          <div className='max-w-4xl w-full'>
            {myReview == null && (
              <InteractableRatingStars
                rating={0}
                size={42}
                emptyColor={Colors.empty2}
                filledColor={Colors.sinopia}
                className='mb-5'
                onStarClick={(rating) => {
                  void navigate({
                    from: '/fragrance/$id',
                    to: 'review',
                    search: {
                      rating
                    }
                  })
                }}
              />
            )}

            <ReviewsSummary
              rating={fragrance.rating}
              reviewCount={fragrance.reviewsCount}
              reviewDistribution={fragrance.reviewDistribution}
              className='w-full max-w-4xl'
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
