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

    read (existing, { canRead }) {
      if (existing == null) return existing

      const edges: Array<RelayEdge<TNode>> = []
      let firstEdgeCursor = ''
      let lastEdgeCursor = ''

      existing.edges.forEach(edge => {
        const ref = edge.node
        if (canRead(ref)) {
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

      if (firstEdge != null && startCursor != null) firstEdge.cursor = startCursor
      if (lastEdge != null && endCursor != null) lastEdge.cursor = endCursor

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

export type FlattenedConnection<T> =
  T extends Date ? T :
    T extends NodeWithEdges<infer N> ? Array<FlattenedConnection<N>> :
      T extends Array<infer U> ? Array<FlattenedConnection<U>> :
        T extends object ? { [K in keyof T]: FlattenedConnection<T[K]> } :
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

export const flattenConnections = <T>(input: T): FlattenedConnection<T> => {
  if (isEdgeNodeObject(input)) {
    return input.edges.map(edge => flattenConnections(edge.node)) as FlattenedConnection<T>
  }

  if (Array.isArray(input)) {
    return input.map(flattenConnections) as FlattenedConnection<T>
  }

  if (typeof input === 'object' && input !== null) {
    const result: Record<string, unknown> = {}
    // eslint-disable-next-line guard-for-in
    for (const key in input) {
      const value = (input as Record<string, unknown>)[key]
      const isValueAnEdgeObject = isEdgeNodeObject(value)
      result[key] = isValueAnEdgeObject
        ? value.edges.map(edge => flattenConnections(edge.node))
        : flattenConnections(value)
    }
    return result as FlattenedConnection<T>
  }

  return input as FlattenedConnection<T>
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