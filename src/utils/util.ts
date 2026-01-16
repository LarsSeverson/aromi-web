import { okAsync, ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, getServerErrorInfo } from './error'
import { type ApolloClient, NetworkStatus } from '@apollo/client'
import type { PageInfo, SearchPageInfo } from '@/generated/graphql'

export type Nullable<T> = T | null | undefined

export interface Identifiable { id: string }

export const noRes = okAsync(undefined)

export const wrapQuery = <T>(promise: Promise<ApolloClient.QueryResult<T>>) => {
  return ResultAsync
    .fromPromise(promise, getServerErrorInfo)
    .andThen(res => checkNullFetchResponse(res.data))
}

export const wrapQueryNullable = <T>(promise: Promise<ApolloClient.QueryResult<T>>) => {
  return ResultAsync
    .fromPromise(promise, getServerErrorInfo)
    .andThen(res => okAsync(res.data))
}

export const unwrapOrThrow = async <T, E>(res: ResultAsync<T, E>) => {
  return await res.match(ok => ok, error => { throw error })
}

export const isStatusLoadingMore = (status: NetworkStatus) => {
  return status === NetworkStatus.fetchMore
}

export const hasNextPage = (pageInfo?: PageInfo | SearchPageInfo) => {
  return pageInfo?.hasNextPage ?? false
}

export const upperFirstLetter = (str: string) => {
  if (str.length === 0) return str
  return str
    .toLowerCase()
    .charAt(0)
    .toUpperCase() + str.slice(1)
}

export const updateById = <T extends { id: string } >(
  list: T[],
  id: string,
  updater: (item: T) => T
) => {
  return list.map(item => (item.id === id ? updater(item) : item))
}

export const INVALID_ID = '00000000-0000-0000-0000-000000000000'

export const VOTE_TYPES = {
  UPVOTE: 1,
  DOWNVOTE: -1,
  NOVOTE: 0
} as const

export type VoteType = typeof VOTE_TYPES[keyof typeof VOTE_TYPES]

export type VoidFn = () => void

export interface SearchItem {
  id?: string
  term: string
  subtext?: string
  type: 'history' | 'suggestion' | 'custom'
}
