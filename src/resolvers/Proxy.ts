import { GraphQLString } from 'graphql';
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver
} from 'type-graphql';
import { MultiWriteProxyContext } from '../context';
import { combineServiceResponsePayloads } from '../utils/combineServiceResponsePayload';
import { Await } from '../utils/generics';
import { CreateWalletInput } from '../utils/inputs';
import {
  MwpAccount_CreateWalletPayload,
  MwpChallenge_CreateWalletPayload
} from '../__codegen__/type-graphql-classes';

@ObjectType()
class ProxyExample {
  @Field()
  hello!: string;
}

const CreateWalletPayload = combineServiceResponsePayloads(
  {
    account: MwpAccount_CreateWalletPayload,
    challenge: MwpChallenge_CreateWalletPayload
  },
  'CreateWallet'
);

@Resolver(() => ProxyExample)
export class ProxyResolver {
  @Authorized()
  @Mutation(() => CreateWalletPayload)
  async createWallet(
    @Arg('input') input: CreateWalletInput,
    @Ctx() ctx: MultiWriteProxyContext
  ) {
    const accountReponse = await ctx.services.account.createWallet(
      input.tagId,
      input.walletType,
      ctx
    );
    let challengeResponse: Await<
      ReturnType<typeof ctx['services']['challenge']['createWallet']>
    >;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      challengeResponse = await ctx.services.challenge.createWallet(
        input.tagId,
        accountReponse.mwpAccount_CreateWallet.createdWallet.id,
        ctx
      );
    } catch (e) {
      await ctx.services.account.createWalletRollback(
        accountReponse.mwpAccount_CreateWallet.createdWallet.id,
        ctx
      );
      throw e;
    }
  }

  // NOTE just to by pass errors, that no query is present here
  @Query(() => GraphQLString)
  hello() {
    return 'world';
  }
}
