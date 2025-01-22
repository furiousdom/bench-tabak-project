import Router from 'koa-router';
import { UserController } from './user.controller';

export function createUserRouter(ctrl: UserController) {
  const router = new Router();

  router
    .get('/users', ctrl.list)
    .get('/users/:id', ctrl.get)
    .post('/users', ctrl.create);

  return router;
}
