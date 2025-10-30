import clsx from 'clsx'
import React, { useState } from 'react'

export interface BucketInputOption {
  label: string
  score: number
}

export interface BucketInputProps<T extends BucketInputOption> {
  options: T[]
  value?: T['score'] | null
  defaultValue?: T['score'] | null
  onOptionChange?: (option: T) => void
}

const BucketInput = <T extends BucketInputOption, >(
  props: BucketInputProps<T>
) => {
  const { options, value, defaultValue = null, onOptionChange } = props
  const [internal, setInternal] = useState<T['score'] | null>(defaultValue)
  const selected = value ?? internal

  const handleSelect = (score: T['score']) => {
    if (value == null) setInternal(score)
    const opt = options.find(o => o.score === score)
    if (opt != null) onOptionChange?.(opt)
  }

  return (
    <div
      className={clsx(
        'w-full'
      )}
    >
      <div
        role='radiogroup'
        className='flex rounded-md overflow-hidden outline outline-surface2'
      >
        {options
          .map((o, i) => {
            const checked = selected === o.score
            return (
              <button
                key={o.score}
                type='button'
                role='radio'
                aria-checked={checked}
                aria-label={o.label}
                onClick={handleSelect.bind(null, o.score)}
                className={clsx(
                  'h-8 flex-1 min-w-0 transition-colors',
                  checked ? 'bg-sinopia border-primary' : 'bg-black/10/30 hover:bg-black/10/60',
                  i !== 0 && 'border-l border-surface2'
                )}
              />
            )
          })}
      </div>

      <div
        className='mt-2 flex text-xs text-light'
      >
        {options
          .map(o => (
            <span
              key={o.score}
              title={o.label}
              className='flex-1 min-w-0 text-center truncate'
            >
              {o.label}
            </span>
          ))}
      </div>
    </div>
  )
}

export default BucketInput
