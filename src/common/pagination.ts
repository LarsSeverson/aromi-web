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

export const relayStylePagination = <TNode extends Reference = Reference> (keyArgs: RelayFieldPolicy<TNode>['keyArgs'] = false): RelayFieldPolicy<TNode> => {
  return {
    keyArgs,

    read (existing, { canRead, readField }) {
      if (existing == null) return existing

      const edges: Array<TRelayEdge<TNode>> = []
      let firstEdgeCursor = ''
      let lastEdgeCursor = ''

      existing.edges.forEach(edge => {
        if (canRead(readField('node', edge))) {
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

      const incomingEdges = incoming.edges?.map(edge => {
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
