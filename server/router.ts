import Router from 'koa-router';
import { router as userRouter } from './user/index';

const router = new Router();

router.use(userRouter.routes());

export default router;
