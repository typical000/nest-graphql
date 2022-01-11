import {Module} from '@nestjs/common';

import {PhotoModule} from '../photo/photo.module';
import {UserService} from './user.service';
import {UserResolver} from './user.resolver';

@Module({
  imports: [PhotoModule],
  providers: [UserService, UserResolver],
})
export class UserModule {}
