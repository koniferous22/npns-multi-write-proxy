import { GraphQLString } from 'graphql';
import { gql } from 'graphql-request';
import { Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { MultiWriteProxyContext } from '../context';

@ObjectType()
class ProxyExample {
  @Field()
  hello!: string;
}

@Resolver(() => ProxyExample)
export class ProxyResolver {
  @Query(() => GraphQLString)
  hello() {
    return 'world';
  }
  @Query(() => GraphQLString)
  async helloProxy(@Ctx() ctx: MultiWriteProxyContext) {
    const result = await ctx.graphqlClients.account.request(gql`
      query {
        helloAccount
      }
    `);
    return JSON.stringify(result);
  }
}
