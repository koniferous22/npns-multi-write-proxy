import gql from 'graphql-tag';
import { AbstractService } from './AbstractService';
import * as AccountServiceApi from '../__codegen__/types/account-service';
import { MultiWriteProxyContext } from '../context';

export class AccountService extends AbstractService {
  createWallet(
    tagId: string,
    walletType: AccountServiceApi._WalletType,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpAccount_CreateWallet: AccountServiceApi._MwpAccount_CreateWalletPayload;
    }>(
      gql`
        mutation createWallet(
          $payload: MwpAccount_CreateWalletInput!
          $digest: String!
        ) {
          mwpAccount_CreateWallet(payload: $payload, digest: $digest) {
            message
            createdWallet {
              id
              balance
              walletType
              user {
                username
                email
                alias
                pendingOperation
                hasNsfwAllowed
              }
            }
          }
        }
      `,
      {
        tagId,
        walletType
      },
      ctx
    );
  }
  createWalletRollback(walletId: string, ctx: MultiWriteProxyContext) {
    return this.performMutation<{
      mwpAccount_CreateWalletRollback: AccountServiceApi._MwpAccount_CreateWalletPayload;
    }>(
      gql`
        mutation createWallet($payload: ID!, $digest: String!) {
          mwpAccount_CreateWalletRollback(payload: $payload, digest: $digest) {
            message
          }
        }
      `,
      walletId,
      ctx
    );
  }
}
