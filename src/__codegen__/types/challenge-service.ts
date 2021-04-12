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
  _Any: any;
};






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

export type _Challenge = {
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
  submissions: _Submission;
  edits: _ChallengeEdit;
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

export type _ChallengeEdit = {
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
  tags: Array<Scalars['String']>;
};

export type _Content = _MarkdownContent | _LatexContent | _UploadedContent;

export type _CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  message: Scalars['String'];
  createdTag: _Tag;
};


export type _DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  message: Scalars['String'];
};

export type _LatexContent = {
  __typename?: 'LatexContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  latex: Scalars['String'];
};

export type _MarkdownContent = {
  __typename?: 'MarkdownContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  markdown: Scalars['String'];
};

export type _Mutation = {
  __typename?: 'Mutation';
  createTag: _CreateTagPayload;
  deleteTag: _DeleteTagPayload;
  addMarkdownContentToChallenge: _AddMarkdownContentPayload;
  addLatexContentToChallenge: _AddLatexContentPayload;
  addUploadedContentToChallenge: _AddUploadedContentPayload;
  removeContentFromChallenge: _RemoveContentPayload;
  publishChallenge: _PublishPayload;
  postChallenge: _Challenge;
  addMarkdownContentToChallengeEdit: _AddMarkdownContentPayload;
  addLatexContentToChallengeEdit: _AddLatexContentPayload;
  addUploadedContentToChallengeEdit: _AddUploadedContentPayload;
  removeContentFromChallengeEdit: _RemoveContentPayload;
  publishChallengeEdit: _PublishPayload;
  postChallengeEdit: _ChallengeEdit;
  addMarkdownContentToSubmission: _AddMarkdownContentPayload;
  addLatexContentToSubmission: _AddLatexContentPayload;
  addUploadedContentToSubmission: _AddUploadedContentPayload;
  removeContentFromSubmission: _RemoveContentPayload;
  publishSubmission: _PublishPayload;
  postSubmission: _Reply;
  addMarkdownContentToSubmissionEdit: _AddMarkdownContentPayload;
  addLatexContentToSubmissionEdit: _AddLatexContentPayload;
  addUploadedContentToSubmissionEdit: _AddUploadedContentPayload;
  removeContentFromSubmissionEdit: _RemoveContentPayload;
  publishSubmissionEdit: _PublishPayload;
  postSubmissionEdit: _SubmissionEdit;
  addMarkdownContentToReply: _AddMarkdownContentPayload;
  addLatexContentToReply: _AddLatexContentPayload;
  addUploadedContentToReply: _AddUploadedContentPayload;
  removeContentFromReply: _RemoveContentPayload;
  publishReply: _PublishPayload;
  addMarkdownContentToReplyEdit: _AddMarkdownContentPayload;
  addLatexContentToReplyEdit: _AddLatexContentPayload;
  addUploadedContentToReplyEdit: _AddUploadedContentPayload;
  removeContentFromReplyEdit: _RemoveContentPayload;
  publishReplyEdit: _PublishPayload;
  postReplyEdit: _ReplyEdit;
  mwpChallenge_CreateWallet: _MwpChallenge_CreateWalletPayload;
  mwpChallenge_CreateWalletRollback: _MwpChallenge_CreateWalletPayload;
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


export type _MutationPublishChallengeArgs = {
  input: _PublishChallengeInput;
};


export type _MutationPostChallengeArgs = {
  tag: Scalars['ID'];
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


export type _MutationPublishChallengeEditArgs = {
  id: Scalars['ID'];
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


export type _MutationPublishSubmissionArgs = {
  id: Scalars['ID'];
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


export type _MutationPublishSubmissionEditArgs = {
  id: Scalars['ID'];
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


export type _MutationPublishReplyArgs = {
  id: Scalars['ID'];
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


export type _MutationPublishReplyEditArgs = {
  id: Scalars['ID'];
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

export type _MwpChallenge_CreateWalletInput = {
  tagId: Scalars['ID'];
  walletId: Scalars['ID'];
};

export type _MwpChallenge_CreateWalletPayload = _BasePayload & {
  __typename?: 'MwpChallenge_CreateWalletPayload';
  message: Scalars['String'];
  createdWallet: _Wallet;
};

export type _PublishChallengeInput = {
  challengeId: Scalars['ID'];
  title: Scalars['String'];
};

export type _PublishPayload = _BasePayload & {
  __typename?: 'PublishPayload';
  message: Scalars['String'];
};

export type _Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<__Entity>>;
  _service: __Service;
  tags: Array<_Tag>;
  challengeById: _Challenge;
  challengesByTagIds: _ChallengeConnection;
  challengeeditById: _ChallengeEdit;
  submissionById: _Submission;
  submissioneditById: _SubmissionEdit;
  replyById: _Reply;
  replyeditById: _ReplyEdit;
};


export type _Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type _QueryTagsArgs = {
  root?: Maybe<Scalars['String']>;
};


export type _QueryChallengeByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryChallengesByTagIdsArgs = {
  input: _ChallengesByTagIdsInput;
};


export type _QueryChallengeeditByIdArgs = {
  id: Scalars['ID'];
};


export type _QuerySubmissionByIdArgs = {
  id: Scalars['ID'];
};


export type _QuerySubmissioneditByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryReplyByIdArgs = {
  id: Scalars['ID'];
};


export type _QueryReplyeditByIdArgs = {
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

export type _Reply = {
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

export type _ReplyEdit = {
  __typename?: 'ReplyEdit';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  reply: _Reply;
};

export type _Submission = {
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

export type _SubmissionEdit = {
  __typename?: 'SubmissionEdit';
  id: Scalars['ID'];
  content: Array<_Content>;
  poster: _User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  submission: _Submission;
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


export type _UploadedContent = {
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
};

export type _Wallet = {
  __typename?: 'Wallet';
  id: Scalars['ID'];
  score: Scalars['Float'];
  tag: _Tag;
};


export type __Entity = _Wallet | _Tag | _Challenge | _User | _Submission | _Reply | _ReplyEdit | _SubmissionEdit | _ChallengeEdit;

export type __Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
