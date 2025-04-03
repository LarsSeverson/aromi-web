import { fetchAuthSession } from 'aws-amplify/auth'
import { setContext } from '@apollo/client/link/context'
import { ApolloClient, HttpLink, InMemoryCache, type NormalizedCacheObject } from '@apollo/client/core'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { relayStylePagination } from '@/common/pagination'

export interface UseClientReturn {
  client: ApolloClient<NormalizedCacheObject>
  refresh: () => Promise<void>
  reset: () => void
}

export const useClient = (): UseClientReturn => {
  const token = useRef<string | null>(null)
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(null)

  const authLink = useMemo(() =>
    setContext((_, { headers = {} }: { headers?: Record<string, string> }) => ({
      headers: {
        ...headers,
        Authorization: (token.current !== null) ? `Bearer ${token.current}` : ''
      }
    }))
  , [])

  const client = useMemo(() => new ApolloClient({
    link: authLink.concat(new HttpLink({ uri: import.meta.env.VITE_API_ENDPOINT })),
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
  }), [authLink])

  const getToken = useCallback(async () => {
    try {
      const session = await fetchAuthSession({ forceRefresh: true })
      const sessionToken = session.tokens?.accessToken.toString() ?? null
      const expiration = session.tokens?.accessToken.payload.exp ?? null

      token.current = sessionToken
      setTokenExpiration(expiration)
    } catch (error) {
      console.log(error)

      token.current = null
      setTokenExpiration(null)
    }
  }, [])

  const refresh = useCallback(async () => { await getToken() }, [getToken])

  const reset = useCallback(() => {
    token.current = null
    setTokenExpiration(null)
  }, [])

  useEffect(() => {
    if (tokenExpiration === null) return

    const now = Math.floor(Date.now() / 1000)
    const delay = (tokenExpiration - now - 60) * 1000
    const timer = setTimeout(() => { void getToken() }, delay)

    return () => { clearTimeout(timer) }
  }, [tokenExpiration, getToken])

  useEffect(() => {
    if (token.current === null) void getToken()
  }, [token, getToken])

  return {
    client,
    refresh,
    reset
  }
}
