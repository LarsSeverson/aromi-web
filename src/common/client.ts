import { ApolloClient, from, HttpLink, InMemoryCache, makeVar } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from './pagination'

export const accessToken = makeVar<string | null>(null)

const authLink = setContext(() => ({
  headers: {
    authorization: accessToken()
  }
}))

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT,
  credentials: 'include'
})

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          fragrances: relayStylePagination()
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
