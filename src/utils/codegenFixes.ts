import { GraphQLString } from 'graphql';
import { createUnionType, Field, ObjectType } from 'type-graphql';
import {
  MarkdownContent,
  LatexContent,
  UploadedContent
} from '../__codegen__/type-graphql-classes';

@ObjectType()
export class _Any {
  @Field(() => GraphQLString)
  _any!: undefined;
}

export const Content = createUnionType({
  name: 'Content',
  types: () => [MarkdownContent, LatexContent, UploadedContent] as const,
  resolveType: (value) => {
    if ('markdown' in value) {
      return MarkdownContent;
    }
    if ('latex' in value) {
      return LatexContent;
    }
    if ('filename' in value) {
      return UploadedContent;
    }
    return undefined;
  }
});
