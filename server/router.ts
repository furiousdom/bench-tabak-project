import Bottle from 'bottlejs';
import Router from 'koa-router';

function createRouter(bottle: Bottle): Router {
  const router = new Router();

  router.use(bottle.container.UserRouter.routes());

  return router;
}

export { createRouter };
