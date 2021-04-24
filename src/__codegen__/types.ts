export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};








export type _AbstractPost = {
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
};

export type _Activity = {
  __typename?: 'Activity';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: _User;
  activityType: _ActivityType;
};

export type _ActivityByUserIdInput = {
  user: Scalars['ID'];
  first: Scalars['Int'];
  afterDate?: Maybe<Scalars['DateTime']>;
  afterId?: Maybe<Scalars['ID']>;
};

export type _ActivityConnection = {
  __typename?: 'ActivityConnection';
  edges: Array<_ActivityEdge>;
  pageInfo: _ActivityPageInfo;
};

export type _ActivityCursor = {
  __typename?: 'ActivityCursor';
  id: Scalars['ID'];
  date: Scalars['DateTime'];
};

export type _ActivityEdge = {
  __typename?: 'ActivityEdge';
  cursor: _ActivityCursor;
  node: _Activity;
};

export type _ActivityPageInfo = {
  __typename?: 'ActivityPageInfo';
  hasNextPage: Scalars['Boolean'];
};

/** Type of activity done by user */
export enum _ActivityType {
  PostChallenge = 'PostChallenge',
  PostSubmission = 'PostSubmission',
  PostReply = 'PostReply',
  EditChallenge = 'EditChallenge',
  EditSubmission = 'EditSubmission',
  EditReply = 'EditReply'
}

export type _AddLatexContentPayload = _BasePayload & {
  __typename?: 'AddLatexContentPayload';
  message: Scalars['String'];
  content: _LatexContent;
};

export type _AddLatexContentToChallengeEditInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type _AddLatexContentToChallengeInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type _AddLatexContentToReplyEditInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type _AddLatexContentToReplyInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type _AddLatexContentToSubmissionEditInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type _AddLatexContentToSubmissionInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type _AddMarkdownContentPayload = _BasePayload & {
  __typename?: 'AddMarkdownContentPayload';
  message: Scalars['String'];
  content: _MarkdownContent;
};

export type _AddMarkdownContentToChallengeEditInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type _AddMarkdownContentToChallengeInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type _AddMarkdownContentToReplyEditInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type _AddMarkdownContentToReplyInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type _AddMarkdownContentToSubmissionEditInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type _AddMarkdownContentToSubmissionInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type _AddUploadedContentPayload = _BasePayload & {
  __typename?: 'AddUploadedContentPayload';
  message: Scalars['String'];
  content: _UploadedContent;
};

export type _AddUploadedContentToChallengeEditInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type _AddUploadedContentToChallengeInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type _AddUploadedContentToReplyEditInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type _AddUploadedContentToReplyInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type _AddUploadedContentToSubmissionEditInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type _AddUploadedContentToSubmissionInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type _BasePayload = {
  message: Scalars['String'];
};

export type _Challenge = _AbstractPost & {
  __typename?: 'Challenge';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  tag: _Tag;
  views: Scalars['Int'];
  boost: Scalars['Float'];
  title: Scalars['String'];
  acceptedSubmission?: Maybe<_Submission>;
  edits: _ChallengeEdit;
  submissions: _SubmissionConnectionConnection;
};


export type _ChallengeSubmissionsArgs = {
  input: _ConnectionInput;
};

export type _ChallengeConnection = {
  __typename?: 'ChallengeConnection';
  edges: Array<_ChallengeEdge>;
  pageInfo: _ChallengePageInfo;
};

export type _ChallengeCursor = {
  __typename?: 'ChallengeCursor';
  id: Scalars['ID'];
  boost: Scalars['Float'];
  views: Scalars['Int'];
};

export type _ChallengeEdge = {
  __typename?: 'ChallengeEdge';
  cursor: _ChallengeCursor;
  node: _Challenge;
};

export type _ChallengeEdit = _AbstractPost & {
  __typename?: 'ChallengeEdit';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  challenge: _Challenge;
};

export type _ChallengePageInfo = {
  __typename?: 'ChallengePageInfo';
  hasNextPage: Scalars['Boolean'];
  hasNextPageBoostedResults: Scalars['Boolean'];
};

export type _ChallengesByTagIdInput = {
  first: Scalars['Int'];
  afterCursorId?: Maybe<Scalars['ID']>;
  afterCursorBoost?: Maybe<Scalars['Float']>;
  afterCursorViews?: Maybe<Scalars['Int']>;
  shouldPrioritizeBoostedChallenges: Scalars['Boolean'];
};

export type _ChallengesByTagIdsInput = {
  first: Scalars['Int'];
  afterCursorId?: Maybe<Scalars['ID']>;
  afterCursorBoost?: Maybe<Scalars['Float']>;
  afterCursorViews?: Maybe<Scalars['Int']>;
  shouldPrioritizeBoostedChallenges: Scalars['Boolean'];
  tags: Array<Scalars['ID']>;
};

export type _ChangeAliasPayload = _BasePayload & {
  __typename?: 'ChangeAliasPayload';
  message: Scalars['String'];
  updatedUser: _User;
};

export type _ConfirmEmailResetTokenPayload = _BasePayload & {
  __typename?: 'ConfirmEmailResetTokenPayload';
  message: Scalars['String'];
  updatedUser: _User;
};

export type _ConfirmSignUpTokenPayload = _BasePayload & {
  __typename?: 'ConfirmSignUpTokenPayload';
  message: Scalars['String'];
};

export type _ConnectionInput = {
  first: Scalars['Int'];
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
};

export type _Content = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
};

export type _CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  message: Scalars['String'];
  createdTag: _Tag;
};


export type _DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  message: Scalars['String'];
};

export type _ForgotPasswordPayload = _BasePayload & {
  __typename?: 'ForgotPasswordPayload';
  message: Scalars['String'];
};

export type _LatexContent = _Content & {
  __typename?: 'LatexContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  latex: Scalars['String'];
};

export type _MarkdownContent = _Content & {
  __typename?: 'MarkdownContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  markdown: Scalars['String'];
};

export type _Mutation = {
  __typename?: 'Mutation';
  signUpUser: _SignUpUserPayload;
  resendUserSignUp: _ResendSignUpTokenPaylod;
  signInUser: _SignInUserPayload;
  forgotPassword: _ForgotPasswordPayload;
  changeAlias: _ChangeAliasPayload;
  requestEmailChange: _RequestEmailChangePayload;
  updatePassword: _UpdatePasswordPayload;
  confirmSignUpToken: _ConfirmSignUpTokenPayload;
  confirmEmailResetToken: _ConfirmEmailResetTokenPayload;
  validatePasswordResetToken: _ValidatePasswordResetTokenPayload;
  submitPasswordReset: _SubmitPasswordResetPayload;
  mwpAccount_CreateWallet: _MwpAccount_CreateWalletPayload;
  mwpAccount_CreateWalletRollback: _MwpAccount_CreateWalletRollbackPayload;
  mwpAccount_AddBalance: _MwpAccount_AddBalancePayload;
  mwpAccount_AddBalanceRollback: _MwpAccount_AddBalanceRollbackPayload;
  mwpAccount_AddActivity: _MwpAccount_AddActivityPayload;
  mwpAccount_AddActivityRollback: _MwpAccount_AddActivityRollbackPayload;
  mwpAccount_CreateBoostTransaction: _MwpAccount_CreateBoostTransactionPayload;
  mwpAccount_CreateBoostTransactionRollback: _MwpAccount_CreateBoostTransactionRollbackPayload;
  createTag: _CreateTagPayload;
  deleteTag: _DeleteTagPayload;
  addMarkdownContentToChallenge: _AddMarkdownContentPayload;
  addLatexContentToChallenge: _AddLatexContentPayload;
  addUploadedContentToChallenge: _AddUploadedContentPayload;
  removeContentFromChallenge: _RemoveContentPayload;
  mwpChallenge_PublishChallenge: _MwpChallenge_PublishPayload;
  mwpChallenge_PublishChallengeRollback: _MwpChallenge_PublishRollbackPayload;
  postChallenge: _Challenge;
  mwpChallenge_BoostChallenge: _MwpChallenge_BoostChallengePayload;
  mwpChallenge_BoostChallengeRollback: _MwpChallenge_BoostChallengeRollbackPayload;
  mwpChallenge_MarkChallengeSolved: _MwpChallenge_MarkChallengeSolvedPayload;
  mwpChallenge_MarkChallengeSolvedRollback: _MwpChallenge_MarkChallengeSolvedRollbackPayload;
  addMarkdownContentToChallengeEdit: _AddMarkdownContentPayload;
  addLatexContentToChallengeEdit: _AddLatexContentPayload;
  addUploadedContentToChallengeEdit: _AddUploadedContentPayload;
  removeContentFromChallengeEdit: _RemoveContentPayload;
  mwpChallenge_PublishChallengeEdit: _MwpChallenge_PublishPayload;
  mwpChallenge_PublishChallengeEditRollback: _MwpChallenge_PublishRollbackPayload;
  postChallengeEdit: _ChallengeEdit;
  addMarkdownContentToSubmission: _AddMarkdownContentPayload;
  addLatexContentToSubmission: _AddLatexContentPayload;
  addUploadedContentToSubmission: _AddUploadedContentPayload;
  removeContentFromSubmission: _RemoveContentPayload;
  mwpChallenge_PublishSubmission: _MwpChallenge_PublishPayload;
  mwpChallenge_PublishSubmissionRollback: _MwpChallenge_PublishRollbackPayload;
  postSubmission: _Reply;
  addMarkdownContentToSubmissionEdit: _AddMarkdownContentPayload;
  addLatexContentToSubmissionEdit: _AddLatexContentPayload;
  addUploadedContentToSubmissionEdit: _AddUploadedContentPayload;
  removeContentFromSubmissionEdit: _RemoveContentPayload;
  mwpChallenge_PublishSubmissionEdit: _MwpChallenge_PublishPayload;
  mwpChallenge_PublishSubmissionEditRollback: _MwpChallenge_PublishRollbackPayload;
  postSubmissionEdit: _SubmissionEdit;
  addMarkdownContentToReply: _AddMarkdownContentPayload;
  addLatexContentToReply: _AddLatexContentPayload;
  addUploadedContentToReply: _AddUploadedContentPayload;
  removeContentFromReply: _RemoveContentPayload;
  mwpChallenge_PublishReply: _MwpChallenge_PublishPayload;
  mwpChallenge_PublishReplyRollback: _MwpChallenge_PublishRollbackPayload;
  addMarkdownContentToReplyEdit: _AddMarkdownContentPayload;
  addLatexContentToReplyEdit: _AddLatexContentPayload;
  addUploadedContentToReplyEdit: _AddUploadedContentPayload;
  removeContentFromReplyEdit: _RemoveContentPayload;
  mwpChallenge_PublishReplyEdit: _MwpChallenge_PublishPayload;
  mwpChallenge_PublishReplyEditRollback: _MwpChallenge_PublishRollbackPayload;
  postReplyEdit: _ReplyEdit;
  mwpChallenge_CreateWallet: _MwpChallenge_CreateWalletPayload;
  mwpChallenge_CreateWalletRollback: _MwpChallenge_CreateWalletRollbackPayload;
};


export type _MutationSignUpUserArgs = {
  input: _SignUpUserContract;
};


export type _MutationSignInUserArgs = {
  input: _SignInUserContract;
};


export type _MutationForgotPasswordArgs = {
  identifier: Scalars['String'];
};


export type _MutationChangeAliasArgs = {
  newAlias: Scalars['String'];
  password: Scalars['String'];
};


export type _MutationRequestEmailChangeArgs = {
  newEmail: Scalars['String'];
  password: Scalars['String'];
};


export type _MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type _MutationConfirmSignUpTokenArgs = {
  token: Scalars['String'];
};


export type _MutationConfirmEmailResetTokenArgs = {
  token: Scalars['String'];
};


export type _MutationValidatePasswordResetTokenArgs = {
  token: Scalars['String'];
};


export type _MutationSubmitPasswordResetArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type _MutationMwpAccount_CreateWalletArgs = {
  digest: Scalars['String'];
  payload: _MwpAccount_CreateWalletInput;
};


export type _MutationMwpAccount_CreateWalletRollbackArgs = {
  digest: Scalars['String'];
  payload: Scalars['ID'];
};


export type _MutationMwpAccount_AddBalanceArgs = {
  digest: Scalars['String'];
  payload: _MwpAccount_AddBalanceInput;
};


export type _MutationMwpAccount_AddBalanceRollbackArgs = {
  digest: Scalars['String'];
  payload: Scalars['ID'];
};


export type _MutationMwpAccount_AddActivityArgs = {
  digest: Scalars['String'];
  payload: _MwpAccount_AddActivityInput;
};


export type _MutationMwpAccount_AddActivityRollbackArgs = {
  digest: Scalars['String'];
  payload: Scalars['ID'];
};


export type _MutationMwpAccount_CreateBoostTransactionArgs = {
  digest: Scalars['String'];
  payload: _MwpAccount_CreateBoostTransactionInput;
};


export type _MutationMwpAccount_CreateBoostTransactionRollbackArgs = {
  digest: Scalars['String'];
  payload: Scalars['ID'];
};


export type _MutationCreateTagArgs = {
  name: Scalars['String'];
  parentId: Scalars['ID'];
};


export type _MutationDeleteTagArgs = {
  name: Scalars['String'];
};


export type _MutationAddMarkdownContentToChallengeArgs = {
  input: _AddMarkdownContentToChallengeInput;
};


export type _MutationAddLatexContentToChallengeArgs = {
  input: _AddLatexContentToChallengeInput;
};


export type _MutationAddUploadedContentToChallengeArgs = {
  input: _AddUploadedContentToChallengeInput;
};


export type _MutationRemoveContentFromChallengeArgs = {
  input: _RemoveContentFromChallengeInput;
};


export type _MutationMwpChallenge_PublishChallengeArgs = {
  payload: _MwpChallenge_PublishChallengeInput;
};


export type _MutationMwpChallenge_PublishChallengeRollbackArgs = {
  payload: Scalars['ID'];
};


export type _MutationPostChallengeArgs = {
  tag: Scalars['ID'];
};


export type _MutationMwpChallenge_BoostChallengeArgs = {
  digest: Scalars['String'];
  payload: _MwpChallenge_BoostChallengeInput;
};


export type _MutationMwpChallenge_BoostChallengeRollbackArgs = {
  digest: Scalars['String'];
  payload: _MwpChallenge_BoostChallengeInput;
};


export type _MutationMwpChallenge_MarkChallengeSolvedArgs = {
  digest: Scalars['String'];
  payload: _MwpChallenge_MarkChallengeSolvedInput;
};


export type _MutationMwpChallenge_MarkChallengeSolvedRollbackArgs = {
  digest: Scalars['String'];
  payload: _MwpChallenge_MarkChallengeSolvedInput;
};


export type _MutationAddMarkdownContentToChallengeEditArgs = {
  input: _AddMarkdownContentToChallengeEditInput;
};


export type _MutationAddLatexContentToChallengeEditArgs = {
  input: _AddLatexContentToChallengeEditInput;
};


export type _MutationAddUploadedContentToChallengeEditArgs = {
  input: _AddUploadedContentToChallengeEditInput;
};


export type _MutationRemoveContentFromChallengeEditArgs = {
  input: _RemoveContentFromChallengeEditInput;
};


export type _MutationMwpChallenge_PublishChallengeEditArgs = {
  payload: Scalars['ID'];
};


export type _MutationMwpChallenge_PublishChallengeEditRollbackArgs = {
  payload: Scalars['ID'];
};


export type _MutationPostChallengeEditArgs = {
  challenge: Scalars['ID'];
};


export type _MutationAddMarkdownContentToSubmissionArgs = {
  input: _AddMarkdownContentToSubmissionInput;
};


export type _MutationAddLatexContentToSubmissionArgs = {
  input: _AddLatexContentToSubmissionInput;
};


export type _MutationAddUploadedContentToSubmissionArgs = {
  input: _AddUploadedContentToSubmissionInput;
};


export type _MutationRemoveContentFromSubmissionArgs = {
  input: _RemoveContentFromSubmissionInput;
};


export type _MutationMwpChallenge_PublishSubmissionArgs = {
  payload: Scalars['ID'];
};


export type _MutationMwpChallenge_PublishSubmissionRollbackArgs = {
  payload: Scalars['ID'];
};


export type _MutationPostSubmissionArgs = {
  submission: Scalars['ID'];
};


export type _MutationAddMarkdownContentToSubmissionEditArgs = {
  input: _AddMarkdownContentToSubmissionEditInput;
};


export type _MutationAddLatexContentToSubmissionEditArgs = {
  input: _AddLatexContentToSubmissionEditInput;
};


export type _MutationAddUploadedContentToSubmissionEditArgs = {
  input: _AddUploadedContentToSubmissionEditInput;
};


export type _MutationRemoveContentFromSubmissionEditArgs = {
  input: _RemoveContentFromSubmissionEditInput;
};


export type _MutationMwpChallenge_PublishSubmissionEditArgs = {
  payload: Scalars['ID'];
};


export type _MutationMwpChallenge_PublishSubmissionEditRollbackArgs = {
  payload: Scalars['ID'];
};


export type _MutationPostSubmissionEditArgs = {
  submission: Scalars['ID'];
};


export type _MutationAddMarkdownContentToReplyArgs = {
  input: _AddMarkdownContentToReplyInput;
};


export type _MutationAddLatexContentToReplyArgs = {
  input: _AddLatexContentToReplyInput;
};


export type _MutationAddUploadedContentToReplyArgs = {
  input: _AddUploadedContentToReplyInput;
};


export type _MutationRemoveContentFromReplyArgs = {
  input: _RemoveContentFromReplyInput;
};


export type _MutationMwpChallenge_PublishReplyArgs = {
  payload: Scalars['ID'];
};


export type _MutationMwpChallenge_PublishReplyRollbackArgs = {
  payload: Scalars['ID'];
};


export type _MutationAddMarkdownContentToReplyEditArgs = {
  input: _AddMarkdownContentToReplyEditInput;
};


export type _MutationAddLatexContentToReplyEditArgs = {
  input: _AddLatexContentToReplyEditInput;
};


export type _MutationAddUploadedContentToReplyEditArgs = {
  input: _AddUploadedContentToReplyEditInput;
};


export type _MutationRemoveContentFromReplyEditArgs = {
  input: _RemoveContentFromReplyEditInput;
};


export type _MutationMwpChallenge_PublishReplyEditArgs = {
  payload: Scalars['ID'];
};


export type _MutationMwpChallenge_PublishReplyEditRollbackArgs = {
  payload: Scalars['ID'];
};


export type _MutationPostReplyEditArgs = {
  reply: Scalars['ID'];
};


export type _MutationMwpChallenge_CreateWalletArgs = {
  digest: Scalars['String'];
  payload: _MwpChallenge_CreateWalletInput;
};


export type _MutationMwpChallenge_CreateWalletRollbackArgs = {
  digest: Scalars['String'];
  payload: Scalars['ID'];
};

export type _MwpAccount_AddActivityInput = {
  activityType: _ActivityType;
  postId: Scalars['String'];
};

export type _MwpAccount_AddActivityPayload = _BasePayload & {
  __typename?: 'MwpAccount_AddActivityPayload';
  message: Scalars['String'];
  createdActivity: _Activity;
};

export type _MwpAccount_AddActivityRollbackPayload = _BasePayload & {
  __typename?: 'MwpAccount_AddActivityRollbackPayload';
  message: Scalars['String'];
};

export type _MwpAccount_AddBalanceInput = {
  walletId: Scalars['ID'];
  amount: Scalars['Float'];
};

export type _MwpAccount_AddBalancePayload = _BasePayload & {
  __typename?: 'MwpAccount_AddBalancePayload';
  message: Scalars['String'];
  wallet: _Wallet;
  transaction: _Transaction;
};

export type _MwpAccount_AddBalanceRollbackPayload = _BasePayload & {
  __typename?: 'MwpAccount_AddBalanceRollbackPayload';
  message: Scalars['String'];
};

export type _MwpAccount_CreateBoostTransactionInput = {
  walletId: Scalars['ID'];
  amount: Scalars['Float'];
};

export type _MwpAccount_CreateBoostTransactionPayload = _BasePayload & {
  __typename?: 'MwpAccount_CreateBoostTransactionPayload';
  message: Scalars['String'];
  createdTransaction: _Transaction;
};

export type _MwpAccount_CreateBoostTransactionRollbackPayload = _BasePayload & {
  __typename?: 'MwpAccount_CreateBoostTransactionRollbackPayload';
  message: Scalars['String'];
};

export type _MwpAccount_CreateWalletInput = {
  tagId: Scalars['ID'];
  walletType: Scalars['Float'];
};

export type _MwpAccount_CreateWalletPayload = _BasePayload & {
  __typename?: 'MwpAccount_CreateWalletPayload';
  message: Scalars['String'];
  createdWallet: _Wallet;
};

export type _MwpAccount_CreateWalletRollbackPayload = _BasePayload & {
  __typename?: 'MwpAccount_CreateWalletRollbackPayload';
  message: Scalars['String'];
};

export type _MwpChallenge_BoostChallengeInput = {
  challengeId: Scalars['ID'];
  amount: Scalars['Float'];
};

export type _MwpChallenge_BoostChallengePayload = _BasePayload & {
  __typename?: 'MwpChallenge_BoostChallengePayload';
  message: Scalars['String'];
  challenge: _Challenge;
};

export type _MwpChallenge_BoostChallengeRollbackPayload = _BasePayload & {
  __typename?: 'MwpChallenge_BoostChallengeRollbackPayload';
  message: Scalars['String'];
};

export type _MwpChallenge_CreateWalletInput = {
  tagId: Scalars['ID'];
  walletId: Scalars['ID'];
};

export type _MwpChallenge_CreateWalletPayload = _BasePayload & {
  __typename?: 'MwpChallenge_CreateWalletPayload';
  message: Scalars['String'];
  createdWallet: _Wallet;
};

export type _MwpChallenge_CreateWalletRollbackPayload = _BasePayload & {
  __typename?: 'MwpChallenge_CreateWalletRollbackPayload';
  message: Scalars['String'];
};

export type _MwpChallenge_MarkChallengeSolvedInput = {
  challengeId: Scalars['ID'];
  submissionId: Scalars['ID'];
  winnerWalletId: Scalars['ID'];
};

export type _MwpChallenge_MarkChallengeSolvedPayload = _BasePayload & {
  __typename?: 'MwpChallenge_MarkChallengeSolvedPayload';
  message: Scalars['String'];
  challenge: _Challenge;
};

export type _MwpChallenge_MarkChallengeSolvedRollbackPayload = _BasePayload & {
  __typename?: 'MwpChallenge_MarkChallengeSolvedRollbackPayload';
  message: Scalars['String'];
};

export type _MwpChallenge_PublishChallengeInput = {
  challengeId: Scalars['ID'];
  title: Scalars['String'];
};

export type _MwpChallenge_PublishPayload = _BasePayload & {
  __typename?: 'MwpChallenge_PublishPayload';
  message: Scalars['String'];
  publishedId: Scalars['ID'];
};

export type _MwpChallenge_PublishRollbackPayload = _BasePayload & {
  __typename?: 'MwpChallenge_PublishRollbackPayload';
  message: Scalars['String'];
};

/** Description of pending update that has to be confirmed via email */
export enum _PendingOperation {
  SignUp = 'SIGN_UP',
  ForgotPassword = 'FORGOT_PASSWORD',
  ChangeEmail = 'CHANGE_EMAIL'
}

export type _Query = {
  __typename?: 'Query';
  userById: _User;
  userByIdentifier: _User;
  validateIdentifiersAvailable: Scalars['Boolean'];
  validateUpdatedPasswordWhenSignedId: Scalars['Boolean'];
  validateUpdatedPasswordWhenForgotten: Scalars['Boolean'];
  walletById: _Wallet;
  tags: Array<_Tag>;
  challengeById: _Challenge;
  challengesByTagIds: _ChallengeConnection;
  challengeEditById: _ChallengeEdit;
  submissionById: _Submission;
  submissionEditById: _SubmissionEdit;
  replyById: _Reply;
  replyEditById: _ReplyEdit;
};


export type _QueryUserByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryUserByIdentifierArgs = {
  identifier: Scalars['String'];
};


export type _QueryValidateIdentifiersAvailableArgs = {
  email: Scalars['String'];
  usernameOrAlias: Scalars['String'];
};


export type _QueryValidateUpdatedPasswordWhenSignedIdArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type _QueryValidateUpdatedPasswordWhenForgottenArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type _QueryWalletByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryTagsArgs = {
  root?: Maybe<Scalars['ID']>;
};


export type _QueryChallengeByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryChallengesByTagIdsArgs = {
  input: _ChallengesByTagIdsInput;
};


export type _QueryChallengeEditByIdArgs = {
  id: Scalars['ID'];
};


export type _QuerySubmissionByIdArgs = {
  id: Scalars['ID'];
};


export type _QuerySubmissionEditByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryReplyByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryReplyEditByIdArgs = {
  id: Scalars['ID'];
};

export type _RemoveContentFromChallengeEditInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type _RemoveContentFromChallengeInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type _RemoveContentFromReplyEditInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type _RemoveContentFromReplyInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type _RemoveContentFromSubmissionEditInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type _RemoveContentFromSubmissionInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type _RemoveContentPayload = _BasePayload & {
  __typename?: 'RemoveContentPayload';
  message: Scalars['String'];
};

export type _Reply = _AbstractPost & {
  __typename?: 'Reply';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  submission: _Submission;
  edits: _ReplyEdit;
};

export type _ReplyEdit = _AbstractPost & {
  __typename?: 'ReplyEdit';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  reply: _Reply;
};

export type _RequestEmailChangePayload = _BasePayload & {
  __typename?: 'RequestEmailChangePayload';
  message: Scalars['String'];
};

export type _ResendSignUpTokenPaylod = _BasePayload & {
  __typename?: 'ResendSignUpTokenPaylod';
  message: Scalars['String'];
};

export type _SignInUserContract = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};

export type _SignInUserPayload = _BasePayload & {
  __typename?: 'SignInUserPayload';
  message: Scalars['String'];
  token: Scalars['String'];
  user: _User;
};

export type _SignUpUserContract = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type _SignUpUserPayload = _BasePayload & {
  __typename?: 'SignUpUserPayload';
  message: Scalars['String'];
  createdUser: _User;
};

export type _Submission = _AbstractPost & {
  __typename?: 'Submission';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  challenge: _Challenge;
  replies: _Reply;
  edits: _SubmissionEdit;
};


export type _SubmissionRepliesArgs = {
  input: _ConnectionInput;
};

export type _SubmissionConnectionConnection = {
  __typename?: 'SubmissionConnectionConnection';
  edges: Array<_SubmissionConnectionEdge>;
  pageInfo: _SubmissionConnectionPageInfo;
};

export type _SubmissionConnectionEdge = {
  __typename?: 'SubmissionConnectionEdge';
  cursor: _SubmissionCursor;
  node: _Submission;
};

export type _SubmissionConnectionPageInfo = {
  __typename?: 'SubmissionConnectionPageInfo';
  hasNextPage: Scalars['Boolean'];
};

export type _SubmissionCursor = {
  __typename?: 'SubmissionCursor';
  id: Scalars['ID'];
  date: Scalars['DateTime'];
};

export type _SubmissionEdit = _AbstractPost & {
  __typename?: 'SubmissionEdit';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  submission: _Submission;
};

export type _SubmitPasswordResetPayload = _BasePayload & {
  __typename?: 'SubmitPasswordResetPayload';
  message: Scalars['String'];
};

export type _Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  scoreboard: Array<_Wallet>;
  challenges: _ChallengeConnection;
};


export type _TagChallengesArgs = {
  input: _ChallengesByTagIdInput;
};

export type _Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  wallet: _Wallet;
  transactionType: _TransactionType;
  amount: Scalars['Float'];
};

export type _TransactionByWalletIdInput = {
  first: Scalars['Int'];
  afterDate?: Maybe<Scalars['DateTime']>;
  afterId?: Maybe<Scalars['ID']>;
};

export type _TransactionByWalletIdsInput = {
  first: Scalars['Int'];
  afterDate?: Maybe<Scalars['DateTime']>;
  afterId?: Maybe<Scalars['ID']>;
  wallets: Array<Scalars['ID']>;
};

export type _TransactionConnection = {
  __typename?: 'TransactionConnection';
  edges: Array<_TransactionEdge>;
  pageInfo: _TransactionPageInfo;
};

export type _TransactionCursor = {
  __typename?: 'TransactionCursor';
  id: Scalars['ID'];
  date: Scalars['DateTime'];
};

export type _TransactionEdge = {
  __typename?: 'TransactionEdge';
  cursor: _TransactionCursor;
  node: _Transaction;
};

export type _TransactionPageInfo = {
  __typename?: 'TransactionPageInfo';
  hasNextPage: Scalars['Boolean'];
};

/** Describes context of transaction (whether related wallet/user is buyer or seller) */
export enum _TransactionType {
  ChallengeBoost = 'ChallengeBoost',
  VirtualReward = 'VirtualReward',
  MonetaryReward = 'MonetaryReward'
}

export type _UpdatePasswordPayload = _BasePayload & {
  __typename?: 'UpdatePasswordPayload';
  message: Scalars['String'];
};


export type _UploadedContent = _Content & {
  __typename?: 'UploadedContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type _User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  alias?: Maybe<Scalars['String']>;
  pendingOperation?: Maybe<_PendingOperation>;
  hasNsfwAllowed: Scalars['Boolean'];
  wallets: Array<_Wallet>;
  activities: _ActivityConnection;
  transactions: _TransactionConnection;
};


export type _UserActivitiesArgs = {
  input: _ActivityByUserIdInput;
};


export type _UserTransactionsArgs = {
  input: _TransactionByWalletIdsInput;
};

export type _ValidatePasswordResetTokenPayload = _BasePayload & {
  __typename?: 'ValidatePasswordResetTokenPayload';
  message: Scalars['String'];
};

export type _Wallet = {
  __typename?: 'Wallet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: _User;
  walletType: _WalletType;
  balance: Scalars['Float'];
  transactions: _TransactionConnection;
  score: Scalars['Int'];
  tag: _Tag;
};


export type _WalletTransactionsArgs = {
  input: _TransactionByWalletIdInput;
};

/** Determines whether wallet holds physical/virtual currency */
export enum _WalletType {
  Monetary = 'Monetary',
  Virtual = 'Virtual'
}
