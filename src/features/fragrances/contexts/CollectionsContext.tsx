import type { AllFragranceCollectionFragment, DeleteFragranceCollectionInput } from '@/generated/graphql'
import type { ServerErrorInfo } from '@/utils/error'
import type { Nullable } from '@/utils/util'
import type { ResultAsync } from 'neverthrow'
import React from 'react'

export interface CollectionsContextValue {
  collections: AllFragranceCollectionFragment[]
  isLoading: boolean
  isLoadingMore: boolean

  loadMore: () => void

  moveCollection: (collectionId: string, insertBefore: Nullable<string>, optimisticCollections: AllFragranceCollectionFragment[]) => void
  moveCollectionLeft: (collectionId: string) => void
  moveCollectionRight: (collectionId: string) => void

  canMoveCollectionLeft: (collectionId: string) => boolean
  canMoveCollectionRight: (collectionId: string) => boolean

  deleteCollection: (input: DeleteFragranceCollectionInput) => ResultAsync<AllFragranceCollectionFragment, ServerErrorInfo>
}

export const CollectionsContext = React.createContext<CollectionsContextValue | undefined>(undefined)

export const useCollectionsContext = () => {
  const context = React.useContext(CollectionsContext)
  if (context == null) {
    throw new Error('useCollectionsContext must be used within a CollectionsProvider')
  }

  return context
}
