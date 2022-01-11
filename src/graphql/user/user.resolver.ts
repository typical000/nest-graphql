import {Resolver, ResolveField, Query, Args, Parent} from '@nestjs/graphql';
import {UserService} from './user.service';
import {PhotoService} from '../photo/photo.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly photoService: PhotoService,
  ) {}

  @Query('user')
  async getUser(@Args('id') id: number) {
    return this.userService.findById(id);
  }

  @ResolveField('photos')
  async getPhotos(@Parent() user) {
    const {id} = user;
    return this.photoService.findAllForUser(id);
  }
}
