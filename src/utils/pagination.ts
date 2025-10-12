import type { Maybe, PageInfo, SearchPageInfo } from '@/generated/graphql'
import { type FieldPolicy, NetworkStatus, type Reference } from '@apollo/client'

export interface RelayEdge<TNode> {
  node: TNode
  cursor?: Maybe<string>
  __typename?: string
}

export interface RelayConnection<TNode> {
  edges: Array<RelayEdge<TNode>>
  pageInfo: PageInfo
}

export const getExtras = (_: unknown): object => ({})

export const makeEmptyData = () => ({
  edges: [],
  pageInfo: {
    hasPreviousPage: false,
    hasNextPage: true,
    startCursor: '',
    endCursor: ''
  }
})

export const customRelayStylePagination = <TNode extends Reference = Reference> (
  keyArgs: FieldPolicy<RelayConnection<TNode>>['keyArgs'] = false
): FieldPolicy<RelayConnection<TNode>> => {
  return {
    keyArgs,

    read (existing, { canRead, readField, toReference }) {
      if (existing == null) return existing

      const edges: Array<RelayEdge<TNode>> = []
      let firstEdgeCursor = ''
      let lastEdgeCursor = ''

      existing.edges.forEach(edge => {
        const ref = toReference(edge.node)
        const node = readField('node', ref)
        if (canRead(node)) {
          edges.push(edge)
          if (edge.cursor != null) {
            firstEdgeCursor ||= edge.cursor
            lastEdgeCursor = edge.cursor
          }
        }
      })

      if (edges.length > 1 && firstEdgeCursor === lastEdgeCursor) {
        firstEdgeCursor = ''
      }

      const { startCursor, endCursor } = existing.pageInfo ?? {}

      return {
        ...getExtras(existing),
        edges,
        pageInfo: {
          ...existing.pageInfo,
          startCursor: startCursor ?? firstEdgeCursor,
          endCursor: endCursor ?? lastEdgeCursor
        }
      }
    },

    merge (existing, incoming, { isReference, readField }) {
      existing ??= makeEmptyData()

      if (incoming == null) return existing

      const incomingEdges = incoming.edges?.map(
        edge => {
          const copy = { ...edge }
          if (isReference(copy)) copy.cursor = readField('cursor', copy)
          return copy
        }) ?? []

      const firstEdge = incomingEdges[0]
      const lastEdge = incomingEdges[incomingEdges.length - 1]
      const { startCursor, endCursor } = incoming.pageInfo ?? {}

      const startLength = startCursor?.length ?? 0
      const endLength = endCursor?.length ?? 0

      if (firstEdge != null && startLength > 0) firstEdge.cursor = startCursor
      if (lastEdge != null && endLength > 0) lastEdge.cursor = endCursor

      const edges = existing.edges.concat(incomingEdges)
      const pageInfo: PageInfo = { ...existing.pageInfo, ...incoming.pageInfo }

      return {
        ...getExtras(existing),
        ...getExtras(incoming),
        edges,
        pageInfo
      }
    }
  }
}

export interface NodeWithEdges<T> {
  edges: Array<{
    node: T
    __typename?: string
  }>
}

export type FlattenEdges<T> =
  T extends Date ? T :
    T extends NodeWithEdges<infer N> ? Array<FlattenEdges<N>> :
      T extends Array<infer U> ? Array<FlattenEdges<U>> :
        T extends object ? { [K in keyof T]: FlattenEdges<T[K]> } :
          T

export const isEdgeNodeObject = <T>(value: unknown): value is NodeWithEdges<T> => {
  return (
    value !== null &&
    typeof value === 'object' &&
    'edges' in value &&
    Array.isArray((value as NodeWithEdges<T>).edges) &&
    (value as NodeWithEdges<T>).edges.every(
      e => typeof e === 'object' && e !== null && 'node' in e
    )
  )
}

export const flatten = <T>(input: T): FlattenEdges<T> => {
  if (isEdgeNodeObject(input)) {
    return input.edges.map(edge => flatten(edge.node)) as FlattenEdges<T>
  }

  if (Array.isArray(input)) {
    return input.map(flatten) as FlattenEdges<T>
  }

  if (typeof input === 'object' && input !== null) {
    const result: Record<string, unknown> = {}
    // eslint-disable-next-line guard-for-in
    for (const key in input) {
      const value = (input as Record<string, unknown>)[key]
      const isValueAnEdgeObject = isEdgeNodeObject(value)
      result[key] = isValueAnEdgeObject
        ? value.edges.map(edge => flatten(edge.node))
        : flatten(value)
    }
    return result as FlattenEdges<T>
  }

  return input as FlattenEdges<T>
}

export const validatePagination = (
  pageInfo: PageInfo | undefined,
  networkStatus: NetworkStatus
) => {
  if (
    networkStatus === NetworkStatus.fetchMore ||
    pageInfo?.endCursor == null ||
    !pageInfo.hasNextPage
  ) return null

  return pageInfo.endCursor
}

export const validateSearchPagination = (
  pageInfo: SearchPageInfo | undefined,
  networkStatus: NetworkStatus
) => {
  if (
    networkStatus === NetworkStatus.fetchMore ||
    pageInfo?.endOffset == null ||
    !pageInfo.hasNextPage
  ) return null

  return pageInfo.endOffset
}