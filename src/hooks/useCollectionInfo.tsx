import { INVALID_ID, type QueryHookReturn } from '@/common/util-types'
import { graphql } from '@/generated'
import { type CollectionInfoQuery, type CollectionInfoQueryVariables } from '@/generated/graphql'
import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'

export const COLLECTION_INFO_QUERY = graphql(/* GraphQL */`
  query CollectionInfo(
    $collectionId: Int!
  ) {
    collection(id: $collectionId) {
      id
      name
      user {
        id
        username
      }
      audit {
        createdAt
        updatedAt
      } 
    }
  }
`)

export type CollectionInfo = NonNullable<CollectionInfoQuery['collection']>

const EMPTY_COLLECTION_INFO: CollectionInfo = {
  id: -1,
  name: 'unknown collection name',
  audit: {
    createdAt: new Date(),
    updatedAt: new Date()
  },
  user: {
    id: -1,
    username: 'unknown username'
  }
}

const useCollectionInfo = (collectionId: number): QueryHookReturn<CollectionInfoQuery['collection']> => {
  const variables = useMemo<CollectionInfoQueryVariables>(() => ({
    collectionId,
    skip: collectionId === INVALID_ID
  }), [collectionId])

  const { data, loading, error, refetch } = useQuery(COLLECTION_INFO_QUERY, { variables })

  const refresh = useCallback(() => {
    void refetch({ collectionId })
  }, [collectionId, refetch])

  const collectionInfo = data?.collection ?? EMPTY_COLLECTION_INFO

  return {
    data: collectionInfo,
    loading,
    error,

    refresh
  }
}

export default useCollectionInfo
