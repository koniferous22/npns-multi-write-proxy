/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';
import { _Any } from '../../utils/codegenFixes';
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
  _Any: any;
};

@TypeGraphQL.InterfaceType()
export abstract class BasePayload {
  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType()
export class Activity {
  __typename?: 'Activity';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => User)
  user!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => ActivityType)
  activityType!: FixDecorator<ActivityType>;
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

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class ForgotPasswordPayload extends BasePayload {
  __typename?: 'ForgotPasswordPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
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
  mwpAccount_CreateWalletRollback: MwpAccount_CreateWalletPayload;
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

/** Description of pending update that has to be confirmed via email */
export enum PendingOperation {
  SIGN_UP = 0,
  FORGOT_PASSWORD = 1,
  CHANGE_EMAIL = 2
}
TypeGraphQL.registerEnumType(PendingOperation, { name: 'PendingOperation' });

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  userById: User;
  userByIdentifier: User;
  validateIdentifiersAvailable: Scalars['Boolean'];
  validateUpdatedPasswordWhenSignedId: Scalars['Boolean'];
  validateUpdatedPasswordWhenForgotten: Scalars['Boolean'];
  walletById: Wallet;
};

@TypeGraphQL.ArgsType()
export class Query_EntitiesArgs {
  @TypeGraphQL.Field((type) => [_Any])
  representations!: Array<_Any>;
}

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

@TypeGraphQL.ObjectType({ implements: BasePayload })
export class SubmitPasswordResetPayload extends BasePayload {
  __typename?: 'SubmitPasswordResetPayload';

  @TypeGraphQL.Field((type) => String)
  message!: Scalars['String'];
}

@TypeGraphQL.ObjectType()
export class Transaction {
  __typename?: 'Transaction';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => Wallet)
  wallet!: FixDecorator<Wallet>;

  @TypeGraphQL.Field((type) => TransactionType)
  transactionType!: FixDecorator<TransactionType>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  amount!: Scalars['Float'];
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

@TypeGraphQL.ObjectType()
export class User {
  __typename?: 'User';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
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

  @TypeGraphQL.Field((type) => [Activity])
  activity!: Array<Activity>;
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

  @TypeGraphQL.Field((type) => _Any)
  createdAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => _Any)
  updatedAt!: Scalars['DateTime'];

  @TypeGraphQL.Field((type) => User)
  user!: FixDecorator<User>;

  @TypeGraphQL.Field((type) => WalletType)
  walletType!: FixDecorator<WalletType>;

  @TypeGraphQL.Field((type) => TypeGraphQL.Float)
  balance!: Scalars['Float'];

  @TypeGraphQL.Field((type) => [Transaction])
  transactions!: Array<Transaction>;
}

/** Determines whether wallet holds physical/virtual currency */
export enum WalletType {
  Monetary = 0,
  Virtual = 1
}
TypeGraphQL.registerEnumType(WalletType, { name: 'WalletType' });

export type _Entity = User | Wallet | Transaction | Activity;

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
