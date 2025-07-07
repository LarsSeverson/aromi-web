import VoteAccordsList from '@/features/fragrance/components/VoteAccordsList'
import { Icon } from '@/components/Icon'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import MiddleSlider from '@/components/MiddleSlider'
import PageCategory from '@/components/PageCategory'
import useFragranceAccords from '@/features/fragrance/hooks/useFragranceAccords'
import gender from '@/assets/gender.svg'
import longevity from '@/assets/longevity.svg'
import sillage from '@/assets/sillage.svg'
import complexity from '@/assets/complexity.svg'
import balance from '@/assets/balance.svg'
import allure from '@/assets/allure.svg'
import empty from '@/assets/fall-back-fi.svg'
import { Colors } from '@/styles/Colors'
import React from 'react'
import { type Fragrance, NoteLayer } from '@/generated/graphql'
import VoteNotesList from '@/features/fragrance/components/VoteNotesList'
import TextareaAutosize from 'react-textarea-autosize'
import clsx from 'clsx'
import { TiArrowLeftThick } from 'react-icons/ti'
import useFragranceImages from '@/features/fragrance/hooks/useFragranceImages'
import { Overlay } from '@/components/Overlay'
import RatingStars from '@/components/RatingStars'
import { Link } from '@tanstack/react-router'
import Divider from '@/components/Divider'
import BouncyButton from '@/components/BouncyButton'

export type FragranceReviewPageFragrance = Pick<Fragrance, 'id' | 'brand' | 'name' | 'rating'>

export interface FragranceReviewPageProps {
  fragrance: FragranceReviewPageFragrance
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const {
    id: fragranceId,
    name,
    brand,
    rating: storedRating
  } = fragrance

  const { data: images } = useFragranceImages(fragranceId)
  const { data: accords } = useFragranceAccords(fragranceId)
  const { data: topNotes } = useFragranceNotesLayer({ fragranceId, layer: NoteLayer.Top, fill: true, limit: 21 })
  const { data: middleNotes } = useFragranceNotesLayer({ fragranceId, layer: NoteLayer.Middle, fill: true, limit: 21 })
  const { data: baseNotes } = useFragranceNotesLayer({ fragranceId, layer: NoteLayer.Base, fill: true, limit: 21 })

  return (
    <div
      className='w-full flex flex-col items-center pb-14'
    >
      <div
        className='w-full flex justify-center bg-white z-10 pb-2'
      >
        <div
          className='flex justify-start gap-5 w-full max-w-4xl relative'
        >
          <Link
            to='..'
            className='mb-auto absolute -left-20 rounded-xl hover:backdrop-brightness-90 p-3'
          >
            <TiArrowLeftThick
              size={22}
            />
          </Link>

          <div
            className='rounded-xl overflow-hidden relative w-24 h-full flex'
          >
            <img
              src={images.at(0)?.src ?? empty}
              alt={name}
              className='object-cover'
            />
            <Overlay />
          </div>

          <div>
            <h4 className='font-pd text-lg'>
              {name}
            </h4>
            <h6 className='font-semibold text-md opacity-80'>
              {brand}
            </h6>
            <div
              className='flex mt-1 items-center gap-2'
            >
              <RatingStars
                rating={storedRating}
                size={18}
              />
              <p
                className='font-semibold text-md opacity-80'
              >
                ({storedRating} / 5.0)
              </p>
            </div>
          </div>
        </div>

      </div>
      <Divider
        horizontal
        className='w-full max-w-4xl my-4'
      />
      <div
        className='w-full max-w-4xl space-y-4'
      >

        <PageCategory
          title='How would you rate this fragrance?'
        >
          <InteractableRatingStars
            rating={rating}
            size={42}
            filledColor={Colors.sinopia}
            emptyColor={Colors.empty2}
          />
        </PageCategory>
        <PageCategory
          title='How are the accords?'
        >
          <VoteAccordsList
            accords={accords}
          />
        </PageCategory>
        <PageCategory
          title='What are its characteristics?'
        >
          <div
            className='flex justify-center w-full'
          >
            <div
              className='max-w-xl w-full space-y-6'
            >
              <MiddleSlider
                label='gender'
                lessLabel='feminine'
                greaterLabel='masculine'
                Icon={(
                  <Icon
                    src={gender}
                    size={28}
                  />
                )}
              />
              <MiddleSlider
                label='longevity'
                lessLabel='brief'
                greaterLabel='endless'
                Icon={<Icon src={longevity} />}
              />
              <MiddleSlider
                label='sillage'
                lessLabel='intimate'
                greaterLabel='expansive'
                Icon={<Icon src={sillage} />}
              />
              <MiddleSlider
                label='complexity'
                lessLabel='simple'
                greaterLabel='intricate'
                Icon={<Icon src={complexity} />}
              />
              <MiddleSlider
                label='balance'
                lessLabel='unbalanced'
                greaterLabel='harmonious'
                Icon={<Icon src={balance} />}
              />
              <MiddleSlider
                label='allure'
                lessLabel='unappealing'
                greaterLabel='captivating'
                Icon={<Icon src={allure} />}
              />
            </div>
          </div>
        </PageCategory>
        <PageCategory
          title='How do the notes develop?'
        >
          <VoteNotesList
            top={topNotes}
            middle={middleNotes}
            base={baseNotes}
          />
        </PageCategory>
        <PageCategory
          title='How was your experience?'
        >
          <div
            className='w-full flex items-center justify-center'
          >
            <div className='w-full h-full max-w-3xl max-h-3xl'>
              <TextareaAutosize
                placeholder='Start your review...'
                className={clsx(
                  'border border-gray-300 rounded-md w-full h-full p-4 min-h-44 resize-none outline-none hover:border-sinopia',
                  'transition-colors ease-in-out duration-300 focus:border-sinopia focus:border-2'
                )}
              />
            </div>
          </div>
        </PageCategory>
        <BouncyButton
          className='bg-sinopia text-white px-12 h-[44px] rounded-md active:scale-[0.98]'
        >
          <p className='text-base font-medium'>
            Submit Review
          </p>
        </BouncyButton>
      </div>
    </div>
  )
}

export default FragranceReviewPage
