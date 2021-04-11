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
  _Any: any;
};

export type Activity = {
  __typename?: 'Activity';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
  activityType: ActivityType;
};

/** Type of activity done by user */
export enum ActivityType {
  PostChallenge = 'POST_CHALLENGE',
  PostSubmission = 'POST_SUBMISSION',
  PostReply = 'POST_REPLY',
  EditChallenge = 'EDIT_CHALLENGE',
  EditSubmission = 'EDIT_SUBMISSION',
  EditReply = 'EDIT_REPLY'
}

export type BasePayload = {
  message: Scalars['String'];
};

export type ChangeAliasPayload = BasePayload & {
  __typename?: 'ChangeAliasPayload';
  message: Scalars['String'];
  updatedUser: User;
};

export type ConfirmEmailResetTokenPayload = BasePayload & {
  __typename?: 'ConfirmEmailResetTokenPayload';
  message: Scalars['String'];
  updatedUser: User;
};

export type ConfirmSignUpTokenPayload = BasePayload & {
  __typename?: 'ConfirmSignUpTokenPayload';
  message: Scalars['String'];
};

export type ForgotPasswordPayload = BasePayload & {
  __typename?: 'ForgotPasswordPayload';
  message: Scalars['String'];
};

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
};

export type MutationSignUpUserArgs = {
  input: SignUpUserContract;
};

export type MutationSignInUserArgs = {
  input: SignInUserContract;
};

export type MutationForgotPasswordArgs = {
  identifier: Scalars['String'];
};

export type MutationChangeAliasArgs = {
  newAlias: Scalars['String'];
  password: Scalars['String'];
};

export type MutationRequestEmailChangeArgs = {
  newEmail: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};

export type MutationConfirmSignUpTokenArgs = {
  token: Scalars['String'];
};

export type MutationConfirmEmailResetTokenArgs = {
  token: Scalars['String'];
};

export type MutationValidatePasswordResetTokenArgs = {
  token: Scalars['String'];
};

export type MutationSubmitPasswordResetArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
  password: Scalars['String'];
};

/** Description of pending update that has to be confirmed via email */
export enum PendingOperation {
  SignUp = 'SIGN_UP',
  ForgotPassword = 'FORGOT_PASSWORD',
  ChangeEmail = 'CHANGE_EMAIL'
}

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  userById: User;
  helloAccount: Scalars['String'];
  userByIdentifier: User;
  validateIdentifiersAvailable: Scalars['Boolean'];
  validateUpdatedPasswordWhenSignedId: Scalars['Boolean'];
  validateUpdatedPasswordWhenForgotten: Scalars['Boolean'];
  walletById: Wallet;
};

export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};

export type QueryUserByIdArgs = {
  id: Scalars['String'];
};

export type QueryUserByIdentifierArgs = {
  identifier: Scalars['String'];
};

export type QueryValidateIdentifiersAvailableArgs = {
  email: Scalars['String'];
  usernameOrAlias: Scalars['String'];
};

export type QueryValidateUpdatedPasswordWhenSignedIdArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};

export type QueryValidateUpdatedPasswordWhenForgottenArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
  password: Scalars['String'];
};

export type QueryWalletByIdArgs = {
  id: Scalars['String'];
};

export type RequestEmailChangePayload = BasePayload & {
  __typename?: 'RequestEmailChangePayload';
  message: Scalars['String'];
};

export type ResendSignUpTokenPaylod = BasePayload & {
  __typename?: 'ResendSignUpTokenPaylod';
  message: Scalars['String'];
};

export type SignInUserContract = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};

export type SignInUserPayload = BasePayload & {
  __typename?: 'SignInUserPayload';
  message: Scalars['String'];
  token: Scalars['String'];
  user: User;
};

export type SignUpUserContract = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpUserPayload = BasePayload & {
  __typename?: 'SignUpUserPayload';
  message: Scalars['String'];
  createdUser: User;
};

export type SubmitPasswordResetPayload = BasePayload & {
  __typename?: 'SubmitPasswordResetPayload';
  message: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  wallet: Wallet;
  transactionType: TransactionType;
  amount: Scalars['Float'];
};

/** Describes context of transaction (whether related wallet/user is buyer or seller) */
export enum TransactionType {
  ChallengeBoost = 'CHALLENGE_BOOST',
  VirtualReward = 'VIRTUAL_REWARD',
  MonetaryReward = 'MONETARY_REWARD'
}

export type UpdatePasswordPayload = BasePayload & {
  __typename?: 'UpdatePasswordPayload';
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  alias?: Maybe<Scalars['String']>;
  pendingOperation: PendingOperation;
  hasNsfwAllowed: Scalars['Boolean'];
  wallets: Array<Wallet>;
  activity: Array<Activity>;
};

export type ValidatePasswordResetTokenPayload = BasePayload & {
  __typename?: 'ValidatePasswordResetTokenPayload';
  message: Scalars['String'];
};

export type Wallet = {
  __typename?: 'Wallet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
  walletType: WalletType;
  balance: Scalars['Float'];
  transactions: Array<Transaction>;
};

/** Determines whether wallet holds physical/virtual currency */
export enum WalletType {
  Monetary = 'MONETARY',
  Virtual = 'VIRTUAL'
}

export type _Entity = User | Wallet | Transaction | Activity;

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
