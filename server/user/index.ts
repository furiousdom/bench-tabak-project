import Bottle from 'bottlejs';
import { createUserRouter } from './user.router';
import { Services as DbServices } from '../database';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

function setupModule(bottle: Bottle, dbServices: DbServices) {
  bottle.factory('UserRepository', () => new UserRepository(dbServices.orm.em));
  bottle.factory('UserService', () => new UserService(bottle.container.UserRepository));
  bottle.factory('UserController', () => new UserController(bottle.container.UserService));
  bottle.factory(
    'UserRouter',
    () => createUserRouter(bottle.container.UserController)
  );
}

export default setupModule;
