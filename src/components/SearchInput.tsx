/* eslint-disable tailwindcss/no-custom-classname */
import { Input } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

export interface SearchInputProps extends Input.Props {
  showOptions?: boolean
  options?: string[]
  onOptionSelect?: (option: string) => void
}

const SearchInput = (props: SearchInputProps) => {
  const { showOptions, options, onOptionSelect, ...inputProps } = props
  const { placeholder = 'Search', className, ...restInputProps } = inputProps

  return (
    <div
      className='flex'
    >
      <Input
        placeholder={placeholder}
        className={clsx(
          className,
          'bg-empty! z-10 rounded-l-3xl border p-2 px-4'
        )}
        {...restInputProps}
      />

      <button
        className={clsx(
          'bg-empty flex items-center justify-center rounded-r-3xl p-2 px-5',
          'cursor-pointer hover:bg-gray-200'
        )}
      >
        <FiSearch
          size={25}
        />
      </button>
    </div>
  )
}

export default SearchInput
