import { Field } from '@base-ui-components/react'
import React, { useRef } from 'react'

interface VerificationCodeInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: (value: string) => void
}

const LENGTH = 6

const VerificationCodeInput = (props: VerificationCodeInputProps) => {
  const { onChange, ...rest } = props

  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  const handleChange = (idx: number) => {
    const input = inputsRef.current[idx]
    if (input == null) return

    const char = input.value
    if (!/^\d?$/.test(char)) {
      input.value = ''
      return
    }

    const chars = inputsRef.current
      .filter(el => el != null)
      .map(el => el.value)
      .join('')

    onChange?.(chars)

    if (char !== '' && idx < LENGTH - 1) {
      inputsRef.current[idx + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    const value = inputsRef.current[idx]?.value
    if (e.key === 'Backspace' && value === '' && idx > 0) {
      inputsRef.current[idx - 1]?.focus()
    }
  }

  return (
    <Field.Root
      className='flex flex-col items-center'
      {...rest}
    >
      <div
        className='flex gap-2'
      >
        {Array
          .from({ length: LENGTH })
          .map((_, idx) => (
            <Field.Control
              key={idx}
              ref={el => { inputsRef.current[idx] = el }}
              name={`code-${idx}`}
              type='text'
              autoFocus={idx === 0}
              required
              inputMode='numeric'
              maxLength={1}
              pattern='[0-9]*'
              onChange={() => { handleChange(idx) }}
              onKeyDown={e => { handleKeyDown(e, idx) }}
              className='h-12 w-12 text-center text-xl border-2 rounded-md outline-none focus:border-sinopia'
            />
          ))}
      </div>
      <Field.Error
        className='text-red-600 font-pd text-sm mt-2'
      />
    </Field.Root>
  )
}

export default VerificationCodeInput
