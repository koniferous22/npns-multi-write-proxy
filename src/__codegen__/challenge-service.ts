export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
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

export type AddLatexContentPayload = BasePayload & {
  __typename?: 'AddLatexContentPayload';
  message: Scalars['String'];
  content: LatexContent;
};

export type AddLatexContentToChallengeEditInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type AddLatexContentToChallengeInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type AddLatexContentToReplyEditInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type AddLatexContentToReplyInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type AddLatexContentToSubmissionEditInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type AddLatexContentToSubmissionInput = {
  id: Scalars['ID'];
  latex: Scalars['String'];
};

export type AddMarkdownContentPayload = BasePayload & {
  __typename?: 'AddMarkdownContentPayload';
  message: Scalars['String'];
  content: MarkdownContent;
};

export type AddMarkdownContentToChallengeEditInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type AddMarkdownContentToChallengeInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type AddMarkdownContentToReplyEditInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type AddMarkdownContentToReplyInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type AddMarkdownContentToSubmissionEditInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type AddMarkdownContentToSubmissionInput = {
  id: Scalars['ID'];
  markdown: Scalars['String'];
};

export type AddUploadedContentPayload = BasePayload & {
  __typename?: 'AddUploadedContentPayload';
  message: Scalars['String'];
  content: UploadedContent;
};

export type AddUploadedContentToChallengeEditInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type AddUploadedContentToChallengeInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type AddUploadedContentToReplyEditInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type AddUploadedContentToReplyInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type AddUploadedContentToSubmissionEditInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type AddUploadedContentToSubmissionInput = {
  id: Scalars['ID'];
  upload: Scalars['Upload'];
};

export type BasePayload = {
  message: Scalars['String'];
};

export type Challenge = {
  __typename?: 'Challenge';
  id: Scalars['ID'];
  content: Array<Content>;
  poster: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  tag: Tag;
  views: Scalars['Int'];
  boost: Scalars['Float'];
  title: Scalars['String'];
  acceptedSubmission?: Maybe<Submission>;
  submissions: Submission;
  edits: ChallengeEdit;
};

export type ChallengeConnection = {
  __typename?: 'ChallengeConnection';
  edges: Array<ChallengeEdge>;
  pageInfo: ChallengePageInfo;
};

export type ChallengeCursor = {
  __typename?: 'ChallengeCursor';
  id: Scalars['ID'];
  boost: Scalars['Float'];
  views: Scalars['Int'];
};

export type ChallengeEdge = {
  __typename?: 'ChallengeEdge';
  cursor: ChallengeCursor;
  node: Challenge;
};

export type ChallengeEdit = {
  __typename?: 'ChallengeEdit';
  id: Scalars['ID'];
  content: Array<Content>;
  poster: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  challenge: Challenge;
};

export type ChallengePageInfo = {
  __typename?: 'ChallengePageInfo';
  hasNextPage: Scalars['Boolean'];
  hasNextPageBoostedResults: Scalars['Boolean'];
};

export type ChallengesByTagIdInput = {
  first: Scalars['Int'];
  afterCursorId?: Maybe<Scalars['ID']>;
  afterCursorBoost?: Maybe<Scalars['Float']>;
  afterCursorViews?: Maybe<Scalars['Int']>;
  shouldPrioritizeBoostedChallenges: Scalars['Boolean'];
};

export type ChallengesByTagIdsInput = {
  first: Scalars['Int'];
  afterCursorId?: Maybe<Scalars['ID']>;
  afterCursorBoost?: Maybe<Scalars['Float']>;
  afterCursorViews?: Maybe<Scalars['Int']>;
  shouldPrioritizeBoostedChallenges: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
};

export type Content = MarkdownContent | LatexContent | UploadedContent;

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  message: Scalars['String'];
  createdTag: Tag;
};

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  message: Scalars['String'];
};

export type LatexContent = {
  __typename?: 'LatexContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  latex: Scalars['String'];
};

export type MarkdownContent = {
  __typename?: 'MarkdownContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  markdown: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTag: CreateTagPayload;
  deleteTag: DeleteTagPayload;
  addMarkdownContentToChallenge: AddMarkdownContentPayload;
  addLatexContentToChallenge: AddLatexContentPayload;
  addUploadedContentToChallenge: AddUploadedContentPayload;
  removeContentFromChallenge: RemoveContentPayload;
  publishChallenge: PublishPayload;
  postChallenge: Challenge;
  addMarkdownContentToChallengeEdit: AddMarkdownContentPayload;
  addLatexContentToChallengeEdit: AddLatexContentPayload;
  addUploadedContentToChallengeEdit: AddUploadedContentPayload;
  removeContentFromChallengeEdit: RemoveContentPayload;
  publishChallengeEdit: PublishPayload;
  postChallengeEdit: ChallengeEdit;
  addMarkdownContentToSubmission: AddMarkdownContentPayload;
  addLatexContentToSubmission: AddLatexContentPayload;
  addUploadedContentToSubmission: AddUploadedContentPayload;
  removeContentFromSubmission: RemoveContentPayload;
  publishSubmission: PublishPayload;
  postSubmission: Reply;
  addMarkdownContentToSubmissionEdit: AddMarkdownContentPayload;
  addLatexContentToSubmissionEdit: AddLatexContentPayload;
  addUploadedContentToSubmissionEdit: AddUploadedContentPayload;
  removeContentFromSubmissionEdit: RemoveContentPayload;
  publishSubmissionEdit: PublishPayload;
  postSubmissionEdit: SubmissionEdit;
  addMarkdownContentToReply: AddMarkdownContentPayload;
  addLatexContentToReply: AddLatexContentPayload;
  addUploadedContentToReply: AddUploadedContentPayload;
  removeContentFromReply: RemoveContentPayload;
  publishReply: PublishPayload;
  addMarkdownContentToReplyEdit: AddMarkdownContentPayload;
  addLatexContentToReplyEdit: AddLatexContentPayload;
  addUploadedContentToReplyEdit: AddUploadedContentPayload;
  removeContentFromReplyEdit: RemoveContentPayload;
  publishReplyEdit: PublishPayload;
  postReplyEdit: ReplyEdit;
};

export type MutationCreateTagArgs = {
  name: Scalars['String'];
  parentId: Scalars['ID'];
};

export type MutationDeleteTagArgs = {
  name: Scalars['String'];
};

export type MutationAddMarkdownContentToChallengeArgs = {
  input: AddMarkdownContentToChallengeInput;
};

export type MutationAddLatexContentToChallengeArgs = {
  input: AddLatexContentToChallengeInput;
};

export type MutationAddUploadedContentToChallengeArgs = {
  input: AddUploadedContentToChallengeInput;
};

export type MutationRemoveContentFromChallengeArgs = {
  input: RemoveContentFromChallengeInput;
};

export type MutationPublishChallengeArgs = {
  input: PublishChallengeInput;
};

export type MutationPostChallengeArgs = {
  tag: Scalars['ID'];
};

export type MutationAddMarkdownContentToChallengeEditArgs = {
  input: AddMarkdownContentToChallengeEditInput;
};

export type MutationAddLatexContentToChallengeEditArgs = {
  input: AddLatexContentToChallengeEditInput;
};

export type MutationAddUploadedContentToChallengeEditArgs = {
  input: AddUploadedContentToChallengeEditInput;
};

export type MutationRemoveContentFromChallengeEditArgs = {
  input: RemoveContentFromChallengeEditInput;
};

export type MutationPublishChallengeEditArgs = {
  id: Scalars['ID'];
};

export type MutationPostChallengeEditArgs = {
  challenge: Scalars['ID'];
};

export type MutationAddMarkdownContentToSubmissionArgs = {
  input: AddMarkdownContentToSubmissionInput;
};

export type MutationAddLatexContentToSubmissionArgs = {
  input: AddLatexContentToSubmissionInput;
};

export type MutationAddUploadedContentToSubmissionArgs = {
  input: AddUploadedContentToSubmissionInput;
};

export type MutationRemoveContentFromSubmissionArgs = {
  input: RemoveContentFromSubmissionInput;
};

export type MutationPublishSubmissionArgs = {
  id: Scalars['ID'];
};

export type MutationPostSubmissionArgs = {
  submission: Scalars['ID'];
};

export type MutationAddMarkdownContentToSubmissionEditArgs = {
  input: AddMarkdownContentToSubmissionEditInput;
};

export type MutationAddLatexContentToSubmissionEditArgs = {
  input: AddLatexContentToSubmissionEditInput;
};

export type MutationAddUploadedContentToSubmissionEditArgs = {
  input: AddUploadedContentToSubmissionEditInput;
};

export type MutationRemoveContentFromSubmissionEditArgs = {
  input: RemoveContentFromSubmissionEditInput;
};

export type MutationPublishSubmissionEditArgs = {
  id: Scalars['ID'];
};

export type MutationPostSubmissionEditArgs = {
  submission: Scalars['ID'];
};

export type MutationAddMarkdownContentToReplyArgs = {
  input: AddMarkdownContentToReplyInput;
};

export type MutationAddLatexContentToReplyArgs = {
  input: AddLatexContentToReplyInput;
};

export type MutationAddUploadedContentToReplyArgs = {
  input: AddUploadedContentToReplyInput;
};

export type MutationRemoveContentFromReplyArgs = {
  input: RemoveContentFromReplyInput;
};

export type MutationPublishReplyArgs = {
  id: Scalars['ID'];
};

export type MutationAddMarkdownContentToReplyEditArgs = {
  input: AddMarkdownContentToReplyEditInput;
};

export type MutationAddLatexContentToReplyEditArgs = {
  input: AddLatexContentToReplyEditInput;
};

export type MutationAddUploadedContentToReplyEditArgs = {
  input: AddUploadedContentToReplyEditInput;
};

export type MutationRemoveContentFromReplyEditArgs = {
  input: RemoveContentFromReplyEditInput;
};

export type MutationPublishReplyEditArgs = {
  id: Scalars['ID'];
};

export type MutationPostReplyEditArgs = {
  reply: Scalars['ID'];
};

export type PublishChallengeInput = {
  challengeId: Scalars['ID'];
  title: Scalars['String'];
};

export type PublishPayload = BasePayload & {
  __typename?: 'PublishPayload';
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  tags: Array<Tag>;
  challengeById: Challenge;
  challengesByTagIds: ChallengeConnection;
  challengeeditById: ChallengeEdit;
  submissionById: Submission;
  submissioneditById: SubmissionEdit;
  replyById: Reply;
  replyeditById: ReplyEdit;
};

export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};

export type QueryTagsArgs = {
  root?: Maybe<Scalars['String']>;
};

export type QueryChallengeByIdArgs = {
  id: Scalars['ID'];
};

export type QueryChallengesByTagIdsArgs = {
  input: ChallengesByTagIdsInput;
};

export type QueryChallengeeditByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubmissionByIdArgs = {
  id: Scalars['ID'];
};

export type QuerySubmissioneditByIdArgs = {
  id: Scalars['ID'];
};

export type QueryReplyByIdArgs = {
  id: Scalars['ID'];
};

export type QueryReplyeditByIdArgs = {
  id: Scalars['ID'];
};

export type RemoveContentFromChallengeEditInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type RemoveContentFromChallengeInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type RemoveContentFromReplyEditInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type RemoveContentFromReplyInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type RemoveContentFromSubmissionEditInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type RemoveContentFromSubmissionInput = {
  id: Scalars['ID'];
  contentId: Scalars['ID'];
};

export type RemoveContentPayload = BasePayload & {
  __typename?: 'RemoveContentPayload';
  message: Scalars['String'];
};

export type Reply = {
  __typename?: 'Reply';
  id: Scalars['ID'];
  content: Array<Content>;
  poster: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  submission: Submission;
  edits: ReplyEdit;
};

export type ReplyEdit = {
  __typename?: 'ReplyEdit';
  id: Scalars['ID'];
  content: Array<Content>;
  poster: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  reply: Reply;
};

export type Submission = {
  __typename?: 'Submission';
  id: Scalars['ID'];
  content: Array<Content>;
  poster: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  challenge: Challenge;
  replies: Reply;
  edits: SubmissionEdit;
};

export type SubmissionEdit = {
  __typename?: 'SubmissionEdit';
  id: Scalars['ID'];
  content: Array<Content>;
  poster: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  submission: Submission;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  scoreboard: Array<Wallet>;
  challenges: ChallengeConnection;
};

export type TagChallengesArgs = {
  input: ChallengesByTagIdInput;
};

export type UploadedContent = {
  __typename?: 'UploadedContent';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
};

export type Wallet = {
  __typename?: 'Wallet';
  id: Scalars['ID'];
  score: Scalars['Float'];
  tag: Tag;
};

export type _Entity =
  | Wallet
  | Tag
  | Challenge
  | User
  | Submission
  | Reply
  | ReplyEdit
  | SubmissionEdit
  | ChallengeEdit;

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
