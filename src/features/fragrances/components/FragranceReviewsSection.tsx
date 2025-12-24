import React, { forwardRef, useState } from 'react'
import PageCategory from '@/components/PageCategory'
import Divider from '@/components/Divider'
import { PageNav } from '@/components/PageNav'
import type { FragranceDetailFragment } from '@/generated/graphql'
import MyFragranceReviewButton from './MyFragranceReviewButton'
import { ReviewsSummary } from './ReviewsSummary'
import { useFragranceReviews } from '../hooks/useFragranceReviews'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import { ReviewsList } from './ReviewsList'
import clsx from 'clsx'

const REVIEWS_PER_PAGE = 4

export interface FragranceReviewsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  fragrance: FragranceDetailFragment
}

const FragranceReviewsSection = forwardRef<HTMLDivElement, FragranceReviewsSectionProps>((props, ref) => {
  const { fragrance, ...rest } = props
  const { id, reviewInfo } = fragrance

  const { myReview } = useMyFragranceReview(id)
  const { reviews, loadMore } = useFragranceReviews(id)

  const [curReviewPage, setCurReviewPage] = useState(0)

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)

  const handleOnPageChange = (page: number) => {
    setCurReviewPage(page)

    const isEnd = page >= totalPages - 1

    if (isEnd) {
      loadMore()
    }
  }

  return (
    <div
      ref={ref}
      {...rest}
    >
      <PageCategory
        title='Reviews'
      >
        <div
          className='flex w-full flex-col items-center'
        >
          <div
            className='flex w-full max-w-4xl flex-col'
          >
            <div
              className={clsx(
                'w-full self-center',
                'my-6 max-w-full md:my-10 md:max-w-3xl'
              )}
            >
              <MyFragranceReviewButton
                fragrance={fragrance}
                myReview={myReview}
              />
            </div>

            <ReviewsSummary
              info={reviewInfo}
              className={clsx(
                'w-full max-w-4xl',
                'mt-1 md:mt-3'
              )}
            />

            <Divider
              horizontal
              className={clsx(
                'my-4 md:my-5'
              )}
            />

            <ReviewsList
              myReview={myReview}
              reviews={reviews}
              currentPage={curReviewPage}
              reviewsPerPage={REVIEWS_PER_PAGE}
            />

            <div
              className={clsx(
                'flex w-full',
                'justify-center md:justify-start'
              )}
            >
              <PageNav
                totalPages={totalPages}
                curPage={curReviewPage}
                onPageChange={handleOnPageChange}
                className='my-4 md:my-2 md:mr-auto'
              />
            </div>
          </div>
        </div>
      </PageCategory>
    </div>
  )
})

export default FragranceReviewsSection