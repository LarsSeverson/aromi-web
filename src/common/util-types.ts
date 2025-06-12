import { type ApolloError } from '@apollo/client'
import { type PageInfo } from '../generated/graphql'

export const INVALID_ID = -1

export type NonNullableVariables<T> = T extends object
  ? { [K in keyof T]-?: NonNullableVariables<NonNullable<T[K]>> }
  : T

export interface QueryHookReturn<T> {
  data: T
  loading: boolean
  error: ApolloError | undefined
  refresh: () => void
}

export interface PaginatedQueryHookReturn<T> extends QueryHookReturn<T> {
  pageInfo: PageInfo | undefined
  loadingMore: boolean
  getMore: () => void
}

export type NodeOf<C> =
  C extends { edges: Array<{ node: infer N }> } ? N : never

export type FlatConnection<
  T,
  K extends keyof T & string
> = Omit<T, K> & { [P in K]: Array<NodeOf<T[P]>> }
