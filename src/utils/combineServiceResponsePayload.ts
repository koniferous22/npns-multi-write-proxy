import { ClassType, Field, ObjectType } from 'type-graphql';
import { MultiWriteProxyContext } from '../context';

type ServiceType = keyof MultiWriteProxyContext['services'];
export function combineServiceResponsePayloads(
  payloadClasses: Record<
    ServiceType,
    {
      payload: ClassType;
      objectTypeName: string;
    }
  >,
  mutationName: string
) {
  @ObjectType(payloadClasses.account.objectTypeName)
  class AccountPayload extends payloadClasses.account.payload {}
  @ObjectType(payloadClasses.challenge.objectTypeName)
  class ChallengePayload extends payloadClasses.account.payload {}

  // TODO generalize this class further on
  @ObjectType(`${mutationName}Payload`)
  class CombinedPayload {
    @Field(() => AccountPayload)
    account!: AccountPayload;
    @Field(() => ChallengePayload)
    challenge!: ChallengePayload;
  }
  return CombinedPayload;
}
