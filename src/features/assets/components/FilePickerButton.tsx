import React from 'react'
import clsx from 'clsx'
import { FiImage } from 'react-icons/fi'

export interface FilePickerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  allowMultiple?: boolean
  acceptedFileTypes?: string[]
  maxFiles?: number
  maxFileSizeInBytes?: number
  onFilesSelected?: (files: FileList) => void
  isDisabled?: boolean
}

const FilePickerButton = (props: FilePickerButtonProps) => {
  const {
    allowMultiple = true,
    acceptedFileTypes = [],

    isDisabled = false,

    onFilesSelected,

    children
  } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (isDisabled) return
    inputRef.current?.click()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      onFilesSelected?.(event.target.files)
    }

    event.target.value = ''
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleButtonClick}
      {...props}
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
      )
      }

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
