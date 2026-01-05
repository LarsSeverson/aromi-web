import React from 'react'
import StarterKit from '@tiptap/starter-kit'
import type { JSONContent } from '@tiptap/core'
import { renderToReactElement } from '@tiptap/static-renderer/pm/react'
import { Result } from 'neverthrow'

interface TiptapRendererProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  content: JSONContent
}

export function TiptapRenderer (props: TiptapRendererProps) {
  const { content, ...rest } = props

  const node = React.useMemo(
    () => {
      const safeRender = Result.fromThrowable(renderToReactElement)

      return safeRender({
        extensions: [StarterKit],
        content,
        options: {
          unhandledNode: () => null,
          unhandledMark: () => null
        }
      })
    },
    [content]
  )

  if (node.isErr()) return null

  return (
    <div
      {...rest}
    >
      {node.value}
    </div>
  )
}
