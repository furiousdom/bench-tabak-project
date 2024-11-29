import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import config from '../config';

const dbConfig: Options = {
  driver: PostgreSqlDriver,
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  dbName: config.DATABASE_NAME,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  entities: ['**/*.entity.ts']
};

export default dbConfig;
