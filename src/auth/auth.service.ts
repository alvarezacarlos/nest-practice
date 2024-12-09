import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';

@Injectable()
export class AuthService {
  // inject the user service
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // this functionction received the user and password
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found!');

    const isPassordMatch = await compare(password, user.password);
    if (!isPassordMatch) throw new UnauthorizedException('Invalid credentials');

    // we can create this data to create a token for the user
    return { id: user.id };
  }

  login(userId: number) {
    const payload: AuthJwtPayload = { sub: userId };
    return this.jwtService.sign(payload);
  }
}
