import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path'

// factory function
// factory function returns an instance of a class or an object
export default (): PostgresConnectionOptions => ({
  url: process.env.DB_URL,
  type: 'postgres',
  port: +process.env.DB_PORT,
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [path.resolve(__dirname, "..") + '/**/*.entity{.ts,.js}'],
  synchronize: false,
});