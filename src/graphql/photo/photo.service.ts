import {Injectable} from '@nestjs/common';
import {Photo, Photos} from '../schema.d';

interface DBPhoto {
  id: number;
  userId: number; // UserID to which this photo belongs to.
  isPrimary: boolean;
  url: string;
}

@Injectable()
export class PhotoService {
  // @todo Move into DB
  private readonly photos: DBPhoto[] = [
    {id: 1, userId: 1, isPrimary: false, url: 'foo/bar'},
    {id: 2, userId: 1, isPrimary: true, url: 'bar/baz'},
    {id: 3, userId: 2, isPrimary: false, url: 'baz/foo'},
  ];

  private formatData(photo: DBPhoto): Photo {
    if (!photo) return null;
    return {
      id: photo.id,
      url: photo.url,
    };
  }

  findAllForUser(id: number): Photos {
    // @todo Make data request from DB.
    const photos = this.photos.filter(({userId}) => userId === id);

    if (!photos.length) {
      return null;
    }

    return {
      primary: this.formatData(photos.find(({isPrimary}) => isPrimary)),
      all: photos.map(this.formatData),
      count: photos.length,
    };
  }
}
