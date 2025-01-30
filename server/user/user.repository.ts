import { EntityManager } from '@mikro-orm/postgresql';
import { User } from './user.entity';
import { Workable } from '../database/helpers';

export class UserRepository {
  private em: EntityManager;

  constructor(em: EntityManager) {
    this.em = em;
  }

  @Workable
  async findAll(em?: EntityManager): Promise<User[]> {
    // const em = this.em.fork();
    return em!.find(User, {});
    // const em = RequestContext.getEntityManager();
    // if (!em) throw Error('Project is not set up correctly.');
    // return em.find(User, {});
  }

  async findOne(id: number): Promise<User | null> {
    return this.em.findOne(User, { id });
  }

  async create(id: number, email: string): Promise<User> {
    const user = new User(id, email);
    await this.em.persistAndFlush(user);
    return user;
  }
}
