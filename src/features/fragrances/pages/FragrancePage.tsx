import React, { useRef } from 'react'
import FragranceInfoSection from '../components/FragranceInfoSection'
import PageBackButton from '../../../components/PageBackButton'
import { FragranceImagesSection } from '../components/FragranceImagesSection'
import FragranceGenderSection from '../components/FragranceGenderSection'
import Divider from '@/components/Divider'
import FragranceNotesSection from '../components/FragranceNotesSection'
import FragranceTraitsSection from '../components/FragranceTraitsSection'
import FragranceReviewsSection from '../components/FragranceReviewsSection'
import clsx from 'clsx'
import FragranceAccordsSection from '../components/FragranceAccordsSection'
import { useFragranceContext } from '../contexts/FragranceContext'

export interface FragrancePageProps {}

export const FragrancePage = (_: FragrancePageProps) => {
  const { isVotingOnAccords } = useFragranceContext()

  const reviewSectionRef = useRef<HTMLDivElement>(null)

  const scrollToReview = () => {
    if (reviewSectionRef.current != null) {
      window.scrollTo({
        top: reviewSectionRef.current.offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div
      className={clsx(
        'flex h-full w-full flex-wrap',
        'gap-2 p-3 md:gap-5 md:p-0'
      )}
    >
      <div
        className={clsx(
          'flex',
          'pl-0 md:pl-4'
        )}
      >
        <PageBackButton
          className={clsx(
            'mb-auto ml-auto',
            'static md:sticky md:top-18'
          )}
        />
      </div>

      <div
        className='flex w-full flex-1 flex-col'
      >
        <div
          className={clsx(
            'flex flex-1 flex-wrap',
            'gap-4 md:gap-8'
          )}
        >
          <div
            className={clsx(
              'flex items-start rounded-xl',
              'w-full flex-none md:flex-1'
            )}
          >
            <FragranceImagesSection />
          </div>

          <div
            className={clsx(
              'rounded-xl',
              'w-full flex-none md:flex-1'
            )}
          >
            <FragranceInfoSection
              onScrollToReview={scrollToReview}
            />
          </div>
        </div>

        <div
          className={clsx(
            'flex w-full max-w-5xl flex-col self-center',
            'mt-6 gap-5 md:mt-10 md:gap-7'
          )}
        >
          <Divider
            horizontal
            className={clsx(
              'mb-2 md:mb-5'
            )}
          />

          {isVotingOnAccords && (
            <FragranceAccordsSection />
          )}

          <FragranceGenderSection />

          <FragranceNotesSection />

          <FragranceTraitsSection />

          <FragranceReviewsSection
            ref={reviewSectionRef}
          />
        </div>
      </div>
    </div>
  )
}