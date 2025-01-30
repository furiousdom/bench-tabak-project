import Router from 'koa-router';
import { UserController } from './user.controller';

function createUserRouter(ctrl: UserController) {
  const router = new Router();

  return router
    .get('/users', ctrl.list)
    .get('/users/:id', ctrl.get)
    .post('/users', ctrl.create);
}

export { createUserRouter };
