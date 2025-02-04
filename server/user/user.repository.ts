import { EntityManager } from '@mikro-orm/core';
import { User } from './user.entity';

export class UserRepository {
  private em: EntityManager;

  constructor(em: EntityManager) {
    this.em = em;
  }

  async findAll(): Promise<User[]> {
    const em = this.em.fork();
    return em.find(User, {});
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
