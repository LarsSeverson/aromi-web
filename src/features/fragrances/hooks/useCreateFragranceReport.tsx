import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_REPORT_MUTATION } from '../graphql/mutations'
import type { CreateFragranceReportInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreateFragranceReport = () => {
  const [createReportInner] = useMutation(CREATE_FRAGRANCE_REPORT_MUTATION)

  const createReport = (input: CreateFragranceReportInput) => {
    return wrapQuery(createReportInner({ variables: { input } }))
  }

  return {
    createReport
  }
}