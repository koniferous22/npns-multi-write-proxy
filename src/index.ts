import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import waitOn from 'wait-on';
import { GraphQLClient } from 'graphql-request';
import express from 'express';
import expressJwt from 'express-jwt';
import { MultiWriteProxyContext } from './context';
import { Config } from './config';
import { authChecker } from './authChecker';
import { ProxyResolver } from './resolvers/Proxy';
import { AccountService } from './services/Account';
import { ChallengeService } from './services/Challenge';

const bootstrap = async () => {
  const { port, graphqlPath, jwt, gateway } = Config.getInstance().getConfig();
  const services = {
    gateway
  };
  const graphqlClients = Object.fromEntries(
    Object.entries(services).map(([name, { host, port, graphqlPath }]) => [
      name as keyof typeof services,
      new GraphQLClient(`${host}:${port}${graphqlPath}`)
    ])
  );
  const accountService = new AccountService(graphqlClients.gateway);
  const challengeService = new ChallengeService(graphqlClients.gateway);

  const serviceHealthChecks = Object.entries(services).map(
    ([, { host, port }]) => `${host}:${port}/.well-known/apollo/server-health`
  );
  await waitOn({
    resources: serviceHealthChecks,
    log: true,
    interval: 250
  });
  const app = express();
  app.use(
    expressJwt({
      // NOTE validated by runtime config validators
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      secret: jwt.secret!,
      algorithms: [jwt.algorithm],
      credentialsRequired: false
    })
  );
  const schema = await buildSchema({
    resolvers: [ProxyResolver],
    authChecker
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const userFromJwtMiddleware = req.user;
      return {
        user: userFromJwtMiddleware ?? null,
        authHeader: req.headers.authorization,
        config: Config.getInstance(),
        services: {
          account: accountService,
          challenge: challengeService
        }
      } as MultiWriteProxyContext;
    }
  });
  server.setGraphQLPath(graphqlPath);
  server.applyMiddleware({ app });
  app.listen({ port }, () => {
    console.log(
      `🚀 Multi-write proxy ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

bootstrap();
