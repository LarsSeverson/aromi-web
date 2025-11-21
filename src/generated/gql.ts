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
    "\n  fragment AllAccord on Accord {\n    id\n    name\n    color\n  }\n": typeof types.AllAccordFragmentDoc,
    "\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AllAccord\n    }\n  }\n": typeof types.AccordQueryDocument,
    "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": typeof types.AccordsQueryDocument,
    "\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n        offset\n      } \n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": typeof types.SearchAccordsQueryDocument,
    "\n  fragment AllAsset on Asset {\n    id\n    name\n    contentType\n    sizeBytes\n    url\n  }\n": typeof types.AllAssetFragmentDoc,
    "\n  fragment AllPresignedUpload on PresignedUpload { \n    assetId\n    url\n    fields\n  }\n": typeof types.AllPresignedUploadFragmentDoc,
    "\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...AllPresignedUpload\n    }\n  }\n": typeof types.StageAssetDocument,
    "\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n": typeof types.DeleteAssetDocument,
    "\n  fragment AllAuthTokenPayload on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n": typeof types.AllAuthTokenPayloadFragmentDoc,
    "\n  fragment AllAuthCodeDeliveryDetails on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n": typeof types.AllAuthCodeDeliveryDetailsFragmentDoc,
    "\n  fragment AllAuthDeliveryResult on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AllAuthCodeDeliveryDetails\n    }\n  }\n": typeof types.AllAuthDeliveryResultFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AllAuthTokenPayload\n    }\n  }\n": typeof types.RefreshDocument,
    "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) { \n      ...AllAuthTokenPayload\n    }\n  }\n": typeof types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": typeof types.LogOutDocument,
    "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n": typeof types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input) {\n      ...Me\n    }\n  }\n": typeof types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n": typeof types.ResendSignUpCodeDocument,
    "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n": typeof types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input)\n  }\n": typeof types.ConfirmForgotPasswordDocument,
    "\n  mutation ChangePassword(\n    $input: ChangePasswordInput!\n  ) {\n    changePassword(input: $input)\n  }\n": typeof types.ChangePasswordDocument,
    "\n  fragment AllBrand on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": typeof types.AllBrandFragmentDoc,
    "\n  fragment BrandPreview on Brand {\n    id\n    name\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": typeof types.BrandPreviewFragmentDoc,
    "\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreview\n    }\n  }\n": typeof types.VoteOnBrandMutationDocument,
    "\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreview\n    }\n  }\n": typeof types.BrandDocument,
    "\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": typeof types.BrandsDocument,
    "\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      } \n    }\n  }\n": typeof types.SearchBrandsDocument,
    "\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.BrandFragrancesDocument,
    "\n  fragment FragrancePreview on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    brand {\n      ...BrandPreview\n    }\n\n    thumbnail {\n      ...AllFragranceImage\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": typeof types.FragrancePreviewFragmentDoc,
    "\n  fragment FragranceDetail on Fragrance { \n    ...FragrancePreview\n\n    images {\n      ...AllFragranceImage\n    }\n    \n    reviewInfo {\n      ...AllFragranceReviewInfo\n    }\n  }\n": typeof types.FragranceDetailFragmentDoc,
    "\n  fragment AllFragranceImage on FragranceImage {\n    id\n    url\n    width\n    height\n    primaryColor\n  } \n": typeof types.AllFragranceImageFragmentDoc,
    "\n  fragment AllFragranceAccord on FragranceAccord {\n    id\n    accord {\n      ...AllAccord\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": typeof types.AllFragranceAccordFragmentDoc,
    "\n  fragment AllFragranceNote on FragranceNote { \n    id\n    layer\n    note {\n      ...AllNote\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": typeof types.AllFragranceNoteFragmentDoc,
    "\n  fragment AllFragranceTraitVote on FragranceTraitVote { \n    id\n    type\n    option {\n      ...AllTraitOption\n    }\n  }\n": typeof types.AllFragranceTraitVoteFragmentDoc,
    "\n  fragment AllFragranceTrait on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...AllTraitOption\n    } \n    stats {\n      ...AllTraitStats\n    }\n    myVote {\n      ...AllFragranceTraitVote\n    }\n  }\n": typeof types.AllFragranceTraitFragmentDoc,
    "\n  fragment AllFragranceReview on FragranceReview { \n    id\n    rating\n    body\n\n    author {\n      ...UserPreview\n    }\n\n    fragrance {\n      ...FragrancePreview\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n    \n    createdAt\n  }\n": typeof types.AllFragranceReviewFragmentDoc,
    "\n  fragment AllFragranceReviewInfo on FragranceReviewInfo { \n    count\n    averageRating\n    distribution {\n      rating\n      count\n    }\n  }\n": typeof types.AllFragranceReviewInfoFragmentDoc,
    "\n  fragment AllFragranceCollection on FragranceCollection { \n    ...FragranceCollectionPreview\n    info {\n      itemCount\n    } \n  }\n": typeof types.AllFragranceCollectionFragmentDoc,
    "\n  fragment FragranceCollectionPreview on FragranceCollection { \n    id\n    name\n    previewItems {\n      ...AllFragranceCollectionItem\n    }\n    user {\n      ...UserPreview\n    }\n  }\n": typeof types.FragranceCollectionPreviewFragmentDoc,
    "\n  fragment AllFragranceCollectionItem on FragranceCollectionItem { \n    id\n    fragrance {\n      ...FragrancePreview\n    }\n    collection {\n      id\n      user {\n        id\n      }\n    }\n  }\n": typeof types.AllFragranceCollectionItemFragmentDoc,
    "\n  fragment FragranceCollectionItemWithCollection on FragranceCollectionItem { \n    ...AllFragranceCollectionItem\n    collection {\n      id\n    }\n  }\n": typeof types.FragranceCollectionItemWithCollectionFragmentDoc,
    "\n  fragment HasFragranceField on FragranceCollection { \n    id\n    hasFragrance(fragranceId: $fragranceId)\n  }\n": typeof types.HasFragranceFieldFragmentDoc,
    "\n  fragment FragranceVoteInfo on Fragrance { \n    id\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": typeof types.FragranceVoteInfoFragmentDoc,
    "\n  fragment MyFragranceReview on Fragrance { \n    id\n    myReview {\n      ...AllFragranceReview\n    }\n  }\n": typeof types.MyFragranceReviewFragmentDoc,
    "\n  mutation CreateFragranceReview(\n    $input: CreateFragranceReviewInput!\n  ) {\n    createFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n": typeof types.CreateFragranceReviewDocument,
    "\n  mutation DeleteFragranceReview(\n    $input: DeleteFragranceReviewInput!\n  ) {\n    deleteFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n": typeof types.DeleteFragranceReviewDocument,
    "\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n": typeof types.CreateFragranceCollectionDocument,
    "\n  mutation UpdateFragranceCollection(\n    $input: UpdateFragranceCollectionInput!\n  ) {\n    updateFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n": typeof types.UpdateFragranceCollectionDocument,
    "\n  mutation DeleteFragranceCollection(\n    $input: DeleteFragranceCollectionInput!\n  ) {\n    deleteFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n": typeof types.DeleteFragranceCollectionDocument,
    "\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n    $fragranceId: ID!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n": typeof types.CreateFragranceCollectionItemDocument,
    "\n  mutation MoveFragranceCollectionItems(\n    $input: MoveFragranceCollectionItemsInput!\n  ) {\n    moveFragranceCollectionItems(input: $input) {\n      ...AllFragranceCollectionItem\n    }\n  }\n": typeof types.MoveFragranceCollectionItemsDocument,
    "\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n      }\n    }\n  }\n": typeof types.DeleteFragranceCollectionItemDocument,
    "\n  mutation AddFragranceToCollections(\n    $input: AddFragranceToCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    addFragranceToCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n": typeof types.AddFragranceToCollectionsDocument,
    "\n  mutation RemoveFragranceFromCollections(\n    $input: RemoveFragranceFromCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    removeFragranceFromCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n": typeof types.RemoveFragranceFromCollectionsDocument,
    "\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreview\n    }\n  }\n": typeof types.VoteOnFragranceDocument,
    "\n  mutation VoteOnFragranceAccord(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AllAccord\n    }\n  }\n": typeof types.VoteOnFragranceAccordDocument,
    "\n  mutation VoteOnFragranceNote(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...AllNote\n    }\n  }\n": typeof types.VoteOnFragranceNoteDocument,
    "\n  mutation VoteOnFragranceTrait(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...AllFragranceTraitVote\n    }\n  }\n": typeof types.VoteOnFragranceTraitDocument,
    "\n  mutation VoteOnFragranceReview(\n    $input: VoteOnFragranceReviewInput!\n  ) {\n    voteOnFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n": typeof types.VoteOnFragranceReviewDocument,
    "\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n": typeof types.CreateFragranceReportDocument,
    "\n  query Fragrance(\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceDetail\n    }\n  }\n": typeof types.FragranceDocument,
    "\n  query Fragrances(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) { \n      edges {\n        node {\n          ...FragrancePreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": typeof types.FragrancesDocument,
    "\n  query SearchFragrances(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) { \n      edges {\n        node { \n          ...FragrancePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": typeof types.SearchFragrancesDocument,
    "\n  query FragranceImages(\n    $fragranceId: ID!\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images {\n        ...AllFragranceImage\n      }\n    }\n  }\n": typeof types.FragranceImagesDocument,
    "\n  query MyFragranceAccords(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myAccords {\n        ...AllAccord\n      }\n    }\n  }\n": typeof types.MyFragranceAccordsDocument,
    "\n  query FragranceAccords(\n    $fragranceId: ID!\n    $input: FragranceAccordPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...AllFragranceAccord\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.FragranceAccordsDocument,
    "\n  query MyFragranceNotes(\n    $fragranceId: ID!\n    $layer: NoteLayer!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myNotes(layer: $layer) {\n        ...AllNote\n      }\n    }\n  }\n": typeof types.MyFragranceNotesDocument,
    "\n  query FragranceNotes(\n    $fragranceId: ID!\n    $input: FragranceNotePaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      notes(input: $input) {\n        edges {\n          node {\n            ...AllFragranceNote\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.FragranceNotesDocument,
    "\n  query MyFragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myTraits {\n        ...AllFragranceTraitVote\n      }\n    }\n  }\n": typeof types.MyFragranceTraitsDocument,
    "\n  query FragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      traits {\n        ...AllFragranceTrait\n      }\n    }\n  }\n": typeof types.FragranceTraitsDocument,
    "\n  query MyFragranceReview(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myReview {\n        ...AllFragranceReview\n      }\n    }\n  }\n": typeof types.MyFragranceReviewDocument,
    "\n  query FragranceReviews(\n    $fragranceId: ID!\n    $input: FragranceReviewPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.FragranceReviewsDocument,
    "\n  query FragranceCollection(\n    $id: ID!\n  ) { \n    fragranceCollection(id: $id) {\n      ...AllFragranceCollection\n    }\n  }\n": typeof types.FragranceCollectionDocument,
    "\n  query FragranceCollections(\n    $input: FragranceCollectionPaginationInput\n  ) { \n    fragranceCollections(input: $input) {\n      edges {\n        node {\n          ...FragranceCollectionPreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": typeof types.FragranceCollectionsDocument,
    "\n  query FragranceCollectionHasFragrance(\n    $collectionId: ID!\n    $fragranceId: ID!\n  ) { \n    fragranceCollection(id: $collectionId) { \n      id\n      hasFragrance(fragranceId: $fragranceId)\n    }\n  }\n": typeof types.FragranceCollectionHasFragranceDocument,
    "\n  query FragranceCollectionItems(\n    $collectionId: ID!\n    $input: FragranceCollectionItemPaginationInput\n  ) {\n    fragranceCollection(id: $collectionId) {\n      id\n      items(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionItemWithCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.FragranceCollectionItemsDocument,
    "\n  fragment AllNote on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n": typeof types.AllNoteFragmentDoc,
    "\n  fragment NotePreview on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n": typeof types.NotePreviewFragmentDoc,
    "\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreview\n    }\n  }\n": typeof types.NoteDocument,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": typeof types.NotesDocument,
    "\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": typeof types.SearchNotesDocument,
    "\n  fragment AllTraitOption on TraitOption {\n    id\n    label\n    score\n  }\n": typeof types.AllTraitOptionFragmentDoc,
    "\n  fragment AllTraitVoteDistribution on TraitVoteDistribution {\n    option {\n      ...AllTraitOption\n    }\n    votes\n  }\n": typeof types.AllTraitVoteDistributionFragmentDoc,
    "\n  fragment AllTraitStats on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...AllTraitVoteDistribution\n    }\n  }\n": typeof types.AllTraitStatsFragmentDoc,
    "\n  fragment Me on User {\n    id\n    username\n    email\n\n    followerCount\n    followingCount\n\n    avatar {\n      ...AllAsset\n    }\n  }\n": typeof types.MeFragmentDoc,
    "\n  fragment UserPreview on User {\n    id\n    username\n\n    followerCount\n    followingCount\n    relationship\n\n    avatar {\n      ...AllAsset\n    }\n  }\n": typeof types.UserPreviewFragmentDoc,
    "\n  fragment AllUserFollow on UserFollow {\n    id\n    user {\n      ...UserPreview\n    }\n  }\n": typeof types.AllUserFollowFragmentDoc,
    "\n  mutation UpdateMe(\n    $input: UpdateMeInput!\n  ) {\n    updateMe(input: $input) {\n      ...Me\n    }\n  }\n": typeof types.UpdateMeDocument,
    "\n  mutation SetMyAvatar(\n    $input: SetMyAvatarInput!\n  ) {\n    setMyAvatar(input: $input) {\n      ...Me\n    }\n  }\n": typeof types.SetMyAvatarDocument,
    "\n  mutation FollowUser(\n    $input: FollowUserInput!\n  ) {\n    follow(input: $input) {\n      ...UserPreview\n    }\n  }\n": typeof types.FollowUserDocument,
    "\n  mutation UnfollowUser(\n    $input: UnfollowUserInput!\n  ) {\n    unfollow(input: $input) {\n      ...UserPreview\n    }\n  }\n": typeof types.UnfollowUserDocument,
    "\n  query Me {\n    me {\n      ...Me\n    }\n  }\n": typeof types.MeDocument,
    "\n  query MyCollections(\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionPreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.MyCollectionsDocument,
    "\n  query MyCollectionsHasFragrance(\n    $fragranceId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) { \n        edges {\n          node {\n            ...FragranceCollectionPreview\n            hasFragrance(fragranceId: $fragranceId)\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.MyCollectionsHasFragranceDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreview\n    }\n  }\n": typeof types.UserDocument,
    "\n  query SearchUsers(\n    $input: SearchInput\n  ) {\n    searchUsers(input: $input) {\n      edges {\n        node {\n          ...UserPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": typeof types.SearchUsersDocument,
    "\n  query UserFollowers(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      followers(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n": typeof types.UserFollowersDocument,
    "\n  query UserFollowing(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      following(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n": typeof types.UserFollowingDocument,
    "\n  query UserCollection(\n    $userId: ID!\n    $collectionId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collection(id: $collectionId) {\n        ...AllFragranceCollection\n      }\n    }\n  }\n": typeof types.UserCollectionDocument,
    "\n  query UserCollections(\n    $userId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collections(input: $input) {\n        edges {\n          node {\n            ...AllFragranceCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.UserCollectionsDocument,
    "\n  query UserLikes(\n    $userId: ID!\n    $input: FragrancePaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      likes(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.UserLikesDocument,
    "\n  query UserReview(\n    $userId: ID!\n    $reviewId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      review(id: $reviewId) {\n        ...AllFragranceReview\n      }\n    }\n  }\n": typeof types.UserReviewDocument,
    "\n  query UserReviews(\n    $userId: ID!\n    $input: FragranceReviewPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": typeof types.UserReviewsDocument,
    "\n  fragment AllPageInfo on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": typeof types.AllPageInfoFragmentDoc,
    "\n  fragment AllSearchPageInfo on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n": typeof types.AllSearchPageInfoFragmentDoc,
    "\n  fragment AllVoteInfo on VoteInfo {\n    upvotes \n    downvotes\n    score\n\n    myVote\n  }\n": typeof types.AllVoteInfoFragmentDoc,
};
const documents: Documents = {
    "\n  fragment AllAccord on Accord {\n    id\n    name\n    color\n  }\n": types.AllAccordFragmentDoc,
    "\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AllAccord\n    }\n  }\n": types.AccordQueryDocument,
    "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": types.AccordsQueryDocument,
    "\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n        offset\n      } \n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": types.SearchAccordsQueryDocument,
    "\n  fragment AllAsset on Asset {\n    id\n    name\n    contentType\n    sizeBytes\n    url\n  }\n": types.AllAssetFragmentDoc,
    "\n  fragment AllPresignedUpload on PresignedUpload { \n    assetId\n    url\n    fields\n  }\n": types.AllPresignedUploadFragmentDoc,
    "\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...AllPresignedUpload\n    }\n  }\n": types.StageAssetDocument,
    "\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n": types.DeleteAssetDocument,
    "\n  fragment AllAuthTokenPayload on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n": types.AllAuthTokenPayloadFragmentDoc,
    "\n  fragment AllAuthCodeDeliveryDetails on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n": types.AllAuthCodeDeliveryDetailsFragmentDoc,
    "\n  fragment AllAuthDeliveryResult on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AllAuthCodeDeliveryDetails\n    }\n  }\n": types.AllAuthDeliveryResultFragmentDoc,
    "\n  mutation Refresh {\n    refresh {\n      ...AllAuthTokenPayload\n    }\n  }\n": types.RefreshDocument,
    "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) { \n      ...AllAuthTokenPayload\n    }\n  }\n": types.LogInDocument,
    "\n  mutation LogOut {\n    logOut\n  }\n": types.LogOutDocument,
    "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input) {\n      ...Me\n    }\n  }\n": types.ConfirmSignUpDocument,
    "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n": types.ResendSignUpCodeDocument,
    "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n": types.ForgotPasswordDocument,
    "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input)\n  }\n": types.ConfirmForgotPasswordDocument,
    "\n  mutation ChangePassword(\n    $input: ChangePasswordInput!\n  ) {\n    changePassword(input: $input)\n  }\n": types.ChangePasswordDocument,
    "\n  fragment AllBrand on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": types.AllBrandFragmentDoc,
    "\n  fragment BrandPreview on Brand {\n    id\n    name\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": types.BrandPreviewFragmentDoc,
    "\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreview\n    }\n  }\n": types.VoteOnBrandMutationDocument,
    "\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreview\n    }\n  }\n": types.BrandDocument,
    "\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": types.BrandsDocument,
    "\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      } \n    }\n  }\n": types.SearchBrandsDocument,
    "\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.BrandFragrancesDocument,
    "\n  fragment FragrancePreview on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    brand {\n      ...BrandPreview\n    }\n\n    thumbnail {\n      ...AllFragranceImage\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": types.FragrancePreviewFragmentDoc,
    "\n  fragment FragranceDetail on Fragrance { \n    ...FragrancePreview\n\n    images {\n      ...AllFragranceImage\n    }\n    \n    reviewInfo {\n      ...AllFragranceReviewInfo\n    }\n  }\n": types.FragranceDetailFragmentDoc,
    "\n  fragment AllFragranceImage on FragranceImage {\n    id\n    url\n    width\n    height\n    primaryColor\n  } \n": types.AllFragranceImageFragmentDoc,
    "\n  fragment AllFragranceAccord on FragranceAccord {\n    id\n    accord {\n      ...AllAccord\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": types.AllFragranceAccordFragmentDoc,
    "\n  fragment AllFragranceNote on FragranceNote { \n    id\n    layer\n    note {\n      ...AllNote\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": types.AllFragranceNoteFragmentDoc,
    "\n  fragment AllFragranceTraitVote on FragranceTraitVote { \n    id\n    type\n    option {\n      ...AllTraitOption\n    }\n  }\n": types.AllFragranceTraitVoteFragmentDoc,
    "\n  fragment AllFragranceTrait on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...AllTraitOption\n    } \n    stats {\n      ...AllTraitStats\n    }\n    myVote {\n      ...AllFragranceTraitVote\n    }\n  }\n": types.AllFragranceTraitFragmentDoc,
    "\n  fragment AllFragranceReview on FragranceReview { \n    id\n    rating\n    body\n\n    author {\n      ...UserPreview\n    }\n\n    fragrance {\n      ...FragrancePreview\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n    \n    createdAt\n  }\n": types.AllFragranceReviewFragmentDoc,
    "\n  fragment AllFragranceReviewInfo on FragranceReviewInfo { \n    count\n    averageRating\n    distribution {\n      rating\n      count\n    }\n  }\n": types.AllFragranceReviewInfoFragmentDoc,
    "\n  fragment AllFragranceCollection on FragranceCollection { \n    ...FragranceCollectionPreview\n    info {\n      itemCount\n    } \n  }\n": types.AllFragranceCollectionFragmentDoc,
    "\n  fragment FragranceCollectionPreview on FragranceCollection { \n    id\n    name\n    previewItems {\n      ...AllFragranceCollectionItem\n    }\n    user {\n      ...UserPreview\n    }\n  }\n": types.FragranceCollectionPreviewFragmentDoc,
    "\n  fragment AllFragranceCollectionItem on FragranceCollectionItem { \n    id\n    fragrance {\n      ...FragrancePreview\n    }\n    collection {\n      id\n      user {\n        id\n      }\n    }\n  }\n": types.AllFragranceCollectionItemFragmentDoc,
    "\n  fragment FragranceCollectionItemWithCollection on FragranceCollectionItem { \n    ...AllFragranceCollectionItem\n    collection {\n      id\n    }\n  }\n": types.FragranceCollectionItemWithCollectionFragmentDoc,
    "\n  fragment HasFragranceField on FragranceCollection { \n    id\n    hasFragrance(fragranceId: $fragranceId)\n  }\n": types.HasFragranceFieldFragmentDoc,
    "\n  fragment FragranceVoteInfo on Fragrance { \n    id\n    votes {\n      ...AllVoteInfo\n    }\n  }\n": types.FragranceVoteInfoFragmentDoc,
    "\n  fragment MyFragranceReview on Fragrance { \n    id\n    myReview {\n      ...AllFragranceReview\n    }\n  }\n": types.MyFragranceReviewFragmentDoc,
    "\n  mutation CreateFragranceReview(\n    $input: CreateFragranceReviewInput!\n  ) {\n    createFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n": types.CreateFragranceReviewDocument,
    "\n  mutation DeleteFragranceReview(\n    $input: DeleteFragranceReviewInput!\n  ) {\n    deleteFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n": types.DeleteFragranceReviewDocument,
    "\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n": types.CreateFragranceCollectionDocument,
    "\n  mutation UpdateFragranceCollection(\n    $input: UpdateFragranceCollectionInput!\n  ) {\n    updateFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n": types.UpdateFragranceCollectionDocument,
    "\n  mutation DeleteFragranceCollection(\n    $input: DeleteFragranceCollectionInput!\n  ) {\n    deleteFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n": types.DeleteFragranceCollectionDocument,
    "\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n    $fragranceId: ID!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n": types.CreateFragranceCollectionItemDocument,
    "\n  mutation MoveFragranceCollectionItems(\n    $input: MoveFragranceCollectionItemsInput!\n  ) {\n    moveFragranceCollectionItems(input: $input) {\n      ...AllFragranceCollectionItem\n    }\n  }\n": types.MoveFragranceCollectionItemsDocument,
    "\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n      }\n    }\n  }\n": types.DeleteFragranceCollectionItemDocument,
    "\n  mutation AddFragranceToCollections(\n    $input: AddFragranceToCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    addFragranceToCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n": types.AddFragranceToCollectionsDocument,
    "\n  mutation RemoveFragranceFromCollections(\n    $input: RemoveFragranceFromCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    removeFragranceFromCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n": types.RemoveFragranceFromCollectionsDocument,
    "\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreview\n    }\n  }\n": types.VoteOnFragranceDocument,
    "\n  mutation VoteOnFragranceAccord(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AllAccord\n    }\n  }\n": types.VoteOnFragranceAccordDocument,
    "\n  mutation VoteOnFragranceNote(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...AllNote\n    }\n  }\n": types.VoteOnFragranceNoteDocument,
    "\n  mutation VoteOnFragranceTrait(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...AllFragranceTraitVote\n    }\n  }\n": types.VoteOnFragranceTraitDocument,
    "\n  mutation VoteOnFragranceReview(\n    $input: VoteOnFragranceReviewInput!\n  ) {\n    voteOnFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n": types.VoteOnFragranceReviewDocument,
    "\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n": types.CreateFragranceReportDocument,
    "\n  query Fragrance(\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceDetail\n    }\n  }\n": types.FragranceDocument,
    "\n  query Fragrances(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) { \n      edges {\n        node {\n          ...FragrancePreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": types.FragrancesDocument,
    "\n  query SearchFragrances(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) { \n      edges {\n        node { \n          ...FragrancePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": types.SearchFragrancesDocument,
    "\n  query FragranceImages(\n    $fragranceId: ID!\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images {\n        ...AllFragranceImage\n      }\n    }\n  }\n": types.FragranceImagesDocument,
    "\n  query MyFragranceAccords(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myAccords {\n        ...AllAccord\n      }\n    }\n  }\n": types.MyFragranceAccordsDocument,
    "\n  query FragranceAccords(\n    $fragranceId: ID!\n    $input: FragranceAccordPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...AllFragranceAccord\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.FragranceAccordsDocument,
    "\n  query MyFragranceNotes(\n    $fragranceId: ID!\n    $layer: NoteLayer!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myNotes(layer: $layer) {\n        ...AllNote\n      }\n    }\n  }\n": types.MyFragranceNotesDocument,
    "\n  query FragranceNotes(\n    $fragranceId: ID!\n    $input: FragranceNotePaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      notes(input: $input) {\n        edges {\n          node {\n            ...AllFragranceNote\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.FragranceNotesDocument,
    "\n  query MyFragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myTraits {\n        ...AllFragranceTraitVote\n      }\n    }\n  }\n": types.MyFragranceTraitsDocument,
    "\n  query FragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      traits {\n        ...AllFragranceTrait\n      }\n    }\n  }\n": types.FragranceTraitsDocument,
    "\n  query MyFragranceReview(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myReview {\n        ...AllFragranceReview\n      }\n    }\n  }\n": types.MyFragranceReviewDocument,
    "\n  query FragranceReviews(\n    $fragranceId: ID!\n    $input: FragranceReviewPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.FragranceReviewsDocument,
    "\n  query FragranceCollection(\n    $id: ID!\n  ) { \n    fragranceCollection(id: $id) {\n      ...AllFragranceCollection\n    }\n  }\n": types.FragranceCollectionDocument,
    "\n  query FragranceCollections(\n    $input: FragranceCollectionPaginationInput\n  ) { \n    fragranceCollections(input: $input) {\n      edges {\n        node {\n          ...FragranceCollectionPreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": types.FragranceCollectionsDocument,
    "\n  query FragranceCollectionHasFragrance(\n    $collectionId: ID!\n    $fragranceId: ID!\n  ) { \n    fragranceCollection(id: $collectionId) { \n      id\n      hasFragrance(fragranceId: $fragranceId)\n    }\n  }\n": types.FragranceCollectionHasFragranceDocument,
    "\n  query FragranceCollectionItems(\n    $collectionId: ID!\n    $input: FragranceCollectionItemPaginationInput\n  ) {\n    fragranceCollection(id: $collectionId) {\n      id\n      items(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionItemWithCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.FragranceCollectionItemsDocument,
    "\n  fragment AllNote on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n": types.AllNoteFragmentDoc,
    "\n  fragment NotePreview on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n": types.NotePreviewFragmentDoc,
    "\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreview\n    }\n  }\n": types.NoteDocument,
    "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n": types.NotesDocument,
    "\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": types.SearchNotesDocument,
    "\n  fragment AllTraitOption on TraitOption {\n    id\n    label\n    score\n  }\n": types.AllTraitOptionFragmentDoc,
    "\n  fragment AllTraitVoteDistribution on TraitVoteDistribution {\n    option {\n      ...AllTraitOption\n    }\n    votes\n  }\n": types.AllTraitVoteDistributionFragmentDoc,
    "\n  fragment AllTraitStats on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...AllTraitVoteDistribution\n    }\n  }\n": types.AllTraitStatsFragmentDoc,
    "\n  fragment Me on User {\n    id\n    username\n    email\n\n    followerCount\n    followingCount\n\n    avatar {\n      ...AllAsset\n    }\n  }\n": types.MeFragmentDoc,
    "\n  fragment UserPreview on User {\n    id\n    username\n\n    followerCount\n    followingCount\n    relationship\n\n    avatar {\n      ...AllAsset\n    }\n  }\n": types.UserPreviewFragmentDoc,
    "\n  fragment AllUserFollow on UserFollow {\n    id\n    user {\n      ...UserPreview\n    }\n  }\n": types.AllUserFollowFragmentDoc,
    "\n  mutation UpdateMe(\n    $input: UpdateMeInput!\n  ) {\n    updateMe(input: $input) {\n      ...Me\n    }\n  }\n": types.UpdateMeDocument,
    "\n  mutation SetMyAvatar(\n    $input: SetMyAvatarInput!\n  ) {\n    setMyAvatar(input: $input) {\n      ...Me\n    }\n  }\n": types.SetMyAvatarDocument,
    "\n  mutation FollowUser(\n    $input: FollowUserInput!\n  ) {\n    follow(input: $input) {\n      ...UserPreview\n    }\n  }\n": types.FollowUserDocument,
    "\n  mutation UnfollowUser(\n    $input: UnfollowUserInput!\n  ) {\n    unfollow(input: $input) {\n      ...UserPreview\n    }\n  }\n": types.UnfollowUserDocument,
    "\n  query Me {\n    me {\n      ...Me\n    }\n  }\n": types.MeDocument,
    "\n  query MyCollections(\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionPreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.MyCollectionsDocument,
    "\n  query MyCollectionsHasFragrance(\n    $fragranceId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) { \n        edges {\n          node {\n            ...FragranceCollectionPreview\n            hasFragrance(fragranceId: $fragranceId)\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.MyCollectionsHasFragranceDocument,
    "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreview\n    }\n  }\n": types.UserDocument,
    "\n  query SearchUsers(\n    $input: SearchInput\n  ) {\n    searchUsers(input: $input) {\n      edges {\n        node {\n          ...UserPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n": types.SearchUsersDocument,
    "\n  query UserFollowers(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      followers(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n": types.UserFollowersDocument,
    "\n  query UserFollowing(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      following(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n": types.UserFollowingDocument,
    "\n  query UserCollection(\n    $userId: ID!\n    $collectionId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collection(id: $collectionId) {\n        ...AllFragranceCollection\n      }\n    }\n  }\n": types.UserCollectionDocument,
    "\n  query UserCollections(\n    $userId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collections(input: $input) {\n        edges {\n          node {\n            ...AllFragranceCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.UserCollectionsDocument,
    "\n  query UserLikes(\n    $userId: ID!\n    $input: FragrancePaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      likes(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.UserLikesDocument,
    "\n  query UserReview(\n    $userId: ID!\n    $reviewId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      review(id: $reviewId) {\n        ...AllFragranceReview\n      }\n    }\n  }\n": types.UserReviewDocument,
    "\n  query UserReviews(\n    $userId: ID!\n    $input: FragranceReviewPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n": types.UserReviewsDocument,
    "\n  fragment AllPageInfo on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n": types.AllPageInfoFragmentDoc,
    "\n  fragment AllSearchPageInfo on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n": types.AllSearchPageInfoFragmentDoc,
    "\n  fragment AllVoteInfo on VoteInfo {\n    upvotes \n    downvotes\n    score\n\n    myVote\n  }\n": types.AllVoteInfoFragmentDoc,
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
export function gql(source: "\n  fragment AllAccord on Accord {\n    id\n    name\n    color\n  }\n"): (typeof documents)["\n  fragment AllAccord on Accord {\n    id\n    name\n    color\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AllAccord\n    }\n  }\n"): (typeof documents)["\n  query AccordQuery(\n    $id: ID!\n  ) {\n    accord(id: $id) {\n      ...AllAccord\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccordsQuery(\n    $input: AccordPaginationInput\n  ) {\n    accords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n        offset\n      } \n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchAccordsQuery(\n    $input: SearchInput\n  ) {\n    searchAccords(input: $input) {\n      edges {\n        node {\n          ...AllAccord \n        }\n        offset\n      } \n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllAsset on Asset {\n    id\n    name\n    contentType\n    sizeBytes\n    url\n  }\n"): (typeof documents)["\n  fragment AllAsset on Asset {\n    id\n    name\n    contentType\n    sizeBytes\n    url\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllPresignedUpload on PresignedUpload { \n    assetId\n    url\n    fields\n  }\n"): (typeof documents)["\n  fragment AllPresignedUpload on PresignedUpload { \n    assetId\n    url\n    fields\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...AllPresignedUpload\n    }\n  }\n"): (typeof documents)["\n  mutation StageAsset(\n    $input: StageAssetInput!\n  ) {\n    stageAsset(input: $input) {\n      ...AllPresignedUpload\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n"): (typeof documents)["\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n  ) {\n    deleteAsset(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllAuthTokenPayload on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n"): (typeof documents)["\n  fragment AllAuthTokenPayload on AuthTokenPayload {\n    idToken\n    accessToken\n    expiresIn\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllAuthCodeDeliveryDetails on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n"): (typeof documents)["\n  fragment AllAuthCodeDeliveryDetails on AuthCodeDeliveryDetails {\n    method\n    attribute\n    destination\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllAuthDeliveryResult on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AllAuthCodeDeliveryDetails\n    }\n  }\n"): (typeof documents)["\n  fragment AllAuthDeliveryResult on AuthDeliveryResult {\n    isComplete \n    delivery {\n      ...AllAuthCodeDeliveryDetails\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Refresh {\n    refresh {\n      ...AllAuthTokenPayload\n    }\n  }\n"): (typeof documents)["\n  mutation Refresh {\n    refresh {\n      ...AllAuthTokenPayload\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) { \n      ...AllAuthTokenPayload\n    }\n  }\n"): (typeof documents)["\n  mutation LogIn(\n    $input: LogInInput!\n  ) {\n    logIn(input: $input) { \n      ...AllAuthTokenPayload\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogOut {\n    logOut\n  }\n"): (typeof documents)["\n  mutation LogOut {\n    logOut\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp(\n    $input: SignUpInput!\n  ) {\n    signUp(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input) {\n      ...Me\n    }\n  }\n"): (typeof documents)["\n  mutation ConfirmSignUp(\n    $input: ConfirmSignUpInput!\n  ) {\n    confirmSignUp(input: $input) {\n      ...Me\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n"): (typeof documents)["\n  mutation ResendSignUpCode(\n    $input: ResendSignUpCodeInput!\n  ) {\n    resendSignUpCode(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n"): (typeof documents)["\n  mutation ForgotPassword(\n    $input: ForgotPasswordInput!\n  ) {\n    forgotPassword(input: $input) {\n      ...AllAuthDeliveryResult\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input)\n  }\n"): (typeof documents)["\n  mutation ConfirmForgotPassword(\n    $input: ConfirmForgotPasswordInput!\n  ) {\n    confirmForgotPassword(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ChangePassword(\n    $input: ChangePasswordInput!\n  ) {\n    changePassword(input: $input)\n  }\n"): (typeof documents)["\n  mutation ChangePassword(\n    $input: ChangePasswordInput!\n  ) {\n    changePassword(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllBrand on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"): (typeof documents)["\n  fragment AllBrand on Brand {\n    id\n    name\n    website\n    description\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BrandPreview on Brand {\n    id\n    name\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"): (typeof documents)["\n  fragment BrandPreview on Brand {\n    id\n    name\n    avatar {\n      ...AllAsset\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreview\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnBrandMutation(\n    $input: VoteOnBrandInput!\n  ) {\n    voteOnBrand(input: $input) {\n      ...BrandPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreview\n    }\n  }\n"): (typeof documents)["\n  query Brand($id: ID!) {\n    brand(id: $id) {\n      ...BrandPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query Brands($input: BrandPaginationInput) {\n    brands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      } \n    }\n  }\n"): (typeof documents)["\n  query SearchBrands($input: SearchInput) {\n    searchBrands(input: $input) {\n      edges {\n        node {\n          ...BrandPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      } \n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {\n    brand(id: $id) {\n      id\n      fragrances(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragrancePreview on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    brand {\n      ...BrandPreview\n    }\n\n    thumbnail {\n      ...AllFragranceImage\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"): (typeof documents)["\n  fragment FragrancePreview on Fragrance { \n    id\n    name\n    description\n    releaseYear\n    concentration\n    status\n\n    brand {\n      ...BrandPreview\n    }\n\n    thumbnail {\n      ...AllFragranceImage\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceDetail on Fragrance { \n    ...FragrancePreview\n\n    images {\n      ...AllFragranceImage\n    }\n    \n    reviewInfo {\n      ...AllFragranceReviewInfo\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceDetail on Fragrance { \n    ...FragrancePreview\n\n    images {\n      ...AllFragranceImage\n    }\n    \n    reviewInfo {\n      ...AllFragranceReviewInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceImage on FragranceImage {\n    id\n    url\n    width\n    height\n    primaryColor\n  } \n"): (typeof documents)["\n  fragment AllFragranceImage on FragranceImage {\n    id\n    url\n    width\n    height\n    primaryColor\n  } \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceAccord on FragranceAccord {\n    id\n    accord {\n      ...AllAccord\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"): (typeof documents)["\n  fragment AllFragranceAccord on FragranceAccord {\n    id\n    accord {\n      ...AllAccord\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceNote on FragranceNote { \n    id\n    layer\n    note {\n      ...AllNote\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"): (typeof documents)["\n  fragment AllFragranceNote on FragranceNote { \n    id\n    layer\n    note {\n      ...AllNote\n    }\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceTraitVote on FragranceTraitVote { \n    id\n    type\n    option {\n      ...AllTraitOption\n    }\n  }\n"): (typeof documents)["\n  fragment AllFragranceTraitVote on FragranceTraitVote { \n    id\n    type\n    option {\n      ...AllTraitOption\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceTrait on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...AllTraitOption\n    } \n    stats {\n      ...AllTraitStats\n    }\n    myVote {\n      ...AllFragranceTraitVote\n    }\n  }\n"): (typeof documents)["\n  fragment AllFragranceTrait on FragranceTrait { \n    id\n    type\n    name\n    options {\n      ...AllTraitOption\n    } \n    stats {\n      ...AllTraitStats\n    }\n    myVote {\n      ...AllFragranceTraitVote\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceReview on FragranceReview { \n    id\n    rating\n    body\n\n    author {\n      ...UserPreview\n    }\n\n    fragrance {\n      ...FragrancePreview\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n    \n    createdAt\n  }\n"): (typeof documents)["\n  fragment AllFragranceReview on FragranceReview { \n    id\n    rating\n    body\n\n    author {\n      ...UserPreview\n    }\n\n    fragrance {\n      ...FragrancePreview\n    }\n\n    votes {\n      ...AllVoteInfo\n    }\n    \n    createdAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceReviewInfo on FragranceReviewInfo { \n    count\n    averageRating\n    distribution {\n      rating\n      count\n    }\n  }\n"): (typeof documents)["\n  fragment AllFragranceReviewInfo on FragranceReviewInfo { \n    count\n    averageRating\n    distribution {\n      rating\n      count\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceCollection on FragranceCollection { \n    ...FragranceCollectionPreview\n    info {\n      itemCount\n    } \n  }\n"): (typeof documents)["\n  fragment AllFragranceCollection on FragranceCollection { \n    ...FragranceCollectionPreview\n    info {\n      itemCount\n    } \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceCollectionPreview on FragranceCollection { \n    id\n    name\n    previewItems {\n      ...AllFragranceCollectionItem\n    }\n    user {\n      ...UserPreview\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceCollectionPreview on FragranceCollection { \n    id\n    name\n    previewItems {\n      ...AllFragranceCollectionItem\n    }\n    user {\n      ...UserPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllFragranceCollectionItem on FragranceCollectionItem { \n    id\n    fragrance {\n      ...FragrancePreview\n    }\n    collection {\n      id\n      user {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment AllFragranceCollectionItem on FragranceCollectionItem { \n    id\n    fragrance {\n      ...FragrancePreview\n    }\n    collection {\n      id\n      user {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceCollectionItemWithCollection on FragranceCollectionItem { \n    ...AllFragranceCollectionItem\n    collection {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceCollectionItemWithCollection on FragranceCollectionItem { \n    ...AllFragranceCollectionItem\n    collection {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment HasFragranceField on FragranceCollection { \n    id\n    hasFragrance(fragranceId: $fragranceId)\n  }\n"): (typeof documents)["\n  fragment HasFragranceField on FragranceCollection { \n    id\n    hasFragrance(fragranceId: $fragranceId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FragranceVoteInfo on Fragrance { \n    id\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"): (typeof documents)["\n  fragment FragranceVoteInfo on Fragrance { \n    id\n    votes {\n      ...AllVoteInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MyFragranceReview on Fragrance { \n    id\n    myReview {\n      ...AllFragranceReview\n    }\n  }\n"): (typeof documents)["\n  fragment MyFragranceReview on Fragrance { \n    id\n    myReview {\n      ...AllFragranceReview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceReview(\n    $input: CreateFragranceReviewInput!\n  ) {\n    createFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceReview(\n    $input: CreateFragranceReviewInput!\n  ) {\n    createFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteFragranceReview(\n    $input: DeleteFragranceReviewInput!\n  ) {\n    deleteFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteFragranceReview(\n    $input: DeleteFragranceReviewInput!\n  ) {\n    deleteFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceCollection(\n    $input: CreateFragranceCollectionInput!\n  ) {\n    createFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateFragranceCollection(\n    $input: UpdateFragranceCollectionInput!\n  ) {\n    updateFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateFragranceCollection(\n    $input: UpdateFragranceCollectionInput!\n  ) {\n    updateFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteFragranceCollection(\n    $input: DeleteFragranceCollectionInput!\n  ) {\n    deleteFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteFragranceCollection(\n    $input: DeleteFragranceCollectionInput!\n  ) {\n    deleteFragranceCollection(input: $input) {\n      ...AllFragranceCollection\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n    $fragranceId: ID!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceCollectionItem(\n    $input: CreateFragranceCollectionItemInput!\n    $fragranceId: ID!\n  ) {\n    createFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MoveFragranceCollectionItems(\n    $input: MoveFragranceCollectionItemsInput!\n  ) {\n    moveFragranceCollectionItems(input: $input) {\n      ...AllFragranceCollectionItem\n    }\n  }\n"): (typeof documents)["\n  mutation MoveFragranceCollectionItems(\n    $input: MoveFragranceCollectionItemsInput!\n  ) {\n    moveFragranceCollectionItems(input: $input) {\n      ...AllFragranceCollectionItem\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteFragranceCollectionItem(\n    $input: DeleteFragranceCollectionItemInput!\n  ) {\n    deleteFragranceCollectionItem(input: $input) {\n      ...AllFragranceCollectionItem\n      collection {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddFragranceToCollections(\n    $input: AddFragranceToCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    addFragranceToCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddFragranceToCollections(\n    $input: AddFragranceToCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    addFragranceToCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveFragranceFromCollections(\n    $input: RemoveFragranceFromCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    removeFragranceFromCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveFragranceFromCollections(\n    $input: RemoveFragranceFromCollectionsInput!\n    $fragranceId: ID!\n  ) {\n    removeFragranceFromCollections(input: $input) {\n      ...AllFragranceCollectionItem \n      collection {\n        id\n        hasFragrance(fragranceId: $fragranceId)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreview\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragrance(\n    $input: VoteOnFragranceInput!\n  ) {\n    voteOnFragrance(input: $input) {\n      ...FragrancePreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceAccord(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AllAccord\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceAccord(\n    $input: VoteOnFragranceAccordInput!\n  ) {\n    voteOnFragranceAccord(input: $input) {\n      ...AllAccord\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceNote(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...AllNote\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceNote(\n    $input: VoteOnFragranceNoteInput!\n  ) {\n    voteOnFragranceNote(input: $input) {\n      ...AllNote\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceTrait(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...AllFragranceTraitVote\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceTrait(\n    $input: VoteOnFragranceTraitInput!\n  ) {\n    voteOnFragranceTrait(input: $input) {\n      ...AllFragranceTraitVote\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VoteOnFragranceReview(\n    $input: VoteOnFragranceReviewInput!\n  ) {\n    voteOnFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n"): (typeof documents)["\n  mutation VoteOnFragranceReview(\n    $input: VoteOnFragranceReviewInput!\n  ) {\n    voteOnFragranceReview(input: $input) {\n      ...AllFragranceReview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFragranceReport(\n    $input: CreateFragranceReportInput!\n  ) {\n    createFragranceReport(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Fragrance(\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceDetail\n    }\n  }\n"): (typeof documents)["\n  query Fragrance(\n    $id: ID!\n  ) {\n    fragrance(id: $id) {\n      ...FragranceDetail\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Fragrances(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) { \n      edges {\n        node {\n          ...FragrancePreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query Fragrances(\n    $input: FragrancePaginationInput\n  ) {\n    fragrances(input: $input) { \n      edges {\n        node {\n          ...FragrancePreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchFragrances(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) { \n      edges {\n        node { \n          ...FragrancePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchFragrances(\n    $input: SearchInput\n  ) {\n    searchFragrances(input: $input) { \n      edges {\n        node { \n          ...FragrancePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceImages(\n    $fragranceId: ID!\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images {\n        ...AllFragranceImage\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceImages(\n    $fragranceId: ID!\n  ) {\n    fragrance(id: $fragranceId) {\n      id\n      images {\n        ...AllFragranceImage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyFragranceAccords(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myAccords {\n        ...AllAccord\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyFragranceAccords(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myAccords {\n        ...AllAccord\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceAccords(\n    $fragranceId: ID!\n    $input: FragranceAccordPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...AllFragranceAccord\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceAccords(\n    $fragranceId: ID!\n    $input: FragranceAccordPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      accords(input: $input) {\n        edges {\n          node {\n            ...AllFragranceAccord\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyFragranceNotes(\n    $fragranceId: ID!\n    $layer: NoteLayer!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myNotes(layer: $layer) {\n        ...AllNote\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyFragranceNotes(\n    $fragranceId: ID!\n    $layer: NoteLayer!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myNotes(layer: $layer) {\n        ...AllNote\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceNotes(\n    $fragranceId: ID!\n    $input: FragranceNotePaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      notes(input: $input) {\n        edges {\n          node {\n            ...AllFragranceNote\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceNotes(\n    $fragranceId: ID!\n    $input: FragranceNotePaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      notes(input: $input) {\n        edges {\n          node {\n            ...AllFragranceNote\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyFragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myTraits {\n        ...AllFragranceTraitVote\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyFragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myTraits {\n        ...AllFragranceTraitVote\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      traits {\n        ...AllFragranceTrait\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceTraits(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      traits {\n        ...AllFragranceTrait\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyFragranceReview(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myReview {\n        ...AllFragranceReview\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyFragranceReview(\n    $fragranceId: ID!\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      myReview {\n        ...AllFragranceReview\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceReviews(\n    $fragranceId: ID!\n    $input: FragranceReviewPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceReviews(\n    $fragranceId: ID!\n    $input: FragranceReviewPaginationInput\n  ) { \n    fragrance(id: $fragranceId) {\n      id\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceCollection(\n    $id: ID!\n  ) { \n    fragranceCollection(id: $id) {\n      ...AllFragranceCollection\n    }\n  }\n"): (typeof documents)["\n  query FragranceCollection(\n    $id: ID!\n  ) { \n    fragranceCollection(id: $id) {\n      ...AllFragranceCollection\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceCollections(\n    $input: FragranceCollectionPaginationInput\n  ) { \n    fragranceCollections(input: $input) {\n      edges {\n        node {\n          ...FragranceCollectionPreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceCollections(\n    $input: FragranceCollectionPaginationInput\n  ) { \n    fragranceCollections(input: $input) {\n      edges {\n        node {\n          ...FragranceCollectionPreview\n        }\n        cursor\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceCollectionHasFragrance(\n    $collectionId: ID!\n    $fragranceId: ID!\n  ) { \n    fragranceCollection(id: $collectionId) { \n      id\n      hasFragrance(fragranceId: $fragranceId)\n    }\n  }\n"): (typeof documents)["\n  query FragranceCollectionHasFragrance(\n    $collectionId: ID!\n    $fragranceId: ID!\n  ) { \n    fragranceCollection(id: $collectionId) { \n      id\n      hasFragrance(fragranceId: $fragranceId)\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FragranceCollectionItems(\n    $collectionId: ID!\n    $input: FragranceCollectionItemPaginationInput\n  ) {\n    fragranceCollection(id: $collectionId) {\n      id\n      items(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionItemWithCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FragranceCollectionItems(\n    $collectionId: ID!\n    $input: FragranceCollectionItemPaginationInput\n  ) {\n    fragranceCollection(id: $collectionId) {\n      id\n      items(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionItemWithCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllNote on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n"): (typeof documents)["\n  fragment AllNote on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment NotePreview on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n"): (typeof documents)["\n  fragment NotePreview on Note { \n    id\n    name\n    thumbnail {\n      ...AllAsset\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreview\n    }\n  }\n"): (typeof documents)["\n  query Note(\n    $id: ID!\n  ) {\n    note(id: $id) {\n      ...NotePreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query Notes(\n    $input: NotePaginationInput\n  ) {\n    notes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n      }\n      pageInfo {\n        ...AllPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchNotes(\n    $input: SearchInput\n  ) {\n    searchNotes(input: $input) {\n      edges {\n        node {\n          ...NotePreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllTraitOption on TraitOption {\n    id\n    label\n    score\n  }\n"): (typeof documents)["\n  fragment AllTraitOption on TraitOption {\n    id\n    label\n    score\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllTraitVoteDistribution on TraitVoteDistribution {\n    option {\n      ...AllTraitOption\n    }\n    votes\n  }\n"): (typeof documents)["\n  fragment AllTraitVoteDistribution on TraitVoteDistribution {\n    option {\n      ...AllTraitOption\n    }\n    votes\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllTraitStats on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...AllTraitVoteDistribution\n    }\n  }\n"): (typeof documents)["\n  fragment AllTraitStats on TraitStats {\n    averageScore \n    totalVotes\n    distribution {\n      ...AllTraitVoteDistribution\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Me on User {\n    id\n    username\n    email\n\n    followerCount\n    followingCount\n\n    avatar {\n      ...AllAsset\n    }\n  }\n"): (typeof documents)["\n  fragment Me on User {\n    id\n    username\n    email\n\n    followerCount\n    followingCount\n\n    avatar {\n      ...AllAsset\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserPreview on User {\n    id\n    username\n\n    followerCount\n    followingCount\n    relationship\n\n    avatar {\n      ...AllAsset\n    }\n  }\n"): (typeof documents)["\n  fragment UserPreview on User {\n    id\n    username\n\n    followerCount\n    followingCount\n    relationship\n\n    avatar {\n      ...AllAsset\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllUserFollow on UserFollow {\n    id\n    user {\n      ...UserPreview\n    }\n  }\n"): (typeof documents)["\n  fragment AllUserFollow on UserFollow {\n    id\n    user {\n      ...UserPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateMe(\n    $input: UpdateMeInput!\n  ) {\n    updateMe(input: $input) {\n      ...Me\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMe(\n    $input: UpdateMeInput!\n  ) {\n    updateMe(input: $input) {\n      ...Me\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetMyAvatar(\n    $input: SetMyAvatarInput!\n  ) {\n    setMyAvatar(input: $input) {\n      ...Me\n    }\n  }\n"): (typeof documents)["\n  mutation SetMyAvatar(\n    $input: SetMyAvatarInput!\n  ) {\n    setMyAvatar(input: $input) {\n      ...Me\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation FollowUser(\n    $input: FollowUserInput!\n  ) {\n    follow(input: $input) {\n      ...UserPreview\n    }\n  }\n"): (typeof documents)["\n  mutation FollowUser(\n    $input: FollowUserInput!\n  ) {\n    follow(input: $input) {\n      ...UserPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnfollowUser(\n    $input: UnfollowUserInput!\n  ) {\n    unfollow(input: $input) {\n      ...UserPreview\n    }\n  }\n"): (typeof documents)["\n  mutation UnfollowUser(\n    $input: UnfollowUserInput!\n  ) {\n    unfollow(input: $input) {\n      ...UserPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Me {\n    me {\n      ...Me\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      ...Me\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyCollections(\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionPreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyCollections(\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) {\n        edges {\n          node {\n            ...FragranceCollectionPreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyCollectionsHasFragrance(\n    $fragranceId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) { \n        edges {\n          node {\n            ...FragranceCollectionPreview\n            hasFragrance(fragranceId: $fragranceId)\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyCollectionsHasFragrance(\n    $fragranceId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    me {\n      ...Me\n      collections(input: $input) { \n        edges {\n          node {\n            ...FragranceCollectionPreview\n            hasFragrance(fragranceId: $fragranceId)\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreview\n    }\n  }\n"): (typeof documents)["\n  query User(\n    $id: ID!\n  ) {\n    user(id: $id) {\n      ...UserPreview\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchUsers(\n    $input: SearchInput\n  ) {\n    searchUsers(input: $input) {\n      edges {\n        node {\n          ...UserPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchUsers(\n    $input: SearchInput\n  ) {\n    searchUsers(input: $input) {\n      edges {\n        node {\n          ...UserPreview\n        }\n        offset\n      }\n      pageInfo {\n        ...AllSearchPageInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserFollowers(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      followers(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n"): (typeof documents)["\n  query UserFollowers(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      followers(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserFollowing(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      following(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n"): (typeof documents)["\n  query UserFollowing(\n    $userId: ID!\n    $input: UserFollowPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      following(input: $input) {\n        edges {\n          node {\n            ...AllUserFollow\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    } \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserCollection(\n    $userId: ID!\n    $collectionId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collection(id: $collectionId) {\n        ...AllFragranceCollection\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserCollection(\n    $userId: ID!\n    $collectionId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collection(id: $collectionId) {\n        ...AllFragranceCollection\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserCollections(\n    $userId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collections(input: $input) {\n        edges {\n          node {\n            ...AllFragranceCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserCollections(\n    $userId: ID!\n    $input: FragranceCollectionPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      collections(input: $input) {\n        edges {\n          node {\n            ...AllFragranceCollection\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserLikes(\n    $userId: ID!\n    $input: FragrancePaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      likes(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserLikes(\n    $userId: ID!\n    $input: FragrancePaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      likes(input: $input) {\n        edges {\n          node {\n            ...FragrancePreview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserReview(\n    $userId: ID!\n    $reviewId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      review(id: $reviewId) {\n        ...AllFragranceReview\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserReview(\n    $userId: ID!\n    $reviewId: ID!\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      review(id: $reviewId) {\n        ...AllFragranceReview\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserReviews(\n    $userId: ID!\n    $input: FragranceReviewPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserReviews(\n    $userId: ID!\n    $input: FragranceReviewPaginationInput\n  ) {\n    user(id: $userId) {\n      ...UserPreview\n      reviews(input: $input) {\n        edges {\n          node {\n            ...AllFragranceReview\n          }\n          cursor\n        }\n        pageInfo {\n          ...AllPageInfo\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllPageInfo on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"): (typeof documents)["\n  fragment AllPageInfo on PageInfo {\n    hasPreviousPage\n    hasNextPage\n    startCursor\n    endCursor\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllSearchPageInfo on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n"): (typeof documents)["\n  fragment AllSearchPageInfo on SearchPageInfo {\n    hasPreviousPage\n    hasNextPage\n    startOffset\n    endOffset\n    pageSize\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllVoteInfo on VoteInfo {\n    upvotes \n    downvotes\n    score\n\n    myVote\n  }\n"): (typeof documents)["\n  fragment AllVoteInfo on VoteInfo {\n    upvotes \n    downvotes\n    score\n\n    myVote\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;