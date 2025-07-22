import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache, makeVar } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { customRelayStylePagination } from './pagination'
import { print } from 'graphql'

export const accessToken = makeVar<string | null>(null)

const authLink = setContext(() => {
  const token = accessToken()
  return {
    headers: {
      ...(token != null ? { authorization: `Bearer ${token}` } : {})
    }
  }
})

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT,
  credentials: 'include'
})

const logLink = new ApolloLink((operation, forward) => {
  const { query, variables, operationName } = operation
  console.log('▶ GraphQL Request:', {
    operationName,
    query: print(query),
    variables
  })
  return forward(operation).map(response => {
    console.log('◀ GraphQL Response:', response)
    return response
  })
})

export const client = new ApolloClient({
  link: from([authLink, /* logLink, */ httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          fragrances: customRelayStylePagination(),
          fragrance: {
            keyArgs: ['id'],
            merge (_, incoming) {
              return incoming
            }
          }
        }
      },
      Fragrance: {
        keyFields: ['id'],
        fields: {
          accords: customRelayStylePagination(),
          fillerAccords: customRelayStylePagination(),

          notes: {
            merge: true
          }
        }
      },
      FragranceNotes: {
        fields: {
          top: customRelayStylePagination(),
          fillerTop: customRelayStylePagination(),

          middle: customRelayStylePagination(),
          fillerMiddle: customRelayStylePagination(),

          bottom: customRelayStylePagination(),
          fillerBottom: customRelayStylePagination()
        }
      }
    }
  })
})
