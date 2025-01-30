import Bottle from 'bottlejs';
import { Services as DbServices } from '../database';
import { UserController } from '../user/user.controller';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';

const bottle = new Bottle();

async function setupDependencies(dbServices: DbServices) {
  bottle.factory('UserRepository', () => new UserRepository(dbServices.orm.em));
  bottle.factory('UserService', () => new UserService(bottle.container.UserRepository));
  bottle.factory('UserController', () => new UserController(bottle.container.UserService));
}

export { bottle, setupDependencies };
