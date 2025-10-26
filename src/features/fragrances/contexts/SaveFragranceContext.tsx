import { useMyCollectionsHasFragrance } from '@/features/users'
import type { Nullable } from '@/utils/util'
import { createContext, useContext } from 'react'
import type { FragranceCollectionWithHasFragrance } from '../types'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useFragranceSelection } from '../hooks/useFragranceSelection'
import { useCreateFragranceCollectionItem } from '../hooks/useCreateFragranceCollectionItem'
import { useDeleteFragranceCollectionItem } from '../hooks/useDeleteFragranceCollectionItem'

export interface SaveFragranceContextValue extends ReturnType<typeof useMyCollectionsHasFragrance> {
  fragrance: FragrancePreviewFragment
  hasModified: boolean
  toggleSelection: (collection: FragranceCollectionWithHasFragrance) => void
  clearModifications: () => void
}

export interface SaveFragranceProviderProps {
  fragrance: FragrancePreviewFragment
  children: React.ReactNode
}

export const SaveFragranceContext = createContext<Nullable<SaveFragranceContextValue>>(undefined)

export const useSaveFragranceContext = () => {
  const context = useContext(SaveFragranceContext)
  if (context == null) {
    throw new Error('useSaveFragranceContext must be used within a SaveFragranceProvider')
  }

  return context
}

export const SaveFragranceProvider = (props: SaveFragranceProviderProps) => {
  const { fragrance, children } = props

  const myCollections = useMyCollectionsHasFragrance(fragrance.id)

  const {
    added,
    removed,
    duplicated,
    hasModified,
    toggleSelection,
    clearModifications
  } = useFragranceSelection(myCollections.collections)

  const { createItem } = useCreateFragranceCollectionItem()
  const { deleteItem } = useDeleteFragranceCollectionItem()

  const submitChanges = async () => {
    const addedIds = Array.from(added.current)
    const dupedIds = Array.from(duplicated.current)
    const removedIds = Array.from(removed.current)

    const toAddIds = addedIds.concat(dupedIds)
  }

  return (
    <SaveFragranceContext.Provider
      value={{
        ...myCollections,
        fragrance,
        hasModified,
        toggleSelection,
        clearModifications
      }}
    >
      {children}
    </SaveFragranceContext.Provider>
  )
}