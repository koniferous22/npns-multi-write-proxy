import { plainToClass } from 'class-transformer';
import { GraphQLResolveInfo, GraphQLString, print } from 'graphql';
import gql from 'graphql-tag';
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  ID,
  Info,
  Mutation,
  ObjectType,
  Query,
  Resolver
} from 'type-graphql';
import { MultiWriteProxyContext } from '../context';
import { PostType } from '../services/Challenge';
import { combineServiceResponsePayloads } from '../utils/combineServiceResponsePayload';
import { Await } from '../utils/generics';
import { CreateWalletInput, PublishChallengeInput } from '../utils/inputs';
import {
  MwpAccount_AddActivityPayload,
  MwpAccount_CreateWalletPayload,
  MwpChallenge_CreateWalletPayload,
  MwpChallenge_PublishPayload
} from '../__codegen__/type-graphql-classes';
import { _ActivityType } from '../__codegen__/types';

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
const PublishPayload = combineServiceResponsePayloads(
  {
    account: MwpAccount_AddActivityPayload,
    challenge: MwpChallenge_PublishPayload
  },
  'Publish'
);

@Resolver(() => ProxyExample)
export class ProxyResolver {
  private getServiceSelectionSetFromInfo(
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

  private postTypeToActivityType (postType: PostType): _ActivityType {
    switch (postType) {
      case 'ChallengeEdit':
        return _ActivityType.EditChallenge;
      case 'Submission':
        return _ActivityType.PostSubmission;
      case 'SubmissionEdit':
        return _ActivityType.EditSubmission;
      case 'Reply':
        return _ActivityType.PostReply;
      case 'ReplyEdit':
        return _ActivityType.EditReply;
    }
  }

  private async publishPost<T extends Record<string, InstanceType<typeof MwpChallenge_PublishPayload>>>(
    postType: PostType,
    id: string,
    ctx: MultiWriteProxyContext,
    info: GraphQLResolveInfo,
    getPublishedId: (response: T) => string
  ) {
    const accountSelectionSet = this.getServiceSelectionSetFromInfo(info, 'account', `publish${postType}`);
    const challengeResponse = await ctx.services.challenge.publishPost<T>(postType, id, ctx);
    let accountResponse: Await<ReturnType<typeof ctx['services']['account']['addActivity']>>;
    try {
      accountResponse = await ctx.services.account.addActivity(
        getPublishedId(challengeResponse),
        this.postTypeToActivityType(postType),
        ctx,
        accountSelectionSet
      );
    } catch (e) {
      await ctx.services.challenge.publishPostRollback(postType, id, ctx);
      throw e;
    }
    return plainToClass(PublishPayload, {
      account: accountResponse,
      challenge: challengeResponse
    });
  }

  @Authorized()
  @Mutation(() => CreateWalletPayload)
  async createWallet(
    @Arg('input') input: CreateWalletInput,
    @Ctx() ctx: MultiWriteProxyContext,
    @Info() info: GraphQLResolveInfo
  ) {
    const accountSelectionSet = this.getServiceSelectionSetFromInfo(info, 'account', 'createWallet');
    const challengeSelectionSet = this.getServiceSelectionSetFromInfo(info, 'challenge', 'createWallet');
    const accountReponse = await ctx.services.account.createWallet(
      input.tagId,
      input.walletType,
      ctx,
      accountSelectionSet
    );
    let challengeResponse: Await<
      ReturnType<typeof ctx['services']['challenge']['createWallet']>
    >;
    try {
      challengeResponse = await ctx.services.challenge.createWallet(
        input.tagId,
        accountReponse.mwpAccount_CreateWallet.createdWallet.id,
        ctx,
        challengeSelectionSet
      )
    } catch (e) {
      await ctx.services.account.createWalletRollback(
        accountReponse.mwpAccount_CreateWallet.createdWallet.id,
        ctx
      );
      throw e;
    }
    return {
      account: accountReponse.mwpAccount_CreateWallet,
      challenge: challengeResponse.mwpChallenge_CreateWallet
    };
  }

  @Authorized()
  @Mutation(() => PublishPayload)
  async publishChallenge(
    @Arg('input') input: PublishChallengeInput,
    @Ctx() ctx: MultiWriteProxyContext,
    @Info() info: GraphQLResolveInfo
  ) {
    const accountSelectionSet = this.getServiceSelectionSetFromInfo(info, 'account', 'publishChallenge');
    const challengeResponse = await ctx.services.challenge.publishChallenge(input.challengeId, input.title, ctx);
    let accountResponse: Await<ReturnType<typeof ctx['services']['account']['addActivity']>>;
    try {
      accountResponse = await ctx.services.account.addActivity(
        challengeResponse.mwpChallenge_PublishChallenge.publishedId,
        _ActivityType.PostChallenge,
        ctx,
        accountSelectionSet
      );
    } catch (e) {
      await ctx.services.challenge.publishChallengeRollback(input.challengeId, ctx);
      throw e;
    }
    return plainToClass(PublishPayload, {
      account: accountResponse,
      challenge: challengeResponse
    });
  }

  @Authorized()
  @Mutation(() => PublishPayload)
  async publishSubmission(
    @Arg('id', () => ID) id: string,
    @Ctx() ctx: MultiWriteProxyContext,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.publishPost<{
      mwpChallenge_PublishSubmission: MwpChallenge_PublishPayload
    }>('Submission', id, ctx, info, (res) => res.mwpChallenge_PublishSubmission.publishedId);
  }
  @Authorized()
  @Mutation(() => PublishPayload)
  async publishReply(
    @Arg('id', () => ID) id: string,
    @Ctx() ctx: MultiWriteProxyContext,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.publishPost<{
      mwpChallenge_PublishReply: MwpChallenge_PublishPayload
    }>('Reply', id, ctx, info, (res) => res.mwpChallenge_PublishReply.publishedId);
  }
  @Authorized()
  @Mutation(() => PublishPayload)
  async publishChallengeEdit(
    @Arg('id', () => ID) id: string,
    @Ctx() ctx: MultiWriteProxyContext,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.publishPost<{
      mwpChallenge_PublishChallengeEdit: MwpChallenge_PublishPayload
    }>('ChallengeEdit', id, ctx, info, (res) => res.mwpChallenge_PublishChallengeEdit.publishedId);
  }
  @Authorized()
  @Mutation(() => PublishPayload)
  async publishSubmissionEdit(
    @Arg('id', () => ID) id: string,
    @Ctx() ctx: MultiWriteProxyContext,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.publishPost<{
      mwpChallenge_PublishSubmissionEdit: MwpChallenge_PublishPayload
    }>('SubmissionEdit', id, ctx, info, (res) => res.mwpChallenge_PublishSubmissionEdit.publishedId);
  }
  @Authorized()
  @Mutation(() => PublishPayload)
  async publishReplyEdit(
    @Arg('id', () => ID) id: string,
    @Ctx() ctx: MultiWriteProxyContext,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.publishPost<{
      mwpChallenge_PublishReplyEdit: MwpChallenge_PublishPayload
    }>('ReplyEdit', id, ctx, info, (res) => res.mwpChallenge_PublishReplyEdit.publishedId);
  }

  // NOTE just to by pass errors, that no query is present here
  @Query(() => GraphQLString)
  hello() {
    return 'world';
  }
}
