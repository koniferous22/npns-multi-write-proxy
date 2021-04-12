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
  _Any: any;
};






export type _Activity = {
  __typename?: 'Activity';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: _User;
  activityType: _ActivityType;
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

export type _BasePayload = {
  message: Scalars['String'];
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


export type _ForgotPasswordPayload = _BasePayload & {
  __typename?: 'ForgotPasswordPayload';
  message: Scalars['String'];
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
  mwpAccount_CreateWalletRollback: _MwpAccount_CreateWalletPayload;
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

export type _MwpAccount_CreateWalletInput = {
  tagId: Scalars['ID'];
  walletType: Scalars['Float'];
};

export type _MwpAccount_CreateWalletPayload = _BasePayload & {
  __typename?: 'MwpAccount_CreateWalletPayload';
  message: Scalars['String'];
  createdWallet: _Wallet;
};

/** Description of pending update that has to be confirmed via email */
export enum _PendingOperation {
  SignUp = 'SIGN_UP',
  ForgotPassword = 'FORGOT_PASSWORD',
  ChangeEmail = 'CHANGE_EMAIL'
}

export type _Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<__Entity>>;
  _service: __Service;
  userById: _User;
  userByIdentifier: _User;
  validateIdentifiersAvailable: Scalars['Boolean'];
  validateUpdatedPasswordWhenSignedId: Scalars['Boolean'];
  validateUpdatedPasswordWhenForgotten: Scalars['Boolean'];
  walletById: _Wallet;
};


export type _Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type _QueryUserByIdArgs = {
  id: Scalars['String'];
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
  id: Scalars['String'];
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

export type _SubmitPasswordResetPayload = _BasePayload & {
  __typename?: 'SubmitPasswordResetPayload';
  message: Scalars['String'];
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
  activity: Array<_Activity>;
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
  transactions: Array<_Transaction>;
};

/** Determines whether wallet holds physical/virtual currency */
export enum _WalletType {
  Monetary = 'Monetary',
  Virtual = 'Virtual'
}


export type __Entity = _User | _Wallet | _Transaction | _Activity;

export type __Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
