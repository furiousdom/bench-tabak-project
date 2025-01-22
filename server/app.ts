import bodyParser from 'koa-bodyparser';
import config from './config';
import { createRouter } from './router';
import { createUserRouter } from './user';
import Koa from 'koa';
import { RequestContext } from '@mikro-orm/core';
import { Services as DbServices } from './database';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { UserService } from './user/user.service';

const { PORT } = config;

function runApp(dbServices: DbServices): Promise<void> {
  const userRepository = new UserRepository(dbServices.em);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  const userRouter = createUserRouter(userController);
  const appRouter = createRouter(userRouter);

  const app = new Koa();

  app.use(bodyParser());
  app.use(appRouter.routes());

  app.use((_, next) => RequestContext.create(dbServices.em, next));

  return new Promise((resolve, reject) => {
    app
      .listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`))
      .on('error', err => err ? reject(err) : resolve());
  });
}

export default runApp;
