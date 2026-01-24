import type { UserPreviewFragment } from '@/generated/graphql'
import React from 'react'
import { CollectionsProvider } from '@/features/fragrances/contexts/providers/CollectionsProvider'
import { CollectionsGrid } from '@/features/fragrances/components/CollectionsGrid'

export interface UserCollectionsTabProps {
  user: UserPreviewFragment
}

export const UserCollectionsTab = (props: UserCollectionsTabProps) => {
  const { user } = props
  const { id } = user

  return (
    <div
      className='w-full p-4'
    >
      <CollectionsProvider
        userId={id}
      >
        <CollectionsGrid
          user={user}
        />
      </CollectionsProvider>
    </div>
  )
}
