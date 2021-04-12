import { Config } from './config';
import { AccountService } from './services/Account';
import { ChallengeService } from './services/Challenge';

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
  services: {
    account: AccountService;
    challenge: ChallengeService;
  }
};
