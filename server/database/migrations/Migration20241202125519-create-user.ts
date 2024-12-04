import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'user';

export class CreateUser extends Migration {
  override async up(): Promise<void> {
    const query = `
      CREATE TABLE "${TABLE_NAME}" (
        id integer PRIMARY KEY,
        email varchar(512) NOT NULL UNIQUE
      );`;
    this.addSql(query);
  }
  override async down(): Promise<void> {
    this.addSql(`DROP TABLE IF EXISTS "${TABLE_NAME}" CASCADE;`);
  }
}
