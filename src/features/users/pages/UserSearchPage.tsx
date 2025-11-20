import React from 'react'
import { useSearchUsers } from '../hooks/useSearchUsers'
import UserWindowList from '../components/UserWindowList'
import EmptySearchSplash from '@/components/EmptySearchSplash'
import EndSearchSplash from '@/components/EndSearchSplash'

export interface UserSearchPageProps {
  term: string
}

const UserSearchPage = (props: UserSearchPageProps) => {
  const { term } = props

  const {
    users,
    isLoading,
    isLoadingMore,
    hasMore,
    hasNoResults,
    loadMore
  } = useSearchUsers({ term })

  const handleOnEndReached = React.useCallback(
    () => {
      loadMore()
    },
    [loadMore]
  )

  return (
    <div
      className='flex flex-col items-center p-4'
    >
      <div
        className='flex w-full max-w-2xl flex-col'
      >
        <UserWindowList
          users={users}
          isLoading={isLoading || isLoadingMore}
          onEndReached={handleOnEndReached}
        />

        {hasNoResults && (
          <EmptySearchSplash />
        )}

        {!hasMore && !hasNoResults && (
          <EndSearchSplash />
        )}
      </div>
    </div>
  )
}

export default UserSearchPage
