import { bottle, setupDependencies } from './infrastructure/framework';
import bodyParser from 'koa-bodyparser';
import { createRouter } from './router';
import { Services as DbServices } from './database';
import Koa from 'koa';

function setupApp(dbServices: DbServices): Koa {
  setupDependencies(dbServices);

  const router = createRouter(bottle);

  const app = new Koa();

  app.use(bodyParser());
  app.use(router.routes());

  return app;
}

export default setupApp;
