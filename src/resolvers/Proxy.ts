import { GraphQLString } from 'graphql';
import { gql } from 'graphql-request';
import { Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { MultiWriteProxyContext } from '../context';
import { createHmacDigest } from '../utils/createHmacDigest';
import * as AccountServiceApi from '../__codegen__/account-service';

@ObjectType()
class ProxyExample {
  @Field()
  hello!: string;
}

@Resolver(() => ProxyExample)
export class ProxyResolver {
  @Query(() => GraphQLString)
  async helloProxy(@Ctx() ctx: MultiWriteProxyContext) {
    const payload = 'test';
    const digest = createHmacDigest(payload, ctx);
    const result = await ctx.graphqlClients.account.request<{
      helloAccount: AccountServiceApi.Query['helloAccount'];
    }>(
      gql`
        query ping($payload: String!, $digest: String!) {
          helloAccount(payload: $payload, digest: $digest)
        }
      `,
      {
        payload,
        digest
      }
    );
    return result.helloAccount;
  }
}
