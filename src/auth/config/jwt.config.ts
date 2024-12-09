import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

// factory function
export default registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRE_IN,
    },
  }),
);