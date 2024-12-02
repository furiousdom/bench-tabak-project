import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  email!: string;

  // TODO: Add deletedAt and then uncomment this.
  // @Property({ onCreate: () => new Date() })
  // createdAt: Date = new Date();

  // @Property({ onUpdate: () => new Date() })
  // updatedAt: Date = new Date();
}
