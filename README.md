# npns-multi-write-proxy
Multi-write proxy for npns project

Purpose of this repository is proxying mutations from different services that could put backend into inconsistent state, and wrapping by single mutation

## TODO
* Fully automatize not-working parts in codegen process
* Make proxy mutations reusable towards SelectionSet (Info arg in the resolvers)
  * https://www.npmjs.com/package/graphql-tag
* design strict validation mechanism than jwt
### Notes
* For now not possible to add custom mutations to `apollo-gateway`, otherwise wouldn't have to be a separate entity


### Codegen

Command to run: `npm run codegen`

* this executes `npm run codegen:account-service` and `npm run codegen:account-service` 
* above commands execute [graphql-codegen](https://www.graphql-code-generator.com/), that generates
  * typescript types
  * [TypeGraphQL](https://typegraphql.com/) classes (enum, object types etc..)
* Generated files
  * [Introspection plugin](https://www.graphql-code-generator.com/docs/plugins/introspection)
    * ./graphql.schema-account-service.json
    * ./graphql.schema-challenge-service.json
  * [Typescript plugin](https://www.graphql-code-generator.com/docs/plugins/typescript)
    * ./src/\_\_codegen\_\_/types/account-service.ts
    * ./src/\_\_codegen\_\_/types/challenge-service.ts
  * [TypeGraphQL plugin](https://www.graphql-code-generator.com/docs/plugins/typescript-type-graphql)
    * ./src/\_\_codegen\_\_/type-graphql-classes/account-service.ts
    * ./src/\_\_codegen\_\_/type-graphql-classes/challenge-service.ts

However some parts of typegraphql cannot be fixed due to codegen issues, therefore following should be applied to ./src/\_\_codegen\_\_/type-graphql-classes/* to make the code work

1. fix all the lint errors in the file
2. Replace `any)` with `_Any)`
  * cause of this issue is generated typegraphql decorators with scalars whose type cannot be inferred, such as
    * `@Field(() => any)`
    * however in this case `any` jis a type and cannot be used as value
3. Import all missing values from ./src/utils/codegenFixes.ts

