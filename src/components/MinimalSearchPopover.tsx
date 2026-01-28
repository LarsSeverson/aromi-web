import { useSearchFragrances } from '@/features/fragrances'
import { useDebounce } from '@/hooks/useDebounce'
import { useRouteState } from '@/hooks/useRouteState'
import { useSearchHistory } from '@/hooks/useSearchHistory'
import type { SearchItem } from '@/utils/util'
import { useNavigate, useSearch } from '@tanstack/react-router'
import React from 'react'
import { InputPopover, type InputPopoverKeyDownEvent } from './input-popover'
import clsx from 'clsx'
import SearchPopoverListItem from './SearchPopoverListItem'
import { ValidSearchTerm } from '@/utils/validation'

export const MinimalSearchPopover = () => {
  const { isPosts } = useRouteState()

  const { term, ...restSearch } = useSearch({ strict: false }) ?? {}
  const navigate = useNavigate()

  const { history, addTerm } = useSearchHistory()
  const { fragrances, refresh } = useSearchFragrances({ term, pagination: { first: 10 } })

  const [currentTerm, setCurrentTerm] = React.useState(term ?? '')

  const suggestionItems = React.useMemo<SearchItem[]>(
    () => isPosts
      ? []
      : fragrances.map(fragrance => ({
        id: fragrance.id,
        term: fragrance.name,
        subtext: fragrance.brand.name,
        type: 'suggestion'
      })),
    [fragrances, isPosts]
  )

  const allItems = React.useMemo<SearchItem[]>(
    () => history.concat(suggestionItems),
    [history, suggestionItems]
  )

  const handleSearchFragrances = useDebounce(
    (term: string) => {
      refresh({ term })
    },
    200
  )

  const handleOnValueChange = (value: string) => {
    handleSearchFragrances(value)
    setCurrentTerm(value)
  }

  const handleOnSearch = (item: SearchItem) => {
    addTerm(item)

    const newSearch: Record<string, unknown> = {
      ...restSearch,
      term: item.term
    }

    if (item.type !== 'custom' && item.id != null) {
      navigate({
        to: '/fragrances/$id',
        params: { id: item.id },
        search: newSearch
      })

      return
    }

    if (isPosts) {
      newSearch.filter = 'posts'
    }

    navigate({ to: '/search', search: newSearch })
  }

  const handleManualSearch = () => {
    const parsed = ValidSearchTerm.safeParse(currentTerm)
    if (!parsed.success) return

    const item: SearchItem = {
      term: currentTerm,
      type: 'custom'
    }

    handleOnSearch(item)
  }

  const handleOnPopoverEvent = (event: React.SyntheticEvent) => {
    event.stopPropagation()
  }

  const handleOnItemSelect = (item: SearchItem) => {
    setCurrentTerm(item.term)
    handleOnSearch(item)
  }

  const handleOnKeyDown = (event: InputPopoverKeyDownEvent<SearchItem>) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (event.item == null) {
        handleManualSearch()
      } else {
        handleOnSearch(event.item)
      }
    }
  }

  return (
    <div
      className='flex w-full items-center'
    >
      <InputPopover.Root<SearchItem>
        items={allItems}
      >
        <InputPopover.Input
          type='search'
          value={currentTerm}

          placeholder='Search'

          onValueChange={handleOnValueChange}
          onKeyDown={handleOnKeyDown}

          className={clsx(
            'rounded-3xl border bg-gray-200! backdrop-blur-3xl!',
            'w-full px-3 py-2.5'
          )}
        />

        <InputPopover.PopoverRoot>
          <InputPopover.PopoverPortal>
            <InputPopover.PopoverPositioner
              sideOffset={4}
              className='z-50'
              collisionPadding={0}
            >
              <InputPopover.PopoverPopup
                equalWidth={false}
                initialFocus={false}
                finalFocus={false}

                onClick={handleOnPopoverEvent}
                onTouchStart={handleOnPopoverEvent}
                onTouchMove={handleOnPopoverEvent}
                onTouchEnd={handleOnPopoverEvent}

                className={clsx(
                  'box-border flex',
                  'overflow-auto rounded-lg',
                  'border bg-white shadow-md',
                  'origin-(--transform-origin) transition-transform duration-150',
                  'data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0',
                  'mx-2 max-h-[calc(100vh-10rem)] w-[calc(100vw-1rem)]'
                )}
              >
                <div
                  className={clsx(
                    'scrollbar-thin flex-1 overflow-y-auto p-4 select-none'
                  )}
                  style={{ scrollbarGutter: 'stable' }}
                >
                  {allItems.map(
                    (item, index) => (
                      <InputPopover.Item>
                        <SearchPopoverListItem
                          key={item.id ?? index}
                          item={item}
                          onItemSelect={handleOnItemSelect}
                        />
                      </InputPopover.Item>
                    )
                  )}
                </div>
              </InputPopover.PopoverPopup>
            </InputPopover.PopoverPositioner>
          </InputPopover.PopoverPortal>
        </InputPopover.PopoverRoot>

      </InputPopover.Root>
    </div>
  )
}
