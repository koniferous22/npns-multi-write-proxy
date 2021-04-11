import { GraphQLClient } from 'graphql-request';
import { Config } from './config';

export type MultiWriteProxyContext = {
  user: {
    data: {
      id: string;
      createdAt: string;
      updatedAt: string;
      username: string;
      email: string;
      alias: null | string;
      hasNsfwAllowed: boolean;
    };
  } | null;
  config: Config;
  graphqlClients: Record<
    Exclude<keyof ReturnType<Config['getConfig']>, 'graphqlPath' | 'port'>,
    GraphQLClient
  >;
};
