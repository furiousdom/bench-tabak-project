import { Context } from 'koa';
import Router from 'koa-router';

export const router = new Router();

const users = [
  {
    name: 'Test'
  }
];

router.get('/users', (ctx: Context) => {
  ctx.body = {
    users
  }
});
