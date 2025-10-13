import ProgressSpinner from '@/components/ProgressSpinner'
import clsx from 'clsx'
import React from 'react'
import { FiX } from 'react-icons/fi'
import { MdErrorOutline } from 'react-icons/md'
import AssetChipPreview from './AssetChipPreview'
import { formatBytes } from '@/utils/string-utils'

export interface AssetChipProps {
  name: string
  contentType?: string
  sizeBytes?: number | null
  errorMessage?: string | null
  loadingProgress?: number | null
  onRemove?: () => void
}

const AssetChip = (props: AssetChipProps) => {
  const {
    name,
    sizeBytes = 0,
    contentType,
    errorMessage,
    loadingProgress,
    onRemove
  } = props

  const isError = errorMessage != null
  const isLoading = !isError && loadingProgress != null && loadingProgress < 100

  const onRenderPreview = () => {
    if (isLoading) {
      return (
        <ProgressSpinner
          percent={loadingProgress ?? 0}
        />
      )
    }

    if (isError) {
      return (
        <MdErrorOutline
          size={28}
        />
      )
    }

    return (
      <AssetChipPreview
        name={name}
        type={contentType}
      />
    )
  }

  return (
    <div
      className={clsx(
        'border-2 rounded-md p-3 relative max-w-sm min-w-[15rem] flex-1',
        isError ? 'bg-red-950 bg-opacity-90 border-red-950' : 'bg-empty/30'
      )}
    >
      <div
        className='flex items-center gap-2'
      >
        <span
          className='text-light/80'
        >
          {onRenderPreview()}
        </span>

        <div
          className='flex flex-col flex-1 min-w-0'
        >
          <span
            className='text-sm font-medium truncate max-w-[28ch]'
          >
            {name}
          </span>

          <span
            className='text-xs text-light/60 text-nowrap truncate'
          >
            {isError ? errorMessage : formatBytes(sizeBytes ?? 0)}
          </span>
        </div>

        <button
          type='button'
          disabled={isLoading}
          onClick={onRemove}
          className={clsx(
            'flex items-center gap-1 text-sm rounded-md p-1',
            'mb-auto',
            isLoading && 'hidden',
            isError ? 'hover:bg-red-900' : 'hover:bg-light/10'
          )}
        >
          <FiX
            size={12}
          />
        </button>
      </div>
    </div>
  )
}

export default AssetChip