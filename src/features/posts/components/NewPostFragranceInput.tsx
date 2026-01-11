import { InputPopover, type InputPopoverKeyDownEvent } from '@/components/input-popover'
import clsx from 'clsx'
import React from 'react'
import { useSearchFragrances } from '@/features/fragrances'
import { useDebounce } from '@/hooks/useDebounce'
import NewPostFragranceItem from './NewPostFragranceItem'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { Field } from '@base-ui/react'

export interface NewPostFragranceInputProps {
  onFragranceIdChange?: (id: string | null) => void
}

const NewPostFragranceInput = (props: NewPostFragranceInputProps) => {
  const { onFragranceIdChange } = props

  const { fragrances, refresh } = useSearchFragrances({ pagination: { first: 10 } })

  const [term, setTerm] = React.useState('')

  const handleOnSearchFragrances = useDebounce(
    (term: string) => {
      refresh({ term, pagination: { first: 10 } })
    },
    200
  )

  const handleOnTermChange = (term: string) => {
    setTerm(term)
    handleOnSearchFragrances(term)
  }

  const handleOnKeyDown = (event: InputPopoverKeyDownEvent<FragrancePreviewFragment>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()

      const { item: fragrance } = event
      onFragranceIdChange?.(fragrance?.id ?? null)
    }
  }

  return (
    <Field.Root
      name='fragranceId'
      className='flex flex-col'
    >
      <Field.Label
        className='text-md mb-2 font-semibold'
      >
        Fragrance
      </Field.Label>

      <InputPopover.Root<FragrancePreviewFragment>
        items={fragrances}
      >
        <InputPopover.Input
          required
          value={term}
          placeholder='Search fragrances...'
          className={clsx(
            'border-empty w-full rounded-3xl border p-3 px-5'
          )}
          onValueChange={handleOnTermChange}
          onKeyDown={handleOnKeyDown}
        />

        <Field.Error
          className='mt-1 ml-2 text-sm font-medium text-red-700'
        >
          This is required
        </Field.Error>

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
                  'box-border flex max-h-80 min-w-md',
                  'overflow-auto rounded-lg',
                  'border bg-white shadow-md',
                  'origin-(--transform-origin) transition-transform duration-150',
                  'data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0'
                )}
              >
                <div
                  className={clsx(
                    'scrollbar-thin flex-1 overflow-y-auto p-4 select-none'
                  )}
                  style={{ scrollbarGutter: 'stable' }}
                >
                  {fragrances.map((fragrance, index) => (
                    <NewPostFragranceItem
                      key={fragrance.id}
                      index={index}
                      fragrance={fragrance}
                      onFragranceIdChange={onFragranceIdChange}
                    />
                  ))}

                  {fragrances.length === 0 && (
                    <div
                      className='p-4 text-center text-sm text-gray-500'
                    >
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

export default NewPostFragranceInput
