import gql from 'graphql-tag';
import { AbstractService } from './AbstractService';
import * as GatewayApi from '../__codegen__/types';
import { MultiWriteProxyContext } from '../context';
import { print, SelectionSetNode } from 'graphql';

export type PostType =
  | 'Submission'
  | 'Reply'
  | 'ChallengeEdit'
  | 'SubmissionEdit'
  | 'ReplyEdit';

// NOTE legacy class because before wanted to proxy two different services instead of gateway itself
export class ChallengeService extends AbstractService {
  async createWallet(
    tagId: string,
    walletId: string,
    ctx: MultiWriteProxyContext,
    selectionSet: SelectionSetNode | null | undefined
  ) {
    return this.performMutation<{
      mwpChallenge_CreateWallet: GatewayApi._MwpChallenge_CreateWalletPayload;
    }>(
      gql`
        ${selectionSet ? `fragment userFields on MwpChallenge_CreateWalletPayload ${
          print(selectionSet)
        }` : ''}
        mutation createWallet(
          $payload: MwpChallenge_CreateWalletInput!
          $digest: String!
        ) {
          mwpChallenge_CreateWallet(payload: $payload, digest: $digest) {
            message
            ${selectionSet ? `...userFields` : ''}
          }
        }
      `,
      {
        tagId,
        walletId
      },
      ctx
    );
  }
  async createWalletRollback(walletId: string, ctx: MultiWriteProxyContext) {
    return this.performMutation<{
      mwpChallenge_CreateWalletRollback: GatewayApi._MwpChallenge_CreateWalletRollbackPayload;
    }>(
      gql`
        mutation createWalletRollback($payload: String!, $digest: String!) {
          mwpChallenge_CreateWalletRollback(
            payload: $payload
            digest: $digest
          ) {
            message
          }
        }
      `,
      walletId,
      ctx
    );
  }
  async markChallengeSolved(
    challengeId: string,
    submissionId: string,
    winnerWalletId: string,
    ctx: MultiWriteProxyContext,
    selectionSet: SelectionSetNode | null | undefined
  ) {
    return this.performMutation<{
      mwpChallege_MarkChallengeSolved: GatewayApi._MwpChallenge_MarkChallengeSolvedPayload;
    }>(
      gql`
        ${selectionSet ? `fragment userFields on MwpChallenge_MarkChallengeSolvedPayload ${
          print(selectionSet)
        }` : ''}
        mutation markChallengeSolved(
          $payload: MwpChallenge_MarkChallengeSolvedInput!
          $digest: String!
        ) {
          mwpChallenge_MarkChallengeSolved(payload: $payload, digest: $digest) {
            message
            challenge {
              tag {
                id
                name
              }
              views
              boost
              title
              acceptedSubmission {
                ...abstractPostFields
                edits {
                  ...abstractPostFields
                }
              }
              edits {
                ...abstractPostFields
              }
            }
          }
        }
      `,
      {
        challengeId,
        submissionId,
        winnerWalletId
      },
      ctx
    );
  }
  async markChallengeSolvedRollback(
    challengeId: string,
    submissionId: string,
    winnerWalletId: string,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpChallenge_MarkChallengeSolvedRollback: GatewayApi._MwpChallenge_MarkChallengeSolvedRollbackPayload;
    }>(
      gql`
        mutation markChallengeSolvedRollback(
          $payload: MwpChallenge_MarkChallengeSolvedInput!
          $digest: String!
        ) {
          mwpChallenge_MarkChallengeSolvedRollback(
            payload: $payload
            digest: $digest
          ) {
            message
          }
        }
      `,
      {
        challengeId,
        submissionId,
        winnerWalletId
      },
      ctx
    );
  }

  async boostChallenge(
    challengeId: string,
    amount: number,
    ctx: MultiWriteProxyContext,
    selectionSet: SelectionSetNode | null | undefined
  ) {
    return this.performMutation<{
      mwpChallege_BoostChallenge: GatewayApi._MwpChallenge_BoostChallengePayload;
    }>(
      gql`
        ${selectionSet ? `fragment userFields on MwpChallenge_BoostChallengePayload ${
          print(selectionSet)
        }` : ''}
        mutation boostChallenge(
          $payload: MwpChallenge_BoostChallengeInput!
          $digest: String!
        ) {
          mwpChallenge_BoostChallenge(payload: $payload, digest: $digest) {
            message
            challenge {
              tag {
                id
                name
              }
              views
              boost
              title
              edits {
                ...abstractPostFields
              }
            }
          }
        }
      `,
      {
        challengeId,
        amount
      },
      ctx
    );
  }
  async boostChallengeRollback(
    challengeId: string,
    amount: number,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpChallenge_BoostChallengeRollback: GatewayApi._MwpChallenge_BoostChallengeRollbackPayload;
    }>(
      gql`
        mutation boostChallenge(
          $payload: MwpChallenge_BoostChallengeRollback!
          $digest: String!
        ) {
          mwpChallenge_CreateWalletRollback(
            payload: $payload
            digest: $digest
          ) {
            message
          }
        }
      `,
      {
        challengeId,
        amount
      },
      ctx
    );
  }

  async publishChallenge(
    challengeId: string,
    title: string,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpChallenge_PublishChallenge: GatewayApi._MwpChallenge_PublishPayload;
    }>(
      gql`
        mutation publishChallenge(
          $payload: MwpChallenge_PublishChallengeInput!
          $digest: String!
        ) {
          mwpChallenge_PublishChallenge(payload: $payload, digest: $digest) {
            message
            publishedId
          }
        }
      `,
      {
        challengeId,
        title
      },
      ctx
    );
  }
  async publishChallengeRollback(
    challengeId: string,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpChallenge_PublishChallengeRollback: GatewayApi._MwpChallenge_PublishRollbackPayload;
    }>(
      gql`
        mutation publishChallengeRollback($payload: ID!, $digest: String!) {
          mwpChallenge_PublishChallengeRollback(
            payload: $payload
            digest: $digest
          ) {
            message
            publishedId
          }
        }
      `,
      challengeId,
      ctx
    );
  }
  async publishPost<T>(
    type: PostType,
    id: string,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<T>(
      gql`
        mutation publish${type}(
          $payload: ID!
          $digest: String!
        ) {
          mwpChallenge_Publish${type}(
            payload: $payload
            digest: $digest
          ) {
            message
            publishedId
          }
        }
      `,
      id,
      ctx
    );
  }
  async publishPostRollback<T>(
    type: PostType,
    id: string,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<T>(
      gql`
        mutation publish${type}Rollback(
          $payload: ID!
          $digest: String!
        ) {
          mwpChallenge_Publish${type}Rollback(
            payload: $payload
            digest: $digest
          ) {
            message
            publishedId
          }
        }
      `,
      id,
      ctx
    );
  }
}
