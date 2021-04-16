import { GraphQLString } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
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
};

@TypeGraphQL.InterfaceType()
export abstract class AbstractPost {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];
}

@TypeGraphQL.InterfaceType()
export abstract class BasePayload {
  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InterfaceType()
export abstract class Content {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];
}

@TypeGraphQL.ObjectType()
export class Activity {
  __typename?: 'Activity';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => User)
  user!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => ActivityType)
  activityType!: FixDecorator<ActivityType>;
}

@TypeGraphQL.InputType()
export class ActivityByUserIdInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  user!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  first!: Scalars['Int'];

  @TypeGraphQL.Field((type) => GraphQLString, { nullable: true })
  afterDate!: Maybe<Scalars['DateTime']>;

  @TypeGraphQL.Field((type) => String, { nullable: true })
  afterId!: Maybe<Scalars['String']>;
}

@TypeGraphQL.ObjectType()
export class ActivityConnection {
  __typename?: 'ActivityConnection';

  @TypeGraphQL.Field((type) => [ActivityEdge])
  edges!: Array<ActivityEdge>;

  @TypeGraphQL.Field((type) => ActivityPageInfo)
  pageInfo!: FixDecorator<ActivityPageInfo>;
}

@TypeGraphQL.ObjectType()
export class ActivityCursor {
  __typename?: 'ActivityCursor';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  date!: Scalars['DateTime'];
}

@TypeGraphQL.ObjectType()
export class ActivityEdge {
  __typename?: 'ActivityEdge';

  @TypeGraphQL.Field((type) => ActivityCursor)
  cursor!: FixDecorator<ActivityCursor>;

  @TypeGraphQL.Field((type) => Activity)
  node!: FixDecorator<Activity>;
}

@TypeGraphQL.ObjectType()
export class ActivityPageInfo {
  __typename?: 'ActivityPageInfo';

  @TypeGraphQL.Field((type) => Boolean)
  hasNextPage!: Scalars['Boolean'];
}

/** Type of activity done by user */
export enum ActivityType {
  PostChallenge = 0,
  PostSubmission = 1,
  PostReply = 2,
  EditChallenge = 3,
  EditSubmission = 4,
  EditReply = 5
}
TypeGraphQL.registerEnumType(ActivityType, { name: 'ActivityType' });

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

  @TypeGraphQL.Field((type) => GraphQLString)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToReplyEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToReplyInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToSubmissionEditInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.InputType()
export class AddUploadedContentToSubmissionInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  upload!: Scalars['Upload'];
}

@TypeGraphQL.ObjectType({ implements: AbstractPost })
export class Challenge extends AbstractPost {
  __typename?: 'Challenge';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
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

@TypeGraphQL.ObjectType({ implements: AbstractPost })
export class ChallengeEdit extends AbstractPost {
  __typename?: 'ChallengeEdit';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
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

  @TypeGraphQL.Field((type) => [TypeGraphQL.ID])
  tags!: Array<Scalars['ID']>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class ChangeAliasPayload extends BasePayload {
  __typename?: 'ChangeAliasPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => User)
  updatedUser!: FixDecorator<User>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class ConfirmEmailResetTokenPayload extends BasePayload {
  __typename?: 'ConfirmEmailResetTokenPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => User)
  updatedUser!: FixDecorator<User>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class ConfirmSignUpTokenPayload extends BasePayload {
  __typename?: 'ConfirmSignUpTokenPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

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

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class ForgotPasswordPayload extends BasePayload {
  __typename?: 'ForgotPasswordPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: Content })
export class LatexContent extends Content {
  __typename?: 'LatexContent';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => String)
  latex!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: Content })
export class MarkdownContent extends Content {
  __typename?: 'MarkdownContent';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => String)
  markdown!: Scalars['String'];
}

export type Mutation = {
  __typename?: 'Mutation';
  signUpUser: SignUpUserPayload;
  resendUserSignUp: ResendSignUpTokenPaylod;
  signInUser: SignInUserPayload;
  forgotPassword: ForgotPasswordPayload;
  changeAlias: ChangeAliasPayload;
  requestEmailChange: RequestEmailChangePayload;
  updatePassword: UpdatePasswordPayload;
  confirmSignUpToken: ConfirmSignUpTokenPayload;
  confirmEmailResetToken: ConfirmEmailResetTokenPayload;
  validatePasswordResetToken: ValidatePasswordResetTokenPayload;
  submitPasswordReset: SubmitPasswordResetPayload;
  mwpAccount_CreateWallet: MwpAccount_CreateWalletPayload;
  mwpAccount_CreateWalletRollback: MwpAccount_CreateWalletRollbackPayload;
  mwpAccount_AddBalance: MwpAccount_AddBalancePayload;
  mwpAccount_AddBalanceRollback: MwpAccount_AddBalanceRollbackPayload;
  mwpAccount_AddActivity: MwpAccount_AddActivityPayload;
  mwpAccount_AddActivityRollback: MwpAccount_AddActivityRollbackPayload;
  mwpAccount_CreateBoostTransaction: MwpAccount_CreateBoostTransactionPayload;
  mwpAccount_CreateBoostTransactionRollback: MwpAccount_CreateBoostTransactionRollbackPayload;
  createTag: CreateTagPayload;
  deleteTag: DeleteTagPayload;
  addMarkdownContentToChallenge: AddMarkdownContentPayload;
  addLatexContentToChallenge: AddLatexContentPayload;
  addUploadedContentToChallenge: AddUploadedContentPayload;
  removeContentFromChallenge: RemoveContentPayload;
  mwpChallenge_PublishChallenge: MwpChallenge_PublishPayload;
  mwpChallenge_PublishChallengeRollback: MwpChallenge_PublishRollbackPayload;
  postChallenge: Challenge;
  mwpChallenge_BoostChallenge: MwpChallenge_BoostChallengePayload;
  mwpChallenge_BoostChallengeRollback: MwpChallenge_BoostChallengeRollbackPayload;
  mwpChallenge_MarkChallengeSolved: MwpChallenge_MarkChallengeSolvedPayload;
  mwpChallenge_MarkChallengeSolvedRollback: MwpChallenge_MarkChallengeSolvedRollbackPayload;
  addMarkdownContentToChallengeEdit: AddMarkdownContentPayload;
  addLatexContentToChallengeEdit: AddLatexContentPayload;
  addUploadedContentToChallengeEdit: AddUploadedContentPayload;
  removeContentFromChallengeEdit: RemoveContentPayload;
  mwpChallenge_PublishChallengeEdit: MwpChallenge_PublishPayload;
  mwpChallenge_PublishChallengeEditRollback: MwpChallenge_PublishRollbackPayload;
  postChallengeEdit: ChallengeEdit;
  addMarkdownContentToSubmission: AddMarkdownContentPayload;
  addLatexContentToSubmission: AddLatexContentPayload;
  addUploadedContentToSubmission: AddUploadedContentPayload;
  removeContentFromSubmission: RemoveContentPayload;
  mwpChallenge_PublishSubmission: MwpChallenge_PublishPayload;
  mwpChallenge_PublishSubmissionRollback: MwpChallenge_PublishRollbackPayload;
  postSubmission: Reply;
  addMarkdownContentToSubmissionEdit: AddMarkdownContentPayload;
  addLatexContentToSubmissionEdit: AddLatexContentPayload;
  addUploadedContentToSubmissionEdit: AddUploadedContentPayload;
  removeContentFromSubmissionEdit: RemoveContentPayload;
  mwpChallenge_PublishSubmissionEdit: MwpChallenge_PublishPayload;
  mwpChallenge_PublishSubmissionEditRollback: MwpChallenge_PublishRollbackPayload;
  postSubmissionEdit: SubmissionEdit;
  addMarkdownContentToReply: AddMarkdownContentPayload;
  addLatexContentToReply: AddLatexContentPayload;
  addUploadedContentToReply: AddUploadedContentPayload;
  removeContentFromReply: RemoveContentPayload;
  mwpChallenge_PublishReply: MwpChallenge_PublishPayload;
  mwpChallenge_PublishReplyRollback: MwpChallenge_PublishRollbackPayload;
  addMarkdownContentToReplyEdit: AddMarkdownContentPayload;
  addLatexContentToReplyEdit: AddLatexContentPayload;
  addUploadedContentToReplyEdit: AddUploadedContentPayload;
  removeContentFromReplyEdit: RemoveContentPayload;
  mwpChallenge_PublishReplyEdit: MwpChallenge_PublishPayload;
  mwpChallenge_PublishReplyEditRollback: MwpChallenge_PublishRollbackPayload;
  postReplyEdit: ReplyEdit;
  mwpChallenge_CreateWallet: MwpChallenge_CreateWalletPayload;
  mwpChallenge_CreateWalletRollback: MwpChallenge_CreateWalletRollbackPayload;
};

@TypeGraphQL.ArgsType()
export class MutationSignUpUserArgs {
  @TypeGraphQL.Field((type) => SignUpUserContract)
  input!: FixDecorator<SignUpUserContract>;
}

@TypeGraphQL.ArgsType()
export class MutationSignInUserArgs {
  @TypeGraphQL.Field((type) => SignInUserContract)
  input!: FixDecorator<SignInUserContract>;
}

@TypeGraphQL.ArgsType()
export class MutationForgotPasswordArgs {
  @TypeGraphQL.Field((type) => String)
  identifier!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationChangeAliasArgs {
  @TypeGraphQL.Field((type) => String)
  newAlias!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationRequestEmailChangeArgs {
  @TypeGraphQL.Field((type) => String)
  newEmail!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationUpdatePasswordArgs {
  @TypeGraphQL.Field((type) => String)
  newPassword!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationConfirmSignUpTokenArgs {
  @TypeGraphQL.Field((type) => String)
  token!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationConfirmEmailResetTokenArgs {
  @TypeGraphQL.Field((type) => String)
  token!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationValidatePasswordResetTokenArgs {
  @TypeGraphQL.Field((type) => String)
  token!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationSubmitPasswordResetArgs {
  @TypeGraphQL.Field((type) => String)
  token!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  newPassword!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_CreateWalletArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpAccount_CreateWalletInput)
  payload!: FixDecorator<MwpAccount_CreateWalletInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_CreateWalletRollbackArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_AddBalanceArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpAccount_AddBalanceInput)
  payload!: FixDecorator<MwpAccount_AddBalanceInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_AddBalanceRollbackArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_AddActivityArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpAccount_AddActivityInput)
  payload!: FixDecorator<MwpAccount_AddActivityInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_AddActivityRollbackArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_CreateBoostTransactionArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpAccount_CreateBoostTransactionInput)
  payload!: FixDecorator<MwpAccount_CreateBoostTransactionInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpAccount_CreateBoostTransactionRollbackArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

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
export class MutationMwpChallenge_PublishChallengeArgs {
  @TypeGraphQL.Field((type) => MwpChallenge_PublishChallengeInput)
  payload!: FixDecorator<MwpChallenge_PublishChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_PublishChallengeRollbackArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationPostChallengeArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  tag!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_BoostChallengeArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpChallenge_BoostChallengeInput)
  payload!: FixDecorator<MwpChallenge_BoostChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_BoostChallengeRollbackArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpChallenge_BoostChallengeInput)
  payload!: FixDecorator<MwpChallenge_BoostChallengeInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_MarkChallengeSolvedArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpChallenge_MarkChallengeSolvedInput)
  payload!: FixDecorator<MwpChallenge_MarkChallengeSolvedInput>;
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_MarkChallengeSolvedRollbackArgs {
  @TypeGraphQL.Field((type) => String)
  digest!: Scalars['String'];

  @TypeGraphQL.Field((type) => MwpChallenge_MarkChallengeSolvedInput)
  payload!: FixDecorator<MwpChallenge_MarkChallengeSolvedInput>;
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
export class MutationMwpChallenge_PublishChallengeEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_PublishChallengeEditRollbackArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
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
export class MutationMwpChallenge_PublishSubmissionArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_PublishSubmissionRollbackArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
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
export class MutationMwpChallenge_PublishSubmissionEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_PublishSubmissionEditRollbackArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
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
export class MutationMwpChallenge_PublishReplyArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_PublishReplyRollbackArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
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
export class MutationMwpChallenge_PublishReplyEditArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
}

@TypeGraphQL.ArgsType()
export class MutationMwpChallenge_PublishReplyEditRollbackArgs {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  payload!: Scalars['ID'];
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
export class MwpAccount_AddActivityInput {
  @TypeGraphQL.Field((type) => ActivityType)
  activityType!: FixDecorator<ActivityType>;

  @TypeGraphQL.Field((type) => String)
  postId!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_AddActivityPayload extends BasePayload {
  __typename?: 'MwpAccount_AddActivityPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Activity)
  createdActivity!: FixDecorator<Activity>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_AddActivityRollbackPayload extends BasePayload {
  __typename?: 'MwpAccount_AddActivityRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class MwpAccount_AddBalanceInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  walletId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  amount!: Scalars['Float'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_AddBalancePayload extends BasePayload {
  __typename?: 'MwpAccount_AddBalancePayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Wallet)
  wallet!: FixDecorator<Wallet>;

  @TypeGraphQL.Field((type) => Transaction)
  transaction!: FixDecorator<Transaction>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_AddBalanceRollbackPayload extends BasePayload {
  __typename?: 'MwpAccount_AddBalanceRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class MwpAccount_CreateBoostTransactionInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  walletId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  amount!: Scalars['Float'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_CreateBoostTransactionPayload extends BasePayload {
  __typename?: 'MwpAccount_CreateBoostTransactionPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Transaction)
  createdTransaction!: FixDecorator<Transaction>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_CreateBoostTransactionRollbackPayload extends BasePayload {
  __typename?: 'MwpAccount_CreateBoostTransactionRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class MwpAccount_CreateWalletInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  tagId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  walletType!: Scalars['Float'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_CreateWalletPayload extends BasePayload {
  __typename?: 'MwpAccount_CreateWalletPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Wallet)
  createdWallet!: FixDecorator<Wallet>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpAccount_CreateWalletRollbackPayload extends BasePayload {
  __typename?: 'MwpAccount_CreateWalletRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class MwpChallenge_BoostChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  challengeId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  amount!: Scalars['Float'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_BoostChallengePayload extends BasePayload {
  __typename?: 'MwpChallenge_BoostChallengePayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Challenge)
  challenge!: FixDecorator<Challenge>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_BoostChallengeRollbackPayload extends BasePayload {
  __typename?: 'MwpChallenge_BoostChallengeRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
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

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_CreateWalletRollbackPayload extends BasePayload {
  __typename?: 'MwpChallenge_CreateWalletRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class MwpChallenge_MarkChallengeSolvedInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  challengeId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  submissionId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  winnerWalletId!: Scalars['ID'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_MarkChallengeSolvedPayload extends BasePayload {
  __typename?: 'MwpChallenge_MarkChallengeSolvedPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => Challenge)
  challenge!: FixDecorator<Challenge>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_MarkChallengeSolvedRollbackPayload extends BasePayload {
  __typename?: 'MwpChallenge_MarkChallengeSolvedRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class MwpChallenge_PublishChallengeInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  challengeId!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  title!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_PublishPayload extends BasePayload {
  __typename?: 'MwpChallenge_PublishPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  publishedId!: Scalars['ID'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class MwpChallenge_PublishRollbackPayload extends BasePayload {
  __typename?: 'MwpChallenge_PublishRollbackPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

/** Description of pending update that has to be confirmed via email */
export enum PendingOperation {
  SIGN_UP = 0,
  FORGOT_PASSWORD = 1,
  CHANGE_EMAIL = 2
}
TypeGraphQL.registerEnumType(PendingOperation, { name: 'PendingOperation' });

export type Query = {
  __typename?: 'Query';
  userById: User;
  userByIdentifier: User;
  validateIdentifiersAvailable: Scalars['Boolean'];
  validateUpdatedPasswordWhenSignedId: Scalars['Boolean'];
  validateUpdatedPasswordWhenForgotten: Scalars['Boolean'];
  walletById: Wallet;
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
export class QueryUserByIdArgs {
  @TypeGraphQL.Field((type) => String)
  id!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class QueryUserByIdentifierArgs {
  @TypeGraphQL.Field((type) => String)
  identifier!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class QueryValidateIdentifiersAvailableArgs {
  @TypeGraphQL.Field((type) => String)
  email!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  usernameOrAlias!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class QueryValidateUpdatedPasswordWhenSignedIdArgs {
  @TypeGraphQL.Field((type) => String)
  newPassword!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class QueryValidateUpdatedPasswordWhenForgottenArgs {
  @TypeGraphQL.Field((type) => String)
  token!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  newPassword!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ArgsType()
export class QueryWalletByIdArgs {
  @TypeGraphQL.Field((type) => String)
  id!: Scalars['String'];
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

@TypeGraphQL.ObjectType({ implements: AbstractPost })
export class Reply extends AbstractPost {
  __typename?: 'Reply';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Submission)
  submission!: FixDecorator<Submission>;

  @TypeGraphQL.Field((type) => ReplyEdit)
  edits!: FixDecorator<ReplyEdit>;
}

@TypeGraphQL.ObjectType({ implements: AbstractPost })
export class ReplyEdit extends AbstractPost {
  __typename?: 'ReplyEdit';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Reply)
  reply!: FixDecorator<Reply>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class RequestEmailChangePayload extends BasePayload {
  __typename?: 'RequestEmailChangePayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class ResendSignUpTokenPaylod extends BasePayload {
  __typename?: 'ResendSignUpTokenPaylod';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.InputType()
export class SignInUserContract {
  @TypeGraphQL.Field((type) => String)
  identifier!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class SignInUserPayload extends BasePayload {
  __typename?: 'SignInUserPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  token!: Scalars['String'];

  @TypeGraphQL.Field((type) => User)
  user!: FixDecorator<User>;
}

@TypeGraphQL.InputType()
export class SignUpUserContract {
  @TypeGraphQL.Field((type) => String)
  username!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  email!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  password!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class SignUpUserPayload extends BasePayload {
  __typename?: 'SignUpUserPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];

  @TypeGraphQL.Field((type) => User)
  createdUser!: FixDecorator<User>;
}

@TypeGraphQL.ObjectType({ implements: AbstractPost })
export class Submission extends AbstractPost {
  __typename?: 'Submission';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
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

@TypeGraphQL.ObjectType({ implements: AbstractPost })
export class SubmissionEdit extends AbstractPost {
  __typename?: 'SubmissionEdit';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => [Content])
  content!: Array<Content>;

  @TypeGraphQL.Field((type) => User)
  poster!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Boolean)
  isActive!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => Submission)
  submission!: FixDecorator<Submission>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class SubmitPasswordResetPayload extends BasePayload {
  __typename?: 'SubmitPasswordResetPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
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
export class Transaction {
  __typename?: 'Transaction';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Wallet)
  wallet!: FixDecorator<Wallet>;

  @TypeGraphQL.Field((type) => TransactionType)
  transactionType!: FixDecorator<TransactionType>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  amount!: Scalars['Float'];
}

@TypeGraphQL.InputType()
export class TransactionByWalletIdInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  first!: Scalars['Int'];

  @TypeGraphQL.Field((type) => GraphQLString, { nullable: true })
  afterDate!: Maybe<Scalars['DateTime']>;

  @TypeGraphQL.Field((type) => String, { nullable: true })
  afterId!: Maybe<Scalars['String']>;
}

@TypeGraphQL.InputType()
export class TransactionByWalletIdsInput {
  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  first!: Scalars['Int'];

  @TypeGraphQL.Field((type) => GraphQLString, { nullable: true })
  afterDate!: Maybe<Scalars['DateTime']>;

  @TypeGraphQL.Field((type) => String, { nullable: true })
  afterId!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field((type) => [TypeGraphQL.ID])
  wallets!: Array<Scalars['ID']>;
}

@TypeGraphQL.ObjectType()
export class TransactionConnection {
  __typename?: 'TransactionConnection';

  @TypeGraphQL.Field((type) => [TransactionEdge])
  edges!: Array<TransactionEdge>;

  @TypeGraphQL.Field((type) => TransactionPageInfo)
  pageInfo!: FixDecorator<TransactionPageInfo>;
}

@TypeGraphQL.ObjectType()
export class TransactionCursor {
  __typename?: 'TransactionCursor';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  date!: Scalars['DateTime'];
}

@TypeGraphQL.ObjectType()
export class TransactionEdge {
  __typename?: 'TransactionEdge';

  @TypeGraphQL.Field((type) => TransactionCursor)
  cursor!: FixDecorator<TransactionCursor>;

  @TypeGraphQL.Field((type) => Transaction)
  node!: FixDecorator<Transaction>;
}

@TypeGraphQL.ObjectType()
export class TransactionPageInfo {
  __typename?: 'TransactionPageInfo';

  @TypeGraphQL.Field((type) => Boolean)
  hasNextPage!: Scalars['Boolean'];
}

/** Describes context of transaction (whether related wallet/user is buyer or seller) */
export enum TransactionType {
  ChallengeBoost = 0,
  VirtualReward = 1,
  MonetaryReward = 2
}
TypeGraphQL.registerEnumType(TransactionType, { name: 'TransactionType' });

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class UpdatePasswordPayload extends BasePayload {
  __typename?: 'UpdatePasswordPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType({ implements: Content })
export class UploadedContent extends Content {
  __typename?: 'UploadedContent';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
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

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => String)
  username!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  email!: Scalars['String'];

  @TypeGraphQL.Field((type) => String, { nullable: true })
  alias!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field((type) => PendingOperation, { nullable: true })
  pendingOperation!: Maybe<PendingOperation>;

  @TypeGraphQL.Field((type) => Boolean)
  hasNsfwAllowed!: Scalars['Boolean'];

  @TypeGraphQL.Field((type) => [Wallet])
  wallets!: Array<Wallet>;

  @TypeGraphQL.Field((type) => ActivityConnection)
  activities!: FixDecorator<ActivityConnection>;

  @TypeGraphQL.Field((type) => TransactionConnection)
  transactions!: FixDecorator<TransactionConnection>;
}

@TypeGraphQL.ArgsType()
export class UserActivitiesArgs {
  @TypeGraphQL.Field((type) => ActivityByUserIdInput)
  input!: FixDecorator<ActivityByUserIdInput>;
}

@TypeGraphQL.ArgsType()
export class UserTransactionsArgs {
  @TypeGraphQL.Field((type) => TransactionByWalletIdsInput)
  input!: FixDecorator<TransactionByWalletIdsInput>;
}

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class ValidatePasswordResetTokenPayload extends BasePayload {
  __typename?: 'ValidatePasswordResetTokenPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType()
export class Wallet {
  __typename?: 'Wallet';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => GraphQLString)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => GraphQLString)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => User)
  user!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => WalletType)
  walletType!: FixDecorator<WalletType>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  balance!: Scalars['Float'];

  @TypeGraphQL.Field((type) => TransactionConnection)
  transactions!: FixDecorator<TransactionConnection>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  score!: Scalars['Int'];

  @TypeGraphQL.Field((type) => Tag)
  tag!: FixDecorator<Tag>;
}

@TypeGraphQL.ArgsType()
export class WalletTransactionsArgs {
  @TypeGraphQL.Field((type) => TransactionByWalletIdInput)
  input!: FixDecorator<TransactionByWalletIdInput>;
}

/** Determines whether wallet holds physical/virtual currency */
export enum WalletType {
  Monetary = 0,
  Virtual = 1
}
TypeGraphQL.registerEnumType(WalletType, { name: 'WalletType' });
