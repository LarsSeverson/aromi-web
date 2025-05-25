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
};

export type AccordsInput = {
  fill?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<VotePaginationInput>;
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
  expiresAt: Scalars['Int']['output'];
  idToken: Scalars['String']['output'];
};

export type CodeDeliveryDetails = {
  __typename?: 'CodeDeliveryDetails';
  attribute?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
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

export type CreateFragranceReviewInput = {
  fragranceId: Scalars['Int']['input'];
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
};

export type DeleteFragranceCollectionItemInput = {
  collectionId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
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
export type MoveFragranceCollectionItemInput = {
  afterFragranceId?: InputMaybe<Scalars['Int']['input']>;
  beforeFragranceId?: InputMaybe<Scalars['Int']['input']>;
  collectionId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmForgotPassword: Scalars['Boolean']['output'];
  confirmSignUp: Scalars['Boolean']['output'];
  createFragranceCollection: FragranceCollection;
  createFragranceCollectionItem: FragranceCollectionItem;
  createFragranceReview: FragranceReview;
  deleteFragranceCollectionItem: Scalars['Boolean']['output'];
  forgotPassword: Scalars['Boolean']['output'];
  logIn: AuthPayload;
  logOut: Scalars['Boolean']['output'];
  moveFragranceCollectionItem: FragranceCollection;
  refresh?: Maybe<AuthPayload>;
  resendSignUpConfirmationCode: Scalars['Boolean']['output'];
  signUp: SignUpResult;
  voteOnAccord: FragranceAccord;
  voteOnFragrance: Fragrance;
  voteOnNote: FragranceNote;
  voteOnReview: FragranceReview;
  voteOnTrait: FragranceTrait;
};


export type MutationConfirmForgotPasswordArgs = {
  confirmationCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
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


export type MutationCreateFragranceReviewArgs = {
  input: CreateFragranceReviewInput;
};


export type MutationDeleteFragranceCollectionItemArgs = {
  input: DeleteFragranceCollectionItemInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
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


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type SignUpResult = {
  __typename?: 'SignUpResult';
  complete: Scalars['Boolean']['output'];
  delivery?: Maybe<CodeDeliveryDetails>;
};

export const SortBy = {
  CreatedAt: 'createdAt',
  Id: 'id',
  UpdatedAt: 'updatedAt'
} as const;

export type SortBy = typeof SortBy[keyof typeof SortBy];
export type SortByInput = {
  by?: SortBy;
  direction?: SortDirection;
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
  likes: FragranceConnection;
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
  CreatedAt: 'createdAt',
  Id: 'id',
  UpdatedAt: 'updatedAt',
  VoteScore: 'voteScore'
} as const;

export type VoteSortBy = typeof VoteSortBy[keyof typeof VoteSortBy];
export type VoteSortByInput = {
  by?: VoteSortBy;
  direction?: SortDirection;
};

export type VoteSummary = {
  __typename?: 'VoteSummary';
  dislikesCount: Scalars['Int']['output'];
  likesCount: Scalars['Int']['output'];
  myVote?: Maybe<Scalars['Boolean']['output']>;
  voteScore: Scalars['Int']['output'];
};

export type CollectionInfoQueryVariables = Exact<{
  collectionId: Scalars['Int']['input'];
}>;


export type CollectionInfoQuery = { __typename?: 'Query', collection: { __typename?: 'FragranceCollection', id: number, name: string, user: { __typename?: 'User', id: number, username: string }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date } } };

export type CollectionItemsQueryVariables = Exact<{
  collectionId: Scalars['Int']['input'];
  itemsInput?: InputMaybe<PaginationInput>;
  imagesInput?: InputMaybe<PaginationInput>;
}>;


export type CollectionItemsQuery = { __typename?: 'Query', collection: { __typename?: 'FragranceCollection', id: number, items: { __typename?: 'FragranceCollectionItemConnection', pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date }, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string } }> } } } }> } } };

export type ConfirmForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  confirmationCode: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ConfirmForgotPasswordMutation = { __typename?: 'Mutation', confirmForgotPassword: boolean };

export type ConfirmSignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  confirmationCode: Scalars['String']['input'];
}>;


export type ConfirmSignUpMutation = { __typename?: 'Mutation', confirmSignUp: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type FragranceAccordsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  accordsInput?: InputMaybe<AccordsInput>;
}>;


export type FragranceAccordsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, accords: { __typename?: 'FragranceAccordConnection', edges: Array<{ __typename?: 'FragranceAccordEdge', node: { __typename?: 'FragranceAccord', id: number, accordId: number, name: string, color: string, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragranceImagesQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  imagesInput?: InputMaybe<PaginationInput>;
}>;


export type FragranceImagesQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragranceInfoQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
}>;


export type FragranceInfoQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, brand: string, name: string, rating: number, reviewsCount: number, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, reviewDistribution: { __typename?: 'FragranceReviewDistribution', one: number, two: number, three: number, four: number, five: number } } | null };

export type FragranceNotesQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  includeTop?: InputMaybe<Scalars['Boolean']['input']>;
  includeMiddle?: InputMaybe<Scalars['Boolean']['input']>;
  includeBase?: InputMaybe<Scalars['Boolean']['input']>;
  notesInput?: InputMaybe<NotesInput>;
}>;


export type FragranceNotesQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, notes: { __typename?: 'FragranceNotes', top?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, middle?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, base?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } | null };

export type FragranceNotesLayerQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  includeTop?: InputMaybe<Scalars['Boolean']['input']>;
  includeMiddle?: InputMaybe<Scalars['Boolean']['input']>;
  includeBase?: InputMaybe<Scalars['Boolean']['input']>;
  notesInput?: InputMaybe<NotesInput>;
}>;


export type FragranceNotesLayerQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, notes: { __typename?: 'FragranceNotes', top?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, middle?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, base?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, layer: NoteLayer, isFill: boolean, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } | null };

export type FragranceReviewsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  reviewsInput?: InputMaybe<VotePaginationInput>;
}>;


export type FragranceReviewsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, reviews: { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', node: { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, user: { __typename?: 'User', id: number, username: string }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragranceTraitsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
}>;


export type FragranceTraitsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, traits: Array<{ __typename?: 'FragranceTrait', type: FragranceTraitType, voteScore: number, myVote?: number | null }> } | null };

export type LogInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn: { __typename?: 'AuthPayload', idToken: string, accessToken: string, expiresAt: number } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logOut: boolean };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, email: string } | null };

export type MyReviewQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
}>;


export type MyReviewQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, myReview?: { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, user: { __typename?: 'User', id: number, username: string }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } | null } | null };

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh?: { __typename?: 'AuthPayload', idToken: string, accessToken: string, expiresAt: number } | null };

export type ResendSignUpConfirmationCodeMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ResendSignUpConfirmationCodeMutation = { __typename?: 'Mutation', resendSignUpConfirmationCode: boolean };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpResult', complete: boolean, delivery?: { __typename?: 'CodeDeliveryDetails', attribute?: string | null, destination?: string | null, method?: string | null } | null } };

export type SuggestedFragrancesQueryVariables = Exact<{
  input?: InputMaybe<PaginationInput>;
  imagesInput?: InputMaybe<PaginationInput>;
}>;


export type SuggestedFragrancesQuery = { __typename?: 'Query', fragrances: { __typename?: 'FragranceConnection', edges: Array<{ __typename?: 'FragranceEdge', node: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UserCollectionsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  collectionsInput?: InputMaybe<PaginationInput>;
  collectionItemsInput?: InputMaybe<PaginationInput>;
  imagesInput?: InputMaybe<PaginationInput>;
}>;


export type UserCollectionsQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, collections: { __typename?: 'FragranceCollectionConnection', edges: Array<{ __typename?: 'FragranceCollectionEdge', node: { __typename?: 'FragranceCollection', id: number, name: string, user: { __typename?: 'User', id: number, username: string }, items: { __typename?: 'FragranceCollectionItemConnection', edges: Array<{ __typename?: 'FragranceCollectionItemEdge', node: { __typename?: 'FragranceCollectionItem', id: number, fragrance: { __typename?: 'Fragrance', id: number, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string } }> } } } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type UserInfoQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type UserInfoQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, username: string, followerCount: number, followingCount: number } | null };

export type UserLikesQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  likesInput?: InputMaybe<PaginationInput>;
  imagesInput?: InputMaybe<PaginationInput>;
}>;


export type UserLikesQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, likes: { __typename?: 'FragranceConnection', edges: Array<{ __typename?: 'FragranceEdge', node: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type UserReviewsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  reviewsInput?: InputMaybe<PaginationInput>;
  imagesInput?: InputMaybe<PaginationInput>;
}>;


export type UserReviewsQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, reviews: { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', node: { __typename?: 'FragranceReview', id: number, rating: number, text: string, votes: { __typename?: 'VoteSummary', voteScore: number, likesCount: number, dislikesCount: number, myVote?: boolean | null }, fragrance: { __typename?: 'Fragrance', id: number, brand: string, name: string, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, src: string } }> } }, audit: { __typename?: 'Audit', createdAt: Date, updatedAt: Date, deletedAt?: Date | null } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };


export const CollectionInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CollectionInfoQuery, CollectionInfoQueryVariables>;
export const CollectionItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"ASCENDING"}}]}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CollectionItemsQuery, CollectionItemsQueryVariables>;
export const ConfirmForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"confirmationCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<ConfirmForgotPasswordMutation, ConfirmForgotPasswordMutationVariables>;
export const ConfirmSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"confirmationCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmationCode"}}}]}]}}]} as unknown as DocumentNode<ConfirmSignUpMutation, ConfirmSignUpMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const FragranceAccordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceAccords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accordsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccordsInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"18"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"voteScore"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fill"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accordsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accordId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceAccordsQuery, FragranceAccordsQueryVariables>;
export const FragranceImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceImagesQuery, FragranceImagesQueryVariables>;
export const FragranceInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewDistribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"one"}},{"kind":"Field","name":{"kind":"Name","value":"two"}},{"kind":"Field","name":{"kind":"Name","value":"three"}},{"kind":"Field","name":{"kind":"Name","value":"four"}},{"kind":"Field","name":{"kind":"Name","value":"five"}}]}}]}}]}}]} as unknown as DocumentNode<FragranceInfoQuery, FragranceInfoQueryVariables>;
export const FragranceNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotesInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"12"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"voteScore"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fill"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"base"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceNotesQuery, FragranceNotesQueryVariables>;
export const FragranceNotesLayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceNotesLayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotesInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"18"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"voteScore"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fill"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"base"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isFill"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceNotesLayerQuery, FragranceNotesLayerQueryVariables>;
export const FragranceReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VotePaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"voteScore"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceReviewsQuery, FragranceReviewsQueryVariables>;
export const FragranceTraitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceTraits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}}]}}]} as unknown as DocumentNode<FragranceTraitsQuery, FragranceTraitsQueryVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}}]}}]} as unknown as DocumentNode<LogInMutation, LogInMutationVariables>;
export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logOut"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
export const MeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<MeQueryQuery, MeQueryQueryVariables>;
export const MyReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"myReview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyReviewQuery, MyReviewQueryVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}}]}}]} as unknown as DocumentNode<RefreshMutation, RefreshMutationVariables>;
export const ResendSignUpConfirmationCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendSignUpConfirmationCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendSignUpConfirmationCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<ResendSignUpConfirmationCodeMutation, ResendSignUpConfirmationCodeMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribute"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"method"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const SuggestedFragrancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestedFragrances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SuggestedFragrancesQuery, SuggestedFragrancesQueryVariables>;
export const UserCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionItemsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionItemsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserCollectionsQuery, UserCollectionsQueryVariables>;
export const UserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}}]}}]}}]} as unknown as DocumentNode<UserInfoQuery, UserInfoQueryVariables>;
export const UserLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserLikes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserLikesQuery, UserLikesQueryVariables>;
export const UserReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voteScore"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"dislikesCount"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"audit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserReviewsQuery, UserReviewsQueryVariables>;