import { ClassType, Field, ObjectType } from 'type-graphql';
import { MultiWriteProxyContext } from '../context';

type ServiceType = keyof MultiWriteProxyContext['services'];
export function combineServiceResponsePayloads(
  payloadClasses: Record<ServiceType, ClassType>,
  mutationName: string
) {
  // TODO generalize this class further on
  @ObjectType(`${mutationName}Payload`)
  class CombinedPayload {
    @Field(() => payloadClasses.account, {
      nullable: true
    })
    account!: InstanceType<typeof payloadClasses.account>;
    @Field(() => payloadClasses.challenge, {
      nullable: true
    })
    challenge!: InstanceType<typeof payloadClasses.challenge>;
  }
  return CombinedPayload;
}
