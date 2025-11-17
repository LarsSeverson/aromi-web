/* eslint-disable tailwindcss/no-custom-classname */
import { Input } from '@base-ui-components/react'
import clsx from 'clsx'
import React, { useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

export interface SearchInputProps extends Input.Props {
  searchHistory?: string[]

  options?: string[]
  showOptions?: boolean

  onSearch?: (term: string) => void
  onClearOneHistory?: (term: string) => void
  onOptionSelect?: (option: string) => void
}

const SearchInput = (props: SearchInputProps) => {
  const {
    showOptions,
    options,
    searchHistory,

    onSearch,
    onClearOneHistory,
    onOptionSelect,

    ...inputProps
  } = props

  const {
    placeholder = 'Search',
    className,

    onKeyDown,

    ...restInputProps
  } = inputProps

  const inputRef = useRef<HTMLInputElement>(null)

  const [currentTerm, setCurrentTerm] = React.useState('')

  const showClearButton = currentTerm.length > 0

  const handleOnKeyDown = (event: Parameters<NonNullable<Input.Props['onKeyDown']>>[0]) => {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement
      const searchTerm = target.value

      onSearch?.(searchTerm)
    }

    onKeyDown?.(event)
  }

  const handleOnSearchButtonClick = () => {
    onSearch?.(currentTerm)
  }

  const handleOnClearButtonClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setCurrentTerm('')
    inputRef.current?.focus()
  }

  return (
    <div
      className='flex'
    >
      <div
        className='relative w-full'
      >
        <Input
          ref={inputRef}
          value={currentTerm}
          placeholder={placeholder}
          className={clsx(
            className,
            'bg-empty! z-10 rounded-l-3xl border p-2 px-4',
            'tracking-normal text-ellipsis whitespace-nowrap',
            showClearButton && 'pe-9'
          )}
          onKeyDown={handleOnKeyDown}
          onValueChange={setCurrentTerm}
          {...restInputProps}
        />

        {showClearButton && (
          <button
            type='button'
            className={clsx(
              'absolute top-1/2 right-0 -translate-y-1/2 p-1.5',
              'cursor-pointer rounded-md hover:bg-gray-200'
            )}
            onClick={handleOnClearButtonClick}
          >
            <IoClose
              size={22}
            />
          </button>
        )}
      </div>

      <button
        className={clsx(
          'bg-empty flex items-center justify-center rounded-r-3xl p-2 px-5',
          'cursor-pointer hover:bg-gray-200',
          showClearButton && 'border-l border-gray-200'
        )}
        onClick={handleOnSearchButtonClick}
      >
        <FiSearch
          size={25}
        />
      </button>
    </div>
  )
}

export default SearchInput
