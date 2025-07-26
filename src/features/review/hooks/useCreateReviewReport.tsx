import { type CreateReviewReportInput } from '@/generated/graphql'
import { CREATE_REVIEW_REPORT_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useCreateReviewReport = () => {
  const [
    createReviewReportInner,
    { data, loading, error }
  ] = useMutation(CREATE_REVIEW_REPORT_MUTATION)

  const createReviewReport = (input: CreateReviewReportInput) => {
    return ResultAsync
      .fromPromise(
        createReviewReportInner({ variables: { input } }),
        error => error
      )
  }

  return {
    data,
    loading,
    error,

    createReviewReport
  }
}
