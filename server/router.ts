import Router from 'koa-router';

function createRouter(userRouter: Router): Router {
  const router = new Router();

  router.use(userRouter.routes());

  return router;
}

export { createRouter };
