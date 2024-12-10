import { Context } from 'koa';
import Router from 'koa-router';
import { getDatabase } from '../database';

export const router = new Router();

router.get('/users', async (ctx: Context) => {
  const db = await getDatabase();
  const em = db.em.fork();
  const users = await em.find('User', {});
  ctx.body = {
    users
  }
});

router.get('/users/:id', async (ctx: Context) => {
  const db = await getDatabase();
  const em = db.em.fork();

  const { id } = ctx.params;
  let user = null;

  try {
    user = await em.findOne('User', { id });
  } catch (err) {
    ctx.status = 400;
    ctx.body = { error: 'User does not exist' };
  }

  if (!user) {
    ctx.status = 404;
    ctx.body = { error: 'User not found' };
  } else {
    ctx.body = { user };
  }
});

router.post('/users', async (ctx: Context) => {
  try {
    ctx.status = 201;
    ctx.body = ctx.request.body;
  } catch (err) {
    ctx.status = 400;
    ctx.body = { error: 'Bad request' };
  }
});
