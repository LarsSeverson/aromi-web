/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment AuthPayloadBase on AuthPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n": typeof types.AuthPayloadBaseFragmentDoc,
    "\n  fragment DeliveryResultBase on DeliveryResult {\n    complete\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n": typeof types.DeliveryResultBaseFragmentDoc,
    "\n  fragment PageInfoBase on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": typeof types.PageInfoBaseFragmentDoc,
    "\n  fragment AuditBase on Audit {\n    createdAt\n    updatedAt\n    deletedAt\n  }\n": typeof types.AuditBaseFragmentDoc,
    "\n  fragment FragranceConnection on FragranceConnection {\n    edges {\n      node {\n        ...FragranceSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": typeof types.FragranceConnectionFragmentDoc,
    "\n  fragment FragranceImageConnection on FragranceImageConnection {\n    edges {\n      node {\n        ...FragranceImageSummary\n      }\n    }\n  }\n": typeof types.FragranceImageConnectionFragmentDoc,
    "\n  fragment FragranceAccordConnection on FragranceAccordConnection {\n    edges {\n      node {\n        ...FragranceAccordSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": typeof types.FragranceAccordConnectionFragmentDoc,
    "\n  fragment FragranceNoteConnection on FragranceNoteConnection {\n    edges {\n      node {\n        ...FragranceNoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": typeof types.FragranceNoteConnectionFragmentDoc,
    "\n  fragment FragranceReviewConnection on FragranceReviewConnection {\n    edges {\n      node {\n        ...FragranceReviewSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": typeof types.FragranceReviewConnectionFragmentDoc,
    "\n  fragment FragranceCollectionConnection on FragranceCollectionConnection {\n    edges {\n      node {\n        ...FragranceCollectionSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": typeof types.FragranceCollectionConnectionFragmentDoc,
    "\n  fragment FragranceCollectionItemConnection on FragranceCollectionItemConnection {\n    edges {\n      node {\n        ...FragranceCollectionItemSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": typeof types.FragranceCollectionItemConnectionFragmentDoc,
    "\n  fragment FragranceVoteConnection on FragranceVoteConnection {\n    edges {\n      node {\n        ...FragranceVoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": typeof types.FragranceVoteConnectionFragmentDoc,
    "\n  fragment FragranceSummary on Fragrance {\n    id\n    brand\n    name\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    images(input: { first: 1 }) {\n      ...FragranceImageConnection \n    }\n  }\n": typeof types.FragranceSummaryFragmentDoc,
    "\n  fragment FragranceImageSummary on FragranceImage {\n    id\n    src\n    bg\n    width\n    height\n  }\n": typeof types.FragranceImageSummaryFragmentDoc,
    "\n  fragment FragranceTraitSummary on FragranceTrait {\n    type\n    voteScore\n    myVote\n  }\n": typeof types.FragranceTraitSummaryFragmentDoc,
    "\n  fragment FragranceAccordSummary on FragranceAccord {\n    id\n    accordId\n    name\n    color\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": typeof types.FragranceAccordSummaryFragmentDoc,
    "\n  fragment FragranceNoteSummary on FragranceNote {\n    id\n    noteId\n    name\n    layer\n    thumbnail\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n  }\n": typeof types.FragranceNoteSummaryFragmentDoc,
    "\n  fragment FragranceReviewSummary on FragranceReview {\n    id\n    rating\n    text\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    user {\n      ...UserSummary\n    }\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": typeof types.FragranceReviewSummaryFragmentDoc,
    "\n  fragment FragranceCollectionSummary on FragranceCollection {\n    id\n    name\n    user {\n      id\n      username\n    }\n    items(input: { first: 4 }) {\n      ...FragranceCollectionItemConnection\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": typeof types.FragranceCollectionSummaryFragmentDoc,
    "\n  fragment FragranceCollectionItemSummary on FragranceCollectionItem {\n    id\n    rank\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": typeof types.FragranceCollectionItemSummaryFragmentDoc,
    "\n  fragment FragranceVoteSummary on FragranceVote {\n    id\n    vote\n    fragrance {\n      ...FragranceSummary\n    }\n  }\n": typeof types.FragranceVoteSummaryFragmentDoc,
    "\n  fragment UserSummary on User {\n    id\n    username\n    email\n    followerCount\n    followingCount\n    audit {\n      ...AuditBase\n    }\n  }\n": typeof types.UserSummaryFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AuthPayloadBase \n    }\n  }\n": typeof types.RefreshDocument,
    "\n  mutation LogIn(\n    $email: String!\n    $password: String!\n  ) {\n    logIn(email: $email, password: $password) {\n      ...AuthPayloadBase\n    }\n  }\n": typeof types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": typeof types.LogOutDocument,
    "\n  mutation SignUp(\n    $email: String!\n    $password: String!\n  ) {\n    signUp(email: $email, password: $password) {\n      ...DeliveryResultBase\n    }\n  }\n": typeof types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $email: String!\n    $confirmationCode: String!\n  ) {\n    confirmSignUp(\n      email: $email\n      confirmationCode: $confirmationCode\n    ) {\n      ...UserSummary\n    }\n  }\n": typeof types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpConfirmationCode(\n    $email: String!\n  ) {\n    resendSignUpConfirmationCode(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n": typeof types.ResendSignUpConfirmationCodeDocument,
    "\n  mutation ForgotPassword(\n    $email: String!\n  ) {\n    forgotPassword(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n": typeof types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $email: String!\n    $confirmationCode: String!\n    $newPassword: String!\n  ) {\n    confirmForgotPassword(email: $email, confirmationCode: $confirmationCode, newPassword: $newPassword) {\n      complete\n    }\n  }\n": typeof types.ConfirmForgotPasswordDocument,
    "\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...FragranceCollectionSummary\n    }\n  }\n": typeof types.CreateFragranceCollectionDocument,
    "\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n": typeof types.CreateFragranceCollectionItemDocument,
    "\n  mutation MoveFragranceCollectionItem(\n    $input: MoveFragranceCollectionItemInput!\n  ) {\n    moveFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n": typeof types.MoveFragranceCollectionItemDocument,
    "\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n": typeof types.DeleteFragranceCollectionItemDocument,
    "\n  mutation LogFragranceView (\n    $input: LogFragranceViewInput!\n  ) {\n    logFragranceView(input: $input)\n  }\n": typeof types.LogFragranceViewDocument,
    "\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      id\n    }\n  }\n": typeof types.VoteOnFragranceDocument,
    "\n  mutation VoteOnReview(\n    $input: VoteOnReviewInput!\n  ) {\n    voteOnReview(input: $input) {\n      id\n    }\n  }\n": typeof types.VoteOnReviewDocument,
    "\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n": typeof types.CreateFragranceReportDocument,
    "\n  mutation CreateReviewReport(\n    $input: CreateReviewReportInput!\n  ) {\n    createReviewReport(input: $input) {\n      id\n    }\n  }\n": typeof types.CreateReviewReportDocument,
    "\n  query Collection(\n    $id: Int!\n  ) {\n    collection(id: $id) {\n      ...FragranceCollectionSummary\n    }\n  }\n": typeof types.CollectionDocument,
    "\n  query CollectionItems(\n    $collectionId: Int!\n    $input: ControlledPaginationInput \n  ) {\n    collection(id: $collectionId) {\n      id\n      items(input: $input) {\n        ...FragranceCollectionItemConnection\n      }\n    }\n  }\n": typeof types.CollectionItemsDocument,
    "\n  query Fragrance(\n    $id: Int!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceSummary\n      rating\n      reviewsCount\n      reviewDistribution {\n        one\n        two\n        three\n        four\n        five\n      }\n    }\n  }\n": typeof types.FragranceDocument,
    "\n  query SuggestedFragrances(\n    $input: PaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragranceSummary\n        }\n      } \n      pageInfo {\n        ...PageInfoBase\n      }\n    }\n  }\n": typeof types.SuggestedFragrancesDocument,
    "\n  query FragranceImages(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images(input: $input) {\n        ...FragranceImageConnection\n      }\n    }\n  }\n": typeof types.FragranceImagesDocument,
    "\n  query FragranceTraits(\n    $fragranceId: Int!\n  ) {\n    fragrance (id: $fragranceId) {\n      traits {\n        ...FragranceTraitSummary\n      }\n    }\n  }\n": typeof types.FragranceTraitsDocument,
    "\n  query FragranceAccords(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    } \n  }\n": typeof types.FragranceAccordsDocument,
    "\n  query FillerFragranceAccords(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      fillerAccords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        }\n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n": typeof types.FillerFragranceAccordsDocument,
    "\n  query FragranceNotes(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      notes {\n        top(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        middle(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        base(input: $input) {\n          ...FragranceNoteConnection\n        }\n      }\n    }\n  }\n": typeof types.FragranceNotesDocument,
    "\n  query FragranceReviews(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n": typeof types.FragranceReviewsDocument,
    "\n  query MyFragranceReview(\n    $fragranceId: Int!\n  ) {\n    fragrance(id: $fragranceId) {\n      ...FragranceSummary\n      myReview {\n        ...FragranceReviewSummary\n      }\n    }\n  }\n": typeof types.MyFragranceReviewDocument,
    "\n  query Me {\n    me {\n      ...UserSummary\n    }\n  }\n": typeof types.MeDocument,
    "\n  query User(\n    $id: Int!\n  ) {\n    user(id: $id) {\n      ...UserSummary\n    }\n  }\n": typeof types.UserDocument,
    "\n  query UserCollections(\n    $userId: Int!\n    $fragranceId: Int\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionSummary\n            hasFragrance(fragranceId: $fragranceId)\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n": typeof types.UserCollectionsDocument,
    "\n  query UserLikes(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      likes(input: $input) {\n        ...FragranceVoteConnection\n      }\n    }\n  }\n": typeof types.UserLikesDocument,
    "\n  query UserReviews(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n": typeof types.UserReviewsDocument,
};
const documents: Documents = {
    "\n  fragment AuthPayloadBase on AuthPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n": types.AuthPayloadBaseFragmentDoc,
    "\n  fragment DeliveryResultBase on DeliveryResult {\n    complete\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n": types.DeliveryResultBaseFragmentDoc,
    "\n  fragment PageInfoBase on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": types.PageInfoBaseFragmentDoc,
    "\n  fragment AuditBase on Audit {\n    createdAt\n    updatedAt\n    deletedAt\n  }\n": types.AuditBaseFragmentDoc,
    "\n  fragment FragranceConnection on FragranceConnection {\n    edges {\n      node {\n        ...FragranceSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": types.FragranceConnectionFragmentDoc,
    "\n  fragment FragranceImageConnection on FragranceImageConnection {\n    edges {\n      node {\n        ...FragranceImageSummary\n      }\n    }\n  }\n": types.FragranceImageConnectionFragmentDoc,
    "\n  fragment FragranceAccordConnection on FragranceAccordConnection {\n    edges {\n      node {\n        ...FragranceAccordSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": types.FragranceAccordConnectionFragmentDoc,
    "\n  fragment FragranceNoteConnection on FragranceNoteConnection {\n    edges {\n      node {\n        ...FragranceNoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": types.FragranceNoteConnectionFragmentDoc,
    "\n  fragment FragranceReviewConnection on FragranceReviewConnection {\n    edges {\n      node {\n        ...FragranceReviewSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": types.FragranceReviewConnectionFragmentDoc,
    "\n  fragment FragranceCollectionConnection on FragranceCollectionConnection {\n    edges {\n      node {\n        ...FragranceCollectionSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": types.FragranceCollectionConnectionFragmentDoc,
    "\n  fragment FragranceCollectionItemConnection on FragranceCollectionItemConnection {\n    edges {\n      node {\n        ...FragranceCollectionItemSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": types.FragranceCollectionItemConnectionFragmentDoc,
    "\n  fragment FragranceVoteConnection on FragranceVoteConnection {\n    edges {\n      node {\n        ...FragranceVoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n": types.FragranceVoteConnectionFragmentDoc,
    "\n  fragment FragranceSummary on Fragrance {\n    id\n    brand\n    name\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    images(input: { first: 1 }) {\n      ...FragranceImageConnection \n    }\n  }\n": types.FragranceSummaryFragmentDoc,
    "\n  fragment FragranceImageSummary on FragranceImage {\n    id\n    src\n    bg\n    width\n    height\n  }\n": types.FragranceImageSummaryFragmentDoc,
    "\n  fragment FragranceTraitSummary on FragranceTrait {\n    type\n    voteScore\n    myVote\n  }\n": types.FragranceTraitSummaryFragmentDoc,
    "\n  fragment FragranceAccordSummary on FragranceAccord {\n    id\n    accordId\n    name\n    color\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": types.FragranceAccordSummaryFragmentDoc,
    "\n  fragment FragranceNoteSummary on FragranceNote {\n    id\n    noteId\n    name\n    layer\n    thumbnail\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n  }\n": types.FragranceNoteSummaryFragmentDoc,
    "\n  fragment FragranceReviewSummary on FragranceReview {\n    id\n    rating\n    text\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    user {\n      ...UserSummary\n    }\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": types.FragranceReviewSummaryFragmentDoc,
    "\n  fragment FragranceCollectionSummary on FragranceCollection {\n    id\n    name\n    user {\n      id\n      username\n    }\n    items(input: { first: 4 }) {\n      ...FragranceCollectionItemConnection\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": types.FragranceCollectionSummaryFragmentDoc,
    "\n  fragment FragranceCollectionItemSummary on FragranceCollectionItem {\n    id\n    rank\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n": types.FragranceCollectionItemSummaryFragmentDoc,
    "\n  fragment FragranceVoteSummary on FragranceVote {\n    id\n    vote\n    fragrance {\n      ...FragranceSummary\n    }\n  }\n": types.FragranceVoteSummaryFragmentDoc,
    "\n  fragment UserSummary on User {\n    id\n    username\n    email\n    followerCount\n    followingCount\n    audit {\n      ...AuditBase\n    }\n  }\n": types.UserSummaryFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AuthPayloadBase \n    }\n  }\n": types.RefreshDocument,
    "\n  mutation LogIn(\n    $email: String!\n    $password: String!\n  ) {\n    logIn(email: $email, password: $password) {\n      ...AuthPayloadBase\n    }\n  }\n": types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": types.LogOutDocument,
    "\n  mutation SignUp(\n    $email: String!\n    $password: String!\n  ) {\n    signUp(email: $email, password: $password) {\n      ...DeliveryResultBase\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $email: String!\n    $confirmationCode: String!\n  ) {\n    confirmSignUp(\n      email: $email\n      confirmationCode: $confirmationCode\n    ) {\n      ...UserSummary\n    }\n  }\n": types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpConfirmationCode(\n    $email: String!\n  ) {\n    resendSignUpConfirmationCode(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n": types.ResendSignUpConfirmationCodeDocument,
    "\n  mutation ForgotPassword(\n    $email: String!\n  ) {\n    forgotPassword(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n": types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $email: String!\n    $confirmationCode: String!\n    $newPassword: String!\n  ) {\n    confirmForgotPassword(email: $email, confirmationCode: $confirmationCode, newPassword: $newPassword) {\n      complete\n    }\n  }\n": types.ConfirmForgotPasswordDocument,
    "\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...FragranceCollectionSummary\n    }\n  }\n": types.CreateFragranceCollectionDocument,
    "\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n": types.CreateFragranceCollectionItemDocument,
    "\n  mutation MoveFragranceCollectionItem(\n    $input: MoveFragranceCollectionItemInput!\n  ) {\n    moveFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n": types.MoveFragranceCollectionItemDocument,
    "\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n": types.DeleteFragranceCollectionItemDocument,
    "\n  mutation LogFragranceView (\n    $input: LogFragranceViewInput!\n  ) {\n    logFragranceView(input: $input)\n  }\n": types.LogFragranceViewDocument,
    "\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      id\n    }\n  }\n": types.VoteOnFragranceDocument,
    "\n  mutation VoteOnReview(\n    $input: VoteOnReviewInput!\n  ) {\n    voteOnReview(input: $input) {\n      id\n    }\n  }\n": types.VoteOnReviewDocument,
    "\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n": types.CreateFragranceReportDocument,
    "\n  mutation CreateReviewReport(\n    $input: CreateReviewReportInput!\n  ) {\n    createReviewReport(input: $input) {\n      id\n    }\n  }\n": types.CreateReviewReportDocument,
    "\n  query Collection(\n    $id: Int!\n  ) {\n    collection(id: $id) {\n      ...FragranceCollectionSummary\n    }\n  }\n": types.CollectionDocument,
    "\n  query CollectionItems(\n    $collectionId: Int!\n    $input: ControlledPaginationInput \n  ) {\n    collection(id: $collectionId) {\n      id\n      items(input: $input) {\n        ...FragranceCollectionItemConnection\n      }\n    }\n  }\n": types.CollectionItemsDocument,
    "\n  query Fragrance(\n    $id: Int!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceSummary\n      rating\n      reviewsCount\n      reviewDistribution {\n        one\n        two\n        three\n        four\n        five\n      }\n    }\n  }\n": types.FragranceDocument,
    "\n  query SuggestedFragrances(\n    $input: PaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragranceSummary\n        }\n      } \n      pageInfo {\n        ...PageInfoBase\n      }\n    }\n  }\n": types.SuggestedFragrancesDocument,
    "\n  query FragranceImages(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images(input: $input) {\n        ...FragranceImageConnection\n      }\n    }\n  }\n": types.FragranceImagesDocument,
    "\n  query FragranceTraits(\n    $fragranceId: Int!\n  ) {\n    fragrance (id: $fragranceId) {\n      traits {\n        ...FragranceTraitSummary\n      }\n    }\n  }\n": types.FragranceTraitsDocument,
    "\n  query FragranceAccords(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    } \n  }\n": types.FragranceAccordsDocument,
    "\n  query FillerFragranceAccords(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      fillerAccords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        }\n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n": types.FillerFragranceAccordsDocument,
    "\n  query FragranceNotes(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      notes {\n        top(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        middle(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        base(input: $input) {\n          ...FragranceNoteConnection\n        }\n      }\n    }\n  }\n": types.FragranceNotesDocument,
    "\n  query FragranceReviews(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n": types.FragranceReviewsDocument,
    "\n  query MyFragranceReview(\n    $fragranceId: Int!\n  ) {\n    fragrance(id: $fragranceId) {\n      ...FragranceSummary\n      myReview {\n        ...FragranceReviewSummary\n      }\n    }\n  }\n": types.MyFragranceReviewDocument,
    "\n  query Me {\n    me {\n      ...UserSummary\n    }\n  }\n": types.MeDocument,
    "\n  query User(\n    $id: Int!\n  ) {\n    user(id: $id) {\n      ...UserSummary\n    }\n  }\n": types.UserDocument,
    "\n  query UserCollections(\n    $userId: Int!\n    $fragranceId: Int\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionSummary\n            hasFragrance(fragranceId: $fragranceId)\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n": types.UserCollectionsDocument,
    "\n  query UserLikes(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      likes(input: $input) {\n        ...FragranceVoteConnection\n      }\n    }\n  }\n": types.UserLikesDocument,
    "\n  query UserReviews(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n": types.UserReviewsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuthPayloadBase on AuthPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n"): (typeof documents)["\n  fragment AuthPayloadBase on AuthPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment DeliveryResultBase on DeliveryResult {\n    complete\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n"): (typeof documents)["\n  fragment DeliveryResultBase on DeliveryResult {\n    complete\n    delivery {\n      attribute\n      destination\n      method\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PageInfoBase on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"): (typeof documents)["\n  fragment PageInfoBase on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AuditBase on Audit {\n    createdAt\n    updatedAt\n    deletedAt\n  }\n"): (typeof documents)["\n  fragment AuditBase on Audit {\n    createdAt\n    updatedAt\n    deletedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceConnection on FragranceConnection {\n    edges {\n      node {\n        ...FragranceSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceConnection on FragranceConnection {\n    edges {\n      node {\n        ...FragranceSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceImageConnection on FragranceImageConnection {\n    edges {\n      node {\n        ...FragranceImageSummary\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceImageConnection on FragranceImageConnection {\n    edges {\n      node {\n        ...FragranceImageSummary\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceAccordConnection on FragranceAccordConnection {\n    edges {\n      node {\n        ...FragranceAccordSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceAccordConnection on FragranceAccordConnection {\n    edges {\n      node {\n        ...FragranceAccordSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceNoteConnection on FragranceNoteConnection {\n    edges {\n      node {\n        ...FragranceNoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceNoteConnection on FragranceNoteConnection {\n    edges {\n      node {\n        ...FragranceNoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceReviewConnection on FragranceReviewConnection {\n    edges {\n      node {\n        ...FragranceReviewSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceReviewConnection on FragranceReviewConnection {\n    edges {\n      node {\n        ...FragranceReviewSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceCollectionConnection on FragranceCollectionConnection {\n    edges {\n      node {\n        ...FragranceCollectionSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceCollectionConnection on FragranceCollectionConnection {\n    edges {\n      node {\n        ...FragranceCollectionSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceCollectionItemConnection on FragranceCollectionItemConnection {\n    edges {\n      node {\n        ...FragranceCollectionItemSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceCollectionItemConnection on FragranceCollectionItemConnection {\n    edges {\n      node {\n        ...FragranceCollectionItemSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceVoteConnection on FragranceVoteConnection {\n    edges {\n      node {\n        ...FragranceVoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceVoteConnection on FragranceVoteConnection {\n    edges {\n      node {\n        ...FragranceVoteSummary\n      }\n    }\n    pageInfo {\n      ...PageInfoBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceSummary on Fragrance {\n    id\n    brand\n    name\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    images(input: { first: 1 }) {\n      ...FragranceImageConnection \n    }\n  }\n"): (typeof documents)["\n  fragment FragranceSummary on Fragrance {\n    id\n    brand\n    name\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    images(input: { first: 1 }) {\n      ...FragranceImageConnection \n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceImageSummary on FragranceImage {\n    id\n    src\n    bg\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment FragranceImageSummary on FragranceImage {\n    id\n    src\n    bg\n    width\n    height\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceTraitSummary on FragranceTrait {\n    type\n    voteScore\n    myVote\n  }\n"): (typeof documents)["\n  fragment FragranceTraitSummary on FragranceTrait {\n    type\n    voteScore\n    myVote\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceAccordSummary on FragranceAccord {\n    id\n    accordId\n    name\n    color\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceAccordSummary on FragranceAccord {\n    id\n    accordId\n    name\n    color\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceNoteSummary on FragranceNote {\n    id\n    noteId\n    name\n    layer\n    thumbnail\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceNoteSummary on FragranceNote {\n    id\n    noteId\n    name\n    layer\n    thumbnail\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceReviewSummary on FragranceReview {\n    id\n    rating\n    text\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    user {\n      ...UserSummary\n    }\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceReviewSummary on FragranceReview {\n    id\n    rating\n    text\n    votes {\n      voteScore\n      likesCount\n      dislikesCount\n      myVote\n    }\n    user {\n      ...UserSummary\n    }\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceCollectionSummary on FragranceCollection {\n    id\n    name\n    user {\n      id\n      username\n    }\n    items(input: { first: 4 }) {\n      ...FragranceCollectionItemConnection\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceCollectionSummary on FragranceCollection {\n    id\n    name\n    user {\n      id\n      username\n    }\n    items(input: { first: 4 }) {\n      ...FragranceCollectionItemConnection\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceCollectionItemSummary on FragranceCollectionItem {\n    id\n    rank\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceCollectionItemSummary on FragranceCollectionItem {\n    id\n    rank\n    fragrance {\n      ...FragranceSummary\n    }\n    audit {\n      ...AuditBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceVoteSummary on FragranceVote {\n    id\n    vote\n    fragrance {\n      ...FragranceSummary\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceVoteSummary on FragranceVote {\n    id\n    vote\n    fragrance {\n      ...FragranceSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserSummary on User {\n    id\n    username\n    email\n    followerCount\n    followingCount\n    audit {\n      ...AuditBase\n    }\n  }\n"): (typeof documents)["\n  fragment UserSummary on User {\n    id\n    username\n    email\n    followerCount\n    followingCount\n    audit {\n      ...AuditBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Refresh {\n    refresh {\n      ...AuthPayloadBase \n    }\n  }\n"): (typeof documents)["\n  mutation Refresh {\n    refresh {\n      ...AuthPayloadBase \n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogIn(\n    $email: String!\n    $password: String!\n  ) {\n    logIn(email: $email, password: $password) {\n      ...AuthPayloadBase\n    }\n  }\n"): (typeof documents)["\n  mutation LogIn(\n    $email: String!\n    $password: String!\n  ) {\n    logIn(email: $email, password: $password) {\n      ...AuthPayloadBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogOut {\n    logOut\n  }\n"): (typeof documents)["\n  mutation LogOut {\n    logOut\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignUp(\n    $email: String!\n    $password: String!\n  ) {\n    signUp(email: $email, password: $password) {\n      ...DeliveryResultBase\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp(\n    $email: String!\n    $password: String!\n  ) {\n    signUp(email: $email, password: $password) {\n      ...DeliveryResultBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ConfirmSignUp(\n    $email: String!\n    $confirmationCode: String!\n  ) {\n    confirmSignUp(\n      email: $email\n      confirmationCode: $confirmationCode\n    ) {\n      ...UserSummary\n    }\n  }\n"): (typeof documents)["\n  mutation ConfirmSignUp(\n    $email: String!\n    $confirmationCode: String!\n  ) {\n    confirmSignUp(\n      email: $email\n      confirmationCode: $confirmationCode\n    ) {\n      ...UserSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ResendSignUpConfirmationCode(\n    $email: String!\n  ) {\n    resendSignUpConfirmationCode(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n"): (typeof documents)["\n  mutation ResendSignUpConfirmationCode(\n    $email: String!\n  ) {\n    resendSignUpConfirmationCode(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ForgotPassword(\n    $email: String!\n  ) {\n    forgotPassword(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n"): (typeof documents)["\n  mutation ForgotPassword(\n    $email: String!\n  ) {\n    forgotPassword(email: $email) {\n      ...DeliveryResultBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ConfirmForgotPassword(\n    $email: String!\n    $confirmationCode: String!\n    $newPassword: String!\n  ) {\n    confirmForgotPassword(email: $email, confirmationCode: $confirmationCode, newPassword: $newPassword) {\n      complete\n    }\n  }\n"): (typeof documents)["\n  mutation ConfirmForgotPassword(\n    $email: String!\n    $confirmationCode: String!\n    $newPassword: String!\n  ) {\n    confirmForgotPassword(email: $email, confirmationCode: $confirmationCode, newPassword: $newPassword) {\n      complete\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...FragranceCollectionSummary\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...FragranceCollectionSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MoveFragranceCollectionItem(\n    $input: MoveFragranceCollectionItemInput!\n  ) {\n    moveFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n"): (typeof documents)["\n  mutation MoveFragranceCollectionItem(\n    $input: MoveFragranceCollectionItemInput!\n  ) {\n    moveFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...FragranceCollectionItemSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogFragranceView (\n    $input: LogFragranceViewInput!\n  ) {\n    logFragranceView(input: $input)\n  }\n"): (typeof documents)["\n  mutation LogFragranceView (\n    $input: LogFragranceViewInput!\n  ) {\n    logFragranceView(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnReview(\n    $input: VoteOnReviewInput!\n  ) {\n    voteOnReview(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnReview(\n    $input: VoteOnReviewInput!\n  ) {\n    voteOnReview(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateReviewReport(\n    $input: CreateReviewReportInput!\n  ) {\n    createReviewReport(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReviewReport(\n    $input: CreateReviewReportInput!\n  ) {\n    createReviewReport(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Collection(\n    $id: Int!\n  ) {\n    collection(id: $id) {\n      ...FragranceCollectionSummary\n    }\n  }\n"): (typeof documents)["\n  query Collection(\n    $id: Int!\n  ) {\n    collection(id: $id) {\n      ...FragranceCollectionSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CollectionItems(\n    $collectionId: Int!\n    $input: ControlledPaginationInput \n  ) {\n    collection(id: $collectionId) {\n      id\n      items(input: $input) {\n        ...FragranceCollectionItemConnection\n      }\n    }\n  }\n"): (typeof documents)["\n  query CollectionItems(\n    $collectionId: Int!\n    $input: ControlledPaginationInput \n  ) {\n    collection(id: $collectionId) {\n      id\n      items(input: $input) {\n        ...FragranceCollectionItemConnection\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Fragrance(\n    $id: Int!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceSummary\n      rating\n      reviewsCount\n      reviewDistribution {\n        one\n        two\n        three\n        four\n        five\n      }\n    }\n  }\n"): (typeof documents)["\n  query Fragrance(\n    $id: Int!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceSummary\n      rating\n      reviewsCount\n      reviewDistribution {\n        one\n        two\n        three\n        four\n        five\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SuggestedFragrances(\n    $input: PaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragranceSummary\n        }\n      } \n      pageInfo {\n        ...PageInfoBase\n      }\n    }\n  }\n"): (typeof documents)["\n  query SuggestedFragrances(\n    $input: PaginationInput\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          ...FragranceSummary\n        }\n      } \n      pageInfo {\n        ...PageInfoBase\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceImages(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images(input: $input) {\n        ...FragranceImageConnection\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceImages(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images(input: $input) {\n        ...FragranceImageConnection\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceTraits(\n    $fragranceId: Int!\n  ) {\n    fragrance (id: $fragranceId) {\n      traits {\n        ...FragranceTraitSummary\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceTraits(\n    $fragranceId: Int!\n  ) {\n    fragrance (id: $fragranceId) {\n      traits {\n        ...FragranceTraitSummary\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceAccords(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    } \n  }\n"): (typeof documents)["\n  query FragranceAccords(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    } \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FillerFragranceAccords(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      fillerAccords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        }\n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FillerFragranceAccords(\n    $fragranceId: Int!\n    $input: PaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      fillerAccords(input: $input) {\n        edges {\n          node {\n            ...FragranceAccordSummary\n          }\n        }\n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceNotes(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      notes {\n        top(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        middle(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        base(input: $input) {\n          ...FragranceNoteConnection\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceNotes(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      notes {\n        top(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        middle(input: $input) {\n          ...FragranceNoteConnection\n        }\n\n        base(input: $input) {\n          ...FragranceNoteConnection\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceReviews(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceReviews(\n    $fragranceId: Int!\n    $input: VotePaginationInput\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyFragranceReview(\n    $fragranceId: Int!\n  ) {\n    fragrance(id: $fragranceId) {\n      ...FragranceSummary\n      myReview {\n        ...FragranceReviewSummary\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyFragranceReview(\n    $fragranceId: Int!\n  ) {\n    fragrance(id: $fragranceId) {\n      ...FragranceSummary\n      myReview {\n        ...FragranceReviewSummary\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Me {\n    me {\n      ...UserSummary\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      ...UserSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User(\n    $id: Int!\n  ) {\n    user(id: $id) {\n      ...UserSummary\n    }\n  }\n"): (typeof documents)["\n  query User(\n    $id: Int!\n  ) {\n    user(id: $id) {\n      ...UserSummary\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserCollections(\n    $userId: Int!\n    $fragranceId: Int\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionSummary\n            hasFragrance(fragranceId: $fragranceId)\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserCollections(\n    $userId: Int!\n    $fragranceId: Int\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionSummary\n            hasFragrance(fragranceId: $fragranceId)\n          }\n        } \n        pageInfo {\n          ...PageInfoBase\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserLikes(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      likes(input: $input) {\n        ...FragranceVoteConnection\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserLikes(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      likes(input: $input) {\n        ...FragranceVoteConnection\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserReviews(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserReviews(\n    $userId: Int!\n    $input: PaginationInput\n  ) {\n    user(id: $userId) {\n      id\n      reviews(input: $input) {\n        ...FragranceReviewConnection\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;