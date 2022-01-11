import {Injectable} from '@nestjs/common';
import {User} from '../schema.d';

interface DBUser {
  id: number;
  login?: string;
  name: string;
  surname: string;
}

@Injectable()
export class UserService {
  // @todo Move into DB
  private readonly users: DBUser[] = [
    {id: 3, login: 'EmptyOne', name: 'Baz', surname: 'Baz Bar Foo'},
    {id: 2, login: 'CustomLogin', name: 'Foo', surname: 'Foo Bar Baz'},
    {id: 1, name: 'Foo', surname: 'Bar'},
  ];

  add(user: User): User {
    this.users.push({
      id: user.id,
      name: user.login,
      surname: user.login,
    });
    return user;
  }

  findById(id: number): User {
    // @todo Make data request from DB.
    const foundUser = this.users.find((user) => user.id === id);

    if (!foundUser) return null;

    return {
      id: foundUser.id,
      login: foundUser.login || `${foundUser.name} ${foundUser.surname}`,
    };
  }
}
