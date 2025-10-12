import { gql } from '@/generated'

export const ALL_PAGE_INFO_FRAGMENT = gql(/* GraphQL */`
  fragment AllPageInfo on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`)

export const ALL_SEARCH_PAGE_INFO_FRAGMENT = gql(/* GraphQL */`
  fragment AllSearchPageInfo on SearchPageInfo {
    hasPreviousPage
    hasNextPage
    startOffset
    endOffset
    pageSize
  }
`)

export const ALL_VOTE_INFO_FRAGMENT = gql(/* GraphQL */`
  fragment AllVoteInfo on VoteInfo {
    upvotes 
    downvotes
    score

    myVote
  }
`)