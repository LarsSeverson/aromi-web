import React from 'react'
import clsx from 'clsx'
import { FiImage } from 'react-icons/fi'
import type { FileRejection } from './drop-zone'
import { getDisplayFileSize } from '../utils/helpers'

export interface FilePickerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean
  allowMultiple?: boolean
  acceptedFileTypes?: string[]
  maxFiles?: number
  maxFileSizeInBytes?: number

  onFilesSelected?: (files: File[]) => void
  onFilesRejected?: (rejected: FileRejection[]) => void
}

const FilePickerButton = (props: FilePickerButtonProps) => {
  const {
    allowMultiple = true,
    acceptedFileTypes = [],
    maxFileSizeInBytes = 20 * 1024 * 1024, // 20 MB
    maxFiles = 1,

    isDisabled = false,

    onFilesSelected,
    onFilesRejected,

    children,
    ...restProps
  } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const validateFiles = (fileList: File[]) => {
    const accepted: File[] = []
    const rejected: FileRejection[] = []

    fileList.forEach((file) => {
      const errors: string[] = []

      if (acceptedFileTypes.length > 0 && !acceptedFileTypes.includes(file.type)) {
        errors.push(`File type ${file.type} is not accepted`)
      }

      if (file.size > maxFileSizeInBytes) {
        errors.push(`File size exceeds the maximum limit of ${getDisplayFileSize(maxFileSizeInBytes)}`)
      }

      if (errors.length > 0) {
        rejected.push({
          file,
          errors
        })
      } else {
        accepted.push(file)
      }
    })

    return {
      accepted: accepted.slice(0, maxFiles),
      rejected
    }
  }

  const handleButtonClick = () => {
    if (isDisabled) return
    inputRef.current?.click()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files == null
      ? []
      : Array.from(event.target.files).slice(0, maxFiles)

    const { accepted, rejected } = validateFiles(files)

    if (accepted.length > 0) {
      onFilesSelected?.(accepted)
    }

    if (rejected.length > 0) {
      onFilesRejected?.(rejected)
    }

    event.target.value = ''
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleButtonClick}
      {...restProps}
      type='button'
      disabled={isDisabled}
      className={clsx(
        props.className,
        'flex aspect-square rounded-full p-3 text-sm text-black/80',
        'transition-colors duration-150 hover:bg-black/5',
        'hover:text-sinopia cursor-pointer items-center justify-center'
      )}
    >
      {children ?? (
        <FiImage
          size='16'
        />
      )}

      <input
        ref={inputRef}
        type='file'
        className='sr-only'
        multiple={allowMultiple}
        accept={acceptedFileTypes?.join(',')}
        onChange={handleInputChange}
        tabIndex={-1}
      />
    </button>
  )
}

export default FilePickerButton
