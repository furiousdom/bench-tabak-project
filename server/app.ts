import bodyParser from 'koa-bodyparser';
import { createRouter } from './router';
import Koa from 'koa';
import Bottle from 'bottlejs';

function setupApp(bottle: Bottle): Koa {
  const router = createRouter(bottle);
  const app = new Koa();

  app.use(bodyParser());
  app.use(router.routes());

  return app;
}

export default setupApp;
