import useUserCollections from './useUserCollections'
import useUserLikes from './useUserLikes'
import useUserReviews from './useUserReviews'

const useUserActivity = (userId: number) => {
  const { data: collections, loading: collectionsLoading } = useUserCollections(userId, 1)
  const { data: likes, loading: likesLoading } = useUserLikes(userId, 1)
  const { data: reviews, loading: reviewsLoading } = useUserReviews(userId, 1)

  const loading = collectionsLoading || likesLoading || reviewsLoading
  const hasActivity = loading
    ? null
    : collections.length > 0 || likes.length > 0 || reviews.length > 0

  return {
    loading,
    collections,
    likes,
    reviews,
    hasActivity
  }
}

export default useUserActivity
