/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Accord = {
  __typename?: 'Accord';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AccordConnection = {
  __typename?: 'AccordConnection';
  edges: Array<AccordEdge>;
  pageInfo: PageInfo;
};

export type AccordEdge = {
  __typename?: 'AccordEdge';
  cursor: Scalars['String']['output'];
  node: Accord;
};

export type AccordEdit = {
  __typename?: 'AccordEdit';
  accord: Accord;
  id: Scalars['ID']['output'];
  proposedColor?: Maybe<Scalars['String']['output']>;
  proposedDescription?: Maybe<Scalars['String']['output']>;
  proposedName?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  reviewer?: Maybe<User>;
  status: EditStatus;
  user: User;
};

export type AccordEditConnection = {
  __typename?: 'AccordEditConnection';
  edges: Array<AccordEditEdge>;
  pageInfo: PageInfo;
};

export type AccordEditEdge = {
  __typename?: 'AccordEditEdge';
  cursor: Scalars['String']['output'];
  node: AccordEdit;
};

export type AccordEditPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AccordEditSortInput>;
};

export const AccordEditSortBy = {
  Recent: 'RECENT'
} as const;

export type AccordEditSortBy = typeof AccordEditSortBy[keyof typeof AccordEditSortBy];
export type AccordEditSortInput = {
  by?: InputMaybe<AccordEditSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type AccordPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<AccordSortInput>;
};

export type AccordRequest = {
  __typename?: 'AccordRequest';
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  requestStatus: RequestStatus;
  thumbnail?: Maybe<Asset>;
  user: User;
  version: Scalars['Int']['output'];
  votes: VoteInfo;
};

export type AccordRequestConnection = {
  __typename?: 'AccordRequestConnection';
  edges: Array<AccordRequestEdge>;
  pageInfo: PageInfo;
};

export type AccordRequestEdge = {
  __typename?: 'AccordRequestEdge';
  cursor: Scalars['String']['output'];
  node: AccordRequest;
};

export const AccordSortBy = {
  Recent: 'RECENT'
} as const;

export type AccordSortBy = typeof AccordSortBy[keyof typeof AccordSortBy];
export type AccordSortInput = {
  by?: InputMaybe<AccordSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type AddFragranceToCollectionsInput = {
  collectionIds: Array<Scalars['ID']['input']>;
  fragranceId: Scalars['ID']['input'];
};

export type Asset = {
  __typename?: 'Asset';
  contentType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  s3Key: Scalars['String']['output'];
  sizeBytes: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export const AssetKey = {
  AccordImages: 'ACCORD_IMAGES',
  BrandImages: 'BRAND_IMAGES',
  FragranceImages: 'FRAGRANCE_IMAGES',
  NoteImages: 'NOTE_IMAGES',
  PostAssets: 'POST_ASSETS',
  PostCommentAssets: 'POST_COMMENT_ASSETS',
  UserImages: 'USER_IMAGES'
} as const;

export type AssetKey = typeof AssetKey[keyof typeof AssetKey];
export type AuthCodeDeliveryDetails = {
  __typename?: 'AuthCodeDeliveryDetails';
  attribute?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
};

export type AuthDeliveryResult = {
  __typename?: 'AuthDeliveryResult';
  delivery?: Maybe<AuthCodeDeliveryDetails>;
  isComplete: Scalars['Boolean']['output'];
};

export type AuthTokenPayload = {
  __typename?: 'AuthTokenPayload';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Int']['output'];
  idToken: Scalars['String']['output'];
};

export const AvatarStatus = {
  Failed: 'FAILED',
  Pending: 'PENDING',
  Processing: 'PROCESSING',
  Ready: 'READY'
} as const;

export type AvatarStatus = typeof AvatarStatus[keyof typeof AvatarStatus];
export type Brand = {
  __typename?: 'Brand';
  avatar?: Maybe<Asset>;
  description?: Maybe<Scalars['String']['output']>;
  fragrances: FragranceConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  votes: VoteInfo;
  website?: Maybe<Scalars['String']['output']>;
};


export type BrandFragrancesArgs = {
  input?: InputMaybe<FragrancePaginationInput>;
};

export type BrandConnection = {
  __typename?: 'BrandConnection';
  edges: Array<BrandEdge>;
  pageInfo: PageInfo;
};

export type BrandEdge = {
  __typename?: 'BrandEdge';
  cursor: Scalars['String']['output'];
  node: Brand;
};

export type BrandEdit = {
  __typename?: 'BrandEdit';
  brand: Brand;
  id: Scalars['ID']['output'];
  proposedAvatar?: Maybe<Asset>;
  proposedDescription?: Maybe<Scalars['String']['output']>;
  proposedName?: Maybe<Scalars['String']['output']>;
  proposedWebsite?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  reviewer?: Maybe<User>;
  status: EditStatus;
  user: User;
};

export type BrandEditConnection = {
  __typename?: 'BrandEditConnection';
  edges: Array<BrandEditEdge>;
  pageInfo: PageInfo;
};

export type BrandEditEdge = {
  __typename?: 'BrandEditEdge';
  cursor: Scalars['String']['output'];
  node: BrandEdit;
};

export type BrandEditPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<BrandEditSortInput>;
};

export const BrandEditSortBy = {
  Recent: 'RECENT'
} as const;

export type BrandEditSortBy = typeof BrandEditSortBy[keyof typeof BrandEditSortBy];
export type BrandEditSortInput = {
  by?: InputMaybe<BrandEditSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type BrandPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<BrandSortInput>;
};

export type BrandRequest = {
  __typename?: 'BrandRequest';
  avatar?: Maybe<Asset>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  requestStatus: RequestStatus;
  user: User;
  version: Scalars['Int']['output'];
  votes: VoteInfo;
  website?: Maybe<Scalars['String']['output']>;
};

export type BrandRequestConnection = {
  __typename?: 'BrandRequestConnection';
  edges: Array<BrandRequestEdge>;
  pageInfo: PageInfo;
};

export type BrandRequestEdge = {
  __typename?: 'BrandRequestEdge';
  cursor: Scalars['String']['output'];
  node: BrandRequest;
};

export const BrandSortBy = {
  Recent: 'RECENT'
} as const;

export type BrandSortBy = typeof BrandSortBy[keyof typeof BrandSortBy];
export type BrandSortInput = {
  by?: InputMaybe<BrandSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export const Concentration = {
  BodyMist: 'BODY_MIST',
  EauFraiche: 'EAU_FRAICHE',
  Edc: 'EDC',
  Edp: 'EDP',
  Edt: 'EDT',
  Oil: 'OIL',
  Other: 'OTHER',
  Parfum: 'PARFUM'
} as const;

export type Concentration = typeof Concentration[keyof typeof Concentration];
export type ConfirmForgotPasswordInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ConfirmSignUpInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type CreateAccordEditInput = {
  accordId: Scalars['ID']['input'];
  proposedColor?: InputMaybe<Scalars['String']['input']>;
  proposedDescription?: InputMaybe<Scalars['String']['input']>;
  proposedName?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAccordRequestInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBrandEditInput = {
  brandId: Scalars['ID']['input'];
  proposedAvatarId?: InputMaybe<Scalars['ID']['input']>;
  proposedDescription?: InputMaybe<Scalars['String']['input']>;
  proposedName?: InputMaybe<Scalars['String']['input']>;
  proposedWebsite?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBrandRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFragranceCollectionInput = {
  name: Scalars['String']['input'];
};

export type CreateFragranceCollectionItemInput = {
  collectionId: Scalars['ID']['input'];
  fragranceId: Scalars['ID']['input'];
};

export type CreateFragranceEditInput = {
  fragranceId: Scalars['ID']['input'];
  proposedBrandId?: InputMaybe<Scalars['ID']['input']>;
  proposedConcentration?: InputMaybe<Concentration>;
  proposedDescription?: InputMaybe<Scalars['String']['input']>;
  proposedImageId?: InputMaybe<Scalars['ID']['input']>;
  proposedName?: InputMaybe<Scalars['String']['input']>;
  proposedReleaseYear?: InputMaybe<Scalars['Int']['input']>;
  proposedStatus?: InputMaybe<FragranceStatus>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFragranceReportInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  fragranceId: Scalars['ID']['input'];
};

export type CreateFragranceRequestInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  concentration?: InputMaybe<Concentration>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  releaseYear?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FragranceStatus>;
};

export type CreateFragranceReviewInput = {
  body: Scalars['String']['input'];
  fragranceId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
};

export type CreateNoteEditInput = {
  noteId: Scalars['ID']['input'];
  proposedDescription?: InputMaybe<Scalars['String']['input']>;
  proposedName?: InputMaybe<Scalars['String']['input']>;
  proposedThumbnailId?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNoteRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostAssetInput = {
  assetId: Scalars['ID']['input'];
  displayOrder: Scalars['Int']['input'];
};

export type CreatePostCommentAssetInput = {
  assetId: Scalars['ID']['input'];
  displayOrder: Scalars['Int']['input'];
};

export type CreatePostCommentInput = {
  assets?: InputMaybe<Array<CreatePostCommentAssetInput>>;
  content: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  postId: Scalars['ID']['input'];
};

export type CreatePostInput = {
  assets?: InputMaybe<Array<CreatePostAssetInput>>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  fragranceId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  type: PostType;
};

export type DeleteAccordRequestInput = {
  id: Scalars['ID']['input'];
};

export type DeleteAssetInput = {
  id: Scalars['ID']['input'];
};

export type DeleteBrandRequestInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFragranceCollectionInput = {
  collectionId: Scalars['ID']['input'];
};

export type DeleteFragranceCollectionItemInput = {
  collectionId: Scalars['ID']['input'];
  itemId: Scalars['ID']['input'];
};

export type DeleteFragranceRequestInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFragranceReviewInput = {
  reviewId: Scalars['ID']['input'];
};

export type DeleteNoteRequestInput = {
  id: Scalars['ID']['input'];
};

export type DeletePostCommentInput = {
  id: Scalars['ID']['input'];
};

export type DeletePostInput = {
  id: Scalars['ID']['input'];
};

export type EditJob = {
  __typename?: 'EditJob';
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status: EditJobStatus;
};

export const EditJobStatus = {
  Failed: 'FAILED',
  Processing: 'PROCESSING',
  Queued: 'QUEUED',
  Success: 'SUCCESS'
} as const;

export type EditJobStatus = typeof EditJobStatus[keyof typeof EditJobStatus];
export const EditStatus = {
  Approved: 'APPROVED',
  Pending: 'PENDING',
  Rejected: 'REJECTED'
} as const;

export type EditStatus = typeof EditStatus[keyof typeof EditStatus];
export type FollowUserInput = {
  userId: Scalars['ID']['input'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type Fragrance = {
  __typename?: 'Fragrance';
  accords: FragranceAccordConnection;
  brand: Brand;
  concentration: Concentration;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<FragranceImage>;
  myAccords: Array<Accord>;
  myNotes: Array<Note>;
  myReview?: Maybe<FragranceReview>;
  myTraits: Array<FragranceTraitVote>;
  name: Scalars['String']['output'];
  notes: FragranceNoteConnection;
  releaseYear: Scalars['Int']['output'];
  reviewInfo: FragranceReviewInfo;
  reviews: FragranceReviewConnection;
  status: FragranceStatus;
  thumbnail?: Maybe<FragranceImage>;
  traits: Array<FragranceTrait>;
  votes: VoteInfo;
};


export type FragranceAccordsArgs = {
  input?: InputMaybe<FragranceAccordPaginationInput>;
};


export type FragranceMyNotesArgs = {
  layer: NoteLayer;
};


export type FragranceNotesArgs = {
  input?: InputMaybe<FragranceNotePaginationInput>;
};


export type FragranceReviewsArgs = {
  input?: InputMaybe<FragranceReviewPaginationInput>;
};

export type FragranceAccord = {
  __typename?: 'FragranceAccord';
  accord: Accord;
  id: Scalars['ID']['output'];
  votes: VoteInfo;
};

export type FragranceAccordConnection = {
  __typename?: 'FragranceAccordConnection';
  edges: Array<FragranceAccordEdge>;
  pageInfo: PageInfo;
};

export type FragranceAccordEdge = {
  __typename?: 'FragranceAccordEdge';
  cursor: Scalars['String']['output'];
  node: FragranceAccord;
};

export type FragranceAccordPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FragranceAccordSortInput>;
};

export const FragranceAccordSortBy = {
  Votes: 'VOTES'
} as const;

export type FragranceAccordSortBy = typeof FragranceAccordSortBy[keyof typeof FragranceAccordSortBy];
export type FragranceAccordSortInput = {
  by?: InputMaybe<FragranceAccordSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type FragranceCollection = {
  __typename?: 'FragranceCollection';
  hasFragrance: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  info: FragranceCollectionInfo;
  items: FragranceCollectionItemConnection;
  name: Scalars['String']['output'];
  previewItems: Array<FragranceCollectionItem>;
  user: User;
};


export type FragranceCollectionHasFragranceArgs = {
  fragranceId: Scalars['ID']['input'];
};


export type FragranceCollectionItemsArgs = {
  input?: InputMaybe<FragranceCollectionItemPaginationInput>;
};

export type FragranceCollectionConnection = {
  __typename?: 'FragranceCollectionConnection';
  edges: Array<FragranceCollectionEdge>;
  pageInfo: PageInfo;
};

export type FragranceCollectionEdge = {
  __typename?: 'FragranceCollectionEdge';
  cursor: Scalars['String']['output'];
  node: FragranceCollection;
};

export type FragranceCollectionInfo = {
  __typename?: 'FragranceCollectionInfo';
  itemCount: Scalars['Int']['output'];
};

export type FragranceCollectionItem = {
  __typename?: 'FragranceCollectionItem';
  collection: FragranceCollection;
  fragrance: Fragrance;
  id: Scalars['ID']['output'];
};

export type FragranceCollectionItemConnection = {
  __typename?: 'FragranceCollectionItemConnection';
  edges: Array<FragranceCollectionItemEdge>;
  pageInfo: PageInfo;
};

export type FragranceCollectionItemEdge = {
  __typename?: 'FragranceCollectionItemEdge';
  cursor: Scalars['String']['output'];
  node: FragranceCollectionItem;
};

export type FragranceCollectionItemPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FragranceCollectionItemSortInput>;
};

export const FragranceCollectionItemSortBy = {
  Position: 'POSITION'
} as const;

export type FragranceCollectionItemSortBy = typeof FragranceCollectionItemSortBy[keyof typeof FragranceCollectionItemSortBy];
export type FragranceCollectionItemSortInput = {
  by?: InputMaybe<FragranceCollectionItemSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type FragranceCollectionPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FragranceCollectionSortInput>;
};

export const FragranceCollectionSortBy = {
  Recent: 'RECENT'
} as const;

export type FragranceCollectionSortBy = typeof FragranceCollectionSortBy[keyof typeof FragranceCollectionSortBy];
export type FragranceCollectionSortInput = {
  by?: InputMaybe<FragranceCollectionSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type FragranceConnection = {
  __typename?: 'FragranceConnection';
  edges: Array<FragranceEdge>;
  pageInfo: PageInfo;
};

export type FragranceEdge = {
  __typename?: 'FragranceEdge';
  cursor: Scalars['String']['output'];
  node: Fragrance;
};

export type FragranceEdit = {
  __typename?: 'FragranceEdit';
  fragrance: Fragrance;
  id: Scalars['ID']['output'];
  proposedBrand?: Maybe<Brand>;
  proposedConcentration?: Maybe<Concentration>;
  proposedDescription?: Maybe<Scalars['String']['output']>;
  proposedImage?: Maybe<Asset>;
  proposedName?: Maybe<Scalars['String']['output']>;
  proposedReleaseYear?: Maybe<Scalars['Int']['output']>;
  proposedStatus?: Maybe<FragranceStatus>;
  reason?: Maybe<Scalars['String']['output']>;
  reviewer?: Maybe<User>;
  status: EditStatus;
  user: User;
};

export type FragranceEditConnection = {
  __typename?: 'FragranceEditConnection';
  edges: Array<FragranceEditEdge>;
  pageInfo: PageInfo;
};

export type FragranceEditEdge = {
  __typename?: 'FragranceEditEdge';
  cursor: Scalars['String']['output'];
  node: FragranceEdit;
};

export type FragranceEditPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FragranceEditSortInput>;
};

export const FragranceEditSortBy = {
  Recent: 'RECENT'
} as const;

export type FragranceEditSortBy = typeof FragranceEditSortBy[keyof typeof FragranceEditSortBy];
export type FragranceEditSortInput = {
  by?: InputMaybe<FragranceEditSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type FragranceImage = {
  __typename?: 'FragranceImage';
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  primaryColor?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width: Scalars['Int']['output'];
};

export type FragranceImageConnection = {
  __typename?: 'FragranceImageConnection';
  edges: Array<FragranceImageEdge>;
  pageInfo: PageInfo;
};

export type FragranceImageEdge = {
  __typename?: 'FragranceImageEdge';
  cursor: Scalars['String']['output'];
  node: FragranceImage;
};

export type FragranceNote = {
  __typename?: 'FragranceNote';
  id: Scalars['ID']['output'];
  layer: NoteLayer;
  note: Note;
  votes: VoteInfo;
};

export type FragranceNoteConnection = {
  __typename?: 'FragranceNoteConnection';
  edges: Array<FragranceNoteEdge>;
  pageInfo: PageInfo;
};

export type FragranceNoteEdge = {
  __typename?: 'FragranceNoteEdge';
  cursor: Scalars['String']['output'];
  node: FragranceNote;
};

export type FragranceNotePaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  layer?: InputMaybe<NoteLayer>;
  sort?: InputMaybe<FragranceNoteSortInput>;
};

export const FragranceNoteSortBy = {
  Votes: 'VOTES'
} as const;

export type FragranceNoteSortBy = typeof FragranceNoteSortBy[keyof typeof FragranceNoteSortBy];
export type FragranceNoteSortInput = {
  by?: InputMaybe<FragranceNoteSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type FragrancePaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FragranceSortInput>;
};

export type FragranceReport = {
  __typename?: 'FragranceReport';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type FragranceRequest = {
  __typename?: 'FragranceRequest';
  accords: Array<Accord>;
  brand?: Maybe<Brand>;
  concentration?: Maybe<Concentration>;
  description?: Maybe<Scalars['String']['output']>;
  fragranceStatus?: Maybe<FragranceStatus>;
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  notes: Array<FragranceRequestNote>;
  releaseYear?: Maybe<Scalars['Int']['output']>;
  requestStatus: RequestStatus;
  trait: FragranceRequestTrait;
  traits: Array<FragranceRequestTrait>;
  user: User;
  version: Scalars['Int']['output'];
  votes: VoteInfo;
};


export type FragranceRequestNotesArgs = {
  layer: NoteLayer;
};


export type FragranceRequestTraitArgs = {
  type: TraitTypeEnum;
};

export type FragranceRequestConnection = {
  __typename?: 'FragranceRequestConnection';
  edges: Array<FragranceRequestEdge>;
  pageInfo: PageInfo;
};

export type FragranceRequestEdge = {
  __typename?: 'FragranceRequestEdge';
  cursor: Scalars['String']['output'];
  node: FragranceRequest;
};

export type FragranceRequestNote = {
  __typename?: 'FragranceRequestNote';
  id: Scalars['ID']['output'];
  layer: NoteLayer;
  note: Note;
};

export type FragranceRequestTrait = {
  __typename?: 'FragranceRequestTrait';
  selectedOption: TraitOption;
  traitType: TraitTypeEnum;
};

export type FragranceReview = {
  __typename?: 'FragranceReview';
  author: User;
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  fragrance: Fragrance;
  id: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  votes: VoteInfo;
};

export type FragranceReviewConnection = {
  __typename?: 'FragranceReviewConnection';
  edges: Array<FragranceReviewEdge>;
  pageInfo: PageInfo;
};

export type FragranceReviewEdge = {
  __typename?: 'FragranceReviewEdge';
  cursor: Scalars['String']['output'];
  node: FragranceReview;
};

export type FragranceReviewInfo = {
  __typename?: 'FragranceReviewInfo';
  averageRating?: Maybe<Scalars['Float']['output']>;
  count: Scalars['Int']['output'];
  distribution: Array<FragranceReviewInfoDistribution>;
};

export type FragranceReviewInfoDistribution = {
  __typename?: 'FragranceReviewInfoDistribution';
  count: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
};

export type FragranceReviewPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FragranceReviewSortInput>;
};

export const FragranceReviewSortBy = {
  Recent: 'RECENT'
} as const;

export type FragranceReviewSortBy = typeof FragranceReviewSortBy[keyof typeof FragranceReviewSortBy];
export type FragranceReviewSortInput = {
  by?: InputMaybe<FragranceReviewSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export const FragranceSortBy = {
  Recent: 'RECENT'
} as const;

export type FragranceSortBy = typeof FragranceSortBy[keyof typeof FragranceSortBy];
export type FragranceSortInput = {
  by?: InputMaybe<FragranceSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export const FragranceStatus = {
  Current: 'CURRENT',
  Discontinued: 'DISCONTINUED',
  Reformulated: 'REFORMULATED'
} as const;

export type FragranceStatus = typeof FragranceStatus[keyof typeof FragranceStatus];
export type FragranceTrait = {
  __typename?: 'FragranceTrait';
  id: Scalars['ID']['output'];
  myVote?: Maybe<FragranceTraitVote>;
  name: Scalars['String']['output'];
  options: Array<TraitOption>;
  stats: TraitStats;
  type: TraitTypeEnum;
};

export type FragranceTraitInput = {
  type: TraitTypeEnum;
};

export type FragranceTraitVote = {
  __typename?: 'FragranceTraitVote';
  id: Scalars['ID']['output'];
  option?: Maybe<TraitOption>;
  type: TraitTypeEnum;
};

export type FragranceVote = {
  __typename?: 'FragranceVote';
  fragrance: Fragrance;
  id: Scalars['ID']['output'];
  user: User;
  vote: Scalars['Int']['output'];
};

export type FragranceVoteConnection = {
  __typename?: 'FragranceVoteConnection';
  edges: Array<FragranceVoteEdge>;
  pageInfo: PageInfo;
};

export type FragranceVoteEdge = {
  __typename?: 'FragranceVoteEdge';
  cursor: Scalars['String']['output'];
  node: FragranceVote;
};

export type FragranceVotePaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FragranceVoteSortInput>;
};

export const FragranceVoteSortBy = {
  Recent: 'RECENT'
} as const;

export type FragranceVoteSortBy = typeof FragranceVoteSortBy[keyof typeof FragranceVoteSortBy];
export type FragranceVoteSortInput = {
  by?: InputMaybe<FragranceVoteSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type LogInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MoveFragranceCollectionItemsInput = {
  collectionId: Scalars['ID']['input'];
  insertBefore?: InputMaybe<Scalars['ID']['input']>;
  rangeLength?: InputMaybe<Scalars['Int']['input']>;
  rangeStart: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFragranceToCollections: Array<FragranceCollectionItem>;
  changePassword: Scalars['Boolean']['output'];
  confirmForgotPassword: Scalars['Boolean']['output'];
  confirmSignUp: User;
  createAccordEdit: AccordEdit;
  createAccordRequest: AccordRequest;
  createBrandEdit: BrandEdit;
  createBrandRequest: BrandRequest;
  createFragranceCollection: FragranceCollection;
  createFragranceCollectionItem: FragranceCollectionItem;
  createFragranceEdit: FragranceEdit;
  createFragranceReport: FragranceReport;
  createFragranceRequest: FragranceRequest;
  createFragranceReview: FragranceReview;
  createNoteEdit: NoteEdit;
  createNoteRequest: NoteRequest;
  createPost: Post;
  createPostComment: PostComment;
  deleteAccordRequest: AccordRequest;
  deleteAsset: Scalars['Boolean']['output'];
  deleteBrandRequest: BrandRequest;
  deleteFragranceCollection: FragranceCollection;
  deleteFragranceCollectionItem: FragranceCollectionItem;
  deleteFragranceRequest: FragranceRequest;
  deleteFragranceReview: FragranceReview;
  deleteNoteRequest: NoteRequest;
  deletePost: Post;
  deletePostComment: PostComment;
  follow: UserFollow;
  forgotPassword: AuthDeliveryResult;
  logIn: AuthTokenPayload;
  logOut: Scalars['Boolean']['output'];
  moveFragranceCollectionItems: Array<FragranceCollectionItem>;
  refresh?: Maybe<AuthTokenPayload>;
  removeFragranceFromCollections: Array<FragranceCollectionItem>;
  resendSignUpCode: AuthDeliveryResult;
  reviewAccordEdit: AccordEdit;
  reviewBrandEdit: BrandEdit;
  reviewFragranceEdit: FragranceEdit;
  reviewNoteEdit: NoteEdit;
  setFragranceRequestAccords: FragranceRequest;
  setFragranceRequestBrand: FragranceRequest;
  setFragranceRequestNotes: FragranceRequest;
  setFragranceRequestTrait: FragranceRequest;
  setMyAvatar: User;
  signUp: AuthDeliveryResult;
  stageAsset: PresignedUpload;
  submitAccordRequest: AccordRequest;
  submitBrandRequest: BrandRequest;
  submitFragranceRequest: FragranceRequest;
  submitNoteRequest: NoteRequest;
  unfollow: UserFollow;
  updateAccordRequest: AccordRequest;
  updateBrandRequest: BrandRequest;
  updateFragranceCollection: FragranceCollection;
  updateFragranceRequest: FragranceRequest;
  updateFragranceReview: FragranceReview;
  updateMe: User;
  updateNoteRequest: NoteRequest;
  updatePost: Post;
  updatePostComment: PostComment;
  voteOnAccordRequest: AccordRequest;
  voteOnBrand: Brand;
  voteOnBrandRequest: BrandRequest;
  voteOnFragrance: Fragrance;
  voteOnFragranceAccord: Accord;
  voteOnFragranceNote: Note;
  voteOnFragranceRequest: FragranceRequest;
  voteOnFragranceReview: FragranceReview;
  voteOnFragranceTrait: FragranceTraitVote;
  voteOnNoteRequest: NoteRequest;
  voteOnPost: Post;
};


export type MutationAddFragranceToCollectionsArgs = {
  input: AddFragranceToCollectionsInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationConfirmForgotPasswordArgs = {
  input: ConfirmForgotPasswordInput;
};


export type MutationConfirmSignUpArgs = {
  input: ConfirmSignUpInput;
};


export type MutationCreateAccordEditArgs = {
  input: CreateAccordEditInput;
};


export type MutationCreateAccordRequestArgs = {
  input?: InputMaybe<CreateAccordRequestInput>;
};


export type MutationCreateBrandEditArgs = {
  input: CreateBrandEditInput;
};


export type MutationCreateBrandRequestArgs = {
  input?: InputMaybe<CreateBrandRequestInput>;
};


export type MutationCreateFragranceCollectionArgs = {
  input: CreateFragranceCollectionInput;
};


export type MutationCreateFragranceCollectionItemArgs = {
  input: CreateFragranceCollectionItemInput;
};


export type MutationCreateFragranceEditArgs = {
  input: CreateFragranceEditInput;
};


export type MutationCreateFragranceReportArgs = {
  input: CreateFragranceReportInput;
};


export type MutationCreateFragranceRequestArgs = {
  input?: InputMaybe<CreateFragranceRequestInput>;
};


export type MutationCreateFragranceReviewArgs = {
  input: CreateFragranceReviewInput;
};


export type MutationCreateNoteEditArgs = {
  input: CreateNoteEditInput;
};


export type MutationCreateNoteRequestArgs = {
  input?: InputMaybe<CreateNoteRequestInput>;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreatePostCommentArgs = {
  input: CreatePostCommentInput;
};


export type MutationDeleteAccordRequestArgs = {
  input: DeleteAccordRequestInput;
};


export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type MutationDeleteBrandRequestArgs = {
  input: DeleteBrandRequestInput;
};


export type MutationDeleteFragranceCollectionArgs = {
  input: DeleteFragranceCollectionInput;
};


export type MutationDeleteFragranceCollectionItemArgs = {
  input: DeleteFragranceCollectionItemInput;
};


export type MutationDeleteFragranceRequestArgs = {
  input: DeleteFragranceRequestInput;
};


export type MutationDeleteFragranceReviewArgs = {
  input: DeleteFragranceReviewInput;
};


export type MutationDeleteNoteRequestArgs = {
  input: DeleteNoteRequestInput;
};


export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


export type MutationDeletePostCommentArgs = {
  input: DeletePostCommentInput;
};


export type MutationFollowArgs = {
  input: FollowUserInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLogInArgs = {
  input: LogInInput;
};


export type MutationMoveFragranceCollectionItemsArgs = {
  input: MoveFragranceCollectionItemsInput;
};


export type MutationRemoveFragranceFromCollectionsArgs = {
  input: RemoveFragranceFromCollectionsInput;
};


export type MutationResendSignUpCodeArgs = {
  input: ResendSignUpCodeInput;
};


export type MutationReviewAccordEditArgs = {
  input: ReviewAccordEditInput;
};


export type MutationReviewBrandEditArgs = {
  input: ReviewBrandEditInput;
};


export type MutationReviewFragranceEditArgs = {
  input: ReviewFragranceEditInput;
};


export type MutationReviewNoteEditArgs = {
  input: ReviewNoteEditInput;
};


export type MutationSetFragranceRequestAccordsArgs = {
  input: SetFragranceRequestAccordsInput;
};


export type MutationSetFragranceRequestBrandArgs = {
  input: SetFragranceRequestBrandInput;
};


export type MutationSetFragranceRequestNotesArgs = {
  input: SetFragranceRequestNotesInput;
};


export type MutationSetFragranceRequestTraitArgs = {
  input: SetFragranceRequestTraitInput;
};


export type MutationSetMyAvatarArgs = {
  input: SetMyAvatarInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationStageAssetArgs = {
  input: StageAssetInput;
};


export type MutationSubmitAccordRequestArgs = {
  input: SubmitAccordRequestInput;
};


export type MutationSubmitBrandRequestArgs = {
  input: SubmitBrandRequestInput;
};


export type MutationSubmitFragranceRequestArgs = {
  input: SubmitFragranceRequestInput;
};


export type MutationSubmitNoteRequestArgs = {
  input: SubmitNoteRequestInput;
};


export type MutationUnfollowArgs = {
  input: UnfollowUserInput;
};


export type MutationUpdateAccordRequestArgs = {
  input: UpdateAccordRequestInput;
};


export type MutationUpdateBrandRequestArgs = {
  input: UpdateBrandRequestInput;
};


export type MutationUpdateFragranceCollectionArgs = {
  input: UpdateFragranceCollectionInput;
};


export type MutationUpdateFragranceRequestArgs = {
  input: UpdateFragranceRequestInput;
};


export type MutationUpdateFragranceReviewArgs = {
  input: UpdateFragranceReviewInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdateNoteRequestArgs = {
  input: UpdateNoteRequestInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdatePostCommentArgs = {
  input: UpdatePostCommentInput;
};


export type MutationVoteOnAccordRequestArgs = {
  input: VoteOnAccordRequestInput;
};


export type MutationVoteOnBrandArgs = {
  input: VoteOnBrandInput;
};


export type MutationVoteOnBrandRequestArgs = {
  input: VoteOnBrandRequestInput;
};


export type MutationVoteOnFragranceArgs = {
  input: VoteOnFragranceInput;
};


export type MutationVoteOnFragranceAccordArgs = {
  input: VoteOnFragranceAccordInput;
};


export type MutationVoteOnFragranceNoteArgs = {
  input: VoteOnFragranceNoteInput;
};


export type MutationVoteOnFragranceRequestArgs = {
  input: VoteOnFragranceRequestInput;
};


export type MutationVoteOnFragranceReviewArgs = {
  input: VoteOnFragranceReviewInput;
};


export type MutationVoteOnFragranceTraitArgs = {
  input: VoteOnFragranceTraitInput;
};


export type MutationVoteOnNoteRequestArgs = {
  input: VoteOnNoteRequestInput;
};


export type MutationVoteOnPostArgs = {
  input: VoteOnPostInput;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  thumbnail?: Maybe<Asset>;
};

export type NoteConnection = {
  __typename?: 'NoteConnection';
  edges: Array<NoteEdge>;
  pageInfo: PageInfo;
};

export type NoteEdge = {
  __typename?: 'NoteEdge';
  cursor: Scalars['String']['output'];
  node: Note;
};

export type NoteEdit = {
  __typename?: 'NoteEdit';
  id: Scalars['ID']['output'];
  note: Note;
  proposedDescription?: Maybe<Scalars['String']['output']>;
  proposedName?: Maybe<Scalars['String']['output']>;
  proposedThumbnail?: Maybe<Asset>;
  reason?: Maybe<Scalars['String']['output']>;
  reviewer?: Maybe<User>;
  status: EditStatus;
  user: User;
};

export type NoteEditConnection = {
  __typename?: 'NoteEditConnection';
  edges: Array<NoteEditEdge>;
  pageInfo: PageInfo;
};

export type NoteEditEdge = {
  __typename?: 'NoteEditEdge';
  cursor: Scalars['String']['output'];
  node: NoteEdit;
};

export type NoteEditPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<NoteEditSortInput>;
};

export const NoteEditSortBy = {
  Recent: 'RECENT'
} as const;

export type NoteEditSortBy = typeof NoteEditSortBy[keyof typeof NoteEditSortBy];
export type NoteEditSortInput = {
  by?: InputMaybe<NoteEditSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export const NoteLayer = {
  Base: 'BASE',
  Middle: 'MIDDLE',
  Top: 'TOP'
} as const;

export type NoteLayer = typeof NoteLayer[keyof typeof NoteLayer];
export type NotePaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<NoteSortInput>;
};

export type NoteRequest = {
  __typename?: 'NoteRequest';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  requestStatus: RequestStatus;
  thumbnail?: Maybe<Asset>;
  user: User;
  version: Scalars['Int']['output'];
  votes: VoteInfo;
};

export type NoteRequestConnection = {
  __typename?: 'NoteRequestConnection';
  edges: Array<NoteRequestEdge>;
  pageInfo: PageInfo;
};

export type NoteRequestEdge = {
  __typename?: 'NoteRequestEdge';
  cursor: Scalars['String']['output'];
  node: NoteRequest;
};

export const NoteSortBy = {
  Recent: 'RECENT'
} as const;

export type NoteSortBy = typeof NoteSortBy[keyof typeof NoteSortBy];
export type NoteSortInput = {
  by?: InputMaybe<NoteSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  assets: Array<PostAsset>;
  commentCount: Scalars['Int']['output'];
  comments: PostCommentConnection;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt: Scalars['String']['output'];
  fragrance?: Maybe<Fragrance>;
  id: Scalars['ID']['output'];
  searchComments: SearchPostCommentConnection;
  title: Scalars['String']['output'];
  type: PostType;
  user: User;
  votes: VoteInfo;
};


export type PostCommentsArgs = {
  input?: InputMaybe<PostCommentPaginationInput>;
};


export type PostSearchCommentsArgs = {
  input?: InputMaybe<SearchInput>;
};

export type PostAsset = {
  __typename?: 'PostAsset';
  asset: Asset;
  displayOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  post: Post;
};

export type PostComment = {
  __typename?: 'PostComment';
  assets: Array<PostCommentAsset>;
  comments: PostCommentConnection;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  depth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  parent?: Maybe<PostComment>;
  post: Post;
  user: User;
};


export type PostCommentCommentsArgs = {
  input?: InputMaybe<PostCommentPaginationInput>;
};

export type PostCommentAsset = {
  __typename?: 'PostCommentAsset';
  PostComment: PostComment;
  asset: Asset;
  displayOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type PostCommentConnection = {
  __typename?: 'PostCommentConnection';
  edges: Array<PostCommentEdge>;
  pageInfo: PageInfo;
};

export type PostCommentEdge = {
  __typename?: 'PostCommentEdge';
  cursor: Scalars['String']['output'];
  node: PostComment;
};

export type PostCommentPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PostCommentSortInput>;
};

export const PostCommentSortBy = {
  Recent: 'RECENT'
} as const;

export type PostCommentSortBy = typeof PostCommentSortBy[keyof typeof PostCommentSortBy];
export type PostCommentSortInput = {
  by?: InputMaybe<PostCommentSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PostSortInput>;
};

export const PostSortBy = {
  Recent: 'RECENT'
} as const;

export type PostSortBy = typeof PostSortBy[keyof typeof PostSortBy];
export type PostSortInput = {
  by?: InputMaybe<PostSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export const PostType = {
  Fragrance: 'FRAGRANCE',
  Media: 'MEDIA',
  Text: 'TEXT'
} as const;

export type PostType = typeof PostType[keyof typeof PostType];
export type PostVote = {
  __typename?: 'PostVote';
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
  vote: Scalars['Int']['output'];
};

export type PostVoteConnection = {
  __typename?: 'PostVoteConnection';
  edges: Array<PostVoteEdge>;
  pageInfo: PageInfo;
};

export type PostVoteEdge = {
  __typename?: 'PostVoteEdge';
  cursor: Scalars['String']['output'];
  node: PostVote;
};

export type PostVotePaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PostVoteSortInput>;
};

export const PostVoteSortBy = {
  Recent: 'RECENT'
} as const;

export type PostVoteSortBy = typeof PostVoteSortBy[keyof typeof PostVoteSortBy];
export type PostVoteSortInput = {
  by?: InputMaybe<PostVoteSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type PresignedUpload = {
  __typename?: 'PresignedUpload';
  assetId: Scalars['ID']['output'];
  fields: Scalars['JSON']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  accord: Accord;
  accordEdit: AccordEdit;
  accordEdits: AccordEditConnection;
  accordRequest: AccordRequest;
  accordRequests: AccordRequestConnection;
  accords: AccordConnection;
  brand?: Maybe<Brand>;
  brandEdit: BrandEdit;
  brandEdits: BrandEditConnection;
  brandRequest: BrandRequest;
  brandRequests: BrandRequestConnection;
  brands: BrandConnection;
  fragrance: Fragrance;
  fragranceCollection: FragranceCollection;
  fragranceCollections: FragranceCollectionConnection;
  fragranceEdit: FragranceEdit;
  fragranceEdits: FragranceEditConnection;
  fragranceRequest: FragranceRequest;
  fragranceRequests: FragranceRequestConnection;
  fragrances: FragranceConnection;
  healthy: Scalars['String']['output'];
  me: User;
  note: Note;
  noteEdit: NoteEdit;
  noteEdits: NoteEditConnection;
  noteRequest: NoteRequest;
  noteRequests: NoteRequestConnection;
  notes: NoteConnection;
  post: Post;
  postComment: PostComment;
  postComments: PostCommentConnection;
  posts: PostConnection;
  searchAccords: SearchAccordConnection;
  searchBrands: SearchBrandConnection;
  searchFragrances: SearchFragranceConnection;
  searchNotes: SearchNoteConnection;
  searchPosts: SearchPostConnection;
  searchUsers: SearchUserConnection;
  user: User;
};


export type QueryAccordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccordEditArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccordEditsArgs = {
  input?: InputMaybe<AccordEditPaginationInput>;
};


export type QueryAccordRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccordRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type QueryAccordsArgs = {
  input?: InputMaybe<AccordPaginationInput>;
};


export type QueryBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandEditArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandEditsArgs = {
  input?: InputMaybe<BrandEditPaginationInput>;
};


export type QueryBrandRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type QueryBrandsArgs = {
  input?: InputMaybe<BrandPaginationInput>;
};


export type QueryFragranceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFragranceCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFragranceCollectionsArgs = {
  input?: InputMaybe<FragranceCollectionPaginationInput>;
};


export type QueryFragranceEditArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFragranceEditsArgs = {
  input?: InputMaybe<FragranceEditPaginationInput>;
};


export type QueryFragranceRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFragranceRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type QueryFragrancesArgs = {
  input?: InputMaybe<FragrancePaginationInput>;
};


export type QueryNoteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoteEditArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoteEditsArgs = {
  input?: InputMaybe<NoteEditPaginationInput>;
};


export type QueryNoteRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoteRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type QueryNotesArgs = {
  input?: InputMaybe<NotePaginationInput>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostCommentsArgs = {
  input?: InputMaybe<PostCommentPaginationInput>;
};


export type QueryPostsArgs = {
  input?: InputMaybe<PostPaginationInput>;
};


export type QuerySearchAccordsArgs = {
  input?: InputMaybe<SearchInput>;
};


export type QuerySearchBrandsArgs = {
  input?: InputMaybe<SearchInput>;
};


export type QuerySearchFragrancesArgs = {
  input?: InputMaybe<SearchInput>;
};


export type QuerySearchNotesArgs = {
  input?: InputMaybe<SearchInput>;
};


export type QuerySearchPostsArgs = {
  input?: InputMaybe<SearchInput>;
};


export type QuerySearchUsersArgs = {
  input?: InputMaybe<SearchInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export const RelationshipStatus = {
  Follower: 'FOLLOWER',
  Following: 'FOLLOWING',
  Mutual: 'MUTUAL',
  None: 'NONE'
} as const;

export type RelationshipStatus = typeof RelationshipStatus[keyof typeof RelationshipStatus];
export type RemoveFragranceFromCollectionsInput = {
  collectionIds: Array<Scalars['ID']['input']>;
  fragranceId: Scalars['ID']['input'];
};

export type RequestPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<RequestSortInput>;
  status?: InputMaybe<RequestStatus>;
};

export const RequestSortBy = {
  Recent: 'RECENT'
} as const;

export type RequestSortBy = typeof RequestSortBy[keyof typeof RequestSortBy];
export type RequestSortInput = {
  by?: InputMaybe<RequestSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export const RequestStatus = {
  Accepted: 'ACCEPTED',
  Draft: 'DRAFT',
  Pending: 'PENDING',
  Rejected: 'REJECTED'
} as const;

export type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];
export type ResendSignUpCodeInput = {
  email: Scalars['String']['input'];
};

export type ReviewAccordEditInput = {
  editId: Scalars['ID']['input'];
  feedback?: InputMaybe<Scalars['String']['input']>;
  status: EditStatus;
};

export type ReviewBrandEditInput = {
  editId: Scalars['ID']['input'];
  feedback?: InputMaybe<Scalars['String']['input']>;
  status: EditStatus;
};

export type ReviewFragranceEditInput = {
  editId: Scalars['ID']['input'];
  feedback?: InputMaybe<Scalars['String']['input']>;
  status: EditStatus;
};

export type ReviewNoteEditInput = {
  editId: Scalars['ID']['input'];
  feedback?: InputMaybe<Scalars['String']['input']>;
  status: EditStatus;
};

export type SearchAccordConnection = {
  __typename?: 'SearchAccordConnection';
  edges: Array<SearchAccordEdge>;
  pageInfo: SearchPageInfo;
};

export type SearchAccordEdge = {
  __typename?: 'SearchAccordEdge';
  node: Accord;
  offset: Scalars['Int']['output'];
};

export type SearchBrandConnection = {
  __typename?: 'SearchBrandConnection';
  edges: Array<SearchBrandEdge>;
  pageInfo: SearchPageInfo;
};

export type SearchBrandEdge = {
  __typename?: 'SearchBrandEdge';
  node: Brand;
  offset: Scalars['Int']['output'];
};

export type SearchFragranceConnection = {
  __typename?: 'SearchFragranceConnection';
  edges: Array<SearchFragranceEdge>;
  pageInfo: SearchPageInfo;
};

export type SearchFragranceEdge = {
  __typename?: 'SearchFragranceEdge';
  node: Fragrance;
  offset: Scalars['Int']['output'];
};

export type SearchInput = {
  pagination?: InputMaybe<SearchPaginationInput>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type SearchNoteConnection = {
  __typename?: 'SearchNoteConnection';
  edges: Array<SearchNoteEdge>;
  pageInfo: SearchPageInfo;
};

export type SearchNoteEdge = {
  __typename?: 'SearchNoteEdge';
  node: Note;
  offset: Scalars['Int']['output'];
};

export type SearchPageInfo = {
  __typename?: 'SearchPageInfo';
  endOffset: Scalars['Int']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  pageSize: Scalars['Int']['output'];
  startOffset: Scalars['Int']['output'];
};

export type SearchPaginationInput = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SearchSortInput>;
};

export type SearchPostCommentConnection = {
  __typename?: 'SearchPostCommentConnection';
  edges: Array<SearchPostCommentEdge>;
  pageInfo: SearchPageInfo;
};

export type SearchPostCommentEdge = {
  __typename?: 'SearchPostCommentEdge';
  node: PostComment;
  offset: Scalars['Int']['output'];
};

export type SearchPostConnection = {
  __typename?: 'SearchPostConnection';
  edges: Array<SearchPostEdge>;
  pageInfo: SearchPageInfo;
};

export type SearchPostEdge = {
  __typename?: 'SearchPostEdge';
  node: Post;
  offset: Scalars['Int']['output'];
};

export const SearchSortBy = {
  Relevance: 'RELEVANCE'
} as const;

export type SearchSortBy = typeof SearchSortBy[keyof typeof SearchSortBy];
export type SearchSortInput = {
  by?: InputMaybe<SearchSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type SearchUserConnection = {
  __typename?: 'SearchUserConnection';
  edges: Array<SearchUserEdge>;
  pageInfo: SearchPageInfo;
};

export type SearchUserEdge = {
  __typename?: 'SearchUserEdge';
  node: User;
  offset: Scalars['Int']['output'];
};

export type SetFragranceRequestAccordsInput = {
  accordIds: Array<Scalars['ID']['input']>;
  requestId: Scalars['ID']['input'];
};

export type SetFragranceRequestBrandInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  requestId: Scalars['ID']['input'];
};

export type SetFragranceRequestNotesInput = {
  layer: NoteLayer;
  noteIds: Array<Scalars['ID']['input']>;
  requestId: Scalars['ID']['input'];
};

export type SetFragranceRequestTraitInput = {
  requestId: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
  traitType: TraitTypeEnum;
};

export type SetMyAvatarInput = {
  assetId: Scalars['ID']['input'];
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export const SortDirection = {
  Ascending: 'ASCENDING',
  Descending: 'DESCENDING'
} as const;

export type SortDirection = typeof SortDirection[keyof typeof SortDirection];
export type StageAssetInput = {
  contentSize: Scalars['Int']['input'];
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  key: AssetKey;
};

export type SubmitAccordRequestInput = {
  id: Scalars['ID']['input'];
};

export type SubmitBrandRequestInput = {
  id: Scalars['ID']['input'];
};

export type SubmitFragranceRequestInput = {
  id: Scalars['ID']['input'];
};

export type SubmitNoteRequestInput = {
  id: Scalars['ID']['input'];
};

export type TraitOption = {
  __typename?: 'TraitOption';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  score: Scalars['Int']['output'];
};

export type TraitStats = {
  __typename?: 'TraitStats';
  averageScore: Scalars['Float']['output'];
  distribution: Array<TraitVoteDistribution>;
  totalVotes: Scalars['Int']['output'];
};

export const TraitTypeEnum = {
  Appeal: 'APPEAL',
  Balance: 'BALANCE',
  Complexity: 'COMPLEXITY',
  Gender: 'GENDER',
  Longevity: 'LONGEVITY',
  Projection: 'PROJECTION',
  Season: 'SEASON',
  Time: 'TIME'
} as const;

export type TraitTypeEnum = typeof TraitTypeEnum[keyof typeof TraitTypeEnum];
export type TraitVoteDistribution = {
  __typename?: 'TraitVoteDistribution';
  option: TraitOption;
  votes: Scalars['Int']['output'];
};

export type UnfollowUserInput = {
  userId: Scalars['ID']['input'];
};

export type UpdateAccordRequestInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBrandRequestInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFragranceCollectionInput = {
  collectionId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateFragranceRequestInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  concentration?: InputMaybe<Concentration>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  releaseYear?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FragranceStatus>;
};

export type UpdateFragranceReviewInput = {
  body: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  reviewId: Scalars['ID']['input'];
};

export type UpdateMeInput = {
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNoteRequestInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostAssetInput = {
  assetId: Scalars['ID']['input'];
  displayOrder: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePostCommentAssetInput = {
  assetId: Scalars['ID']['input'];
  displayOrder: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePostCommentInput = {
  assets?: InputMaybe<Array<UpdatePostCommentAssetInput>>;
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UpdatePostInput = {
  assets?: InputMaybe<Array<UpdatePostAssetInput>>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  accordRequests: AccordRequestConnection;
  avatar?: Maybe<Asset>;
  brandRequests: BrandRequestConnection;
  collection: FragranceCollection;
  collections: FragranceCollectionConnection;
  email?: Maybe<Scalars['String']['output']>;
  followerCount: Scalars['Int']['output'];
  followers: UserFollowConnection;
  following: UserFollowConnection;
  followingCount: Scalars['Int']['output'];
  fragranceRequests: FragranceRequestConnection;
  id: Scalars['ID']['output'];
  likes: FragranceVoteConnection;
  noteRequests: NoteRequestConnection;
  relationship: RelationshipStatus;
  review: FragranceReview;
  reviews: FragranceReviewConnection;
  username: Scalars['String']['output'];
};


export type UserAccordRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type UserBrandRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type UserCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type UserCollectionsArgs = {
  input?: InputMaybe<FragranceCollectionPaginationInput>;
};


export type UserFollowersArgs = {
  input?: InputMaybe<UserFollowPaginationInput>;
};


export type UserFollowingArgs = {
  input?: InputMaybe<UserFollowPaginationInput>;
};


export type UserFragranceRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type UserLikesArgs = {
  input?: InputMaybe<FragranceVotePaginationInput>;
};


export type UserNoteRequestsArgs = {
  input?: InputMaybe<RequestPaginationInput>;
};


export type UserReviewArgs = {
  id: Scalars['ID']['input'];
};


export type UserReviewsArgs = {
  input?: InputMaybe<FragranceReviewPaginationInput>;
};

export type UserFollow = {
  __typename?: 'UserFollow';
  id: Scalars['ID']['output'];
  user: User;
};

export type UserFollowConnection = {
  __typename?: 'UserFollowConnection';
  edges: Array<UserFollowEdge>;
  pageInfo: PageInfo;
};

export type UserFollowEdge = {
  __typename?: 'UserFollowEdge';
  cursor: Scalars['String']['output'];
  node: UserFollow;
};

export type UserFollowPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<UserFollowSortInput>;
};

export const UserFollowSortBy = {
  Recent: 'RECENT'
} as const;

export type UserFollowSortBy = typeof UserFollowSortBy[keyof typeof UserFollowSortBy];
export type UserFollowSortInput = {
  by?: InputMaybe<UserFollowSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type VoteInfo = {
  __typename?: 'VoteInfo';
  downvotes: Scalars['Int']['output'];
  myVote?: Maybe<Scalars['Int']['output']>;
  score: Scalars['Int']['output'];
  upvotes: Scalars['Int']['output'];
};

export type VoteOnAccordRequestInput = {
  requestId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnBrandInput = {
  brandId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnBrandRequestInput = {
  requestId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnFragranceAccordInput = {
  accordId: Scalars['ID']['input'];
  fragranceId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnFragranceInput = {
  fragranceId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnFragranceNoteInput = {
  fragranceId: Scalars['ID']['input'];
  layer: NoteLayer;
  noteId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnFragranceRequestInput = {
  requestId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnFragranceReviewInput = {
  reviewId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnFragranceTraitInput = {
  fragranceId: Scalars['ID']['input'];
  traitOptionId?: InputMaybe<Scalars['ID']['input']>;
  traitTypeId: Scalars['ID']['input'];
};

export type VoteOnNoteRequestInput = {
  requestId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type VoteOnPostInput = {
  postId: Scalars['ID']['input'];
  vote: Scalars['Int']['input'];
};

export type AllAccordFragment = { __typename?: 'Accord', id: string, name: string, color: string };

export type AccordQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccordQueryQuery = { __typename?: 'Query', accord: { __typename?: 'Accord', id: string, name: string, color: string } };

export type AccordsQueryQueryVariables = Exact<{
  input?: InputMaybe<AccordPaginationInput>;
}>;


export type AccordsQueryQuery = { __typename?: 'Query', accords: { __typename?: 'AccordConnection', edges: Array<{ __typename?: 'AccordEdge', node: { __typename?: 'Accord', id: string, name: string, color: string } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type SearchAccordsQueryQueryVariables = Exact<{
  input?: InputMaybe<SearchInput>;
}>;


export type SearchAccordsQueryQuery = { __typename?: 'Query', searchAccords: { __typename?: 'SearchAccordConnection', edges: Array<{ __typename?: 'SearchAccordEdge', offset: number, node: { __typename?: 'Accord', id: string, name: string, color: string } }>, pageInfo: { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number } } };

export type AllAssetFragment = { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null };

export type AllPresignedUploadFragment = { __typename?: 'PresignedUpload', assetId: string, url: string, fields: any };

export type StageAssetMutationVariables = Exact<{
  input: StageAssetInput;
}>;


export type StageAssetMutation = { __typename?: 'Mutation', stageAsset: { __typename?: 'PresignedUpload', assetId: string, url: string, fields: any } };

export type DeleteAssetMutationVariables = Exact<{
  input: DeleteAssetInput;
}>;


export type DeleteAssetMutation = { __typename?: 'Mutation', deleteAsset: boolean };

export type AllAuthTokenPayloadFragment = { __typename?: 'AuthTokenPayload', idToken: string, accessToken: string, expiresIn: number };

export type AllAuthCodeDeliveryDetailsFragment = { __typename?: 'AuthCodeDeliveryDetails', method?: string | null, attribute?: string | null, destination?: string | null };

export type AllAuthDeliveryResultFragment = { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', method?: string | null, attribute?: string | null, destination?: string | null } | null };

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh?: { __typename?: 'AuthTokenPayload', idToken: string, accessToken: string, expiresIn: number } | null };

export type LogInMutationVariables = Exact<{
  input: LogInInput;
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn: { __typename?: 'AuthTokenPayload', idToken: string, accessToken: string, expiresIn: number } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logOut: boolean };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', method?: string | null, attribute?: string | null, destination?: string | null } | null } };

export type ConfirmSignUpMutationVariables = Exact<{
  input: ConfirmSignUpInput;
}>;


export type ConfirmSignUpMutation = { __typename?: 'Mutation', confirmSignUp: { __typename?: 'User', id: string, username: string, email?: string | null, followerCount: number, followingCount: number, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type ResendSignUpCodeMutationVariables = Exact<{
  input: ResendSignUpCodeInput;
}>;


export type ResendSignUpCodeMutation = { __typename?: 'Mutation', resendSignUpCode: { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', method?: string | null, attribute?: string | null, destination?: string | null } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'AuthDeliveryResult', isComplete: boolean, delivery?: { __typename?: 'AuthCodeDeliveryDetails', method?: string | null, attribute?: string | null, destination?: string | null } | null } };

export type ConfirmForgotPasswordMutationVariables = Exact<{
  input: ConfirmForgotPasswordInput;
}>;


export type ConfirmForgotPasswordMutation = { __typename?: 'Mutation', confirmForgotPassword: boolean };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type AllBrandFragment = { __typename?: 'Brand', id: string, name: string, website?: string | null, description?: string | null, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type BrandPreviewFragment = { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type VoteOnBrandMutationMutationVariables = Exact<{
  input: VoteOnBrandInput;
}>;


export type VoteOnBrandMutationMutation = { __typename?: 'Mutation', voteOnBrand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type BrandQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BrandQuery = { __typename?: 'Query', brand?: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null };

export type BrandsQueryVariables = Exact<{
  input?: InputMaybe<BrandPaginationInput>;
}>;


export type BrandsQuery = { __typename?: 'Query', brands: { __typename?: 'BrandConnection', edges: Array<{ __typename?: 'BrandEdge', node: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type SearchBrandsQueryVariables = Exact<{
  input?: InputMaybe<SearchInput>;
}>;


export type SearchBrandsQuery = { __typename?: 'Query', searchBrands: { __typename?: 'SearchBrandConnection', edges: Array<{ __typename?: 'SearchBrandEdge', offset: number, node: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number } } };

export type BrandFragrancesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  input?: InputMaybe<FragrancePaginationInput>;
}>;


export type BrandFragrancesQuery = { __typename?: 'Query', brand?: { __typename?: 'Brand', id: string, fragrances: { __typename?: 'FragranceConnection', edges: Array<{ __typename?: 'FragranceEdge', node: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragrancePreviewFragment = { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type FragranceDetailFragment = { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, images: Array<{ __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null }>, reviewInfo: { __typename?: 'FragranceReviewInfo', count: number, averageRating?: number | null, distribution: Array<{ __typename?: 'FragranceReviewInfoDistribution', rating: number, count: number }> }, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type AllFragranceImageFragment = { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null };

export type AllFragranceAccordFragment = { __typename?: 'FragranceAccord', id: string, accord: { __typename?: 'Accord', id: string, name: string, color: string }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type AllFragranceNoteFragment = { __typename?: 'FragranceNote', id: string, layer: NoteLayer, note: { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type AllFragranceTraitVoteFragment = { __typename?: 'FragranceTraitVote', id: string, type: TraitTypeEnum, option?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null };

export type AllFragranceTraitFragment = { __typename?: 'FragranceTrait', id: string, type: TraitTypeEnum, name: string, options: Array<{ __typename?: 'TraitOption', id: string, label: string, score: number }>, stats: { __typename?: 'TraitStats', averageScore: number, totalVotes: number, distribution: Array<{ __typename?: 'TraitVoteDistribution', votes: number, option: { __typename?: 'TraitOption', id: string, label: string, score: number } }> }, myVote?: { __typename?: 'FragranceTraitVote', id: string, type: TraitTypeEnum, option?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null } | null };

export type AllFragranceReviewFragment = { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type AllFragranceReviewInfoFragment = { __typename?: 'FragranceReviewInfo', count: number, averageRating?: number | null, distribution: Array<{ __typename?: 'FragranceReviewInfoDistribution', rating: number, count: number }> };

export type AllFragranceCollectionFragment = { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type FragranceCollectionPreviewFragment = { __typename?: 'FragranceCollection', id: string, name: string, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type AllFragranceCollectionItemFragment = { __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } };

export type FragranceCollectionItemWithCollectionFragment = { __typename?: 'FragranceCollectionItem', id: string, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type HasFragranceFieldFragment = { __typename?: 'FragranceCollection', id: string, hasFragrance: boolean };

export type FragranceVoteInfoFragment = { __typename?: 'Fragrance', id: string, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type MyFragranceReviewFragment = { __typename?: 'Fragrance', id: string, myReview?: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null };

export type AllFragranceVoteFragment = { __typename?: 'FragranceVote', id: string, vote: number, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type CurrentTraitVoteFragment = { __typename?: 'FragranceTrait', id: string, myVote?: { __typename?: 'FragranceTraitVote', id: string, type: TraitTypeEnum, option?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null } | null };

export type CreateFragranceReviewMutationVariables = Exact<{
  input: CreateFragranceReviewInput;
}>;


export type CreateFragranceReviewMutation = { __typename?: 'Mutation', createFragranceReview: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type DeleteFragranceReviewMutationVariables = Exact<{
  input: DeleteFragranceReviewInput;
}>;


export type DeleteFragranceReviewMutation = { __typename?: 'Mutation', deleteFragranceReview: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type CreateFragranceCollectionMutationVariables = Exact<{
  input: CreateFragranceCollectionInput;
}>;


export type CreateFragranceCollectionMutation = { __typename?: 'Mutation', createFragranceCollection: { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } };

export type UpdateFragranceCollectionMutationVariables = Exact<{
  input: UpdateFragranceCollectionInput;
}>;


export type UpdateFragranceCollectionMutation = { __typename?: 'Mutation', updateFragranceCollection: { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } };

export type DeleteFragranceCollectionMutationVariables = Exact<{
  input: DeleteFragranceCollectionInput;
}>;


export type DeleteFragranceCollectionMutation = { __typename?: 'Mutation', deleteFragranceCollection: { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } };

export type CreateFragranceCollectionItemMutationVariables = Exact<{
  input: CreateFragranceCollectionItemInput;
  fragranceId: Scalars['ID']['input'];
}>;


export type CreateFragranceCollectionItemMutation = { __typename?: 'Mutation', createFragranceCollectionItem: { __typename?: 'FragranceCollectionItem', id: string, collection: { __typename?: 'FragranceCollection', id: string, hasFragrance: boolean, user: { __typename?: 'User', id: string } }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } } };

export type MoveFragranceCollectionItemsMutationVariables = Exact<{
  input: MoveFragranceCollectionItemsInput;
}>;


export type MoveFragranceCollectionItemsMutation = { __typename?: 'Mutation', moveFragranceCollectionItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }> };

export type DeleteFragranceCollectionItemMutationVariables = Exact<{
  input: DeleteFragranceCollectionItemInput;
}>;


export type DeleteFragranceCollectionItemMutation = { __typename?: 'Mutation', deleteFragranceCollectionItem: { __typename?: 'FragranceCollectionItem', id: string, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } } };

export type AddFragranceToCollectionsMutationVariables = Exact<{
  input: AddFragranceToCollectionsInput;
  fragranceId: Scalars['ID']['input'];
}>;


export type AddFragranceToCollectionsMutation = { __typename?: 'Mutation', addFragranceToCollections: Array<{ __typename?: 'FragranceCollectionItem', id: string, collection: { __typename?: 'FragranceCollection', id: string, hasFragrance: boolean, user: { __typename?: 'User', id: string } }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }> };

export type RemoveFragranceFromCollectionsMutationVariables = Exact<{
  input: RemoveFragranceFromCollectionsInput;
  fragranceId: Scalars['ID']['input'];
}>;


export type RemoveFragranceFromCollectionsMutation = { __typename?: 'Mutation', removeFragranceFromCollections: Array<{ __typename?: 'FragranceCollectionItem', id: string, collection: { __typename?: 'FragranceCollection', id: string, hasFragrance: boolean, user: { __typename?: 'User', id: string } }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }> };

export type VoteOnFragranceMutationVariables = Exact<{
  input: VoteOnFragranceInput;
}>;


export type VoteOnFragranceMutation = { __typename?: 'Mutation', voteOnFragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type VoteOnFragranceAccordMutationVariables = Exact<{
  input: VoteOnFragranceAccordInput;
}>;


export type VoteOnFragranceAccordMutation = { __typename?: 'Mutation', voteOnFragranceAccord: { __typename?: 'Accord', id: string, name: string, color: string } };

export type VoteOnFragranceNoteMutationVariables = Exact<{
  input: VoteOnFragranceNoteInput;
}>;


export type VoteOnFragranceNoteMutation = { __typename?: 'Mutation', voteOnFragranceNote: { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type VoteOnFragranceTraitMutationVariables = Exact<{
  input: VoteOnFragranceTraitInput;
}>;


export type VoteOnFragranceTraitMutation = { __typename?: 'Mutation', voteOnFragranceTrait: { __typename?: 'FragranceTraitVote', id: string, type: TraitTypeEnum, option?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null } };

export type VoteOnFragranceReviewMutationVariables = Exact<{
  input: VoteOnFragranceReviewInput;
}>;


export type VoteOnFragranceReviewMutation = { __typename?: 'Mutation', voteOnFragranceReview: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type CreateFragranceReportMutationVariables = Exact<{
  input: CreateFragranceReportInput;
}>;


export type CreateFragranceReportMutation = { __typename?: 'Mutation', createFragranceReport: { __typename?: 'FragranceReport', id: string } };

export type FragranceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FragranceQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, images: Array<{ __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null }>, reviewInfo: { __typename?: 'FragranceReviewInfo', count: number, averageRating?: number | null, distribution: Array<{ __typename?: 'FragranceReviewInfoDistribution', rating: number, count: number }> }, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type FragrancesQueryVariables = Exact<{
  input?: InputMaybe<FragrancePaginationInput>;
}>;


export type FragrancesQuery = { __typename?: 'Query', fragrances: { __typename?: 'FragranceConnection', edges: Array<{ __typename?: 'FragranceEdge', cursor: string, node: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type SearchFragrancesQueryVariables = Exact<{
  input?: InputMaybe<SearchInput>;
}>;


export type SearchFragrancesQuery = { __typename?: 'Query', searchFragrances: { __typename?: 'SearchFragranceConnection', edges: Array<{ __typename?: 'SearchFragranceEdge', offset: number, node: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number } } };

export type FragranceImagesQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
}>;


export type FragranceImagesQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, images: Array<{ __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null }> } };

export type MyFragranceAccordsQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
}>;


export type MyFragranceAccordsQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, myAccords: Array<{ __typename?: 'Accord', id: string, name: string, color: string }> } };

export type FragranceAccordsQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceAccordPaginationInput>;
}>;


export type FragranceAccordsQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, accords: { __typename?: 'FragranceAccordConnection', edges: Array<{ __typename?: 'FragranceAccordEdge', cursor: string, node: { __typename?: 'FragranceAccord', id: string, accord: { __typename?: 'Accord', id: string, name: string, color: string }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type MyFragranceNotesQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
  layer: NoteLayer;
}>;


export type MyFragranceNotesQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, myNotes: Array<{ __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }> } };

export type FragranceNotesQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceNotePaginationInput>;
}>;


export type FragranceNotesQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, notes: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', cursor: string, node: { __typename?: 'FragranceNote', id: string, layer: NoteLayer, note: { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type MyFragranceTraitsQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
}>;


export type MyFragranceTraitsQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, myTraits: Array<{ __typename?: 'FragranceTraitVote', id: string, type: TraitTypeEnum, option?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null }> } };

export type FragranceTraitsQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
}>;


export type FragranceTraitsQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, traits: Array<{ __typename?: 'FragranceTrait', id: string, type: TraitTypeEnum, name: string, options: Array<{ __typename?: 'TraitOption', id: string, label: string, score: number }>, stats: { __typename?: 'TraitStats', averageScore: number, totalVotes: number, distribution: Array<{ __typename?: 'TraitVoteDistribution', votes: number, option: { __typename?: 'TraitOption', id: string, label: string, score: number } }> }, myVote?: { __typename?: 'FragranceTraitVote', id: string, type: TraitTypeEnum, option?: { __typename?: 'TraitOption', id: string, label: string, score: number } | null } | null }> } };

export type MyFragranceReviewQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
}>;


export type MyFragranceReviewQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, myReview?: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null } };

export type FragranceReviewsQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceReviewPaginationInput>;
}>;


export type FragranceReviewsQuery = { __typename?: 'Query', fragrance: { __typename?: 'Fragrance', id: string, reviews: { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', cursor: string, node: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type FragranceCollectionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FragranceCollectionQuery = { __typename?: 'Query', fragranceCollection: { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } };

export type FragranceCollectionsQueryVariables = Exact<{
  input?: InputMaybe<FragranceCollectionPaginationInput>;
}>;


export type FragranceCollectionsQuery = { __typename?: 'Query', fragranceCollections: { __typename?: 'FragranceCollectionConnection', edges: Array<{ __typename?: 'FragranceCollectionEdge', cursor: string, node: { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type FragranceCollectionHasFragranceQueryVariables = Exact<{
  collectionId: Scalars['ID']['input'];
  fragranceId: Scalars['ID']['input'];
}>;


export type FragranceCollectionHasFragranceQuery = { __typename?: 'Query', fragranceCollection: { __typename?: 'FragranceCollection', id: string, hasFragrance: boolean } };

export type FragranceCollectionItemsQueryVariables = Exact<{
  collectionId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceCollectionItemPaginationInput>;
}>;


export type FragranceCollectionItemsQuery = { __typename?: 'Query', fragranceCollection: { __typename?: 'FragranceCollection', id: string, items: { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', cursor: string, node: { __typename?: 'FragranceCollectionItem', id: string, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type AllNoteFragment = { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null };

export type NotePreviewFragment = { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null };

export type NoteQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type NoteQuery = { __typename?: 'Query', note: { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type NotesQueryVariables = Exact<{
  input?: InputMaybe<NotePaginationInput>;
}>;


export type NotesQuery = { __typename?: 'Query', notes: { __typename?: 'NoteConnection', edges: Array<{ __typename?: 'NoteEdge', node: { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type SearchNotesQueryVariables = Exact<{
  input?: InputMaybe<SearchInput>;
}>;


export type SearchNotesQuery = { __typename?: 'Query', searchNotes: { __typename?: 'SearchNoteConnection', edges: Array<{ __typename?: 'SearchNoteEdge', offset: number, node: { __typename?: 'Note', id: string, name: string, thumbnail?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } }>, pageInfo: { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number } } };

export type PostPreviewFragment = { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } };

export type AllPostAssetFragment = { __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } };

export type PostCommentShellFragment = { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type PostCommentPreviewFragment = { __typename?: 'PostComment', id: string, depth: number, content: string, createdAt: string, parent?: { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } | null, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, assets: Array<{ __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }> };

export type AllPostCommentAssetFragment = { __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type DeletePostMutationVariables = Exact<{
  input: DeletePostInput;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type VoteOnPostMutationVariables = Exact<{
  input: VoteOnPostInput;
}>;


export type VoteOnPostMutation = { __typename?: 'Mutation', voteOnPost: { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type CreatePostCommentMutationVariables = Exact<{
  input: CreatePostCommentInput;
}>;


export type CreatePostCommentMutation = { __typename?: 'Mutation', createPostComment: { __typename?: 'PostComment', id: string, depth: number, content: string, createdAt: string, parent?: { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } | null, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, assets: Array<{ __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }> } };

export type UpdatePostCommentMutationVariables = Exact<{
  input: UpdatePostCommentInput;
}>;


export type UpdatePostCommentMutation = { __typename?: 'Mutation', updatePostComment: { __typename?: 'PostComment', id: string, depth: number, content: string, createdAt: string, parent?: { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } | null, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, assets: Array<{ __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }> } };

export type DeletePostCommentMutationVariables = Exact<{
  input: DeletePostCommentInput;
}>;


export type DeletePostCommentMutation = { __typename?: 'Mutation', deletePostComment: { __typename?: 'PostComment', id: string, depth: number, content: string, createdAt: string, parent?: { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } | null, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, assets: Array<{ __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }> } };

export type PostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } };

export type PostsQueryVariables = Exact<{
  input?: InputMaybe<PostPaginationInput>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'PostEdge', cursor: string, node: { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type SearchPostsQueryVariables = Exact<{
  input?: InputMaybe<SearchInput>;
}>;


export type SearchPostsQuery = { __typename?: 'Query', searchPosts: { __typename?: 'SearchPostConnection', edges: Array<{ __typename?: 'SearchPostEdge', offset: number, node: { __typename?: 'Post', id: string, type: PostType, title: string, content?: any | null, commentCount: number, createdAt: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance?: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } | null, assets: Array<{ __typename?: 'PostAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }>, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number } } };

export type PostCommentsQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
  input?: InputMaybe<PostCommentPaginationInput>;
}>;


export type PostCommentsQuery = { __typename?: 'Query', post: { __typename?: 'Post', comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', cursor: string, node: { __typename?: 'PostComment', id: string, depth: number, content: string, createdAt: string, parent?: { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } | null, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, assets: Array<{ __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }> } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type SearchPostCommentsQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
  input?: InputMaybe<SearchInput>;
}>;


export type SearchPostCommentsQuery = { __typename?: 'Query', post: { __typename?: 'Post', searchComments: { __typename?: 'SearchPostCommentConnection', edges: Array<{ __typename?: 'SearchPostCommentEdge', offset: number, node: { __typename?: 'PostComment', id: string, depth: number, content: string, createdAt: string, parent?: { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } | null, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, assets: Array<{ __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }> } }>, pageInfo: { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number } } } };

export type PostCommentRepliesQueryVariables = Exact<{
  parentId: Scalars['ID']['input'];
  input?: InputMaybe<PostCommentPaginationInput>;
}>;


export type PostCommentRepliesQuery = { __typename?: 'Query', postComment: { __typename?: 'PostComment', comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', cursor: string, node: { __typename?: 'PostComment', id: string, depth: number, content: string, createdAt: string, parent?: { __typename?: 'PostComment', id: string, depth: number, content: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } | null, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, assets: Array<{ __typename?: 'PostCommentAsset', id: string, displayOrder: number, asset: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } }> } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type AllTraitOptionFragment = { __typename?: 'TraitOption', id: string, label: string, score: number };

export type AllTraitVoteDistributionFragment = { __typename?: 'TraitVoteDistribution', votes: number, option: { __typename?: 'TraitOption', id: string, label: string, score: number } };

export type AllTraitStatsFragment = { __typename?: 'TraitStats', averageScore: number, totalVotes: number, distribution: Array<{ __typename?: 'TraitVoteDistribution', votes: number, option: { __typename?: 'TraitOption', id: string, label: string, score: number } }> };

export type MeFragment = { __typename?: 'User', id: string, username: string, email?: string | null, followerCount: number, followingCount: number, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null };

export type UserPreviewFragment = { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null };

export type AllUserFollowFragment = { __typename?: 'UserFollow', id: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UpdateMeMutationVariables = Exact<{
  input: UpdateMeInput;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe: { __typename?: 'User', id: string, username: string, email?: string | null, followerCount: number, followingCount: number, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type SetMyAvatarMutationVariables = Exact<{
  input: SetMyAvatarInput;
}>;


export type SetMyAvatarMutation = { __typename?: 'Mutation', setMyAvatar: { __typename?: 'User', id: string, username: string, email?: string | null, followerCount: number, followingCount: number, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type FollowUserMutationVariables = Exact<{
  input: FollowUserInput;
}>;


export type FollowUserMutation = { __typename?: 'Mutation', follow: { __typename?: 'UserFollow', id: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } };

export type UnfollowUserMutationVariables = Exact<{
  input: UnfollowUserInput;
}>;


export type UnfollowUserMutation = { __typename?: 'Mutation', unfollow: { __typename?: 'UserFollow', id: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, email?: string | null, followerCount: number, followingCount: number, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type MyCollectionsQueryVariables = Exact<{
  input?: InputMaybe<FragranceCollectionPaginationInput>;
}>;


export type MyCollectionsQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, email?: string | null, followerCount: number, followingCount: number, collections: { __typename?: 'FragranceCollectionConnection', edges: Array<{ __typename?: 'FragranceCollectionEdge', cursor: string, node: { __typename?: 'FragranceCollection', id: string, name: string, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type MyCollectionsHasFragranceQueryVariables = Exact<{
  fragranceId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceCollectionPaginationInput>;
}>;


export type MyCollectionsHasFragranceQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, email?: string | null, followerCount: number, followingCount: number, collections: { __typename?: 'FragranceCollectionConnection', edges: Array<{ __typename?: 'FragranceCollectionEdge', cursor: string, node: { __typename?: 'FragranceCollection', hasFragrance: boolean, id: string, name: string, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type SearchUsersQueryVariables = Exact<{
  input?: InputMaybe<SearchInput>;
}>;


export type SearchUsersQuery = { __typename?: 'Query', searchUsers: { __typename?: 'SearchUserConnection', edges: Array<{ __typename?: 'SearchUserEdge', offset: number, node: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } }>, pageInfo: { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number } } };

export type UserFollowersQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  input?: InputMaybe<UserFollowPaginationInput>;
}>;


export type UserFollowersQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, followers: { __typename?: 'UserFollowConnection', edges: Array<{ __typename?: 'UserFollowEdge', cursor: string, node: { __typename?: 'UserFollow', id: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UserFollowingQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  input?: InputMaybe<UserFollowPaginationInput>;
}>;


export type UserFollowingQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, following: { __typename?: 'UserFollowConnection', edges: Array<{ __typename?: 'UserFollowEdge', cursor: string, node: { __typename?: 'UserFollow', id: string, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UserCollectionQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  collectionId: Scalars['ID']['input'];
}>;


export type UserCollectionQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, collection: { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UserCollectionsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceCollectionPaginationInput>;
}>;


export type UserCollectionsQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, collections: { __typename?: 'FragranceCollectionConnection', edges: Array<{ __typename?: 'FragranceCollectionEdge', cursor: string, node: { __typename?: 'FragranceCollection', id: string, name: string, info: { __typename?: 'FragranceCollectionInfo', itemCount: number }, previewItems: Array<{ __typename?: 'FragranceCollectionItem', id: string, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, collection: { __typename?: 'FragranceCollection', id: string, user: { __typename?: 'User', id: string } } }>, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UserLikesQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceVotePaginationInput>;
}>;


export type UserLikesQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, likes: { __typename?: 'FragranceVoteConnection', edges: Array<{ __typename?: 'FragranceVoteEdge', cursor: string, node: { __typename?: 'FragranceVote', id: string, vote: number, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UserReviewQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  reviewId: Scalars['ID']['input'];
}>;


export type UserReviewQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, review: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type UserReviewsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  input?: InputMaybe<FragranceReviewPaginationInput>;
}>;


export type UserReviewsQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, reviews: { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', cursor: string, node: { __typename?: 'FragranceReview', id: string, rating: number, body?: string | null, createdAt: string, author: { __typename?: 'User', id: string, username: string, followerCount: number, followingCount: number, relationship: RelationshipStatus, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null }, fragrance: { __typename?: 'Fragrance', id: string, name: string, description?: string | null, releaseYear: number, concentration: Concentration, status: FragranceStatus, brand: { __typename?: 'Brand', id: string, name: string, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, thumbnail?: { __typename?: 'FragranceImage', id: string, url?: string | null, width: number, height: number, primaryColor?: string | null } | null, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } }, votes: { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, avatar?: { __typename?: 'Asset', id: string, name: string, contentType: string, sizeBytes: number, url?: string | null } | null } };

export type AllPageInfoFragment = { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null };

export type AllSearchPageInfoFragment = { __typename?: 'SearchPageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startOffset: number, endOffset: number, pageSize: number };

export type AllVoteInfoFragment = { __typename?: 'VoteInfo', upvotes: number, downvotes: number, score: number, myVote?: number | null };

export const AllPresignedUploadFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPresignedUpload"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PresignedUpload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]} as unknown as DocumentNode<AllPresignedUploadFragment, unknown>;
export const AllAuthTokenPayloadFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthTokenPayload"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthTokenPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<AllAuthTokenPayloadFragment, unknown>;
export const AllAuthCodeDeliveryDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthCodeDeliveryDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}}]}}]} as unknown as DocumentNode<AllAuthCodeDeliveryDetailsFragment, unknown>;
export const AllAuthDeliveryResultFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthDeliveryResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthCodeDeliveryDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}}]}}]} as unknown as DocumentNode<AllAuthDeliveryResultFragment, unknown>;
export const AllAssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<AllAssetFragment, unknown>;
export const AllVoteInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<AllVoteInfoFragment, unknown>;
export const AllBrandFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllBrand"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<AllBrandFragment, unknown>;
export const BrandPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<BrandPreviewFragment, unknown>;
export const AllFragranceImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}}]} as unknown as DocumentNode<AllFragranceImageFragment, unknown>;
export const FragrancePreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}}]} as unknown as DocumentNode<FragrancePreviewFragment, unknown>;
export const AllFragranceReviewInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReviewInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"distribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AllFragranceReviewInfoFragment, unknown>;
export const FragranceDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReviewInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReviewInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"distribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<FragranceDetailFragment, unknown>;
export const AllAccordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<AllAccordFragment, unknown>;
export const AllFragranceAccordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAccord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<AllFragranceAccordFragment, unknown>;
export const AllNoteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllNote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<AllNoteFragment, unknown>;
export const AllFragranceNoteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceNote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"note"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllNote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllNote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<AllFragranceNoteFragment, unknown>;
export const AllTraitOptionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]} as unknown as DocumentNode<AllTraitOptionFragment, unknown>;
export const AllTraitVoteDistributionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitVoteDistribution"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitVoteDistribution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]} as unknown as DocumentNode<AllTraitVoteDistributionFragment, unknown>;
export const AllTraitStatsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageScore"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"distribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitVoteDistribution"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitVoteDistribution"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitVoteDistribution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}}]} as unknown as DocumentNode<AllTraitStatsFragment, unknown>;
export const AllFragranceTraitVoteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTraitVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTraitVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]} as unknown as DocumentNode<AllFragranceTraitVoteFragment, unknown>;
export const AllFragranceTraitFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTrait"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitStats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"myVote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceTraitVote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitVoteDistribution"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitVoteDistribution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageScore"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"distribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitVoteDistribution"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTraitVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTraitVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}}]}}]} as unknown as DocumentNode<AllFragranceTraitFragment, unknown>;
export const AllFragranceCollectionItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}}]} as unknown as DocumentNode<AllFragranceCollectionItemFragment, unknown>;
export const UserPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<UserPreviewFragment, unknown>;
export const FragranceCollectionPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<FragranceCollectionPreviewFragment, unknown>;
export const AllFragranceCollectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}}]} as unknown as DocumentNode<AllFragranceCollectionFragment, unknown>;
export const FragranceCollectionItemWithCollectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemWithCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FragranceCollectionItemWithCollectionFragment, unknown>;
export const HasFragranceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HasFragranceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hasFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fragranceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}]}]}}]} as unknown as DocumentNode<HasFragranceFieldFragment, unknown>;
export const FragranceVoteInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<FragranceVoteInfoFragment, unknown>;
export const AllFragranceReviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}}]} as unknown as DocumentNode<AllFragranceReviewFragment, unknown>;
export const MyFragranceReviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"myReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<MyFragranceReviewFragment, unknown>;
export const AllFragranceVoteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vote"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<AllFragranceVoteFragment, unknown>;
export const CurrentTraitVoteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrentTraitVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceTraitVote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTraitVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTraitVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}}]}}]} as unknown as DocumentNode<CurrentTraitVoteFragment, unknown>;
export const NotePreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<NotePreviewFragment, unknown>;
export const AllPostAssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<AllPostAssetFragment, unknown>;
export const PostPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<PostPreviewFragment, unknown>;
export const PostCommentShellFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<PostCommentShellFragment, unknown>;
export const AllPostCommentAssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<AllPostCommentAssetFragment, unknown>;
export const PostCommentPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentShell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostCommentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<PostCommentPreviewFragment, unknown>;
export const MeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Me"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<MeFragment, unknown>;
export const AllUserFollowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllUserFollow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserFollow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<AllUserFollowFragment, unknown>;
export const AllPageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<AllPageInfoFragment, unknown>;
export const AllSearchPageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<AllSearchPageInfoFragment, unknown>;
export const AccordQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccordQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAccord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<AccordQueryQuery, AccordQueryQueryVariables>;
export const AccordsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccordsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccordPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAccord"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<AccordsQueryQuery, AccordsQueryQueryVariables>;
export const SearchAccordsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchAccordsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchAccords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAccord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllSearchPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<SearchAccordsQueryQuery, SearchAccordsQueryQueryVariables>;
export const StageAssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StageAsset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StageAssetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stageAsset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPresignedUpload"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPresignedUpload"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PresignedUpload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]} as unknown as DocumentNode<StageAssetMutation, StageAssetMutationVariables>;
export const DeleteAssetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAsset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAssetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAsset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeleteAssetMutation, DeleteAssetMutationVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthTokenPayload"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthTokenPayload"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthTokenPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthTokenPayload"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthTokenPayload"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthTokenPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<LogInMutation, LogInMutationVariables>;
export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logOut"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthDeliveryResult"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthCodeDeliveryDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthDeliveryResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const ConfirmSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmSignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Me"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Me"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<ConfirmSignUpMutation, ConfirmSignUpMutationVariables>;
export const ResendSignUpCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendSignUpCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResendSignUpCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendSignUpCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthDeliveryResult"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthCodeDeliveryDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthDeliveryResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"}}]}}]}}]} as unknown as DocumentNode<ResendSignUpCodeMutation, ResendSignUpCodeMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthDeliveryResult"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthCodeDeliveryDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAuthDeliveryResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthDeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isComplete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAuthCodeDeliveryDetails"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ConfirmForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ConfirmForgotPasswordMutation, ConfirmForgotPasswordMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const VoteOnBrandMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnBrandMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnBrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnBrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}}]} as unknown as DocumentNode<VoteOnBrandMutationMutation, VoteOnBrandMutationMutationVariables>;
export const BrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Brand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}}]} as unknown as DocumentNode<BrandQuery, BrandQueryVariables>;
export const BrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Brands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BrandPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<BrandsQuery, BrandsQueryVariables>;
export const SearchBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchBrands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchBrands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllSearchPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<SearchBrandsQuery, SearchBrandsQueryVariables>;
export const BrandFragrancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BrandFragrances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragrancePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<BrandFragrancesQuery, BrandFragrancesQueryVariables>;
export const CreateFragranceReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFragranceReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFragranceReviewInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFragranceReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<CreateFragranceReviewMutation, CreateFragranceReviewMutationVariables>;
export const DeleteFragranceReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFragranceReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteFragranceReviewInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFragranceReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<DeleteFragranceReviewMutation, DeleteFragranceReviewMutationVariables>;
export const CreateFragranceCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFragranceCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFragranceCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFragranceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}}]} as unknown as DocumentNode<CreateFragranceCollectionMutation, CreateFragranceCollectionMutationVariables>;
export const UpdateFragranceCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFragranceCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFragranceCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFragranceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}}]} as unknown as DocumentNode<UpdateFragranceCollectionMutation, UpdateFragranceCollectionMutationVariables>;
export const DeleteFragranceCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFragranceCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteFragranceCollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFragranceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}}]} as unknown as DocumentNode<DeleteFragranceCollectionMutation, DeleteFragranceCollectionMutationVariables>;
export const CreateFragranceCollectionItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFragranceCollectionItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFragranceCollectionItemInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFragranceCollectionItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hasFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fragranceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFragranceCollectionItemMutation, CreateFragranceCollectionItemMutationVariables>;
export const MoveFragranceCollectionItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MoveFragranceCollectionItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MoveFragranceCollectionItemsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moveFragranceCollectionItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<MoveFragranceCollectionItemsMutation, MoveFragranceCollectionItemsMutationVariables>;
export const DeleteFragranceCollectionItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFragranceCollectionItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteFragranceCollectionItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFragranceCollectionItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteFragranceCollectionItemMutation, DeleteFragranceCollectionItemMutationVariables>;
export const AddFragranceToCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFragranceToCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddFragranceToCollectionsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFragranceToCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hasFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fragranceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddFragranceToCollectionsMutation, AddFragranceToCollectionsMutationVariables>;
export const RemoveFragranceFromCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFragranceFromCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveFragranceFromCollectionsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFragranceFromCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hasFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fragranceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveFragranceFromCollectionsMutation, RemoveFragranceFromCollectionsMutationVariables>;
export const VoteOnFragranceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnFragrance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnFragranceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}}]} as unknown as DocumentNode<VoteOnFragranceMutation, VoteOnFragranceMutationVariables>;
export const VoteOnFragranceAccordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnFragranceAccord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnFragranceAccordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnFragranceAccord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAccord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<VoteOnFragranceAccordMutation, VoteOnFragranceAccordMutationVariables>;
export const VoteOnFragranceNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnFragranceNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnFragranceNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnFragranceNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllNote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllNote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<VoteOnFragranceNoteMutation, VoteOnFragranceNoteMutationVariables>;
export const VoteOnFragranceTraitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnFragranceTrait"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnFragranceTraitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnFragranceTrait"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceTraitVote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTraitVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTraitVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}}]}}]} as unknown as DocumentNode<VoteOnFragranceTraitMutation, VoteOnFragranceTraitMutationVariables>;
export const VoteOnFragranceReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnFragranceReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnFragranceReviewInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnFragranceReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<VoteOnFragranceReviewMutation, VoteOnFragranceReviewMutationVariables>;
export const CreateFragranceReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFragranceReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFragranceReportInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFragranceReport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateFragranceReportMutation, CreateFragranceReportMutationVariables>;
export const FragranceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Fragrance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceDetail"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReviewInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"distribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReviewInfo"}}]}}]}}]} as unknown as DocumentNode<FragranceQuery, FragranceQueryVariables>;
export const FragrancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Fragrances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragrancePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragrancesQuery, FragrancesQueryVariables>;
export const SearchFragrancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchFragrances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchFragrances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllSearchPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<SearchFragrancesQuery, SearchFragrancesQueryVariables>;
export const FragranceImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}}]} as unknown as DocumentNode<FragranceImagesQuery, FragranceImagesQueryVariables>;
export const MyFragranceAccordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyFragranceAccords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"myAccords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAccord"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<MyFragranceAccordsQuery, MyFragranceAccordsQueryVariables>;
export const FragranceAccordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceAccords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccordPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceAccord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceAccord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accord"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAccord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceAccordsQuery, FragranceAccordsQueryVariables>;
export const MyFragranceNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyFragranceNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"layer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NoteLayer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"myNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"layer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"layer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllNote"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllNote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<MyFragranceNotesQuery, MyFragranceNotesQueryVariables>;
export const FragranceNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNotePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceNote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllNote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceNote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"note"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllNote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceNotesQuery, FragranceNotesQueryVariables>;
export const MyFragranceTraitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyFragranceTraits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"myTraits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceTraitVote"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTraitVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTraitVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}}]}}]} as unknown as DocumentNode<MyFragranceTraitsQuery, MyFragranceTraitsQueryVariables>;
export const FragranceTraitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceTraits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceTrait"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitVoteDistribution"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitVoteDistribution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllTraitStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraitStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageScore"}},{"kind":"Field","name":{"kind":"Name","value":"totalVotes"}},{"kind":"Field","name":{"kind":"Name","value":"distribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitVoteDistribution"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTraitVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTraitVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceTrait"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllTraitStats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"myVote"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceTraitVote"}}]}}]}}]} as unknown as DocumentNode<FragranceTraitsQuery, FragranceTraitsQueryVariables>;
export const MyFragranceReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyFragranceReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"myReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<MyFragranceReviewQuery, MyFragranceReviewQueryVariables>;
export const FragranceReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceReviewsQuery, FragranceReviewsQueryVariables>;
export const FragranceCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}}]} as unknown as DocumentNode<FragranceCollectionQuery, FragranceCollectionQueryVariables>;
export const FragranceCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceCollections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceCollectionsQuery, FragranceCollectionsQueryVariables>;
export const FragranceCollectionHasFragranceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceCollectionHasFragrance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hasFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fragranceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}]}]}}]}}]} as unknown as DocumentNode<FragranceCollectionHasFragranceQuery, FragranceCollectionHasFragranceQueryVariables>;
export const FragranceCollectionItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceCollectionItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItemPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragranceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemWithCollection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemWithCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceCollectionItemsQuery, FragranceCollectionItemsQueryVariables>;
export const NoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Note"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotePreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<NoteQuery, NoteQueryVariables>;
export const NotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Notes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotePreview"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<NotesQuery, NotesQueryVariables>;
export const SearchNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchNotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NotePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllSearchPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<SearchNotesQuery, SearchNotesQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeletePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const VoteOnPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnPostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<VoteOnPostMutation, VoteOnPostMutationVariables>;
export const CreatePostCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePostComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPostComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentShell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostCommentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<CreatePostCommentMutation, CreatePostCommentMutationVariables>;
export const UpdatePostCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentShell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostCommentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UpdatePostCommentMutation, UpdatePostCommentMutationVariables>;
export const DeletePostCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePostComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeletePostCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePostComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentShell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostCommentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<DeletePostCommentMutation, DeletePostCommentMutationVariables>;
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<PostQuery, PostQueryVariables>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const SearchPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllSearchPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<SearchPostsQuery, SearchPostsQueryVariables>;
export const PostCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentShell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostCommentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PostCommentsQuery, PostCommentsQueryVariables>;
export const SearchPostCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPostComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllSearchPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentShell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostCommentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<SearchPostCommentsQuery, SearchPostCommentsQueryVariables>;
export const PostCommentRepliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostCommentReplies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentShell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPostCommentAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentAsset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCommentPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostComment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCommentShell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPostCommentAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PostCommentRepliesQuery, PostCommentRepliesQueryVariables>;
export const UpdateMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Me"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Me"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<UpdateMeMutation, UpdateMeMutationVariables>;
export const SetMyAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetMyAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetMyAvatarInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setMyAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Me"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Me"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<SetMyAvatarMutation, SetMyAvatarMutationVariables>;
export const FollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"follow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllUserFollow"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllUserFollow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserFollow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}}]} as unknown as DocumentNode<FollowUserMutation, FollowUserMutationVariables>;
export const UnfollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnfollowUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfollow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllUserFollow"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllUserFollow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserFollow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}}]} as unknown as DocumentNode<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Me"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Me"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const MyCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Me"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Me"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<MyCollectionsQuery, MyCollectionsQueryVariables>;
export const MyCollectionsHasFragranceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyCollectionsHasFragrance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Me"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"hasFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fragranceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Me"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<MyCollectionsHasFragranceQuery, MyCollectionsHasFragranceQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const SearchUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllSearchPageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllSearchPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startOffset"}},{"kind":"Field","name":{"kind":"Name","value":"endOffset"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]} as unknown as DocumentNode<SearchUsersQuery, SearchUsersQueryVariables>;
export const UserFollowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserFollowers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFollowPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllUserFollow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllUserFollow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserFollow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<UserFollowersQuery, UserFollowersQueryVariables>;
export const UserFollowingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserFollowing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFollowPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllUserFollow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllUserFollow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserFollow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<UserFollowingQuery, UserFollowingQueryVariables>;
export const UserCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollection"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}}]} as unknown as DocumentNode<UserCollectionQuery, UserCollectionQueryVariables>;
export const UserCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceCollectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceCollection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionPreview"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<UserCollectionsQuery, UserCollectionsQueryVariables>;
export const UserLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserLikes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVotePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceVote"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vote"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<UserLikesQuery, UserLikesQueryVariables>;
export const UserReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}},{"kind":"Field","name":{"kind":"Name","value":"review"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserReviewQuery, UserReviewQueryVariables>;
export const UserReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceReview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllPageInfo"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllVoteInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VoteInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"downvotes"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllAsset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragrancePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrandPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllFragranceImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllFragranceReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragrancePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllVoteInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllPageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<UserReviewsQuery, UserReviewsQueryVariables>;