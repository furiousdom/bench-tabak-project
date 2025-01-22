import Router from 'koa-router';
import userController from './user.controller';

export const router = new Router();

router
  .get('/users', userController.list)
  .get('/users/:id', userController.get)
  .post('/users', userController.create);
