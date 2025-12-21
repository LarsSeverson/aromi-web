import { useState } from 'react'
import type { OnUploadProgressFn, CombinedUploadAsset, UploadingAsset } from '../types'
import uniqueId from 'lodash/uniqueId'
import type { ResultAsync } from 'neverthrow'
import type { ServerErrorInfo } from '@/utils/error'
import { updateById } from '@/utils/util'
import type z from 'zod'
import { getFirstErrorMessage } from '@/utils/validation'

const mapExistingToCombined = <O extends { id: string }, >(existing: O[] = []): Array<CombinedUploadAsset<O>> => {
  return existing.map(item => ({
    ...item,
    type: 'existing' as const,
    serverData: item
  }))
}

export interface UseUploadsOptions<O extends { id: string }> {
  uploadFn: (file: File, onProgress: OnUploadProgressFn) => ResultAsync<O, ServerErrorInfo>
  existing?: O[]
  schema?: z.ZodType
}

export const useUploads = <O extends { id: string }, >(options: UseUploadsOptions<O>) => {
  const { uploadFn, existing, schema } = options
  const [uploads, setUploads] = useState<Array<CombinedUploadAsset<O>>>(mapExistingToCombined(existing))

  const handleUploadProgress = (id: string, pct: number) => {
    setUploads(prev => updateById(prev, id, u => ({ ...u, loadingProgress: pct })))
  }

  const handleUploadError = (id: string, message: string) => {
    setUploads(prev => updateById(prev, id, u => ({ ...u, errorMessage: message })))
  }

  const handleUploadSuccess = (id: string, serverData: O) => {
    setUploads(prev => updateById(prev, id, u => ({ ...u, id: serverData.id, type: 'existing', serverData })))
  }

  const removeUpload = (id: string) => {
    setUploads(prev => prev.filter(u => u.id !== id))
  }

  const getValidatedFiles = (files: File[]) => {
    return files
      .map(file => {
        const item: UploadingAsset = {
          id: uniqueId('uploading-item-'),
          file,
          loadingProgress: 0,
          errorMessage: null
        }

        if (schema != null) {
          const errorMessage = getFirstErrorMessage(schema, file)
          item.errorMessage = errorMessage
        }

        return { ...item, type: 'upload' as const }
      })
  }

  const uploadAll = async (files: File[]) => {
    const newUploads = getValidatedFiles(files)

    setUploads(prev => [...prev, ...newUploads])

    const ops = newUploads
      .filter(upload => upload.errorMessage == null)
      .map(
        async upload => {
          const { id, file } = upload
          const result = await uploadFn(file, pct => { handleUploadProgress(id, pct) })

          if (result.isOk()) {
            handleUploadSuccess(id, result.value)
          } else {
            handleUploadError(id, result.error.message)
          }

          return result
        }
      )

    await Promise.all(ops)
  }

  return { uploads, uploadAll, removeUpload }
}