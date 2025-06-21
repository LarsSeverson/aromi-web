import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache, makeVar } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from './pagination'
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
          fragrances: relayStylePagination(),
          fragrance: {
            keyArgs: false,
            merge (_, incoming) {
              return incoming
            }
          }
        }
      },
      Fragrance: {
        fields: {
          notes: {
            merge (existing = {}, incoming) {
              return { ...existing, ...incoming }
            }
          }
        }
      },
      FragranceNote: {
        keyFields: ['id', 'layer']
      }
    }
  })
})
