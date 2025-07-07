import { useQuery } from '@apollo/client'
import { FRAGRANCE_NOTES_QUERY } from '@/graphql/queries/FragranceQueries'
import { flatten } from '@/common/pagination'

const useFragranceNotes = (
  fragranceId: number
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId }
  })

  const top = flatten(data?.fragrance?.notes.top ?? [])
  const middle = flatten(data?.fragrance?.notes.middle ?? [])
  const base = flatten(data?.fragrance?.notes.base ?? [])

  return {
    top,
    middle,
    base,
    loading,
    error,

    refetch
  }
}

export default useFragranceNotes
