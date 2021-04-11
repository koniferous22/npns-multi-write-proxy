import { AuthChecker } from 'type-graphql';
import { MultiWriteProxyContext } from './context';

export const authChecker: AuthChecker<MultiWriteProxyContext> = ({ context }) => {
  return Boolean(context.user);
  // TODO when roles are implemented as user field
  // user.roles.some((role) => roles.includes(role))
};
