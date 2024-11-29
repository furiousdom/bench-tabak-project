import { MikroORM } from '@mikro-orm/core';
import mikroOrmConfig from './config';

export const initDatabase = async (): Promise<MikroORM> => {
  const orm = await MikroORM.init(mikroOrmConfig);
  console.log('Database connection established');
  return orm;
};
