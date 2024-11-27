import { Context } from 'koa';
import Router from 'koa-router';

export const router = new Router();

const users = [
  {
    name: 'Mike'
  },
  {
    name: 'Alice'
  }
];

router.get('/users', (ctx: Context) => {
  ctx.body = {
    users
  }
});

router.get('/users/:id', (ctx: Context) => {
  const { id } = ctx.params;
  let user = null;

  try {
    user = users[parseInt(id)];
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
