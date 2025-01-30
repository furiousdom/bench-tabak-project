import bodyParser from 'koa-bodyparser';
import { createRouter } from './router';
import { createUserRouter } from './user';
import Koa from 'koa';
import { Services as DbServices } from './database';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { UserService } from './user/user.service';

function setupApp(dbServices: DbServices): Koa {
  const userRepository = new UserRepository(dbServices.em);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  const userRouter = createUserRouter(userController);
  const appRouter = createRouter(userRouter);

  const app = new Koa();

  app.use(bodyParser());
  app.use(appRouter.routes());

  return app;
}

export default setupApp;
