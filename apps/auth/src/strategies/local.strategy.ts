import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({ usernameField: 'email' }); 
  }

  async validate(email: string, password: string): Promise<UserDocument> {
    const user = await this.userService.verifyUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
