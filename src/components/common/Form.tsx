import React, { useContext, useRef } from 'react'
import { createContext, type FormEvent, useState } from 'react'
import InputField, { type InputFieldProps } from '../InputField'

export type ValidateFn = (value: string) => string | null

interface FormContextProps {
  values: Map<string, string>
  errors: Map<string, string>
  setValue: (name: string, value: string) => void
  registerValidation: (name: string, validate: ValidateFn) => void
  validate: () => boolean
}

const FormContext = createContext<FormContextProps | null>(null)

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children?: React.ReactNode
  onSubmit?: (values: Map<string, string>) => void
}

const Form = (props: FormProps) => {
  const { children, onSubmit, ...rest } = props

  const valuesRef = useRef<Map<string, string>>(new Map())
  const [errors, setErrors] = useState<Map<string, string>>(new Map())
  const validators = new Map<string, ValidateFn>()

  const setValue = (name: string, value: string) => {
    valuesRef.current.set(name, value)
  }

  const registerValidation = (name: string, validate: ValidateFn) => {
    validators.set(name, validate)
  }

  const validate = (): boolean => {
    const newErrors = new Map<string, string>()

    for (const [name, validateFn] of validators) {
      const error = validateFn(valuesRef.current.get(name) ?? '')
      if (error != null) {
        newErrors.set(name, error)
      }
    }

    setErrors(newErrors)
    return newErrors.size === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (validate()) {
      onSubmit?.(valuesRef.current)
    }
  }

  return (
    <FormContext.Provider
      value={{ values: valuesRef.current, errors, setValue, registerValidation, validate }}
    >
      <form
        {...rest}
        noValidate
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}

export interface FormInputProps extends InputFieldProps {
  name: string
  validate?: ValidateFn | undefined
}

const FormInput = (props: FormInputProps) => {
  const context = useContext(FormContext)
  if (context == null) throw new Error('Form.Input must be used within a Form')

  const { name, validate, ...rest } = props
  const { errors, registerValidation, setValue } = context
  const error = errors.get(name)

  if (validate != null) registerValidation(name, validate)

  return (
    <InputField
      {...rest}
      onChange={(e) => { setValue(name, e.target.value) }}
      invalid={error != null}
      invalidMessage={error}
    />
  )
}

export type SubmitButtonProps<T extends React.ElementType = 'button'> = {
  component?: T
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, 'type'>

const SubmitButton = <T extends React.ElementType = 'button'>(props: SubmitButtonProps<T>) => {
  const { component: Component = 'button', children, ...rest } = props

  return (
    <Component
      {...rest}
      type='submit'
    >
      {children}
    </Component>
  )
}

Form.Input = FormInput
Form.Submit = SubmitButton

export default Form
