import type { AllAssetFragment } from '@/generated/graphql'

export interface AssetChipItem {
  asset: AllAssetFragment
  isError?: boolean
  isLoading?: boolean
  loadingProgress?: number
  onRemove?: () => void
}

export interface AssetChipListProps {
  assets: AssetChipItem[]
}