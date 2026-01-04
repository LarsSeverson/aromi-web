import React from 'react'
import { useFragrance, useSearchFragrances } from '@/features/fragrances'
import { Field } from '@base-ui/react'
import { useNewPostContext } from '../contexts/NewPostContext'
import { INVALID_ID } from '@/utils/util'
import { useDebounce } from '@/hooks/useDebounce'
import clsx from 'clsx'
import { InputPopover } from '@/components/input-popover'

const NewPostFragrance = () => {
  const { fragranceId } = useNewPostContext()

  const { fragrance } = useFragrance(fragranceId ?? INVALID_ID)
  const { fragrances, refresh } = useSearchFragrances({ pagination: { first: 10 } })

  const handleOnSearchFragrances = useDebounce(
    (term: string) => {
      refresh({ term })
    },
    200
  )

  const handleOnTermChange = (term: string) => {
    handleOnSearchFragrances(term)
  }

  return (
    <Field.Root
      className='flex flex-col'
    >
      <div
        className='mb-2 flex items-center justify-between'
      >
        <Field.Label
          className='text-md font-semibold'
        >
          Fragrance
        </Field.Label>

      </div>

      <InputPopover.Root
        items={fragrances}
      >
        <InputPopover.Input
          placeholder={fragrance?.name ?? 'Search fragrances...'}
          onValueChange={handleOnTermChange}
          className={clsx(
            'w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-blue-500',
            'md:px-4 md:py-3'
          )}
        />

        <InputPopover.PopoverRoot>
          <InputPopover.PopoverPortal>
            <InputPopover.PopoverPositioner
              sideOffset={4}
              align='start'
              className='z-50'
            >
              <InputPopover.PopoverPopup
                initialFocus={false}
                finalFocus={false}
                className={clsx(
                  'box-border flex max-h-150 min-w-md',
                  'overflow-hidden rounded-lg',
                  'border bg-white shadow-md',
                  'origin-(--transform-origin) transition-transform duration-150',
                  'data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0'
                )}
              >
                <div className='flex flex-col p-1'>
                  {fragrances.map((item, index) => (
                    <InputPopover.Item
                      key={item.id}
                      index={index}
                      className='rounded-lg transition-colors'
                    >
                      {({ isActive }) => (
                        <div
                          className={clsx(
                            'flex items-center gap-3',
                            isActive && 'text-blue-600'
                          )}
                        >
                          <div className='flex-1 text-sm font-medium'>
                            {item.name}
                          </div>

                          {isActive && (
                            <span className='text-xs font-bold tracking-wider uppercase'>
                              Select
                            </span>
                          )}
                        </div>
                      )}
                    </InputPopover.Item>
                  ))}

                  {fragrances.length === 0 && (
                    <div className='p-4 text-center text-sm text-gray-500'>
                      No fragrances found
                    </div>
                  )}
                </div>
              </InputPopover.PopoverPopup>
            </InputPopover.PopoverPositioner>
          </InputPopover.PopoverPortal>
        </InputPopover.PopoverRoot>
      </InputPopover.Root>
    </Field.Root>
  )
}

export default NewPostFragrance
