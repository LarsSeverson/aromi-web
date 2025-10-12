import type { PresignedUpload } from '@/generated/graphql'
import { getServerErrorInfo } from '@/utils/error'
import axios from 'axios'
import { ResultAsync } from 'neverthrow'

export const usePresignedUpload = () => {
  const upload = (
    presigned: PresignedUpload,
    file: File,
    onProgress?: (pct: number) => void
  ) => {
    const { url, fields } = presigned

    const formData = new FormData()

    Object
      .entries(fields)
      .forEach(([k, v]) => {
        formData.append(k, v as string)
      })

    formData.append('file', file)

    return ResultAsync
      .fromPromise(
        axios.post(
          url,
          formData,
          {
            onUploadProgress: (event) => {
              const total = event.total ?? file.size
              if (total > 0) {
                onProgress?.(Math.round((event.loaded / total) * 100))
              }
            }
          }
        ),
        getServerErrorInfo
      )
  }

  return {
    upload
  }
}
