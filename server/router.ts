import Bottle from 'bottlejs';
import { createUserRouter } from './user'
import Router from 'koa-router';

function createRouter(bottle: Bottle): Router {
  bottle.factory(
    'UserRouter',
    () => createUserRouter(bottle.container.UserController)
  );

  const router = new Router();

  router.use(bottle.container.UserRouter.routes());

  return router;
}

export { createRouter };
