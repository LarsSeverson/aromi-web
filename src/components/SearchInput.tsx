/* eslint-disable tailwindcss/no-custom-classname */
import { type FieldControlProps, Input, Popover } from '@base-ui/react'
import clsx from 'clsx'
import React, { useMemo, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import SearchPopoverList from './SearchPopoverList'
import { ResizeContainer } from './ResizeContainer'
import { ValidSearchTerm } from '@/utils/validation'
import type { SearchItem } from '@/utils/util'

export interface SearchInputProps extends Input.Props {
  items?: SearchItem[]
  onSearch?: (item: SearchItem) => void
  onClearOneHistory?: (item: SearchItem) => void
}

const SearchInput = (props: SearchInputProps) => {
  const {
    items = [],

    onSearch,
    onClearOneHistory,

    ...inputProps
  } = props

  const {
    placeholder = 'Search',
    defaultValue,
    className,

    onKeyDown,
    onValueChange,

    ...restInputProps
  } = inputProps

  const inputRef = useRef<HTMLInputElement>(null)

  const [currentTerm, setCurrentTerm] = React.useState(String(defaultValue ?? ''))
  const [inputRect, setInputRect] = React.useState(new DOMRect())
  const [isFocused, setIsFocused] = React.useState(false)
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const [isClearFocused, setIsClearFocused] = React.useState(false)

  const filteredItems = useMemo(
    () => currentTerm.length === 0
      ? items.filter(term => term.type === 'history')
      : items.filter(term => term.type === 'suggestion'),
    [currentTerm, items]
  )

  const showClearButton = currentTerm.length > 0
  const showPopoverContent = filteredItems.length > 0

  React.useEffect(
    () => {
      setActiveIndex(-1)
    },
    [filteredItems, isPopoverOpen]
  )

  const handleManualSearch = (term: string) => {
    const parsed = ValidSearchTerm.safeParse(term)
    if (!parsed.success) return

    const item: SearchItem = {
      term,
      type: 'custom'
    }

    setIsPopoverOpen(false)
    inputRef.current?.blur()

    onSearch?.(item)
  }

  const handleOnItemSelect = (item: SearchItem) => {
    setCurrentTerm(item.term)
    setIsPopoverOpen(false)
    inputRef.current?.blur()

    onSearch?.(item)
  }

  const handleOnKeyDown = (event: Parameters<NonNullable<Input.Props['onKeyDown']>>[0]) => {
    onKeyDown?.(event)

    if (event.key === 'Enter') {
      event.preventDefault()

      const selectedItem = (isPopoverOpen && activeIndex >= 0)
        ? filteredItems[activeIndex]
        : null

      if (selectedItem == null) {
        handleManualSearch(currentTerm)
      } else if (isClearFocused) {
        onClearOneHistory?.(selectedItem)
      } else {
        handleOnItemSelect(selectedItem)
      }

      return
    }

    if (!isPopoverOpen || !showPopoverContent) return

    const actions: Record<string, () => void> = {
      ArrowDown: () => {
        setIsClearFocused(false)
        setActiveIndex(prev => Math.min(prev + 1, filteredItems.length - 1))
      },

      ArrowUp: () => {
        setIsClearFocused(false)
        setActiveIndex(prev => Math.max(prev - 1, 0))
      },

      ArrowRight: () => {
        if (activeIndex >= 0 && filteredItems[activeIndex].type === 'history') {
          setIsClearFocused(true)
        }
      },

      ArrowLeft: () => {
        setIsClearFocused(false)
      },

      Escape: () => {
        setIsPopoverOpen(false)
      }
    }

    if (actions[event.key] != null) {
      event.preventDefault()
      actions[event.key]()
    }
  }

  const handleOnFocus = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setIsFocused(true)
    setIsPopoverOpen(true)
  }

  const handleOnBlur = (event: React.FocusEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setIsFocused(false)

    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsPopoverOpen(false)
    }
  }

  const handleOnValueChange: FieldControlProps['onValueChange'] = (value, details) => {
    setCurrentTerm(value)
    onValueChange?.(value, details)

    setIsPopoverOpen(true)
  }

  const handleOnSearchButtonClick = () => {
    handleManualSearch(currentTerm)
  }

  const handleOnClearButtonClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setCurrentTerm('')
    inputRef.current?.focus()
  }

  const handleOnPopoverOpenChange = (open: boolean) => {
    setIsPopoverOpen(isFocused || open)
  }

  return (
    <div
      className='flex h-full w-full'
    >
      <ResizeContainer
        onResize={setInputRect}
        className='relative h-full w-full'
      >
        <Input
          {...restInputProps}
          ref={inputRef}
          value={currentTerm}
          placeholder={placeholder}
          autoFocus={false}
          className={clsx(
            className,
            'bg-empty! z-10 h-full w-full rounded-l-3xl border p-2 px-4',
            'tracking-normal text-ellipsis whitespace-nowrap',
            showClearButton && 'pe-10'
          )}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onKeyDown={handleOnKeyDown}
          onValueChange={handleOnValueChange}
        />

        {showClearButton && (
          <button
            type='button'
            className={clsx(
              'absolute top-1/2 right-1 -translate-y-1/2 p-1.5',
              'cursor-pointer rounded-md hover:bg-gray-200'
            )}
            onClick={handleOnClearButtonClick}
          >
            <IoClose
              size={22}
            />
          </button>
        )}
      </ResizeContainer>

      <button
        className={clsx(
          'bg-empty flex h-full items-center justify-center overflow-hidden rounded-r-3xl p-2 px-5',
          'cursor-pointer hover:bg-gray-200',
          showClearButton && 'border-l border-gray-200'
        )}
        onClick={handleOnSearchButtonClick}
      >
        <FiSearch
          size={25}
        />
      </button>

      <Popover.Root
        open={isPopoverOpen}
        onOpenChange={handleOnPopoverOpenChange}
      >
        <Popover.Portal>
          <Popover.Positioner
            anchor={inputRef}
            sideOffset={4}
            alignOffset={4}
            align='start'
          >
            <Popover.Popup
              initialFocus={false}
              finalFocus={false}
              className={clsx(
                'box-border flex max-h-150 min-w-md',
                'overflow-hidden rounded-lg',
                'border bg-white shadow-md',
                'origin-(--transform-origin) transition-transform duration-150',
                'data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0',
                !showPopoverContent && 'hidden'
              )}
              style={{ width: inputRect.width }}
            >
              <SearchPopoverList
                items={filteredItems}
                activeIndex={activeIndex}
                isClearFocused={isClearFocused}
                onItemSelect={handleOnItemSelect}
                onClearOneHistory={onClearOneHistory}
              />
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}

export default SearchInput
