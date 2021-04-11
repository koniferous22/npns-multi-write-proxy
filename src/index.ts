import 'reflect-metadata';
import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import gql from 'graphql-tag';
import { buildSchema, createResolversMap } from 'type-graphql';
import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { specifiedDirectives } from 'graphql';
// eslint-disable-next-line import/no-named-as-default
import federationDirectives from '@apollo/federation/dist/directives';
import waitOn from 'wait-on';
import { MultiWriteProxyContext } from './context';
import { Config } from './config';
import { authChecker } from './authChecker';
import { fixFieldSchemaDirectives } from './utils/fixFieldDirectives';
import { ProxyResolver } from './resolvers/Proxy';

const federationFieldDirectivesFixes: Parameters<
  typeof fixFieldSchemaDirectives
>[1] = [];

const bootstrap = async () => {
  const { port, graphqlPath, account, challenge } = Config.getInstance().getConfig();
  const services = {
    account,
    challenge
  };
  const serviceList = Object.entries(services).map(
    ([name, { host, port, graphqlPath }]) => ({
      name,
      url: `${host}:${port}${graphqlPath}`
    })
  );
  const serviceHealthChecks = Object.entries(services).map(
    ([, { host, port }]) => `${host}:${port}/.well-known/apollo/server-health`
  );
  await waitOn({
    resources: serviceHealthChecks,
    log: true,
    interval: 250
  });
  const typeGraphQLSchema = await buildSchema({
    resolvers: [ProxyResolver],
    directives: [...specifiedDirectives, ...federationDirectives],
    authChecker
  });

  const schema = buildFederatedSchema({
    typeDefs: gql(
      fixFieldSchemaDirectives(
        printSchemaWithDirectives(typeGraphQLSchema),
        federationFieldDirectivesFixes
      )
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolvers: createResolversMap(typeGraphQLSchema) as any
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const userFromRequest = req.headers.user as string;
      return {
        user: userFromRequest ? JSON.parse(userFromRequest) : null,
        config: Config.getInstance()
      } as MultiWriteProxyContext;
    }
  });
  server.setGraphQLPath(graphqlPath);
  server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Multi-write proxy ready at ${url}`);
  });
};

bootstrap();