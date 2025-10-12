export type OnUploadProgressFn = (pct: number) => void

export interface UploadingAsset {
  id: string
  file: File
  loadingProgress: number
  errorMessage: string | null
}

export interface CombinedUploadAsset<O extends { id: string }> {
  id: string
  type?: 'upload' | 'existing'
  file?: File
  loadingProgress?: number | null
  errorMessage?: string | null
  serverData?: O | null
}