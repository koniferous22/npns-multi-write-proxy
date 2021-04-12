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
import { Await } from '../utils/generics';
import { CreateWalletInput } from '../utils/inputs';

@ObjectType()
class ProxyExample {
  @Field()
  hello!: string;
}

@Resolver(() => ProxyExample)
export class ProxyResolver {
  @Authorized()
  @Mutation(() => GraphQLString)
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
    return 'test';
  }

  // NOTE just to by pass errors, that no query is present here
  @Query(() => GraphQLString)
  hello() {
    return 'world';
  }
}
