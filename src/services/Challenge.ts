import gql from 'graphql-tag';
import { AbstractService } from './AbstractService';
import * as ChallengeServiceApi from '../__codegen__/types/challenge-service';
import { MultiWriteProxyContext } from '../context';

export class ChallengeService extends AbstractService {
  async createWallet(
    tagId: string,
    walletId: string,
    ctx: MultiWriteProxyContext
  ) {
    return this.performMutation<{
      mwpChallege_CreateWallet: ChallengeServiceApi._MwpChallenge_CreateWalletPayload;
    }>(
      gql`
        mutation createWallet(
          $payload: MwpChallenge_CreateWalletInput!
          $digest: String!
        ) {
          mwpChallenge_CreateWallet(payload: $payload, digest: $digest) {
            message
            createdWallet {
              score
              tag {
                id
                name
              }
            }
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
      mwpChallenge_CreateWalletRollback: ChallengeServiceApi._MwpChallenge_CreateWalletPayload;
    }>(
      gql`
        mutation createWallet($payload: String!, $digest: String!) {
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
}
