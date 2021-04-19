import { GraphQLResolveInfo, GraphQLString } from 'graphql';
import gql from 'graphql-tag';
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  Info,
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
  private getAccountSelectionSetFromInfo(
    info: GraphQLResolveInfo,
    serviceName: 'account' | 'challenge',
    mutationName: string
  ) {
    const resultSelectionSet = info.operation.selectionSet.selections.find(
      (node) =>
        node.kind === 'Field' &&
        node.name.kind === 'Name' &&
        node.name.value === mutationName
    );
    if (resultSelectionSet?.kind !== 'Field') {
      return null;
    }
    // @ts-expect-error wrong inferring
    const serviceSelectionNode = resultSelectionSet?.selectionSet.selections.find(
      (node) =>
        node.kind === 'Field' &&
        node.name.kind === 'Name' &&
        node.name.value === serviceName
    );
    return serviceSelectionNode?.kind === 'Field'
      ? serviceSelectionNode.selectionSet
      : null;
  }

  @Authorized()
  @Mutation(() => CreateWalletPayload)
  async createWallet(
    @Arg('input') input: CreateWalletInput,
    @Ctx() ctx: MultiWriteProxyContext
    // @Info() info: GraphQLResolveInfo
  ) {
    // console.log(
    //   JSON.stringify(
    //     this.getAccountSelectionSetFromInfo(info, 'account', 'createWallet'),
    //     null,
    //     2
    //   )
    // );
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
