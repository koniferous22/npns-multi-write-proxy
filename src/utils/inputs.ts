import { Field, ID, InputType } from 'type-graphql';
import { WalletType } from '../__codegen__/type-graphql-classes/account-service';
import { _WalletType } from '../__codegen__/types/account-service';

@InputType()
export class CreateWalletInput {
  @Field(() => ID)
  tagId!: string;

  @Field(() => WalletType)
  walletType!: _WalletType;
}
