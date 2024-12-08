import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';
import { registerAs } from '@nestjs/config';

// factory function
// factory function returns an instance of a class or an object
export default registerAs(
  'dbconfig.dev',
  (): PostgresConnectionOptions => ({
    url: process.env.DB_URL,
    type: 'postgres',
    port: +process.env.DB_PORT,
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
);
