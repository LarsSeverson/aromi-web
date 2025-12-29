import React from 'react'
import { Select } from '@base-ui/react'
import clsx from 'clsx'
import { CgCheck, CgChevronDown } from 'react-icons/cg'

export interface SelectInputOption<Value> {
  label: React.ReactNode
  value: Value
}

export interface SelectInputProps<Value> {
  items: Array<SelectInputOption<Value>>
  value?: Value
  defaultValue?: Value
  onValueChange?: (value: Value) => void
}

const SelectInput = <Value, > (props: SelectInputProps<Value>) => {
  const { items, value, defaultValue, onValueChange } = props

  const handleOnValueChange = (newValue: Value | null) => {
    if (newValue == null) return
    onValueChange?.(newValue)
  }

  return (
    <Select.Root
      items={items}
      value={value}
      defaultValue={defaultValue}
      onValueChange={handleOnValueChange}
    >
      <Select.Trigger
        className={clsx(
          'flex h-8 w-full items-center justify-between gap-2 md:h-full md:min-w-28 md:gap-3',
          'border-empty rounded-lg border-2 text-black/80 md:rounded-xl',
          'cursor-default pr-2.5 pl-3 text-xs select-none md:pr-3 md:pl-3.5 md:text-base',
          'hover:bg-empty',
          'focus-visible:outline-sinopia focus-visible:outline focus-visible:-outline-offset-1',
          'data-popup-open:bg-empty'
        )}
      >
        <Select.Value />

        <Select.Icon
          className='flex'
        >
          <CgChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner
          className='z-50 outline-none select-none'
          sideOffset={6}
        >
          <Select.Popup
            className={clsx(
              'group origin-(--transform-origin) bg-clip-padding',
              'w-48 md:w-auto md:min-w-(--anchor-width)',
              'rounded-md bg-white text-black shadow-md shadow-black/10',
              'outline-1 outline-black/10',
              'transition-[transform,scale,opacity]',
              'data-ending-style:scale-90 data-ending-style:opacity-0',
              'data-[side=none]:data-ending-style:transition-none',
              'data-starting-style:scale-90 data-starting-style:opacity-0',
              'data-[side=none]:data-starting-style:scale-100',
              'data-[side=none]:data-starting-style:opacity-100',
              'data-[side=none]:data-starting-style:transition-none'
            )}
          >
            <Select.ScrollUpArrow
              className={clsx(
                'top-0 z-1 flex h-3 w-full cursor-default items-center justify-center md:h-4',
                'rounded-md bg-white text-center text-[10px] text-black/60 md:text-xs',
                'before:absolute before:left-0 before:h-full before:w-full before:content-[\'\']',
                'data-[side=none]:before:-top-full'
              )}
            />

            <Select.List
              className={clsx(
                'relative scroll-py-4 overflow-y-auto py-0.5 md:scroll-py-6 md:py-1',
                'max-h-48 md:max-h-(--available-height)'
              )}
            >
              {items.map(
                ({ label, value }, index) => (
                  <Select.Item
                    key={index}
                    value={value}
                    className={clsx(
                      'grid cursor-default grid-cols-[0.875rem_1fr] items-center gap-1.5 md:min-w-(--anchor-width) md:grid-cols-[0.75rem_1fr] md:gap-2',
                      'py-1.5 pr-3 pl-2 text-xs leading-tight outline-none select-none md:py-2 md:pr-4 md:pl-2.5 md:text-sm md:leading-4',
                      'group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)]',
                      'group-data-[side=none]:pr-12 group-data-[side=none]:text-base',
                      'group-data-[side=none]:leading-4',
                      'data-highlighted:relative data-highlighted:z-0',
                      'data-highlighted:before:absolute data-highlighted:before:inset-x-1',
                      'data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1]',
                      'data-highlighted:before:bg-empty data-highlighted:before:rounded-sm'
                    )}
                  >
                    <Select.ItemIndicator
                      className='col-start-1'
                    >
                      <CgCheck
                        className='size-3.5 md:size-4'
                      />
                    </Select.ItemIndicator>

                    <Select.ItemText
                      className='col-start-2'
                    >
                      {label}
                    </Select.ItemText>
                  </Select.Item>
                )
              )}
            </Select.List>

            <Select.ScrollDownArrow
              className={clsx(
                'bottom-0 z-1 flex h-3 w-full cursor-default items-center justify-center md:h-4',
                'rounded-md bg-white text-center text-[10px] text-black/60 md:text-xs',
                'before:absolute before:left-0 before:h-full before:w-full before:content-[\'\']',
                'data-[side=none]:before:-bottom-full'
              )}
            />
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}

export default SelectInput