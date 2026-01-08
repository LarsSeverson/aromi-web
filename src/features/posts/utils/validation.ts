import { VALID_IMAGE_TYPES, VALID_VIDEO_TYPES } from '@/features/assets/utils/validation'
import { PostType } from '@/generated/graphql'
import { ValidVote } from '@/utils/validation'
import { Result } from 'neverthrow'
import z from 'zod'
import { getSanitizedTiptapContent } from './tiptap'

export const MIN_POST_TITLE_LENGTH = 1
export const MAX_POST_TITLE_LENGTH = 300

export const MIN_POST_CONTENT_LENGTH = 0
export const MAX_POST_CONTENT_LENGTH = 5000
export const MIN_POST_COMMENT_CONTENT_LENGTH = 1
export const MAX_POST_COMMENT_CONTENT_LENGTH = 2000

export const MAX_POST_ASSETS = 4
export const MAX_POST_COMMENT_ASSETS = 4

export const VALID_POST_IMAGE_TYPES = VALID_IMAGE_TYPES
export const VALID_POST_VIDEO_TYPES = VALID_VIDEO_TYPES
export const VALID_POST_COMMENT_IMAGE_TYPES = VALID_IMAGE_TYPES
export const VALID_POST_COMMENT_VIDEO_TYPES = VALID_VIDEO_TYPES

export const MAX_POST_ASSET_SIZE = 50 * 1024 * 1024 // 50 MB
export const MAX_POST_COMMENT_ASSET_SIZE = 20 * 1024 * 1024 // 20 MB

export const MAX_POST_COMMENT_DEPTH = 2

export const ValidPostType = z.preprocess(
  (val) => (typeof val === 'string' ? val.toUpperCase() : val),
  z.enum(Object.values(PostType))
)

export const ValidPostTitle = z
  .string()
  .min(
    MIN_POST_TITLE_LENGTH,
    `Post title must be at least ${MIN_POST_TITLE_LENGTH} characters long`
  )
  .max(
    MAX_POST_TITLE_LENGTH,
    `Post title must be at most ${MAX_POST_TITLE_LENGTH} characters long`
  )

export const ValidPostContent = z
  .any()
  .transform((value, ctx) => {
    if (value == null) return null

    const processContent = Result.fromThrowable(() => {
      const jsond = JSON.parse(value as string) as JSON

      if (Object.keys(jsond).length === 0) {
        return null
      }

      return getSanitizedTiptapContent(
        jsond,
        MAX_POST_CONTENT_LENGTH
      )
    }
    )()

    if (processContent.isErr()) {
      ctx.addIssue({
        code: 'custom',
        message: 'Invalid content'
      })

      return z.NEVER
    }

    return processContent.value
  })

export const ValidPostCommentContent = z
  .string()
  .min(
    MIN_POST_COMMENT_CONTENT_LENGTH,
    `Post comment content must be at least ${MIN_POST_COMMENT_CONTENT_LENGTH} characters long`
  )
  .max(
    MAX_POST_COMMENT_CONTENT_LENGTH,
    `Post comment content must be at most ${MAX_POST_COMMENT_CONTENT_LENGTH} characters long`
  )

export const ValidPostFragranceId = z.string().nullish()
export const ValidPostCommentPostId = z.string()
export const ValidPostCommentParentId = z.string().nullish()

export const ValidPostAssetType = z
  .enum([...VALID_POST_IMAGE_TYPES])

export const ValidPostCommentAssetType = z
  .enum([...VALID_POST_COMMENT_IMAGE_TYPES])

export const ValidPostAssetSize = z
  .number()
  .int()
  .max(
    MAX_POST_ASSET_SIZE,
    `Asset size cannot exceed ${MAX_POST_ASSET_SIZE / (1024 * 1024)} MB`
  )

export const ValidPostCommentAssetSize = z
  .number()
  .int()
  .max(
    MAX_POST_COMMENT_ASSET_SIZE,
    `Asset size cannot exceed ${MAX_POST_COMMENT_ASSET_SIZE / (1024 * 1024)} MB`
  )

export const ValidPostAsset = z
  .object({
    contentType: ValidPostAssetType,
    contentSize: ValidPostAssetSize
  })
  .strip()

export const ValidPostCommentAsset = z
  .object({
    contentType: ValidPostCommentAssetType,
    contentSize: ValidPostCommentAssetSize
  })
  .strip()

export const CreatePostSchemaAsset = z
  .object({
    assetId: z.string(),
    displayOrder: z
      .number()
      .int()
      .min(0, 'Display order must be at least 0')
  })
  .strip()

export const CreatePostCommentSchemaAsset = z
  .object({
    assetId: z.string(),
    displayOrder: z
      .number()
      .int()
      .min(0, 'Display order must be at least 0')
  })
  .strip()

export const CreatePostSchemaAssets = z
  .array(CreatePostSchemaAsset)
  .max(
    MAX_POST_ASSETS,
    `Cannot attach more than ${MAX_POST_ASSETS} assets to a post`
  )

export const CreatePostCommentSchemaAssets = z
  .array(CreatePostCommentSchemaAsset)
  .max(
    MAX_POST_COMMENT_ASSETS,
    `Cannot attach more than ${MAX_POST_COMMENT_ASSETS} assets to a post comment`
  )

export const UpdatePostSchemaAsset = CreatePostSchemaAsset
  .extend({
    id: z.string().nullish()
  })
  .strip()

export const UpdatePostCommentSchemaAsset = CreatePostCommentSchemaAsset
  .extend({
    id: z.string().nullish()
  })
  .strip()

export const UpdatePostSchemaAssets = z
  .array(UpdatePostSchemaAsset)
  .max(
    MAX_POST_ASSETS,
    `Cannot attach more than ${MAX_POST_ASSETS} assets to a post`
  )

export const UpdatePostCommentSchemaAssets = z
  .array(UpdatePostCommentSchemaAsset)
  .max(
    MAX_POST_COMMENT_ASSETS,
    `Cannot attach more than ${MAX_POST_COMMENT_ASSETS} assets to a post comment`
  )

export const CreatePostSchema = z
  .object({
    type: ValidPostType,
    title: ValidPostTitle,
    content: ValidPostContent.nullish(),
    fragranceId: ValidPostFragranceId.nullish(),
    assets: CreatePostSchemaAssets.nullish()
  })
  .strip()
  .superRefine((data, ctx) => {
    if (data.type === PostType.Fragrance && data.fragranceId == null) {
      ctx.addIssue({
        code: 'custom',
        message: 'Fragrance posts must have a fragrance selected',
        path: ['fragranceId']
      })
    }

    if (data.type === PostType.Media && (data.assets == null || data.assets.length === 0)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Media posts must have at least one asset attached',
        path: ['assets']
      })
    }
  })

export const CreatePostCommentSchema = z
  .object({
    postId: ValidPostCommentPostId,
    parentId: ValidPostCommentParentId.nullish(),
    content: ValidPostCommentContent,
    assets: CreatePostCommentSchemaAssets.nullish()
  })
  .strip()

export const UpdatePostSchema = z
  .object({
    id: z.string(),
    type: ValidPostType,
    title: ValidPostTitle.nullish(),
    content: ValidPostContent.nullish(),
    fragranceId: ValidPostFragranceId.nullish(),
    assets: UpdatePostSchemaAssets.nullish()
  })
  .strip()
  .superRefine((data, ctx) => {
    if (data.type === PostType.Fragrance && data.fragranceId == null) {
      ctx.addIssue({
        code: 'custom',
        message: 'Fragrance posts must have a fragrance selected'
      })
    }

    if (data.type === PostType.Media) {
      const assets = data.assets ?? []
      if (assets.length === 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'Media posts must have at least one asset attached'
        })
      }
    }
  })

export const UpdatePostCommentSchema = z
  .object({
    id: z.string(),
    content: ValidPostCommentContent.nullish(),
    assets: UpdatePostCommentSchemaAssets.nullish()
  })
  .strip()

export const VoteOnPostInputSchema = z
  .object({
    postId: z.string(),
    vote: ValidVote
  })
  .strip()