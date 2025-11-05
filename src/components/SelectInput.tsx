import React from 'react'
import { Select } from '@base-ui-components/react'
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

const SelectInput = <Value, >(props: SelectInputProps<Value>) => {
  const { items, value, defaultValue, onValueChange } = props

  return (
    <Select.Root
      items={items}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <Select.Trigger
        className={clsx(
          'flex h-full min-w-28 items-center justify-between gap-3',
          'border-empty rounded-xl border-2 text-black/80',
          'cursor-default pr-3 pl-3.5 text-base select-none',
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
          className='z-10 outline-none select-none'
          sideOffset={8}
        >
          <Select.Popup
            className={clsx(
              'group origin-(--transform-origin) bg-clip-padding',
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
                'top-0 z-1 flex h-4 w-full cursor-default items-center justify-center',
                'rounded-md bg-white text-center text-xs text-black/60',
                'before:absolute before:left-0 before:h-full before:w-full before:content-[\'\']',
                'data-[side=none]:before:-top-full'
              )}
            />

            <Select.List
              className={clsx(
                'relative scroll-py-6 overflow-y-auto py-1',
                'max-h-(--available-height)'
              )}
            >
              {items.map(
                ({ label, value }, index) => (
                  <Select.Item
                    key={index}
                    value={value}
                    className={clsx(
                      'grid min-w-(--anchor-width) cursor-default grid-cols-[0.75rem_1fr] items-center',
                      'gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none',
                      'group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)]',
                      'group-data-[side=none]:pr-12 group-data-[side=none]:text-base',
                      'group-data-[side=none]:leading-4',
                      'data-highlighted:relative data-highlighted:z-0',
                      'data-highlighted:before:absolute data-highlighted:before:inset-x-1',
                      'data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1]',
                      'data-highlighted:before:bg-empty data-highlighted:before:rounded-sm',
                      'pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]'
                    )}
                  >
                    <Select.ItemIndicator
                      className='col-start-1'
                    >
                      <CgCheck
                        className='size-4'
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
                'bottom-0 z-1 flex h-4 w-full cursor-default items-center justify-center',
                'rounded-md bg-white text-center text-xs text-black/60',
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
