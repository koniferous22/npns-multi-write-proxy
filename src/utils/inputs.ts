import { Field, ID, InputType } from 'type-graphql';
import { WalletType } from '../__codegen__/type-graphql-classes';
import { _WalletType } from '../__codegen__/types';

@InputType()
export class CreateWalletInput {
  @Field(() => ID)
  tagId!: string;

  @Field(() => WalletType)
  walletType!: _WalletType;
}

@InputType()
export class BoostChallengeInput {
  @Field(() => ID)
  tagId!: string;

  @Field(() => WalletType)
  walletType!: _WalletType;
}

@InputType()
export class PublishChallengeInput {
  @Field(() => ID)
  challengeId!: string;

  @Field()
  title!: string;
}