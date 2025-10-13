import React from 'react'
import { NumberField } from '@base-ui-components/react'
import clsx from 'clsx'
import { FiMinus, FiPlus } from 'react-icons/fi'

export interface NumberInputProps extends NumberField.Input.Props {
  label?: string
  value?: number
  onValueChange?: (value: number | null) => void
}

const NumberInput = (props: NumberInputProps) => {
  const {
    label,
    value,
    onValueChange,
    ...rest
  } = props

  return (
    <NumberField.Root
      value={value}
      snapOnStep
      min={Number(rest.min)}
      max={Number(rest.max)}
      onValueChange={onValueChange}
      format={{ useGrouping: false }}
      className={clsx(
        'flex flex-col gap-1',
        (props.disabled ?? false) && 'opacity-50'
      )}
    >
      {label != null && (
        <label
          className={clsx(
            'font-semibold text-md text-light'
          )}
        >
          {label}
        </label>
      )}

      <div
        className={clsx(
          'flex'
        )}
      >
        <NumberField.Decrement
          className={clsx(
            'flex size-10 aspect-square items-center justify-center select-none',
            'border border-surface2 bg-black/10/40 hover:bg-black/10',
            'rounded-md rounded-tr-none rounded-br-none',
            '[&[data-disabled]]:hover:bg-black/10/40'
          )}
        >
          <FiMinus />
        </NumberField.Decrement>

        <NumberField.Input
          {...rest}
          inputMode='numeric'
          pattern='[0-9]*'
          className={clsx(
            'h-10 w-full text-center text-base tabular-nums',
            'border-y border-surface2 bg-white text-light',
            'focus:z-[1]'
          )}
        />

        <NumberField.Increment
          className={clsx(
            'flex aspect-square size-10 items-center justify-center select-none',
            'border border-surface2 bg-black/10/40 hover:bg-black/10',
            'rounded-md rounded-tl-none rounded-bl-none',
            '[&[data-disabled]]:hover:bg-black/10/40'
          )}
        >
          <FiPlus />
        </NumberField.Increment>
      </div>
    </NumberField.Root>
  )
}

export default NumberInput
