import { PostType, type PostPreviewFragment } from '@/generated/graphql'
import React from 'react'
import { usePost } from '../hooks/usePost'
import PostPreviewCardAvatar from '../components/PostPreviewCardAvatar'
import PostPreviewCardHeading from '../components/PostPreviewCardHeading'
import PostPreviewCardTitle from '../components/PostPreviewCardTitle'
import PostPreviewCardAssets from '../components/PostPreviewCardAssets'
import PostPreviewCardFragrance from '../components/PostPreviewCardFragrance'
import { TipTapRenderer } from '@/components/tiptap/TipTapRenderer'
import type { JSONContent } from '@tiptap/core'
import PostPreviewCardFooter from '../components/PostPreviewCardFooter'
import Divider from '@/components/Divider'
import PostCommentForm from '../components/post-comment/PostCommentForm'
import { NewPostCommentProvider } from '../contexts/providers/NewPostCommentProvider'

export interface PostPageProps {
  post: PostPreviewFragment
}

const PostPage = (props: PostPageProps) => {
  const { post } = usePost(props.post.id)
  const { type, user, title } = (post ?? {}) as PostPreviewFragment

  const showMedia = type === PostType.Media
  const showFragrance = type === PostType.Fragrance

  if (post == null) return null

  return (
    <div
      className='flex w-full flex-col items-center px-4'
    >
      <div
        className='flex w-full max-w-3xl gap-2'
      >
        <PostPreviewCardAvatar
          user={user}
        />

        <div
          className='flex w-full min-w-0 flex-col gap-1'
        >
          <PostPreviewCardHeading
            post={post}
          />

          <PostPreviewCardTitle
            title={title}
            isDense={false}
          />

          {showMedia && (
            <PostPreviewCardAssets
              postAssets={post.assets}
              isEnlarged
            />
          )}

          {showFragrance && (
            <PostPreviewCardFragrance
              fragrance={post.fragrance}
            />
          )}

          <TipTapRenderer
            content={post.content as JSONContent}
            className='text-sm text-black/70 select-none'
          />

          <div
            className='mt-3'
          >
            <PostPreviewCardFooter
              post={post}
            />
          </div>

          <Divider
            className='my-3'
            horizontal
          />

          <NewPostCommentProvider
            post={post}
          >
            <PostCommentForm />
          </NewPostCommentProvider>
        </div>
      </div>
    </div>
  )
}

export default PostPage
