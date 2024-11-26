import Koa from 'koa';
import { router as userRouter } from './user/index';

const PORT = 3000;

const app = new Koa();

app.use(userRouter.routes());

const server = app
  .listen(PORT, () => console.log(`Running on http://localhost:${PORT}/`))
  .on('error', err => console.error(err));

export default server;
