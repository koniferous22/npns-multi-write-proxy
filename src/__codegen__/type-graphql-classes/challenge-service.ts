/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';
import { _Any, Content } from '../../utils/codegenFixes';
export { TypeGraphQL };
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type FixDecorator<T> = T;
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

@TypeGraphQL.InterfaceType()
export abstract class BasePayload {
  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class AddLatexContentPayload extends BasePayload {
  __typename?: 'AddLatexContentPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => LatexContent)
  content!: FixDecorator<LatexContent>;
}

@TypeGraphQL.InputType()
export class AddLatexContentToChallengeEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddLatexContentToChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddLatexContentToReplyEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddLatexContentToReplyInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddLatexContentToSubmissionEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddLatexContentToSubmissionInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class AddMarkdownContentPayload extends BasePayload {
  __typename?: 'AddMarkdownContentPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => MarkdownContent)
  content!: FixDecorator<MarkdownContent>;
}

@TypeGraphQL.InputType()
export class AddMarkdownContentToChallengeEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddMarkdownContentToChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddMarkdownContentToReplyEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddMarkdownContentToReplyInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddMarkdownContentToSubmissionEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class AddMarkdownContentToSubmissionInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class AddUploadedContentPayload extends BasePayload {
  __typename?: 'AddUploadedContentPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => UploadedContent)
  content!: FixDecorator<UploadedContent>;
}

@TypeGraphQL.InputType()
export class AddUploadedContentToChallengeEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToReplyEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToReplyInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToSubmissionEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToSubmissionInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.ObjectType()
export class Challenge {
  __typename?: 'Challenge';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Tag)
  tag!: FixDecorator<Tag>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  views!: Scalars['Int'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  boost!: Scalars['Float'];

  @TypeGraphQL.Field((type) => String)
  title!: Scalars['String'];

  @TypeGraphQL.Field((type) => Submission, { nullable: true })
  acceptedSubmission!: Maybe<Submission>;

  @TypeGraphQL.Field((type) => Submission)
  submissions!: FixDecorator<Submission>;

  @TypeGraphQL.Field((type) => ChallengeEdit)
  edits!: FixDecorator<ChallengeEdit>;
}

@TypeGraphQL.ObjectType()
export class ChallengeConnection {
  __typename?: 'ChallengeConnection';

  @TypeGraphQL.Field((type) => [ChallengeEdge])
  edges!: Array<ChallengeEdge>;

  @TypeGraphQL.Field((type) => ChallengePageInfo)
  pageInfo!: FixDecorator<ChallengePageInfo>;
}

@TypeGraphQL.ObjectType()
export class ChallengeCursor {
  __typename?: 'ChallengeCursor';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  boost!: Scalars['Float'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  views!: Scalars['Int'];
}

@TypeGraphQL.ObjectType()
export class ChallengeEdge {
  __typename?: 'ChallengeEdge';

  @TypeGraphQL.Field((type) => ChallengeCursor)
  cursor!: FixDecorator<ChallengeCursor>;

  @TypeGraphQL.Field((type) => Challenge)
  node!: FixDecorator<Challenge>;
}

@TypeGraphQL.ObjectType()
export class ChallengeEdit {
  __typename?: 'ChallengeEdit';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Challenge)
  challenge!: FixDecorator<Challenge>;
}

@TypeGraphQL.ObjectType()
export class ChallengePageInfo {
  __typename?: 'ChallengePageInfo';

  @TypeGraphQL.Field((type) => Boolean)
  hasNextPage!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Boolean)
  hasNextPageBoostedResults!: Scalars['Boolean'];
}

@TypeGraphQL.InputType()
export class ChallengesByTagIdInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  first!: Scalars['Int'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID, { nullable: true })
  afterCursorId!: Maybe<Scalars['ID']>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Float, { nullable: true })
  afterCursorBoost!: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Int, { nullable: true })
  afterCursorViews!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field((type) => Boolean)
  shouldPrioritizeBoostedChallenges!: Scalars['Boolean'];
}

@TypeGraphQL.InputType()
export class ChallengesByTagIdsInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  first!: Scalars['Int'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID, { nullable: true })
  afterCursorId!: Maybe<Scalars['ID']>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Float, { nullable: true })
  afterCursorBoost!: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Int, { nullable: true })
  afterCursorViews!: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field((type) => Boolean)
  shouldPrioritizeBoostedChallenges!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => [String])
  tags!: Array<Scalars['String']>;
}

export type Content = MarkdownContent | LatexContent | UploadedContent;

@TypeGraphQL.ObjectType()
export class CreateTagPayload {
  __typename?: 'CreateTagPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Tag)
  createdTag!: FixDecorator<Tag>;
}

@TypeGraphQL.ObjectType()
export class DeleteTagPayload {
  __typename?: 'DeleteTagPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType()
export class LatexContent {
  __typename?: 'LatexContent';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.ObjectType()
export class MarkdownContent {
  __typename?: 'MarkdownContent';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

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
  mwpChallenge_CreateWallet: MwpChallenge_CreateWalletPayload;
  mwpChallenge_CreateWalletRollback: MwpChallenge_CreateWalletPayload;
};

@TypeGraphQL.ArgsType()
export class MutationCreateTagArgs {
  @TypeGraphQL.Field((type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  parentId!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationDeleteTagArgs {
  @TypeGraphQL.Field((type) => String)
  name!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationAddMarkdownContentToChallengeArgs {
  @TypeGraphQL.Field((type) => AddMarkdownContentToChallengeInput)
  input!: FixDecorator<AddMarkdownContentToChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddLatexContentToChallengeArgs {
  @TypeGraphQL.Field((type) => AddLatexContentToChallengeInput)
  input!: FixDecorator<AddLatexContentToChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddUploadedContentToChallengeArgs {
  @TypeGraphQL.Field((type) => AddUploadedContentToChallengeInput)
  input!: FixDecorator<AddUploadedContentToChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationRemoveContentFromChallengeArgs {
  @TypeGraphQL.Field((type) => RemoveContentFromChallengeInput)
  input!: FixDecorator<RemoveContentFromChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationPublishChallengeArgs {
  @TypeGraphQL.Field((type) => PublishChallengeInput)
  input!: FixDecorator<PublishChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationPostChallengeArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  tag!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationAddMarkdownContentToChallengeEditArgs {
  @TypeGraphQL.Field((type) => AddMarkdownContentToChallengeEditInput)
  input!: FixDecorator<AddMarkdownContentToChallengeEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddLatexContentToChallengeEditArgs {
  @TypeGraphQL.Field((type) => AddLatexContentToChallengeEditInput)
  input!: FixDecorator<AddLatexContentToChallengeEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddUploadedContentToChallengeEditArgs {
  @TypeGraphQL.Field((type) => AddUploadedContentToChallengeEditInput)
  input!: FixDecorator<AddUploadedContentToChallengeEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationRemoveContentFromChallengeEditArgs {
  @TypeGraphQL.Field((type) => RemoveContentFromChallengeEditInput)
  input!: FixDecorator<RemoveContentFromChallengeEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationPublishChallengeEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationPostChallengeEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  challenge!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationAddMarkdownContentToSubmissionArgs {
  @TypeGraphQL.Field((type) => AddMarkdownContentToSubmissionInput)
  input!: FixDecorator<AddMarkdownContentToSubmissionInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddLatexContentToSubmissionArgs {
  @TypeGraphQL.Field((type) => AddLatexContentToSubmissionInput)
  input!: FixDecorator<AddLatexContentToSubmissionInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddUploadedContentToSubmissionArgs {
  @TypeGraphQL.Field((type) => AddUploadedContentToSubmissionInput)
  input!: FixDecorator<AddUploadedContentToSubmissionInput>;
}

@TypeGraphQL.ArgsType()
export class MutationRemoveContentFromSubmissionArgs {
  @TypeGraphQL.Field((type) => RemoveContentFromSubmissionInput)
  input!: FixDecorator<RemoveContentFromSubmissionInput>;
}

@TypeGraphQL.ArgsType()
export class MutationPublishSubmissionArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationPostSubmissionArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  submission!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationAddMarkdownContentToSubmissionEditArgs {
  @TypeGraphQL.Field((type) => AddMarkdownContentToSubmissionEditInput)
  input!: FixDecorator<AddMarkdownContentToSubmissionEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddLatexContentToSubmissionEditArgs {
  @TypeGraphQL.Field((type) => AddLatexContentToSubmissionEditInput)
  input!: FixDecorator<AddLatexContentToSubmissionEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddUploadedContentToSubmissionEditArgs {
  @TypeGraphQL.Field((type) => AddUploadedContentToSubmissionEditInput)
  input!: FixDecorator<AddUploadedContentToSubmissionEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationRemoveContentFromSubmissionEditArgs {
  @TypeGraphQL.Field((type) => RemoveContentFromSubmissionEditInput)
  input!: FixDecorator<RemoveContentFromSubmissionEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationPublishSubmissionEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationPostSubmissionEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  submission!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationAddMarkdownContentToReplyArgs {
  @TypeGraphQL.Field((type) => AddMarkdownContentToReplyInput)
  input!: FixDecorator<AddMarkdownContentToReplyInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddLatexContentToReplyArgs {
  @TypeGraphQL.Field((type) => AddLatexContentToReplyInput)
  input!: FixDecorator<AddLatexContentToReplyInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddUploadedContentToReplyArgs {
  @TypeGraphQL.Field((type) => AddUploadedContentToReplyInput)
  input!: FixDecorator<AddUploadedContentToReplyInput>;
}

@TypeGraphQL.ArgsType()
export class MutationRemoveContentFromReplyArgs {
  @TypeGraphQL.Field((type) => RemoveContentFromReplyInput)
  input!: FixDecorator<RemoveContentFromReplyInput>;
}

@TypeGraphQL.ArgsType()
export class MutationPublishReplyArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationAddMarkdownContentToReplyEditArgs {
  @TypeGraphQL.Field((type) => AddMarkdownContentToReplyEditInput)
  input!: FixDecorator<AddMarkdownContentToReplyEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddLatexContentToReplyEditArgs {
  @TypeGraphQL.Field((type) => AddLatexContentToReplyEditInput)
  input!: FixDecorator<AddLatexContentToReplyEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationAddUploadedContentToReplyEditArgs {
  @TypeGraphQL.Field((type) => AddUploadedContentToReplyEditInput)
  input!: FixDecorator<AddUploadedContentToReplyEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationRemoveContentFromReplyEditArgs {
  @TypeGraphQL.Field((type) => RemoveContentFromReplyEditInput)
  input!: FixDecorator<RemoveContentFromReplyEditInput>;
}

@TypeGraphQL.ArgsType()
export class MutationPublishReplyEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationPostReplyEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  reply!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_CreateWalletArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpChallenge_CreateWalletInput)
  payload!: FixDecorator<MwpChallenge_CreateWalletInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_CreateWalletRollbackArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.InputType()
export class MwpChallenge_CreateWalletInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  tagId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  walletId!: Scalars['ID'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_CreateWalletPayload extends BasePayload {
  __typename?: 'MwpChallenge_CreateWalletPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Wallet)
  createdWallet!: FixDecorator<Wallet>;
}

@TypeGraphQL.InputType()
export class PublishChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  challengeId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  title!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class PublishPayload extends BasePayload {
  __typename?: 'PublishPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

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

@TypeGraphQL.ArgsType()
export class Query_EntitiesArgs {
  @TypeGraphQL.Field((type) => [_Any])
  representations!: Array<_Any>;
}

@TypeGraphQL.ArgsType()
export class QueryTagsArgs {
  @TypeGraphQL.Field((type) => String, { nullable: true })
  root!: Maybe<Scalars['String']>;
}

@TypeGraphQL.ArgsType()
export class QueryChallengeByIdArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class QueryChallengesByTagIdsArgs {
  @TypeGraphQL.Field((type) => ChallengesByTagIdsInput)
  input!: FixDecorator<ChallengesByTagIdsInput>;
}

@TypeGraphQL.ArgsType()
export class QueryChallengeeditByIdArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class QuerySubmissionByIdArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class QuerySubmissioneditByIdArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class QueryReplyByIdArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class QueryReplyeditByIdArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.InputType()
export class RemoveContentFromChallengeEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  contentId!: Scalars['ID'];
}

@TypeGraphQL.InputType()
export class RemoveContentFromChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  contentId!: Scalars['ID'];
}

@TypeGraphQL.InputType()
export class RemoveContentFromReplyEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  contentId!: Scalars['ID'];
}

@TypeGraphQL.InputType()
export class RemoveContentFromReplyInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  contentId!: Scalars['ID'];
}

@TypeGraphQL.InputType()
export class RemoveContentFromSubmissionEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  contentId!: Scalars['ID'];
}

@TypeGraphQL.InputType()
export class RemoveContentFromSubmissionInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  contentId!: Scalars['ID'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class RemoveContentPayload extends BasePayload {
  __typename?: 'RemoveContentPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType()
export class Reply {
  __typename?: 'Reply';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Submission)
  submission!: FixDecorator<Submission>;

  @TypeGraphQL.Field((type) => ReplyEdit)
  edits!: FixDecorator<ReplyEdit>;
}

@TypeGraphQL.ObjectType()
export class ReplyEdit {
  __typename?: 'ReplyEdit';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Reply)
  reply!: FixDecorator<Reply>;
}

@TypeGraphQL.ObjectType()
export class Submission {
  __typename?: 'Submission';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Challenge)
  challenge!: FixDecorator<Challenge>;

  @TypeGraphQL.Field((type) => Reply)
  replies!: FixDecorator<Reply>;

  @TypeGraphQL.Field((type) => SubmissionEdit)
  edits!: FixDecorator<SubmissionEdit>;
}

@TypeGraphQL.ObjectType()
export class SubmissionEdit {
  __typename?: 'SubmissionEdit';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Submission)
  submission!: FixDecorator<Submission>;
}

@TypeGraphQL.ObjectType()
export class Tag {
  __typename?: 'Tag';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((type) => [Wallet])
  scoreboard!: Array<Wallet>;

  @TypeGraphQL.Field((type) => ChallengeConnection)
  challenges!: FixDecorator<ChallengeConnection>;
}

@TypeGraphQL.ArgsType()
export class TagChallengesArgs {
  @TypeGraphQL.Field((type) => ChallengesByTagIdInput)
  input!: FixDecorator<ChallengesByTagIdInput>;
}

@TypeGraphQL.ObjectType()
export class UploadedContent {
  __typename?: 'UploadedContent';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => String)
  filename!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  mimetype!: Scalars['String'];
}

@TypeGraphQL.ObjectType()
export class User {
  __typename?: 'User';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];
}

@TypeGraphQL.ObjectType()
export class Wallet {
  __typename?: 'Wallet';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  score!: Scalars['Float'];

  @TypeGraphQL.Field((type) => Tag)
  tag!: FixDecorator<Tag>;
}

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

@TypeGraphQL.ObjectType()
export class _Service {
  __typename?: '_Service';

  @TypeGraphQL.Field((type) => String, {
    description:
      'The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied',
    nullable: true
  })
  sdl!: Maybe<Scalars['String']>;
}
