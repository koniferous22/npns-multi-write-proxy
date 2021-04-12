import { createHmac } from 'crypto';
import { MultiWriteProxyContext } from '../context';

export const createHmacDigest = (
  payload: unknown,
  ctx: MultiWriteProxyContext
) => {
  const { secret, algorithm } = ctx.config.getConfig().hmac;
  const hmac = createHmac(algorithm, secret);
  hmac.update(typeof payload === 'string' ? payload : JSON.stringify(payload));
  return hmac.digest().toString('hex');
};
