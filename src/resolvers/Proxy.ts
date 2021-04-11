import { GraphQLString } from "graphql";
import { Field, FieldResolver, ObjectType, Query, Resolver, Root } from "type-graphql";

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
}
