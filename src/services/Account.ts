import gql from 'graphql-tag';
import { AbstractService } from './AbstractService';
import * as GatewayApi from '../__codegen__/types';
import { MultiWriteProxyContext } from '../context';

// NOTE legacy class because before wanted to proxy two different services instead of gateway itself
export class AccountService extends AbstractService {
  createWallet(
    tagId: string,
    walletType: GatewayApi._WalletType,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpAccount_CreateWallet: GatewayApi._MwpAccount_CreateWalletPayload;
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
      mwpAccount_CreateWalletRollback: GatewayApi._MwpAccount_CreateWalletRollbackPayload;
    }>(
      gql`
        mutation createWalletRollback($payload: ID!, $digest: String!) {
          mwpAccount_CreateWalletRollback(payload: $payload, digest: $digest) {
            message
          }
        }
      `,
      walletId,
      ctx
    );
  }
  addBalance(walletId: string, amount: number, ctx: MultiWriteProxyContext) {
    return this.performMutation<{
      mwpAccount_AddBalance: GatewayApi._MwpAccount_AddBalancePayload;
    }>(
      gql`
        mutation addBalance(
          $payload: MwpAccount_AddBalanceInput!
          $digest: String!
        ) {
          mwpAccount_AddBalance(payload: $payload, digest: $digest) {
            message
            wallet {
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
            transaction {
              transactionType
              amount
            }
          }
        }
      `,
      {
        walletId,
        amount
      },
      ctx
    );
  }
  addBalanceRollback(transactionId: string, ctx: MultiWriteProxyContext) {
    return this.performMutation<{
      mwpAccount_AddBalanceRollback: GatewayApi._MwpAccount_AddBalanceRollbackPayload;
    }>(
      gql`
        mutation addBalanceRollback($payload: ID!, $digest: String!) {
          mwpAccount_AddBalanceRollback(payload: $payload, digest: $digest) {
            message
          }
        }
      `,
      transactionId,
      ctx
    );
  }
  createBoostTransaction(
    walletId: string,
    amount: number,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpAccount_CreateBoostTransaction: GatewayApi._MwpAccount_CreateBoostTransactionPayload;
    }>(
      gql`
        mutation createBoostTransaction(
          $payload: MwpAccount_CreateBoostTransactionInput!
          $digest: String!
        ) {
          mwpAccount_CreateBoostTransaction(
            payload: $payload
            digest: $digest
          ) {
            message
            createdTransaction {
              transactionType
              amount
            }
          }
        }
      `,
      {
        walletId,
        amount
      },
      ctx
    );
  }
  createBoostTransactionRollback(
    transactionId: string,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpAccount_CreateBoostTransactionRollback: GatewayApi._MwpAccount_CreateBoostTransactionRollbackPayload;
    }>(
      gql`
        mutation createBoostTransactionRollback(
          $payload: ID!
          $digest: String!
        ) {
          mwpAccount_CreateBoostTransactionRollback(
            payload: $payload
            digest: $digest
          ) {
            message
          }
        }
      `,
      transactionId,
      ctx
    );
  }
  addActivity(
    postId: string,
    activityType: GatewayApi._ActivityType,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpAccount_AddActivity: GatewayApi._MwpAccount_AddActivityPayload;
    }>(
      gql`
        mutation addActivity(
          $payload: MwpAccount_AddActivityInput!
          $digest: String!
        ) {
          mwpAccount_AddActivity(payload: $payload, digest: $digest) {
            message
            createdActivity {
              activityType
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
        postId,
        activityType
      },
      ctx
    );
  }
  addActivityRollback(activityId: string, ctx: MultiWriteProxyContext) {
    return this.performMutation<{
      mwpAccount_AddActivityRollback: GatewayApi._MwpAccount_AddActivityRollbackPayload;
    }>(
      gql`
        mutation addActivityRollback($payload: ID!, $digest: String!) {
          mwpAccount_AddActivityRollback(payload: $payload, digest: $digest) {
            message
          }
        }
      `,
      activityId,
      ctx
    );
  }
}

