import { type User } from '@/generated/graphql'
import useUserLikes from '@/hooks/useUserLikes'
import React from 'react'
import { MasonryList } from '../MasonryList'
import { FragrancePreviewCard } from '../fragrance/FragrancePreviewCard'

export type LikesUser = Pick<User, 'id' | 'username'>

const emptyLikesText = (myLikes: boolean, username: string) => ({
  headline: myLikes ? "You haven't liked any fragrances yet" : `${username} hasn't liked any fragrances yet`,
  body: myLikes
    ? "Start liking fragrances you enjoy, and they'll show up here"
    : 'Check back later to see what fragrances they like'
})

export interface LikesTabProps {
  user: LikesUser
  myLikes?: boolean | undefined
  containerWidth: number
}

export const LikesTab = (props: LikesTabProps) => {
  const { user, myLikes = false, containerWidth } = props
  const { id, username } = user
  const { headline, body } = emptyLikesText(myLikes, username)

  const { data: likes, loading } = useUserLikes(id)
  const empty = likes.length === 0

  if (loading) return null

  return (
    <div
      className='w-full'
    >
      {empty && (
        <div className='text-center space-y-5'>
          <h2
            className='font-pd text-2xl'
          >
            {headline}
          </h2>
          <h5
            className='font-p text-xl'
          >
            {body}
          </h5>
        </div>
      )}

      <MasonryList
        items={likes}
        containerWidth={containerWidth}
        onRenderItem={(fragrance) => (
          <FragrancePreviewCard
            fragrance={fragrance}
          />
        )}
      />
    </div>
  )
}
