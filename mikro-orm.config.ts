import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import config from './server/config';

const dbConfig: Options = {
  driver: PostgreSqlDriver,
  host: config.DB_HOST,
  port: config.DB_PORT,
  dbName: config.DB_NAME,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  entities: ['**/*.entity.ts'],
};

export default dbConfig;
