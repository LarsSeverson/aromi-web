import { CollectionPreviewCard } from '@/features/collection/components/CollectionPreviewCard'
import { MasonryList } from '@/components/MasonryList'
import { type User } from '@/generated/graphql'
import useUserCollections from '@/features/user/hooks/useUserCollections'
import React from 'react'

export type UserCollectionsUser = Pick<User, 'id' | 'username'>

const emptyCollectionText = (myCollections: boolean, username: string) => ({
  headline: myCollections ? 'You have no collections' : `${username} has no collections`,
  body: myCollections
    ? "Start building your collections with fragrances you love, and they'll show up here"
    : 'Check back later to see what new collections they create'
})

export interface UserCollectionsTabProps {
  user: UserCollectionsUser
  myCollections?: boolean | undefined
  containerWidth: number
}

export const UserCollectionsTab = (props: UserCollectionsTabProps) => {
  const { user, myCollections = false, containerWidth } = props
  const { id, username } = user
  const { headline, body } = emptyCollectionText(myCollections, username)

  const { data: collections, loading } = useUserCollections(id)
  const empty = collections.length === 0

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
        items={collections}
        containerWidth={containerWidth}
        itemHeight={300}
        itemWidth={350}
        onRenderItem={(collection) => (
          <CollectionPreviewCard
            collection={collection}
          />
        )}
      />
    </div>
  )
}
