import gql from 'graphql-tag';
import { AbstractService } from './AbstractService';
import * as GatewayApi from '../__codegen__/types';
import { MultiWriteProxyContext } from '../context';
import { print, SelectionSetNode } from 'graphql';

// NOTE legacy class because before wanted to proxy two different services instead of gateway itself
export class AccountService extends AbstractService {
  createWallet(
    tagId: string,
    walletType: GatewayApi._WalletType,
    ctx: MultiWriteProxyContext,
    selectionSet: SelectionSetNode | null | undefined
  ) {
    return this.performMutation<{
      mwpAccount_CreateWallet: GatewayApi._MwpAccount_CreateWalletPayload;
    }>(
      gql`
        ${selectionSet ? `fragment userFields on MwpAccount_CreateWalletPayload ${
          print(selectionSet)
        }` : ''}

        mutation createWallet(
          $payload: MwpAccount_CreateWalletInput!
          $digest: String!
        ) {
          mwpAccount_CreateWallet(payload: $payload, digest: $digest) {
            createdWallet {
              id
            }
            ${selectionSet ? `...userFields` : ''}
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
  addBalance(walletId: string, amount: number, ctx: MultiWriteProxyContext, selectionSet: SelectionSetNode | null | undefined) {
    return this.performMutation<{
      mwpAccount_AddBalance: GatewayApi._MwpAccount_AddBalancePayload;
    }>(
      gql`
        ${selectionSet ? `fragment userFields on MwpAccount_AddBalancePayload ${
          print(selectionSet)
        }` : ''}

        mutation addBalance(
          $payload: MwpAccount_AddBalanceInput!
          $digest: String!
        ) {
          mwpAccount_AddBalance(payload: $payload, digest: $digest) {
            ...userFields
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
    ctx: MultiWriteProxyContext,
    selectionSet: SelectionSetNode | null
  ) {
    return this.performMutation<{
      mwpAccount_CreateBoostTransaction: GatewayApi._MwpAccount_CreateBoostTransactionPayload;
    }>(
      gql`
        ${selectionSet ? `fragment userFields on MwpAccount_CreateBoostTransactionPayload ${
          print(selectionSet)
        }` : ''}

        mutation createBoostTransaction(
          $payload: MwpAccount_CreateBoostTransactionInput!
          $digest: String!
        ) {
          mwpAccount_CreateBoostTransaction(
            payload: $payload
            digest: $digest
          ) {
            ...userFields
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
    ctx: MultiWriteProxyContext,
    selectionSet: SelectionSetNode | null | undefined
  ) {
    return this.performMutation<{
      mwpAccount_AddActivity: GatewayApi._MwpAccount_AddActivityPayload;
    }>(
      gql`
        ${selectionSet ? `fragment userFields on MwpAccount_AddActivityPayload ${
          print(selectionSet)
        }` : ''}

        mutation addActivity(
          $payload: MwpAccount_AddActivityInput!
          $digest: String!
        ) {
          mwpAccount_AddActivity(payload: $payload, digest: $digest) {
            ...userFields
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

