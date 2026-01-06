import type { JSONContent } from '@tiptap/react'
import Editor from '@/components/tiptap/Editor'
import { Field } from '@base-ui/react'
import React from 'react'

export interface NewPostContentProps {}

const NewPostContent = (_props: NewPostContentProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [contentStr, setContentStr] = React.useState('{}')

  const handleContentUpdate = (json: JSONContent) => {
    const val = JSON.stringify(json ?? {})

    setContentStr(val)

    if (inputRef.current != null) {
      const descriptor = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )

      // eslint-disable-next-line @typescript-eslint/unbound-method
      const nativeInputValueSetter = descriptor?.set
      nativeInputValueSetter?.call(inputRef.current, val)

      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  return (
    <Field.Root
      name='content'
      validationMode='onChange'
      className='flex flex-col'
    >
      <Field.Label
        className='text-md mb-2 font-semibold'
      >
        Content
      </Field.Label>

      <Field.Control
        ref={inputRef}
        value={contentStr}
        onValueChange={setContentStr}
      />

      <Editor
        onUpdate={handleContentUpdate}
      />
    </Field.Root>
  )
}

export default NewPostContent
