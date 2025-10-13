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
          'box-border flex items-center justify-between min-w-36 w-full',
          'gap-3 h-10 pl-[0.875rem] pr-3 m-0',
          'outline-0 border-2 rounded-md',
          'leading-6 text-light',
          'cursor-default select-none',
          'hover:bg-black/10 border-surface2',
          '[&[data-disabled]]:hover:bg-white'
        )}
      >
        <Select.Value
          className='flex-1 truncate text-nowrap'
        />

        <Select.Icon>
          <CgChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner
          className='select-none'
          sideOffset={8}
        >
          <Select.ScrollUpArrow
            className={clsx(
              'top-0 z-[1] flex h-6 w-full cursor-default items-center justify-center rounded-md',
              'bg-empty text-center text-xs before:absolute',
              'before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[\'\']',
              'data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]'
            )}
          />

          <Select.Popup
            className={clsx(
              'group box-border p-2 rounded-md bg-white',
              'max-h-[var(--available-height)] origin-[var(--transform-origin)]',
              'overflow-y-auto transition-[transform,opacity]',
              'data-[ending-style]:opacity-0',
              'data-[side=none]:data-[ending-style]:transition-none',
              'data-[starting-style]:opacity-0',
              'data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none',
              'outline-1 outline-surface2'
            )}
          >
            {items
              .map(({ label, value }, idx) => (
                <Select.Item
                  key={idx}
                  value={value}
                  className={clsx(
                    'grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center',
                    'gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none',
                    'group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base',
                    'group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0',
                    'data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1',
                    'data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm',
                    'pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]',
                    'hover:bg-empty rounded-md'
                  )}
                >
                  <Select.ItemIndicator
                    className='col-start-1'
                  >
                    <CgCheck
                      className='block'
                    />
                  </Select.ItemIndicator>

                  <Select.ItemText
                    className='col-start-2'
                  >
                    {label}
                  </Select.ItemText>
                </Select.Item>
              ))}
          </Select.Popup>

          <Select.ScrollDownArrow
            className={clsx(
              'bottom-0 z-[1] p-2 flex h-6 w-full cursor-default items-center justify-center rounded-md',
              'bg-empty text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full',
              'before:w-full before:content-[\'\'] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]'
            )}
          />
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}

export default SelectInput
