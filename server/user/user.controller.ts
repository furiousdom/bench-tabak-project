import { Context } from 'koa';
import { getDatabase } from '../database';
import { User } from './user.entity';

interface CreateUserRequest {
  email: string;
  id: number;
}

async function list(ctx: Context) {
  const db = await getDatabase();
  const em = db.em.fork();
  const users = await em.find(User, {});
  ctx.body = {
    users
  }
}

async function get(ctx: Context) {
  const db = await getDatabase();
  const em = db.em.fork();

  const { id } = ctx.params;
  let user = null;

  try {
    user = await em.findOne(User, { id });
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
}

async function create(ctx: Context) {
  const db = await getDatabase();
  const em = db.em.fork();

  const body = ctx.request.body as CreateUserRequest;
  const { email, id } = body;

  if (!email || !id) {
    ctx.status = 400;
    ctx.body = { error: 'Both email and id are required' };
    return;
  }

  try {
    const user = new User(id, email);

    await em.persistAndFlush(user);

    ctx.status = 201;
    ctx.body = user;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: 'Failed to create user' };
  }
}

export default {
  list,
  get,
  create
}
