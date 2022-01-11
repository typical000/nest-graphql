import {Module} from '@nestjs/common';
import {PhotoService} from './photo.service';

@Module({
  exports: [PhotoService],
  providers: [PhotoService],
})
export class PhotoModule {}
