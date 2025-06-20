/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  JSON: { input: any; output: any; }
};

export type AccordsInput = {
  fill?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<VotePaginationInput>;
};

export type Asset = {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']['output']>;
  audit: Audit;
  id: Scalars['Int']['output'];
  src: Scalars['String']['output'];
};

export const AssetStatus = {
  Failed: 'FAILED',
  Pending: 'PENDING',
  Uploaded: 'UPLOADED'
} as const;

export type AssetStatus = typeof AssetStatus[keyof typeof AssetStatus];
export type AssetUploadPayload = {
  __typename?: 'AssetUploadPayload';
  fields: Scalars['JSON']['output'];
  s3Key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Audit = {
  __typename?: 'Audit';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Int']['output'];
  idToken: Scalars['String']['output'];
};

export type CodeDeliveryDetails = {
  __typename?: 'CodeDeliveryDetails';
  attribute?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
};

export type ConfirmFragranceImageInput = {
  fragranceId: Scalars['Int']['input'];
  s3Key: Scalars['String']['input'];
};

export type CreateFragranceCollectionInput = {
  fragranceId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CreateFragranceCollectionItemInput = {
  afterFragranceId?: InputMaybe<Scalars['Int']['input']>;
  beforeFragranceId?: InputMaybe<Scalars['Int']['input']>;
  collectionId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
};

export type CreateFragranceImageInput = {
  fileSize: Scalars['Int']['input'];
  fileType: Scalars['String']['input'];
  fragranceId: Scalars['Int']['input'];
};

export type CreateFragranceReviewInput = {
  fragranceId: Scalars['Int']['input'];
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
};

export type DeleteFragranceCollectionItemInput = {
  collectionId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
};

export type DeliveryResult = {
  __typename?: 'DeliveryResult';
  complete: Scalars['Boolean']['output'];
  delivery?: Maybe<CodeDeliveryDetails>;
};

export type Fragrance = {
  __typename?: 'Fragrance';
  accords: FragranceAccordConnection;
  audit: Audit;
  brand: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: FragranceImageConnection;
  myReview?: Maybe<FragranceReview>;
  name: Scalars['String']['output'];
  notes: FragranceNotes;
  rating: Scalars['Float']['output'];
  reviewDistribution: FragranceReviewDistribution;
  reviews: FragranceReviewConnection;
  reviewsCount: Scalars['Int']['output'];
  traits: Array<FragranceTrait>;
  votes: VoteSummary;
};


export type FragranceAccordsArgs = {
  input?: InputMaybe<AccordsInput>;
};


export type FragranceImagesArgs = {
  input?: InputMaybe<PaginationInput>;
};


export type FragranceReviewsArgs = {
  input?: InputMaybe<VotePaginationInput>;
};

export type FragranceAccord = {
  __typename?: 'FragranceAccord';
  accordId: Scalars['Int']['output'];
  audit: Audit;
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFill: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  votes: VoteSummary;
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

export type FragranceCollection = {
  __typename?: 'FragranceCollection';
  audit: Audit;
  id: Scalars['Int']['output'];
  items: FragranceCollectionItemConnection;
  name: Scalars['String']['output'];
  user: User;
};


export type FragranceCollectionItemsArgs = {
  input?: InputMaybe<PaginationInput>;
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

export type FragranceCollectionItem = {
  __typename?: 'FragranceCollectionItem';
  audit: Audit;
  fragrance: Fragrance;
  id: Scalars['Int']['output'];
  rank: Scalars['Float']['output'];
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

export type FragranceImage = {
  __typename?: 'FragranceImage';
  alt?: Maybe<Scalars['String']['output']>;
  audit: Audit;
  bg?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  src: Scalars['String']['output'];
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
  audit: Audit;
  id: Scalars['Int']['output'];
  isFill: Scalars['Boolean']['output'];
  layer: NoteLayer;
  name: Scalars['String']['output'];
  noteId: Scalars['Int']['output'];
  votes: VoteSummary;
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

export type FragranceNotes = {
  __typename?: 'FragranceNotes';
  base: FragranceNoteConnection;
  middle: FragranceNoteConnection;
  top: FragranceNoteConnection;
};


export type FragranceNotesBaseArgs = {
  input?: InputMaybe<NotesInput>;
};


export type FragranceNotesMiddleArgs = {
  input?: InputMaybe<NotesInput>;
};


export type FragranceNotesTopArgs = {
  input?: InputMaybe<NotesInput>;
};

export type FragranceReview = {
  __typename?: 'FragranceReview';
  audit: Audit;
  fragrance: Fragrance;
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  user: User;
  votes: VoteSummary;
};

export type FragranceReviewConnection = {
  __typename?: 'FragranceReviewConnection';
  edges: Array<FragranceReviewEdge>;
  pageInfo: PageInfo;
};

export type FragranceReviewDistribution = {
  __typename?: 'FragranceReviewDistribution';
  five: Scalars['Int']['output'];
  four: Scalars['Int']['output'];
  one: Scalars['Int']['output'];
  three: Scalars['Int']['output'];
  two: Scalars['Int']['output'];
};

export type FragranceReviewEdge = {
  __typename?: 'FragranceReviewEdge';
  cursor: Scalars['String']['output'];
  node: FragranceReview;
};

export type FragranceTrait = {
  __typename?: 'FragranceTrait';
  myVote?: Maybe<Scalars['Float']['output']>;
  type: FragranceTraitType;
  voteScore: Scalars['Float']['output'];
};

export const FragranceTraitType = {
  Allure: 'ALLURE',
  Balance: 'BALANCE',
  Complexity: 'COMPLEXITY',
  Gender: 'GENDER',
  Longevity: 'LONGEVITY',
  Sillage: 'SILLAGE'
} as const;

export type FragranceTraitType = typeof FragranceTraitType[keyof typeof FragranceTraitType];
export type FragranceVote = {
  __typename?: 'FragranceVote';
  audit: Audit;
  fragrance: Fragrance;
  id: Scalars['Int']['output'];
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

export type GenericAuthResult = {
  __typename?: 'GenericAuthResult';
  complete: Scalars['Boolean']['output'];
};

export type LogFragranceViewInput = {
  fragranceId: Scalars['Int']['input'];
};

export type MoveFragranceCollectionItemInput = {
  afterFragranceId?: InputMaybe<Scalars['Int']['input']>;
  beforeFragranceId?: InputMaybe<Scalars['Int']['input']>;
  collectionId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmForgotPassword: GenericAuthResult;
  confirmFragranceImage: FragranceImage;
  confirmSignUp: User;
  createFragranceCollection: FragranceCollection;
  createFragranceCollectionItem: FragranceCollectionItem;
  createFragranceImage: AssetUploadPayload;
  createFragranceReview: FragranceReview;
  deleteFragranceCollectionItem: Scalars['Boolean']['output'];
  forgotPassword: DeliveryResult;
  logFragranceView: Scalars['Boolean']['output'];
  logIn: AuthPayload;
  logOut: Scalars['Boolean']['output'];
  moveFragranceCollectionItem: FragranceCollection;
  refresh?: Maybe<AuthPayload>;
  resendSignUpConfirmationCode: DeliveryResult;
  signUp: DeliveryResult;
  voteOnAccord: FragranceAccord;
  voteOnFragrance: FragranceVote;
  voteOnNote: FragranceNote;
  voteOnReview: FragranceReview;
  voteOnTrait: FragranceTrait;
};


export type MutationConfirmForgotPasswordArgs = {
  confirmationCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationConfirmFragranceImageArgs = {
  input: ConfirmFragranceImageInput;
};


export type MutationConfirmSignUpArgs = {
  confirmationCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationCreateFragranceCollectionArgs = {
  input: CreateFragranceCollectionInput;
};


export type MutationCreateFragranceCollectionItemArgs = {
  input: CreateFragranceCollectionItemInput;
};


export type MutationCreateFragranceImageArgs = {
  input: CreateFragranceImageInput;
};


export type MutationCreateFragranceReviewArgs = {
  input: CreateFragranceReviewInput;
};


export type MutationDeleteFragranceCollectionItemArgs = {
  input: DeleteFragranceCollectionItemInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLogFragranceViewArgs = {
  input: LogFragranceViewInput;
};


export type MutationLogInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationMoveFragranceCollectionItemArgs = {
  input: MoveFragranceCollectionItemInput;
};


export type MutationResendSignUpConfirmationCodeArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationVoteOnAccordArgs = {
  input: VoteOnAccordInput;
};


export type MutationVoteOnFragranceArgs = {
  input: VoteOnFragranceInput;
};


export type MutationVoteOnNoteArgs = {
  input: VoteOnNoteInput;
};


export type MutationVoteOnReviewArgs = {
  input: VoteOnReviewInput;
};


export type MutationVoteOnTraitArgs = {
  input: VoteOnTraitInput;
};

export const NoteLayer = {
  Base: 'BASE',
  Middle: 'MIDDLE',
  Top: 'TOP'
} as const;

export type NoteLayer = typeof NoteLayer[keyof typeof NoteLayer];
export type NotesInput = {
  fill?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<VotePaginationInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortByInput>;
};

export type Query = {
  __typename?: 'Query';
  collection: FragranceCollection;
  fragrance?: Maybe<Fragrance>;
  fragrances: FragranceConnection;
  me?: Maybe<User>;
  searchFragrances: FragranceConnection;
  user?: Maybe<User>;
};


export type QueryCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFragranceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFragrancesArgs = {
  input?: InputMaybe<PaginationInput>;
};


export type QuerySearchFragrancesArgs = {
  input?: InputMaybe<SearchFragrancesInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type SearchFragrancesInput = {
  pagination?: InputMaybe<PaginationInput>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export const SortBy = {
  Updated: 'UPDATED'
} as const;

export type SortBy = typeof SortBy[keyof typeof SortBy];
export type SortByInput = {
  by?: InputMaybe<SortBy>;
  direction?: InputMaybe<SortDirection>;
};

export const SortDirection = {
  Ascending: 'ASCENDING',
  Descending: 'DESCENDING'
} as const;

export type SortDirection = typeof SortDirection[keyof typeof SortDirection];
export type User = {
  __typename?: 'User';
  audit: Audit;
  collections: FragranceCollectionConnection;
  email: Scalars['String']['output'];
  followerCount: Scalars['Int']['output'];
  followingCount: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likes: FragranceVoteConnection;
  reviews: FragranceReviewConnection;
  username: Scalars['String']['output'];
};


export type UserCollectionsArgs = {
  input?: InputMaybe<PaginationInput>;
};


export type UserLikesArgs = {
  input?: InputMaybe<PaginationInput>;
};


export type UserReviewsArgs = {
  input?: InputMaybe<PaginationInput>;
};

export type VoteOnAccordInput = {
  accordId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
  vote?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VoteOnFragranceInput = {
  fragranceId: Scalars['Int']['input'];
  vote?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VoteOnNoteInput = {
  fragranceId: Scalars['Int']['input'];
  layer: NoteLayer;
  noteId: Scalars['Int']['input'];
  vote?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VoteOnReviewInput = {
  reviewId: Scalars['Int']['input'];
  vote?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VoteOnTraitInput = {
  fragranceTraitId: Scalars['Int']['input'];
  vote: Scalars['Float']['input'];
};

export type VotePaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<VoteSortByInput>;
};

export const VoteSortBy = {
  Updated: 'UPDATED',
  Votes: 'VOTES'
} as const;

export type VoteSortBy = typeof VoteSortBy[keyof typeof VoteSortBy];
export type VoteSortByInput = {
  by?: InputMaybe<VoteSortBy>;
  direction?: InputMaybe<SortDirection>;
};

export type VoteSummary = {
  __typename?: 'VoteSummary';
  dislikesCount: Scalars['Int']['output'];
  likesCount: Scalars['Int']['output'];
  myVote?: Maybe<Scalars['Boolean']['output']>;
  voteScore: Scalars['Int']['output'];
};

export type AuthPayloadBaseFragment = { __typename?: 'AuthPayload', idToken: string, accessToken: string, expiresIn: number };

export type DeliveryResultBaseFragment = { __typename?: 'DeliveryResult', complete: boolean, delivery?: { __typename?: 'CodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null };

export type PageInfoBaseFragment = { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null };

export type AuditBaseFragment = { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null };

export type FragranceConnectionFragment = { __typename?: 'FragranceConnection', edges: Array<{ __typename?: 'FragranceEdge', node: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type FragranceImageConnectionFragment = { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> };

export type FragranceAccordConnectionFragment = { __typename?: 'FragranceAccordConnection', edges: Array<{ __typename?: 'FragranceAccordEdge', node: { __typename?: 'FragranceAccord', id: number, accordId: number, name: string, color: string, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type FragranceNoteConnectionFragment = { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type FragranceReviewConnectionFragment = { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', node: { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, user: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } }, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type FragranceCollectionConnectionFragment = { __typename?: 'FragranceCollectionConnection', edges: Array<{ __typename?: 'FragranceCollectionEdge', node: { __typename?: 'FragranceCollection', id: number, name: string, user: { __typename?: 'User', id: number, username: string }, items: { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, rank: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type FragranceCollectionItemConnectionFragment = { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, rank: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type FragranceVoteConnectionFragment = { __typename?: 'FragranceVoteConnection', edges: Array<{ __typename?: 'FragranceVoteEdge', node: { __typename?: 'FragranceVote', id: number, vote: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } };

export type FragranceSummaryFragment = { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } };

export type FragranceImageSummaryFragment = { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null };

export type FragranceTraitSummaryFragment = { __typename?: 'FragranceTrait', type: FragranceTraitType, voteScore: number, myVote?: number | null };

export type FragranceAccordSummaryFragment = { __typename?: 'FragranceAccord', id: number, accordId: number, name: string, color: string, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } };

export type FragranceNoteSummaryFragment = { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } };

export type FragranceReviewSummaryFragment = { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, user: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } }, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } };

export type FragranceCollectionSummaryFragment = { __typename?: 'FragranceCollection', id: number, name: string, user: { __typename?: 'User', id: number, username: string }, items: { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, rank: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } };

export type FragranceCollectionItemSummaryFragment = { __typename?: 'FragranceCollectionItem', id: number, rank: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } };

export type FragranceVoteSummaryFragment = { __typename?: 'FragranceVote', id: number, vote: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } };

export type UserSummaryFragment = { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } };

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh?: { __typename?: 'AuthPayload', idToken: string, accessToken: string, expiresIn: number } | null };

export type LogInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn: { __typename?: 'AuthPayload', idToken: string, accessToken: string, expiresIn: number } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logOut: boolean };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'DeliveryResult', complete: boolean, delivery?: { __typename?: 'CodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null } };

export type ConfirmSignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  confirmationCode: Scalars['String']['input'];
}>;


export type ConfirmSignUpMutation = { __typename?: 'Mutation', confirmSignUp: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } };

export type ResendSignUpConfirmationCodeMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ResendSignUpConfirmationCodeMutation = { __typename?: 'Mutation', resendSignUpConfirmationCode: { __typename?: 'DeliveryResult', complete: boolean, delivery?: { __typename?: 'CodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'DeliveryResult', complete: boolean, delivery?: { __typename?: 'CodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null } };

export type ConfirmForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  confirmationCode: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ConfirmForgotPasswordMutation = { __typename?: 'Mutation', confirmForgotPassword: { __typename?: 'GenericAuthResult', complete: boolean } };

export type LogFragranceViewMutationVariables = Exact<{
  input: LogFragranceViewInput;
}>;


export type LogFragranceViewMutation = { __typename?: 'Mutation', logFragranceView: boolean };

export type VoteOnFragranceMutationVariables = Exact<{
  input: VoteOnFragranceInput;
}>;


export type VoteOnFragranceMutation = { __typename?: 'Mutation', voteOnFragrance: { __typename?: 'FragranceVote', id: number } };

export type CollectionQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CollectionQuery = { __typename?: 'Query', collection: { __typename?: 'FragranceCollection', id: number, name: string, user: { __typename?: 'User', id: number, username: string }, items: { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, rank: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } };

export type CollectionItemsQueryVariables = Exact<{
  collectionId: Scalars['Int']['input'];
  input?: InputMaybe<PaginationInput>;
}>;


export type CollectionItemsQuery = { __typename?: 'Query', collection: { __typename?: 'FragranceCollection', id: number, items: { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, rank: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } };

export type FragranceQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FragranceQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', rating: number, reviewsCount: number, id: number, brand: string, name: string, reviewDistribution: { __typename?: 'FragranceReviewDistribution', one: number, two: number, three: number, four: number, five: number }, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } | null };

export type SuggestedFragrancesQueryVariables = Exact<{
  input?: InputMaybe<PaginationInput>;
}>;


export type SuggestedFragrancesQuery = { __typename?: 'Query', fragrances: { __typename?: 'FragranceConnection', edges: Array<{ __typename?: 'FragranceEdge', node: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type FragranceImagesQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  input?: InputMaybe<PaginationInput>;
}>;


export type FragranceImagesQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } | null };

export type FragranceTraitsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
}>;


export type FragranceTraitsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', traits: Array<{ __typename?: 'FragranceTrait', type: FragranceTraitType, voteScore: number, myVote?: number | null }> } | null };

export type FragranceAccordsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  input?: InputMaybe<AccordsInput>;
}>;


export type FragranceAccordsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, accords: { __typename?: 'FragranceAccordConnection', edges: Array<{ __typename?: 'FragranceAccordEdge', node: { __typename?: 'FragranceAccord', id: number, accordId: number, name: string, color: string, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragranceNotesQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  input?: InputMaybe<NotesInput>;
}>;


export type FragranceNotesQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, notes: { __typename?: 'FragranceNotes', top: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, middle: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, base: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } | null };

export type FragranceReviewsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  input?: InputMaybe<VotePaginationInput>;
}>;


export type FragranceReviewsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, reviews: { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', node: { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, user: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } }, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type MyFragranceReviewQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
}>;


export type MyFragranceReviewQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, brand: string, name: string, myReview?: { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, user: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } }, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } | null, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } | null };

export type UserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } | null };

export type UserCollectionsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  input?: InputMaybe<PaginationInput>;
}>;


export type UserCollectionsQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, collections: { __typename?: 'FragranceCollectionConnection', edges: Array<{ __typename?: 'FragranceCollectionEdge', node: { __typename?: 'FragranceCollection', id: number, name: string, user: { __typename?: 'User', id: number, username: string }, items: { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, rank: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type UserLikesQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  input?: InputMaybe<PaginationInput>;
}>;


export type UserLikesQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, likes: { __typename?: 'FragranceVoteConnection', edges: Array<{ __typename?: 'FragranceVoteEdge', node: { __typename?: 'FragranceVote', id: number, vote: number, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type UserReviewsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  input?: InputMaybe<PaginationInput>;
}>;


export type UserReviewsQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, reviews: { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', node: { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, user: { __typename?: 'User', id: number, username: string, email: string, followerCount: number, followingCount: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } }, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string, bg?: string | null } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export const AuthPayloadBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthPayloadBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<AuthPayloadBaseFragment, unknown>;
export const DeliveryResultBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeliveryResultBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<DeliveryResultBaseFragment, unknown>;
export const FragranceImageSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}}]} as unknown as DocumentNode<FragranceImageSummaryFragment, unknown>;
export const FragranceImageConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}}]} as unknown as DocumentNode<FragranceImageConnectionFragment, unknown>;
export const FragranceSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}}]} as unknown as DocumentNode<FragranceSummaryFragment, unknown>;
export const PageInfoBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PageInfoBaseFragment, unknown>;
export const FragranceConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceConnectionFragment, unknown>;
export const FragranceAccordSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceAccordSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accordId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}}]} as unknown as DocumentNode<FragranceAccordSummaryFragment, unknown>;
export const FragranceAccordConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceAccordConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccordConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceAccordSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceAccordSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accordId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceAccordConnectionFragment, unknown>;
export const FragranceNoteSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceNoteSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}}]} as unknown as DocumentNode<FragranceNoteSummaryFragment, unknown>;
export const FragranceNoteConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceNoteConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNoteConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceNoteSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceNoteSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceNoteConnectionFragment, unknown>;
export const AuditBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]} as unknown as DocumentNode<AuditBaseFragment, unknown>;
export const UserSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]} as unknown as DocumentNode<UserSummaryFragment, unknown>;
export const FragranceReviewSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}}]} as unknown as DocumentNode<FragranceReviewSummaryFragment, unknown>;
export const FragranceReviewConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceReviewSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceReviewConnectionFragment, unknown>;
export const FragranceCollectionItemSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]} as unknown as DocumentNode<FragranceCollectionItemSummaryFragment, unknown>;
export const FragranceCollectionItemConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceCollectionItemConnectionFragment, unknown>;
export const FragranceCollectionSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]} as unknown as DocumentNode<FragranceCollectionSummaryFragment, unknown>;
export const FragranceCollectionConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}}]} as unknown as DocumentNode<FragranceCollectionConnectionFragment, unknown>;
export const FragranceVoteSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceVoteSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vote"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}}]} as unknown as DocumentNode<FragranceVoteSummaryFragment, unknown>;
export const FragranceVoteConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceVoteConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVoteConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceVoteSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceVoteSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vote"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<FragranceVoteConnectionFragment, unknown>;
export const FragranceTraitSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceTraitSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<FragranceTraitSummaryFragment, unknown>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthPayloadBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthPayloadBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthPayloadBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthPayloadBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]} as unknown as DocumentNode<LogInMutation, LogInMutationVariables>;
export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logOut"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeliveryResultBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeliveryResultBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const ConfirmSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"confirmationCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}}]} as unknown as DocumentNode<ConfirmSignUpMutation, ConfirmSignUpMutationVariables>;
export const ResendSignUpConfirmationCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendSignUpConfirmationCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendSignUpConfirmationCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeliveryResultBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeliveryResultBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<ResendSignUpConfirmationCodeMutation, ResendSignUpConfirmationCodeMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeliveryResultBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeliveryResultBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeliveryResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ConfirmForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"confirmationCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complete"}}]}}]}}]} as unknown as DocumentNode<ConfirmForgotPasswordMutation, ConfirmForgotPasswordMutationVariables>;
export const LogFragranceViewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogFragranceView"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogFragranceViewInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logFragranceView"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LogFragranceViewMutation, LogFragranceViewMutationVariables>;
export const VoteOnFragranceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VoteOnFragrance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VoteOnFragranceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteOnFragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<VoteOnFragranceMutation, VoteOnFragranceMutationVariables>;
export const CollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Collection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}}]} as unknown as DocumentNode<CollectionQuery, CollectionQueryVariables>;
export const CollectionItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]} as unknown as DocumentNode<CollectionItemsQuery, CollectionItemsQueryVariables>;
export const FragranceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Fragrance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"reviewDistribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"one"}},{"kind":"Field","name":{"kind":"Name","value":"two"}},{"kind":"Field","name":{"kind":"Name","value":"three"}},{"kind":"Field","name":{"kind":"Name","value":"four"}},{"kind":"Field","name":{"kind":"Name","value":"five"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}}]} as unknown as DocumentNode<FragranceQuery, FragranceQueryVariables>;
export const SuggestedFragrancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestedFragrances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<SuggestedFragrancesQuery, SuggestedFragrancesQueryVariables>;
export const FragranceImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}}]} as unknown as DocumentNode<FragranceImagesQuery, FragranceImagesQueryVariables>;
export const FragranceTraitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceTraits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceTraitSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceTraitSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceTrait"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]} as unknown as DocumentNode<FragranceTraitsQuery, FragranceTraitsQueryVariables>;
export const FragranceAccordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceAccords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccordsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceAccordConnection"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceAccordSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accordId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceAccordConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceAccordConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceAccordSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]} as unknown as DocumentNode<FragranceAccordsQuery, FragranceAccordsQueryVariables>;
export const FragranceNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceNoteConnection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceNoteConnection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"base"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceNoteConnection"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceNoteSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceNoteConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceNoteConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceNoteSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]} as unknown as DocumentNode<FragranceNotesQuery, FragranceNotesQueryVariables>;
export const FragranceReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VotePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceReviewConnection"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceReviewSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]} as unknown as DocumentNode<FragranceReviewsQuery, FragranceReviewsQueryVariables>;
export const MyFragranceReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyFragranceReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}},{"kind":"Field","name":{"kind":"Name","value":"myReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceReviewSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}}]} as unknown as DocumentNode<MyFragranceReviewQuery, MyFragranceReviewQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UserCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionItemConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceCollectionSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceCollectionItemConnection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}}]} as unknown as DocumentNode<UserCollectionsQuery, UserCollectionsQueryVariables>;
export const UserLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserLikes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceVoteConnection"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceVoteSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vote"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceVoteConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceVoteConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceVoteSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]} as unknown as DocumentNode<UserLikesQuery, UserLikesQueryVariables>;
export const UserReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceReviewConnection"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuditBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Audit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"bg"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceImageConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceImageConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageSummary"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fragrance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceImageConnection"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuditBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragranceReviewConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FragranceReviewConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragranceReviewSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoBase"}}]}}]}}]} as unknown as DocumentNode<UserReviewsQuery, UserReviewsQueryVariables>;