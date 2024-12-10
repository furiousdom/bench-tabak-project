import mikroOrmConfig from './config';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/postgresql';
import { User } from '../user/user.entity';

export interface Services {
  orm: MikroORM;
  em: EntityManager;
  user: EntityRepository<User>;
}

let cache: Services;

export async function getDatabase(): Promise<Services> {
  if (cache) {
    return cache;
  }

  const orm = await MikroORM.init(mikroOrmConfig);

  return cache = {
    orm,
    em: orm.em,
    user: orm.em.getRepository(User)
  };
}
