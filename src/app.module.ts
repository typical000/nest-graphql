import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';

import {AppController} from './app.controller';
import {AppService} from './app.service';

import {UserModule} from './graphql/user/user.module';
import {PhotoModule} from './graphql/photo/photo.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      // @todo We should really all GraphQL modules in such way?
      include: [UserModule],
      typePaths: ['./**/schema.graphql'],
      // @todo Disable for production enviromnent
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
