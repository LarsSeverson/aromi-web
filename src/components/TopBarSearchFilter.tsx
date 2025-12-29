import { SEARCH_FILTER_OPTIONS } from '@/utils/constants'
import { Popover, Radio, RadioGroup } from '@base-ui/react'
import { useNavigate, useSearch } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { BsSliders } from 'react-icons/bs'

const TopBarSearchFilter = () => {
  const { filter = 'fragrances', ...restSearch } = useSearch({ strict: false })
  const navigate = useNavigate()

  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
  const [selectedFilter, setSelectedFilter] = React.useState<typeof filter>(filter)
  const hasChanges = selectedFilter !== filter

  const handleOnApply = () => {
    navigate({ to: '.', search: { ...restSearch, filter: selectedFilter } })
    setIsPopoverOpen(false)
  }

  React.useEffect(
    () => {
      setSelectedFilter(filter)
    },
    [filter]
  )

  return (
    <Popover.Root
      open={isPopoverOpen}
      onOpenChange={setIsPopoverOpen}
    >
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

              <div
                className='mt-6 flex items-center gap-2'
              >
                <Popover.Close
                  className='bg-empty text-md cursor-pointer rounded-full px-5 py-2 hover:brightness-95'
                >
                  Cancel
                </Popover.Close>

                <button
                  type='button'
                  disabled={!hasChanges}
                  className={clsx(
                    !hasChanges && 'cursor-default! opacity-50 hover:shadow-none! hover:brightness-100!',
                    'bg-sinopia text-md rounded-full px-5 py-2 text-white brightness-100 hover:shadow-lg hover:brightness-105',
                    'relative flex cursor-pointer items-center justify-center'
                  )}
                  onClick={handleOnApply}
                >
                  <div>
                    Apply
                  </div>
                </button>
              </div>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default TopBarSearchFilter
