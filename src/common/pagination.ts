import { type Reference } from '@apollo/client'
import { mergeDeep } from '@apollo/client/utilities'
import { type TRelayEdge, type RelayFieldPolicy, type TRelayPageInfo } from '@apollo/client/utilities/policies/pagination'

export const getExtras = (obj: unknown): object => ({})

export const makeEmptyData = () => ({
  edges: [],
  pageInfo: {
    hasPreviousPage: false,
    hasNextPage: true,
    startCursor: '',
    endCursor: ''
  }
})

export const relayStylePagination = <TNode extends Reference = Reference> (
  keyArgs: RelayFieldPolicy<TNode>['keyArgs'] = false
): RelayFieldPolicy<TNode> => {
  return {
    keyArgs,

    read (existing, { canRead, readField }) {
      if (existing == null) return existing

      const edges: Array<TRelayEdge<TNode>> = []

      let firstEdgeCursor = ''
      let lastEdgeCursor = ''

      existing
        .edges
        .forEach(edge => {
          const node = readField('node', edge)
          if (canRead(node)) {
            edges.push(edge)
            if (edge.cursor != null) {
              firstEdgeCursor = firstEdgeCursor ?? edge.cursor
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

    merge (existing, incoming, { args, isReference, readField }) {
      if (existing == null) {
        existing = makeEmptyData()
      }

      if (incoming == null) return existing

      const incomingEdges = incoming
        .edges?.map(edge => {
          if (isReference((edge = { ...edge }))) {
            edge.cursor = readField('cursor', edge)
          }

          return edge
        }) ?? []

      if (incoming.pageInfo != null) {
        const { pageInfo } = incoming

        const { startCursor, endCursor } = pageInfo
        const firstEdge = incomingEdges.at(0)
        const lastEdge = incomingEdges.at(-1)

        if (firstEdge != null && startCursor.length > 0) firstEdge.cursor = startCursor
        if (lastEdge != null && endCursor.length > 0) lastEdge.cursor = endCursor

        const firstCursor = firstEdge?.cursor
        if ((firstCursor != null) && firstCursor.length > 0 && (startCursor.length === 0)) {
          incoming = mergeDeep(incoming, { pageInfo: { startCursor: firstCursor } })
        }
        const lastCursor = lastEdge?.cursor
        if ((lastCursor != null) && lastCursor.length > 0 && (endCursor.length === 0)) {
          incoming = mergeDeep(incoming, { pageInfo: { endCursor: lastCursor } })
        }
      }

      const edges = existing.edges.concat(incomingEdges)
      const pageInfo: TRelayPageInfo = { ...existing.pageInfo, ...incoming.pageInfo }

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
    Array
      .isArray(value.edges) &&
    value
      .edges
      .every(
        (e) => typeof e === 'object' && e !== null && 'node' in e
      )
  )
}

export const flatten = <T>(input: T): FlattenEdges<T> => {
  if (isEdgeNodeObject(input)) {
    return input
      .edges
      .map(edge => flatten(edge.node)) as FlattenEdges<T>
  }

  if (Array.isArray(input)) {
    return input.map(flatten) as FlattenEdges<T>
  }

  if (typeof input === 'object' && input !== null) {
    const result: Record<string, unknown> = {}

    for (const key in input) {
      const value = input[key]
      const isValueAnEdgeObject = isEdgeNodeObject(value)

      result[key] = isValueAnEdgeObject
        ? value.edges.map(edge => flatten(edge.node))
        : flatten(value)
    }

    return result as FlattenEdges<T>
  }

  return input as FlattenEdges<T>
}
