import { DocumentNode } from 'apollo-link';
import { GraphQLClient } from 'graphql-request';
import { MultiWriteProxyContext } from '../context';
import { createHmacDigest } from '../utils/createHmacDigest';

// NOTE legacy class because before wanted to proxy two different services instead of gateway itself
export abstract class AbstractService {
  constructor(protected client: GraphQLClient) {}

  protected async performMutation<ResultT, PayloadT = unknown>(
    query: DocumentNode,
    payload: PayloadT,
    ctx: MultiWriteProxyContext
  ) {
    const digest = createHmacDigest(payload, ctx.config.getConfig());
    const result = await this.client
      .setHeader('Authorization', ctx.authHeader)
      .request<ResultT>(query, {
        payload,
        digest
      });
    return result;
  }
}
