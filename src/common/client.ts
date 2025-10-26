import { customRelayStylePagination } from '@/utils/pagination'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, makeVar } from '@apollo/client'
import { SetContextLink } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities'

export const accessToken = makeVar<string | null>(null)

const authLink = new SetContextLink(() => {
  const token = accessToken()
  return {
    headers: {
      ...(token == null ? {} : { authorization: `Bearer ${token}` })
    }
  }
})

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT,
  credentials: 'include'
})

// const logLink = new ApolloLink((operation, forward) => {
//   const { query, variables, operationName } = operation
//   console.log('▶ GraphQL Request:', {
//     operationName,
//     query: print(query),
//     variables
//   })
//   return forward(operation).map(response => {
//     console.log('◀ GraphQL Response:', response)
//     return response
//   })
// })

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, /* logLink, */ httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Me: {
        fields: {
          collections: customRelayStylePagination()
        }
      },

      FragranceCollection: {
        fields: {
          previewItems: {
            merge: false
          },
          hasFragrance: {
            keyArgs: ['fragranceId'],
            read (existing) {
              return existing as boolean ?? false
            }
          }
        }
      }
    }
  })
})
