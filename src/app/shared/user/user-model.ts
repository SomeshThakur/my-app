import { User } from './user';

export class UserModel implements User {
  id: string;
  firstName: string;
  lastName: string;
}
