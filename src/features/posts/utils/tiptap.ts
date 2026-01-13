import { Result } from 'neverthrow'
import StarterKit from '@tiptap/starter-kit'
import { generateText, type JSONContent } from '@tiptap/core'
import { generateHTML, generateJSON } from '@tiptap/html'

export const extensions = [StarterKit]

export const getSanitizedTiptapContent = (value: unknown, minLength: number, maxLength: number) => {
  const content = value as JSONContent

  const text = generateText(
    content,
    extensions
  )

  if (text.length < minLength) {
    throw new Error('CONTENT_TOO_SHORT')
  }

  if (text.length > maxLength) {
    throw new Error('CONTENT_TOO_LONG')
  }

  const html = generateHTML(
    content,
    extensions
  )

  if (html === '<p></p>' || html === '') {
    return null
  }

  return generateJSON(
    html,
    extensions
  )
}

export const getTiptapHtmlContent = (value: unknown) => {
  const content = value as JSONContent

  const html = Result.fromThrowable(() =>
    generateHTML(
      content,
      extensions
    )
  )()

  return html.unwrapOr('')
}

export const getTiptapTruncatedText = (value: unknown, limit = 500) => {
  const content = value as JSONContent

  const textResult = Result.fromThrowable(() =>
    generateText(content, extensions)
  )()

  const text = textResult.unwrapOr('')

  if (text.length <= limit) return text

  return text.substring(0, limit).trim() + '...'
}
