import { useMutation } from '@apollo/client/react'
import { UPDATE_ME_MUTATION } from '../graphql/mutations'
import { wrapQuery } from '@/utils/util'
import type { UpdateMeInput } from '@/generated/graphql'

export const useUpdateMe = () => {
  const [updateInner] = useMutation(UPDATE_ME_MUTATION)

  const update = (input: UpdateMeInput) => {
    return wrapQuery(updateInner({ variables: { input } })).map(data => data.updateMe)
  }

  return { update }
}
