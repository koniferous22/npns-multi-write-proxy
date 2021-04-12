import { DocumentNode } from 'apollo-link';
import { GraphQLClient } from 'graphql-request';
import { MultiWriteProxyContext } from '../context';
import { createHmacDigest } from '../utils/createHmacDigest';

export abstract class AbstractService {
  constructor(protected client: GraphQLClient) {}

  protected async performMutation<ResultT, PayloadT = unknown>(
    query: DocumentNode,
    payload: PayloadT,
    ctx: MultiWriteProxyContext
  ) {
    const digest = createHmacDigest(payload, ctx.config.getConfig());
    console.log(digest);
    const result = await this.client
      .setHeader('user', JSON.stringify(ctx.user))
      .request<ResultT>(query, {
        payload,
        digest
      });
    return result;
  }
}
