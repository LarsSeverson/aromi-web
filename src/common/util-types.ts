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
  loadingMore?: boolean | undefined
  getMore: () => void
}

export type FlattenType<T> = T extends Date
  ? T
  : T extends { edges: Array<{ node: infer U }> }
    ? Array<FlattenType<U>>
    : T extends object
      ? { [K in keyof T]: FlattenType<T[K]> }
      : T

export const flattenConnection = <T>(connection?: { edges: Array<{ node: T }> }): T[] => connection?.edges.map(edge => edge.node) ?? []
