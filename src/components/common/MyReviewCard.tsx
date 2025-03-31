import { type FragranceReview, type User } from '@/generated/graphql'
import React from 'react'
import { FragranceReviewCard } from './fragrance/FragranceReviewCard'
import { formatDate } from '@/common/string-utils'
import empty from '@/assets/avatar-empty.svg'
import { Colors } from '@/styles/Colors'
import RatingStars from './RatingStars'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

export type MyReviewUser = Pick<User, 'username' | 'id'>
export type CardMyReview = Omit<FragranceReview, 'fragrance' | 'user'> & { user: MyReviewUser }

export const myReviewPlaceholder = (currentUser: MyReviewUser | undefined | null): CardMyReview => ({
  id: -1,
  dCreated: new Date(),
  dModified: new Date(),
  rating: 0,
  review: '',
  myVote: null,
  votes: 0,
  user: {
    username: currentUser?.username ?? 'Your Username',
    id: -1
  }
})

export interface MyReviewCardProps {
  user: MyReviewUser | undefined | null
  myReview: CardMyReview | undefined | null
}

const MyReviewCard = (props: MyReviewCardProps) => {
  const { user, myReview } = props
  const { user: currentUser, dCreated } = myReviewPlaceholder(user)
  const { username } = currentUser

  return (
    <div>
      {myReview != null
        ? (
          <FragranceReviewCard
            review={myReview}
          />
          )
        : (
          <Link
            to='/'
            className='w-full flex items-center justify-center group'
          >
            <div
              className={clsx(
                'flex bg-white drop-shadow-lg w-full p-5 gap-5 rounded-md items-center overflow-auto ',
                'outline-[3px] outline-none outline-offset-1 group-hover:outline-sinopia'
              )}
            >
              <div>
                <img
                  src={empty}
                  className='rounded-full min-w-16 w-16 aspect-square overflow-hidden object-cover'
                  style={{ backgroundColor: Colors.empty }}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex'>
                  <p
                    className='truncate'
                  >
                    <span
                      className='font-pd text-xl'
                    >
                      {username}
                    </span>
                    <span> • </span>
                    <span
                      className='text-xs'
                    >
                      {formatDate(dCreated)}
                    </span>
                  </p>
                </div>
                <h6 className='font-medium hover:underline'>
                  Tried this fragrance? Share your experience
                </h6>
              </div>
              <div className='ml-auto hidden md:block'>
                <RatingStars
                  rating={0}
                  size={32}
                  emptyColor='#f0f0f0'
                />
              </div>
            </div>
          </Link>
          )}
    </div>
  )
}

export default MyReviewCard
