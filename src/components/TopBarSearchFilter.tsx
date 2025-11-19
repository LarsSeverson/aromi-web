import { SEARCH_FILTER_OPTIONS } from '@/utils/constants'
import { Popover, Radio, RadioGroup } from '@base-ui-components/react'
import { useSearch } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { BsSliders } from 'react-icons/bs'

const TopBarSearchFilter = () => {
  const { filter = 'fragrances' } = useSearch({ strict: false })

  const [selectedFilter, setSelectedFilter] = React.useState(filter)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          'hover:bg-empty flex cursor-pointer items-center justify-center rounded-lg p-2.5',
          'aspect-square'
        )}
      >
        <BsSliders
          size={23}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner
          sideOffset={4}
        >
          <Popover.Popup
            className={clsx(
              'box-border flex max-h-150 min-w-xs',
              'overflow-hidden rounded-lg',
              'border bg-white shadow-md',
              'origin-(--transform-origin) transition-transform duration-150',
              'data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0'
            )}
          >
            <div
              className='flex w-full flex-col items-center px-2 py-4'
            >
              <Popover.Title
                className='font-semibold'
              >
                Filters
              </Popover.Title>

              <RadioGroup
                value={selectedFilter}
                name='search-filter'
                className='mt-4 flex w-full flex-col gap-2'
                onValueChange={value => {
                  setSelectedFilter(value as typeof selectedFilter)
                }}
              >
                {SEARCH_FILTER_OPTIONS.map(option => (
                  <label
                    key={option.value}
                    className='hover:bg-empty flex cursor-pointer items-center justify-between rounded-md p-2 px-4 select-none'
                  >
                    <span
                      className={clsx(
                        selectedFilter === option.value && 'font-semibold'
                      )}
                    >
                      {option.label}
                    </span>

                    <Radio.Root
                      value={option.value}
                      className="flex size-5 items-center justify-center rounded-full data-checked:bg-gray-900 data-unchecked:border data-unchecked:border-gray-300"
                    >
                      <Radio.Indicator
                        className="flex before:size-2 before:rounded-full before:bg-gray-50 data-unchecked:hidden"
                      />
                    </Radio.Root>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default TopBarSearchFilter
