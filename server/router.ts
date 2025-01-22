import Router from 'koa-router';

export function createRouter(userRouter: Router): Router {
  const router = new Router();

  router.use(userRouter.routes());

  return router;
};
