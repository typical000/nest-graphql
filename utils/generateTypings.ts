import {join} from 'path';
import {GraphQLDefinitionsFactory} from '@nestjs/graphql';

const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  typePaths: ['./**/schema.graphql'],
  path: join(process.cwd(), 'src/graphql/schema.d.ts'),
  outputAs: 'class',
  emitTypenameField: true,
  // @todo Add parametrization for watch mode
  watch: false,
});
