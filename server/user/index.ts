import Bottle from 'bottlejs';
import { createUserRouter } from './user.router';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

function setupModule(bottle: Bottle) {
  bottle.factory('UserRepository', ({ DbServices }) => new UserRepository(DbServices.orm.em));
  bottle.service('UserService', UserService, 'UserRepository');
  bottle.service('UserController', UserController, 'UserService');
  bottle.service('UserRouter', createUserRouter, 'UserController');
}

export default setupModule;
